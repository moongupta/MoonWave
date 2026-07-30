"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  X,
} from "lucide-react";

import type { Song } from "@/app/types/song";

interface ExpandedPlayerProps {
  open: boolean;

  song: Song;

  isPlaying: boolean;

  togglePlay: () => void;

  nextSong: () => void;

  previousSong: () => void;

  currentTime: number;

  duration: number;

  onSeek: (time: number) => void;

  onClose: () => void;
}

function formatTime(time: number) {
  if (!time || isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);

  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export default function ExpandedPlayer({
  open,
  song,
  isPlaying,
  togglePlay,
  nextSong,
  previousSong,
  currentTime,
  duration,
  onSeek,
  onClose,
}: ExpandedPlayerProps) {
  const progress =
    duration === 0
      ? 0
      : (currentTime / duration) * 100;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "100%",
          }}
          transition={{
            duration: 0.45,
          }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black"
        >
          {/* Background */}

          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 30%,
                ${song.theme.primary}66,
                transparent 60%),

                radial-gradient(circle at 70% 70%,
                ${song.theme.secondary}66,
                transparent 60%),

                linear-gradient(#030303,#000)
              `,
            }}
          />

          {/* Close */}

          <button
            onClick={onClose}
            className="absolute right-8 top-8 z-20 rounded-full bg-white/10 p-3 backdrop-blur-xl"
          >
            <X />
          </button>

          {/* Content */}

          <div className="relative z-10 flex h-full flex-col items-center justify-center">

            <motion.img
              src={song.image}
              alt={song.title}
              animate={{
                rotate: isPlaying
                  ? 360
                  : 0,
              }}
              transition={{
                rotate: {
                  duration: 12,
                  repeat: isPlaying
                    ? Infinity
                    : 0,
                  ease: "linear",
                },
              }}
              className="h-96 w-96 rounded-[42px] object-cover shadow-2xl"
            />

            <h1 className="mt-12 text-6xl font-black">
              {song.title}
            </h1>

            <p className="mt-3 text-2xl text-zinc-400">
              {song.artist}
            </p>

            {/* Progress */}

            <div className="mt-12 w-[650px]">

              <input
                type="range"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={(e) =>
                  onSeek(
                    Number(e.target.value)
                  )
                }
                className="w-full"
              />

              <div className="mt-2 flex justify-between text-zinc-400">

                <span>
                  {formatTime(currentTime)}
                </span>

                <span>
                  {formatTime(duration)}
                </span>

              </div>

            </div>

            {/* Controls */}

            <div className="mt-14 flex items-center gap-8">

              <button onClick={previousSong}>
                <SkipBack size={34} />
              </button>

              <button
                onClick={togglePlay}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-black"
              >
                {isPlaying ? (
                  <Pause
                    fill="black"
                    size={34}
                  />
                ) : (
                  <Play
                    fill="black"
                    size={34}
                  />
                )}
              </button>

              <button onClick={nextSong}>
                <SkipForward size={34} />
              </button>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}