"use client";

import { motion } from "framer-motion";

import { usePlayer } from "@/app/context/AudioProvider";
import { formatTime } from "@/app/utils/formatTime";

export default function Progress() {
  const {
    currentTime,
    duration,
    progress,
    seek,
    currentSong,
  } = usePlayer();

  return (
    <div className="flex items-center gap-4">

      {/* Current Time */}

      <span className="w-12 text-right text-xs font-medium text-zinc-400">
        {formatTime(currentTime)}
      </span>

      {/* Progress */}

      <div className="group relative flex-1">

        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.01}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
          className="
            absolute
            inset-0
            z-20
            h-full
            w-full
            cursor-pointer
            opacity-0
          "
        />

        {/* Track */}

        <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/10">

          <motion.div
            layout
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: currentSong.theme.primary,
              boxShadow: `0 0 20px ${currentSong.theme.primary}`,
            }}
          />

        </div>

        {/* Thumb */}

        <motion.div
          whileHover={{
            scale: 1.35,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            absolute
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            rounded-full
            border
            border-white/40
            bg-white
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
          style={{
            left: `calc(${progress}% - 10px)`,
            boxShadow: `0 0 30px ${currentSong.theme.primary}`,
          }}
        />

      </div>

      {/* Duration */}

      <span className="w-12 text-xs font-medium text-zinc-400">
        {formatTime(duration)}
      </span>

    </div>
  );
}