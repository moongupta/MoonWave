"use client";

import { motion } from "framer-motion";

import {
  Heart,
  Pause,
  Play,
  Repeat2,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

export default function PlaybackControls() {
  const {
    currentSong,

    isPlaying,

    previousSong,
    nextSong,

    togglePlay,

    shuffle,
    repeatMode,

    isLiked,

    toggleShuffle,
    toggleRepeat,
    toggleLike,
  } = usePlayer();

  const sideButton =
    `
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white/5
    transition-all
    hover:bg-white/10
    `;

  return (
    <div className="flex flex-col items-center gap-8">

      {/* Main Controls */}

      <div className="flex items-center gap-6">

        {/* Shuffle */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={toggleShuffle}
          className={`${sideButton}
            ${
              shuffle
                ? "border-red-500 text-red-400"
                : ""
            }
          `}
        >
          <Shuffle size={20} />
        </motion.button>

        {/* Previous */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={previousSong}
          className={sideButton}
        >
          <SkipBack size={24} />
        </motion.button>

        {/* Play */}

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow:
              "0 0 60px rgba(255,255,255,.25)",
          }}
          whileTap={{
            scale: .94,
          }}
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
            <Pause
              size={34}
              fill="black"
            />
          ) : (
            <Play
              size={34}
              fill="black"
            />
          )}
        </motion.button>

        {/* Next */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={nextSong}
          className={sideButton}
        >
          <SkipForward size={24} />
        </motion.button>

        {/* Like */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={() =>
            toggleLike(currentSong)
          }
          className={`${sideButton}
            ${
              isLiked
                ? "border-red-500 text-red-400"
                : ""
            }
          `}
        >
          <Heart
            size={20}
            fill={
              isLiked
                ? "currentColor"
                : "none"
            }
          />
        </motion.button>
                {/* Repeat */}

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={toggleRepeat}
          className={`
            flex
            items-center
            gap-2
            rounded-full
            border
            px-5
            py-2
            text-sm
            font-medium
            transition-all
            ${
              repeatMode === "off"
                ? "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                : "border-red-500 bg-red-500/10 text-red-400"
            }
          `}
        >
          <Repeat2 size={16} />

          {repeatMode === "off"
            ? "Repeat Off"
            : repeatMode === "all"
            ? "Repeat All"
            : "Repeat One"}
        </motion.button>

      </div>

      {/* Playback Status */}

      <motion.div
        key={currentSong.id}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.35,
        }}
        className="flex flex-col items-center gap-1"
      >
        <h3 className="text-lg font-semibold text-white">
          {currentSong.title}
        </h3>

        <p className="text-sm text-zinc-400">
          {currentSong.artist}
        </p>
      </motion.div>

    </div>
  );
}