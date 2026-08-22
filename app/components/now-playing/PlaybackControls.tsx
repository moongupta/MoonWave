"use client";

import { motion } from "framer-motion";
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Shuffle,
  Repeat2,
  Repeat1,
  Volume2,
  Heart,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import { formatTime } from "@/app/utils/formatTime";

export default function PlaybackControls() {
  const {
    isPlaying,
    togglePlay,

    previousSong,
    nextSong,

    shuffle,
    toggleShuffle,

    repeatMode,
    toggleRepeat,

    volume,
    setVolume,

    currentTime,
    duration,
    progress,
    seek,

    isLiked,
    currentSong,
    toggleLike,
  } = usePlayer();

  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

      {/* Progress */}

      <div>

        <div className="mb-3 flex justify-between text-sm text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) =>
            seek(
              (Number(e.target.value) / 100) *
                duration
            )
          }
          className="h-2 w-full cursor-pointer accent-red-500"
        />

      </div>

      {/* Controls */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">

        {/* Shuffle */}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          onClick={toggleShuffle}
          className={`rounded-full border p-4 transition ${
            shuffle
              ? "border-red-500 bg-red-500 text-white"
              : "border-white/10 bg-white/5"
          }`}
        >
          <Shuffle size={22} />
        </motion.button>

        {/* Previous */}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          onClick={previousSong}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <SkipBack
            size={26}
            fill="currentColor"
          />
        </motion.button>

        {/* Play */}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .95 }}
          onClick={togglePlay}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-[0_25px_80px_rgba(255,50,90,.45)]"
        >
          {isPlaying ? (
            <Pause
              size={34}
              fill="white"
            />
          ) : (
            <Play
              size={34}
              fill="white"
            />
          )}
        </motion.button>

        {/* Next */}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          onClick={nextSong}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <SkipForward
            size={26}
            fill="currentColor"
          />
        </motion.button>

        {/* Repeat */}

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          onClick={toggleRepeat}
          className={`rounded-full border p-4 transition ${
            repeatMode !== "off"
              ? "border-red-500 bg-red-500 text-white"
              : "border-white/10 bg-white/5"
          }`}
        >
          {repeatMode === "one" ? (
            <Repeat1 size={22} />
          ) : (
            <Repeat2 size={22} />
          )}
        </motion.button>

      </div>

      {/* Bottom Row */}

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Like */}

        <button
          onClick={() =>
            toggleLike(currentSong)
          }
          className="flex items-center gap-4"
        >
          <Heart
            size={20}
            fill={
              isLiked
                ? "currentColor"
                : "none"
            }
            className={
              isLiked
                ? "text-red-500"
                : "text-zinc-400"
            }
          />

          <span className="text-zinc-400">
            {isLiked
              ? "Added to Favorites"
              : "Add to Favorites"}
          </span>
        </button>

        {/* Volume */}

        <div className="flex items-center gap-4">

          <Volume2 />

          <input
            type="range"
            min={0}
            max={100}
            value={volume * 100}
            onChange={(e) =>
              setVolume(
                Number(e.target.value) /
                  100
              )
            }
            className="w-44 accent-red-500"
          />

          <span className="w-10 text-right text-zinc-400">
            {Math.round(volume * 100)}
          </span>

        </div>

      </div>

    </section>
  );
}