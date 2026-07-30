"use client";

import {
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
  Maximize2,
} from "lucide-react";
import { motion } from "framer-motion";

import type { Song } from "@/app/types/song";

import ProgressBar from "./ProgressBar";
import VolumeSlider from "./VolumeSlider";
import AudioVisualizer from "./AudioVisualizer";

import { formatTime } from "@/app/utils/formatTime";

interface BottomPlayerProps {
  song: Song;

  isPlaying: boolean;

  togglePlay: () => void;

  progress: number;

  nextSong: () => void;

  previousSong: () => void;

  onSeek: (time: number) => void;

  volume: number;

  onVolumeChange: (value: number) => void;

  currentTime: number;

  duration: number;

  analyserRef: React.RefObject<AnalyserNode | null>;

  dataArrayRef: React.RefObject<Uint8Array | null>;

  isExpanded: boolean;

  onToggleExpanded: () => void;
}

export default function BottomPlayer({
  song,
  isPlaying,
  togglePlay,
  progress,
  nextSong,
  previousSong,
  onSeek,
  volume,
  onVolumeChange,
  currentTime,
  duration,
  analyserRef,
  dataArrayRef,
  onToggleExpanded,
}: BottomPlayerProps) {
  return (
    <footer
      className="fixed bottom-5 left-5 right-5 z-50 overflow-hidden rounded-[34px] border border-white/10 bg-black/40 backdrop-blur-3xl"
      style={{
        boxShadow: `
          0 10px 60px rgba(0,0,0,.45),
          0 0 80px ${song.theme.primary}22,
          inset 0 1px rgba(255,255,255,.08)
        `,
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at center,
            ${song.theme.primary}55,
            transparent 72%)
          `,
        }}
      />

      <div className="relative z-10 px-8 pt-6 pb-7">
        <ProgressBar progress={progress} onSeek={onSeek} />

        <div className="mt-2 mb-6 flex justify-between text-xs font-medium text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="grid grid-cols-[320px_1fr_280px] items-center gap-6">
          {/* LEFT */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex cursor-pointer items-center gap-4"
            onClick={onToggleExpanded}
          >
            <div className="relative flex h-18 w-18 items-center justify-center">
              <AudioVisualizer
                analyserRef={analyserRef}
                dataArrayRef={dataArrayRef}
                isPlaying={isPlaying}
                color={song.theme.primary}
              />

              <motion.img
                src={song.image}
                alt={song.title}
                animate={{
                  rotate: isPlaying ? 360 : 0,
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    ease: "linear",
                    repeat: isPlaying ? Infinity : 0,
                  },
                }}
                className="absolute h-16 w-16 rounded-full border border-white/20 object-cover shadow-2xl"
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold">
                {song.title}
              </h2>

              <p className="truncate text-sm text-zinc-400">
                {song.artist}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {song.album}
              </p>
            </div>
          </motion.div>

          {/* CENTER */}
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
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={togglePlay}
              className="flex h-18 w-18 items-center justify-center rounded-full bg-white text-black shadow-2xl"
            >
              {isPlaying ? (
                <Pause fill="black" size={30} />
              ) : (
                <Play fill="black" size={30} className="ml-1" />
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

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-5">
            <button
              onClick={onToggleExpanded}
              className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Maximize2 size={18} />
            </button>

            <div className="flex items-center gap-3">
              <Volume2
                size={18}
                className="text-zinc-300"
              />

              <VolumeSlider
                volume={volume}
                onChange={onVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}