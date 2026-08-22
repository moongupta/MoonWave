"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePlayer } from "@/app/context/AudioProvider";

export default function SongInfo() {
  const { currentSong } = usePlayer();

  return (
    <div className="flex min-w-0 flex-col justify-center overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.h2
          key={currentSong.id}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.25,
          }}
          className="truncate text-[24px] font-black tracking-tight text-white"
        >
          {currentSong.title}
        </motion.h2>

      </AnimatePresence>

      <AnimatePresence mode="wait">

        <motion.p
          key={currentSong.artist}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.25,
          }}
          className="mt-1 truncate text-[17px] font-medium text-zinc-400"
        >
          {currentSong.artist}
        </motion.p>

      </AnimatePresence>

      <div className="mt-2 flex items-center gap-3">

        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            background: currentSong.theme.primary,
          }}
        />

        <span className="truncate text-sm text-zinc-500">
          {currentSong.album}
        </span>

      </div>

    </div>
  );
}