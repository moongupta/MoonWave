"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function TrendingSection({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Trending Now
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

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {songs.slice(0, 4).map((song) => (
          <motion.button
            key={song.id}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onSelectSong(song)}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={song.image}
                alt={song.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-2xl transition duration-300 group-hover:opacity-100">
                <Play
                  size={22}
                  fill="white"
                  className="ml-1"
                />
              </div>
            </div>

            <div className="p-5 text-left">
              <h3 className="truncate text-xl font-bold text-white">
                {song.title}
              </h3>

              <p className="mt-2 truncate text-zinc-400">
                {song.artist}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}