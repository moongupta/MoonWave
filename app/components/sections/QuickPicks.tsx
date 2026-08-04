"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function QuickPicks({
  onSelectSong,
}: Props) {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">
          Quick Picks
        </h2>

        <button className="text-zinc-400 transition hover:text-white">
          View All →
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="relative h-56 w-full">
              <Image
                src={song.image}
                alt={song.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-xl transition duration-300 group-hover:opacity-100">
                <Play
                  size={22}
                  fill="white"
                  className="text-white"
                />
              </div>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-white">
                {song.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {song.artist}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}