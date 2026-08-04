"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Song } from "@/app/types/song";

interface Props {
  song: Song;
  active: boolean;
  onClick: () => void;
}

export default function CommandItem({
  song,
  active,
  onClick,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      className={`
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        p-3
        transition-all
        duration-200

        ${
          active
            ? "bg-white/15 ring-1 ring-white/20"
            : "hover:bg-white/5"
        }
      `}
    >
      <Image
        src={song.image}
        alt={song.title}
        width={56}
        height={56}
        className="rounded-xl"
      />

      <div className="flex-1 text-left">
        <h3 className="font-semibold">
          {song.title}
        </h3>

        <p className="text-sm text-zinc-400">
          {song.artist}
        </p>
      </div>

      <span className="text-sm text-zinc-500">
        {song.duration}
      </span>
    </motion.button>
  );
}