"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function ListenAgain({
  onSelectSong,
}: Props) {
  return (
    <section>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">
          Listen Again
        </h2>

        <button className="text-zinc-400 transition hover:text-white">
          View All →
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {songs.slice(0, 8).map((song) => (

          <motion.button
            key={song.id}
            whileHover={{
              scale: 1.03,
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onSelectSong(song)}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur-xl transition hover:bg-white/10"
          >

            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">

              <Image
                src={song.image}
                alt={song.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">

                <Play
                  fill="white"
                  size={24}
                  className="text-white"
                />

              </div>

            </div>

            <div className="min-w-0 flex-1">

              <h3 className="truncate text-lg font-bold text-white">
                {song.title}
              </h3>

              <p className="truncate text-sm text-zinc-400">
                {song.artist}
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                {song.album}
              </p>

            </div>

          </motion.button>

        ))}

      </div>

    </section>
  );
}