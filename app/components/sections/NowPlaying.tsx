"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface Props {
  song: Song;
  isPlaying: boolean;
}

export default function NowPlaying({
  song,
  isPlaying,
}: Props) {
  return (
    <section>

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-black text-white">
          New Releases
        </h2>

        <button className="text-zinc-400 hover:text-white transition">
          View All →
        </button>

      </div>

      <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">

        {songs.map((release) => (

          <motion.div
            key={release.id}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{
              duration: 0.25,
            }}
            className="group relative min-w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <div className="relative h-[420px]">

              <Image
                src={release.image}
                alt={release.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <motion.div
                whileHover={{
                  scale: 1.15,
                }}
                className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-[0_0_60px_rgba(239,68,68,.6)]"
              >
                <Play
                  fill="white"
                  size={28}
                  className="text-white"
                />
              </motion.div>

              <div className="absolute bottom-8 left-8 right-8">

                <p className="text-sm uppercase tracking-[0.35em] text-red-300">
                  Featured Release
                </p>

                <h3 className="mt-3 text-4xl font-black text-white">
                  {release.title}
                </h3>

                <p className="mt-3 text-xl text-zinc-300">
                  {release.artist}
                </p>

                <div className="mt-6 flex items-center gap-3">

                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                    {release.album}
                  </span>

                  <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm text-red-300">
                    {release.duration}
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}