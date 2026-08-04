"use client";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelect: (song: Song) => void;
}

export default function AddSongsModal({
  open,
  onClose,
  onSelect,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-900 p-8">

        <h2 className="text-3xl font-black text-white">
          Add Songs
        </h2>

        <p className="mt-2 text-zinc-400">
          Choose songs to add to this playlist.
        </p>

        <div className="mt-8 max-h-[450px] space-y-3 overflow-y-auto">

          {songs.map((song) => (
            <button
              key={song.id}
              onClick={() => {
                onSelect(song);
                onClose();
              }}
              className="flex w-full items-center gap-4 rounded-2xl border border-white/10 p-4 transition hover:border-red-500 hover:bg-white/5"
            >
              <img
                src={song.image}
                alt={song.title}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div className="text-left">
                <h3 className="font-bold text-white">
                  {song.title}
                </h3>

                <p className="text-zinc-400">
                  {song.artist}
                </p>
              </div>

            </button>
          ))}

        </div>

        <button
          onClick={onClose}
          className="mt-8 rounded-xl bg-zinc-800 px-6 py-3 text-white transition hover:bg-zinc-700"
        >
          Close
        </button>

      </div>
    </div>
  );
}