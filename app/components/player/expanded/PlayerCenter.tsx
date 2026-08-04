"use client";

import { motion } from "framer-motion";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
} from "lucide-react";

interface PlayerCenterProps {
  isPlaying: boolean;
  togglePlay: () => void;
  previousSong: () => void;
  nextSong: () => void;
}

export default function PlayerCenter({
  isPlaying,
  togglePlay,
  previousSong,
  nextSong,
}: PlayerCenterProps) {
  return (
    <div className="flex items-center justify-center gap-8">
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={previousSong}
        className="text-zinc-300 transition hover:text-white"
      >
        <SkipBack size={28} />
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 40px rgba(255,255,255,.25)",
        }}
        whileTap={{ scale: 0.94 }}
        onClick={togglePlay}
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white text-black shadow-2xl"
      >
        {isPlaying ? (
          <Pause fill="black" size={30} />
        ) : (
          <Play
            fill="black"
            size={30}
            className="ml-1"
          />
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSong}
        className="text-zinc-300 transition hover:text-white"
      >
        <SkipForward size={28} />
      </motion.button>
    </div>
  );
}