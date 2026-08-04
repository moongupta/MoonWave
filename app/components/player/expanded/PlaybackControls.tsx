"use client";

import { motion } from "framer-motion";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Repeat2,
  Shuffle,
  Heart,
} from "lucide-react";

interface PlaybackControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  previousSong: () => void;
  nextSong: () => void;
}

export default function PlaybackControls({
  isPlaying,
  togglePlay,
  previousSong,
  nextSong,
}: PlaybackControlsProps) {
  const sideButton =
    "flex h-14 w-14 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all";

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Secondary Controls */}
      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={sideButton}
        >
          <Shuffle size={20} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={previousSong}
          className={sideButton}
        >
          <SkipBack size={24} />
        </motion.button>

        {/* Play Button */}
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 60px rgba(255,255,255,.25)",
          }}
          whileTap={{ scale: 0.94 }}
          onClick={togglePlay}
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-2xl
          "
        >
          {isPlaying ? (
            <Pause fill="black" size={34} />
          ) : (
            <Play fill="black" size={34} />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSong}
          className={sideButton}
        >
          <SkipForward size={24} />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
            color: "#ff4d6d",
          }}
          whileTap={{ scale: 0.95 }}
          className={sideButton}
        >
          <Heart size={20} />
        </motion.button>
      </div>

      {/* Repeat */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-zinc-300
          hover:bg-white/10
        "
      >
        <Repeat2 size={16} />
        Repeat
      </motion.button>
    </div>
  );
}