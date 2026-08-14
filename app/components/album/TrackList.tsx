"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Heart,
  Clock3,
  Music2,
} from "lucide-react";

const tracks = [
  {
    id: 1,
    title: "BECALIVE",
    duration: "4:28",
    plays: "24.3M",
    explicit: false,
  },
  {
    id: 2,
    title: "Infinity",
    duration: "3:52",
    plays: "18.7M",
    explicit: false,
  },
  {
    id: 3,
    title: "Dreamwalker",
    duration: "5:11",
    plays: "11.2M",
    explicit: true,
  },
  {
    id: 4,
    title: "Human Future",
    duration: "4:41",
    plays: "9.4M",
    explicit: false,
  },
  {
    id: 5,
    title: "Rise",
    duration: "3:34",
    plays: "8.1M",
    explicit: false,
  },
  {
    id: 6,
    title: "Gravity",
    duration: "5:03",
    plays: "7.5M",
    explicit: false,
  },
  {
    id: 7,
    title: "Awaken",
    duration: "4:12",
    plays: "6.9M",
    explicit: false,
  },
  {
    id: 8,
    title: "Beyond",
    duration: "4:57",
    plays: "5.8M",
    explicit: false,
  },
];

export default function TrackList() {
  const [playingId, setPlayingId] = useState<number | null>(1);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">
            Album
          </p>

          <h2 className="mt-2 text-5xl font-black text-white">
            Track List
          </h2>
        </div>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-400 backdrop-blur-xl lg:flex">
          <Music2 size={16} />
          18 Songs
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[70px_1fr_120px_120px] border-b border-white/10 pb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
        <div>#</div>
        <div>Title</div>
        <div className="text-right">Plays</div>
        <div className="flex justify-end">
          <Clock3 size={16} />
        </div>
      </div>

      {/* Tracks */}
      <div className="space-y-2">
        {tracks.map((track, index) => {
          const active = playingId === track.id;

          return (
            <motion.button
              key={track.id}
              whileHover={{
                x: 4,
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              onClick={() =>
                setPlayingId(active ? null : track.id)
              }
              className={`group grid w-full grid-cols-[70px_1fr_120px_120px] items-center rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-red-500/40 bg-red-500/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              {/* Number / Play */}
              <div>
                {active ? (
                  <Pause
                    size={22}
                    className="text-red-400"
                    fill="currentColor"
                  />
                ) : (
                  <>
                    <span className="text-2xl font-black text-zinc-500 group-hover:hidden">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Play
                      size={20}
                      fill="currentColor"
                      className="hidden text-white group-hover:block"
                    />
                  </>
                )}
              </div>

              {/* Title */}
              <div>
                <div className="flex items-center gap-3">
                  <h3
                    className={`text-xl font-bold ${
                      active
                        ? "text-red-300"
                        : "text-white"
                    }`}
                  >
                    {track.title}
                  </h3>

                  {track.explicit && (
                    <span className="rounded bg-zinc-700 px-2 py-1 text-[10px] font-bold">
                      E
                    </span>
                  )}
                </div>

                <p className="mt-1 text-zinc-500">
                  Moon Gupta
                </p>
              </div>

              {/* Plays */}
              <div className="text-right text-zinc-400">
                {track.plays}
              </div>

              {/* Duration + Like */}
              <div className="flex items-center justify-end gap-5">
                <Heart
                  size={18}
                  className="text-zinc-500 transition hover:text-red-400"
                />

                <span className="text-zinc-400">
                  {track.duration}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}