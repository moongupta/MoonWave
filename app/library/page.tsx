"use client";

import { useLibrary } from "../context/LibraryProvider";
import { songs } from "../data/songs";
import MusicCard from "../components/cards/MusicCard";
import { usePlayer } from "../context/AudioProvider";

export default function LibraryPage() {
    const { library } = useLibrary();
    const { playSong } = usePlayer();

    const favoriteSongs = songs.filter((song) =>
        library.includes(song.id)
    );

    return (
        <main className="p-10">
            <h1 className="mb-8 text-4xl font-bold">
                Your Library
            </h1>
            <p className="mt-2 text-zinc-400">
                {favoriteSongs.length} Favorite Songs
            </p>

            {favoriteSongs.length === 0 ? (
                <div className="flex h-[50vh] items-center justify-center text-zinc-500">
                    No favorite songs yet ❤️
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-6">
                    {favoriteSongs.map((song) => (
                        <MusicCard
                            key={song.id}
                            song={song}
                            onClick={() => playSong(song)}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}