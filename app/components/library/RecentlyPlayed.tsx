"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  ChevronRight,
  Clock3,
} from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function RecentlyPlayed({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Recently Played
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
        {songs.map((song, index) => (
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
            className="group relative w-[300px] flex-shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 text-left backdrop-blur-2xl shadow-[0_35px_90px_rgba(0,0,0,.35)]"
          >
            {/* Artwork */}
            <div className="relative h-[190px] overflow-hidden">
              <Image
                src={song.image}
                alt={song.title}
                fill
                sizes="300px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-[0_20px_60px_rgba(255,0,80,.4)] transition duration-300 group-hover:opacity-100">
                <Play
                  size={22}
                  fill="white"
                  className="ml-1"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-2 p-6">
              <h3 className="truncate text-2xl font-black text-white">
                {song.title}
              </h3>

              <p className="truncate text-zinc-400">
                {song.artist}
              </p>

              <div className="flex items-center gap-2 pt-3 text-sm text-zinc-500">
                <Clock3 size={15} />
                Played {index + 1} hour{index === 0 ? "" : "s"} ago
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1.5 w-full bg-white/10">
              <div
                className="h-full rounded-r-full bg-gradient-to-r from-red-500 to-pink-500"
                style={{
                  width: `${35 + index * 12}%`,
                }}
              />
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}