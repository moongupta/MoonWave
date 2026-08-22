"use client";

import { usePlayer } from "@/app/context/AudioProvider";

export default function QueuePanel() {
  const {
    queue,
    currentSong,
    playSong,
  } = usePlayer();

  return (
    <aside
      className="
        w-[360px]
        rounded-[30px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        p-6
      "
    >
      <h2 className="mb-6 text-2xl font-bold">
        Queue
      </h2>

      <div className="space-y-3">
        {queue.map((song) => (
          <button
            key={song.id}
            onClick={() => playSong(song)}
            className={`
              flex
              w-full
              items-center
              gap-4
              rounded-2xl
              p-3
              transition
              ${
                currentSong.id === song.id
                  ? "bg-white/15"
                  : "hover:bg-white/5"
              }
            `}
          >
            <img
              src={song.image}
              alt={song.title}
              className="h-14 w-14 rounded-xl object-cover"
            />

            <div className="text-left">
              <p className="font-semibold">
                {song.title}
              </p>

              <p className="text-sm text-zinc-400">
                {song.artist}
              </p>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}