"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Clock3,
  ChevronRight,
} from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function PopularSongs({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Popular Songs
          </h2>

          <ChevronRight
            size={24}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-400 transition hover:text-white">
          View All
        </button>
      </div>

      {/* Songs */}
      <div className="space-y-4">
        {songs.map((song, index) => (
          <motion.button
            key={song.id}
            whileHover={{
              scale: 1.01,
              x: 4,
            }}
            whileTap={{
              scale: 0.99,
            }}
            onClick={() => onSelectSong(song)}
            className="group flex w-full items-center gap-6 rounded-[24px] border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition hover:bg-white/10"
          >
            {/* Number */}
            <div className="w-10 text-center">
              <span className="text-2xl font-black text-zinc-500 transition group-hover:hidden">
                {index + 1}
              </span>

              <Play
                size={22}
                fill="white"
                className="mx-auto hidden text-white group-hover:block"
              />
            </div>

            {/* Cover */}
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
              <Image
                src={song.image}
                alt={song.title}
                fill
                sizes="80px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xl font-bold text-white">
                {song.title}
              </h3>

              <p className="mt-1 truncate text-zinc-400">
                {song.artist}
              </p>
            </div>

            {/* Plays */}
            <div className="hidden w-40 text-right lg:block">
              <p className="font-semibold text-white">
                {(18 - index) * 3.2}M
              </p>

              <p className="text-sm text-zinc-500">
                Plays
              </p>
            </div>

            {/* Duration */}
            <div className="flex w-24 items-center justify-end gap-2 text-zinc-400">
              <Clock3 size={16} />

              <span>
                {3 + index}:{(12 + index * 7) % 60}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}