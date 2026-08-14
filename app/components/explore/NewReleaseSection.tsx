"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function NewReleaseSection({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            New Releases
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

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {songs.slice(0, 3).map((song) => (
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
            className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-left backdrop-blur-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={song.image}
                alt={song.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 right-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-[0_20px_60px_rgba(255,0,80,.4)] transition duration-300 group-hover:opacity-100">
                <Play
                  size={24}
                  fill="white"
                  className="ml-1"
                />
              </div>
            </div>

            <div className="space-y-2 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                New Album
              </p>

              <h3 className="text-3xl font-black text-white">
                {song.title}
              </h3>

              <p className="text-lg text-zinc-300">
                {song.artist}
              </p>

              <p className="pt-2 text-sm leading-7 text-zinc-500">
                Experience immersive sound, cinematic visuals,
                and futuristic production crafted for Music2030.
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}