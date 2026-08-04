"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AudioVisualizer from "./AudioVisualizer";
import type { Song } from "@/app/types/song";

interface PlayerLeftProps {
  song: Song;
  isPlaying: boolean;
  analyserRef: React.RefObject<AnalyserNode | null>;
  dataArrayRef: React.RefObject<Uint8Array | null>;
  onToggleExpanded: () => void;
}

export default function PlayerLeft({
  song,
  isPlaying,
  analyserRef,
  dataArrayRef,
  onToggleExpanded,
}: PlayerLeftProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
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

        <p className="truncate text-sm text-zinc-400">
          {song.artist}
        </p>

        <p className="mt-1 truncate text-xs text-zinc-500">
          {song.album}
        </p>
      </div>
    </motion.div>
  );
}