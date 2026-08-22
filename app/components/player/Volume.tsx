"use client";

import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

import { usePlayer } from "@/app/context/AudioProvider";

export default function Volume() {
  const {
    volume,
    muted,
    toggleMute,
    setVolume,
    currentSong,
  } = usePlayer();

  return (
    <div className="flex items-center gap-4">

      {/* Mute */}

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: .94 }}
        onClick={toggleMute}
        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
          muted
            ? "border-red-500 bg-red-500 text-white"
            : "border-white/10 bg-white/5 text-white"
        }`}
      >
        {muted ? (
          <VolumeX size={18} />
        ) : (
          <Volume2 size={18} />
        )}
      </motion.button>

      {/* Slider */}

      <input
        type="range"
        min={0}
        max={100}
        value={muted ? 0 : volume * 100}
        onChange={(e) =>
          setVolume(Number(e.target.value) / 100)
        }
        className="h-1 w-28 cursor-pointer appearance-none rounded-full bg-white/10 accent-white"
        style={{
          accentColor: currentSong.theme.primary,
        }}
      />

      <span className="w-10 text-right text-sm text-zinc-400">
        {Math.round(volume * 100)}%
      </span>

    </div>
  );
}