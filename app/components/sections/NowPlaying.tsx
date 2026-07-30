"use client";

import { motion } from "framer-motion";
import type { Song } from "../../types/song";

interface NowPlayingProps {
  song: Song;
  isPlaying: boolean;
}

export default function NowPlaying({
  song,
  isPlaying,
}: NowPlayingProps) {
  return (
    <section className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
      <div className="flex items-center gap-8">
        <motion.div
          animate={{
            rotate: isPlaying ? 360 : 0,
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: isPlaying ? Infinity : 0,
          }}
          className="relative"
        >
          <div
            className="absolute inset-0 scale-110 rounded-[32px] blur-[80px]"
            style={{
              backgroundColor: song.theme.primary,
              opacity: 0.35,
            }}
          />

          <img
            src={song.image}
            alt={song.title}
            className="relative h-56 w-56 rounded-[32px] border border-white/10 object-cover"
          />
        </motion.div>

        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">
            NOW PLAYING
          </p>

          <h2 className="mt-3 text-5xl font-black text-white">
            {song.title}
          </h2>

          <p className="mt-3 text-xl text-zinc-400">
            {song.artist}
          </p>

          <p className="mt-6 text-zinc-500">
            {song.plays}
          </p>
        </div>
      </div>
    </section>
  );
}