"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function RecentlyAdded({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Recently Added
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
      <div className="flex gap-7 overflow-x-auto pb-3">
        {songs.map((song) => (
          <motion.button
            key={song.id}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onSelectSong(song)}
            className="group w-[230px] flex-shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.35)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={song.image}
                alt={song.title}
                fill
                sizes="230px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-xl transition duration-300 group-hover:opacity-100">
                <Play
                  size={18}
                  fill="white"
                  className="ml-0.5"
                />
              </div>
            </div>

            <div className="space-y-1 p-5">
              <h3 className="truncate text-lg font-bold text-white">
                {song.title}
              </h3>

              <p className="truncate text-sm text-zinc-400">
                {song.artist}
              </p>

              <p className="pt-2 text-xs uppercase tracking-[0.3em] text-red-400">
                Recently Added
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}