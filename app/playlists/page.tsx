"use client";

import { useState } from "react";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistGrid from "./PlaylistGrid";
import PlaylistEmpty from "./PlaylistEmpty";
import CreatePlaylistModal from "./CreatePlaylistModal";
import PlaylistCard from "./PlaylistCard";
import { usePlaylists } from "../context/PlaylistProvider";

import Sidebar from "../components/layout/Sidebar";;

export default function PlaylistsPage() {
    const [open, setOpen] = useState(false);

    const {
        playlists,
        createPlaylist,
    } = usePlaylists();
    return (

        <div className="flex min-h-screen bg-black text-white">
            <Sidebar activePage="Playlists" />

            <main className="flex-1 p-10">
                <PlaylistHeader
                    onCreate={() => setOpen(true)}
                />

                {playlists.length === 0 ? (
                    <PlaylistEmpty />
                ) : (
                    <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {playlists.map((playlist) => (
                            <PlaylistCard
                                key={playlist.id}
                                id={playlist.id}
                                name={playlist.name}
                                songs={playlist.songs.length}
                            />
                        ))}
                    </div>
                )}

                <CreatePlaylistModal
                    open={open}
                    onClose={() => setOpen(false)}
                    onCreate={createPlaylist}
                />
            </main>
        </div>
    );
}