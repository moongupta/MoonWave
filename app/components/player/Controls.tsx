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
    "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.35)]";

  const inactive =
    "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10";

  return (
    <div
      className="
        flex
        items-center
        justify-center
        gap-1
        sm:gap-2
        md:gap-5
        lg:gap-8
      "
    >
      {/* =========================================================
          SHUFFLE
          Hidden on small mobile to keep the player accessible.
      ========================================================== */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleShuffle}
        aria-label="Toggle shuffle"
        className={`
          hidden
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          transition-all
          duration-300

          md:flex
          md:h-12
          md:w-12

          lg:h-14
          lg:w-14

          ${shuffle ? active : inactive}
        `}
      >
        <Shuffle
          size={20}
          className="
            md:size-5
            lg:size-5
          "
        />
      </motion.button>

      {/* =========================================================
          PREVIOUS
      ========================================================== */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={previousSong}
        aria-label="Previous song"
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${inactive}

          sm:h-10
          sm:w-10

          md:h-14
          md:w-14

          lg:h-16
          lg:w-16
        `}
      >
        <SkipBack
          size={18}
          fill="currentColor"
          className="
            sm:size-5
            md:size-5.5
            lg:size-6
          "
        />
      </motion.button>

      {/* =========================================================
          PLAY / PAUSE
          EnergyCore is intentionally smaller on mobile.
      ========================================================== */}
      <div
        className="
          flex
          shrink-0
          items-center
          justify-center

          scale-[0.58]
          sm:scale-[0.7]
          md:scale-100

          origin-center
        "
      >
        <EnergyCore />
      </div>

      {/* =========================================================
          NEXT
      ========================================================== */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={nextSong}
        aria-label="Next song"
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          ${inactive}

          sm:h-10
          sm:w-10

          md:h-14
          md:w-14

          lg:h-16
          lg:w-16
        `}
      >
        <SkipForward
          size={18}
          fill="currentColor"
          className="
            sm:size-5
            md:size-5.5
            lg:size-6
          "
        />
      </motion.button>

      {/* =========================================================
          REPEAT
          Hidden on small mobile to keep the player compact.
      ========================================================== */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleRepeat}
        aria-label="Toggle repeat"
        className={`
          hidden
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          transition-all
          duration-300

          md:flex
          md:h-12
          md:w-12

          lg:h-14
          lg:w-14

          ${repeatMode !== "off" ? active : inactive}
        `}
      >
        {repeatMode === "one" ? (
          <Repeat1
            size={20}
            className="
              md:size-5
              lg:size-5
            "
          />
        ) : (
          <Repeat2
            size={20}
            className="
              md:size-5
              lg:size-5
            "
          />
        )}
      </motion.button>
    </div>
  );
}