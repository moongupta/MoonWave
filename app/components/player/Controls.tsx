"use client";

import { motion } from "framer-motion";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat2,
  Repeat1,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import EnergyCore from "./EnergyCore";

export default function Controls() {
  const {
    previousSong,
    nextSong,
    shuffle,
    toggleShuffle,
    repeatMode,
    toggleRepeat,
  } = usePlayer();

  const active =
    "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.35)]";

  const inactive =
    "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10";

  return (
    <div className="flex items-center gap-8">

      {/* Shuffle */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleShuffle}
        className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${shuffle ? active : inactive
          }`}
      >
        <Shuffle size={20} />
      </motion.button>

      {/* Previous */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={previousSong}
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${inactive}`}
      >
        <SkipBack size={24} fill="currentColor" />
      </motion.button>

      {/* PLAY */}

      {/* Energy Core */}

      <EnergyCore />

      {/* Next */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={nextSong}
        className={`flex h-16 w-16 items-center justify-center rounded-full border ${inactive}`}
      >
        <SkipForward size={24} fill="currentColor" />
      </motion.button>

      {/* Repeat */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleRepeat}
        className={`flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300 ${repeatMode !== "off" ? active : inactive
          }`}
      >
        {repeatMode === "one" ? (
          <Repeat1 size={20} />
        ) : (
          <Repeat2 size={20} />
        )}
      </motion.button>

    </div>
  );
}