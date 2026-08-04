"use client";
import FavoriteButton from "./FavoriteButton";
import Image from "next/image";
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
import PlayerCenter from "./expanded/PlayerCenter";
import PlayerRight from "./PlayerRight";
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
          0 0 80px ${song.theme?.primary ?? "#7c3aed"}22,
          inset 0 1px rgba(255,255,255,.08)
        `,
      }}
    >
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at center, ${song.theme?.primary ?? "#7c3aed"}55, transparent 72%)`,
        }}
      />

      <div className="relative z-10 px-8 pb-7 pt-6">
        <ProgressBar
          progress={progress}
          onSeek={onSeek}
        />

        <div className="mb-6 mt-2 flex justify-between text-xs font-medium text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="grid grid-cols-[320px_1fr_280px] items-center gap-6">
          {/* LEFT */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.99,
            }}
            onClick={onToggleExpanded}
            className="flex cursor-pointer items-center gap-4"
          >
            <div className="relative flex h-[72px] w-[72px] items-center justify-center">
              <AudioVisualizer
                analyserRef={analyserRef}
                dataArrayRef={dataArrayRef}
                isPlaying={isPlaying}
                color={song.theme?.primary ?? "#7c3aed"}
              />

              <motion.div
                layoutId={`album-${song.title}`}
                animate={{
                  rotate: isPlaying ? 360 : 0,
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "linear",
                  },
                }}
                className="absolute"
              >
                <Image
                  src={song.image}
                  alt={song.title}
                  width={64}
                  height={64}
                  priority
                  draggable={false}
                  className="rounded-full border border-white/20 object-cover shadow-2xl select-none"
                />
              </motion.div>
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-white">
                {song.title}
              </h2>
              <FavoriteButton songId={song.id} />

              <p className="truncate text-sm text-zinc-400">
                {song.artist}
              </p>

              <p className="mt-1 truncate text-xs text-zinc-500">
                {song.album}
              </p>
            </div>
          </motion.div>

          {/* CENTER */}
          <PlayerCenter
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            previousSong={previousSong}
            nextSong={nextSong}
          />

          {/* RIGHT */}
          <PlayerRight
            volume={volume}
            onVolumeChange={onVolumeChange}
            onToggleExpanded={onToggleExpanded}
          />
        </div>
      </div>
    </footer>
  );
}