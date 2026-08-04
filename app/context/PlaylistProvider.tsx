"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import type { Song } from "../types/song";
import type { Playlist } from "../types/playlist";

import {
    loadPlaylists,
    savePlaylists,
} from "../utils/playlistStorage";

interface PlaylistContextType {
    playlists: Playlist[];

    createPlaylist: (
        name: string
    ) => void;
    addSongToPlaylist: (
        playlistId: number,
        song: Song
    ) => void;
}

const PlaylistContext =
    createContext<PlaylistContextType | null>(
        null
    );

export function PlaylistProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [playlists, setPlaylists] =
        useState<Playlist[]>([]);

    useEffect(() => {
        setPlaylists(loadPlaylists());
    }, []);

    useEffect(() => {
        savePlaylists(playlists);
    }, [playlists]);

    function createPlaylist(
        name: string
    ) {
        setPlaylists((old) => [
            ...old,
            {
                id: Date.now(),
                name,
                songs: [],
                createdAt:
                    new Date().toISOString(),
            },
        ]);
    }
    function addSongToPlaylist(
        playlistId: number,
        song: Song
    ) {
        setPlaylists((old) =>
            old.map((playlist) => {
                if (playlist.id !== playlistId) {
                    return playlist;
                }

                const exists = playlist.songs.some(
                    (s) => s.id === song.id
                );

                if (exists) {
                    return playlist;
                }

                return {
                    ...playlist,
                    songs: [...playlist.songs, song],
                };
            })
        );
    }

    return (
        <PlaylistContext.Provider
            value={{
                playlists,
                createPlaylist,
                addSongToPlaylist,
            }}
        >
            {children}
        </PlaylistContext.Provider>
    );
}

export function usePlaylists() {
    const context =
        useContext(PlaylistContext);

    if (!context) {
        throw new Error(
            "usePlaylists must be used inside PlaylistProvider."
        );
    }

    return context;
}