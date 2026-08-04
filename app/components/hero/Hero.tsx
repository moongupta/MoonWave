"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Shuffle,
  Music2,
} from "lucide-react";

import type { Song } from "../../types/song";

interface HeroProps {
  song: Song;
}

export default function Hero({
  song,
}: HeroProps) {
  return (
    <section className="relative min-h-[680px] overflow-hidden rounded-[48px] border border-white/10 bg-[#090909]">

      {/* Background Image */}
      <Image
        src={song.image}
        alt={song.title}
        fill
        priority
        className="object-cover object-center opacity-20 scale-110 blur-xl"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Purple Glow */}
      <div
        className="absolute left-[-150px] top-[-100px] h-[650px] w-[650px] rounded-full blur-[180px]"
        style={{
          background:
            song.theme?.primary ??
            "#8b5cf6",
          opacity: 0.28,
        }}
      />

      {/* Red Glow */}
      <div
        className="absolute bottom-[-180px] right-[-150px] h-[700px] w-[700px] rounded-full blur-[200px]"
        style={{
          background:
            song.theme?.secondary ??
            "#ef4444",
          opacity: 0.22,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between gap-12 px-16 py-28
       lg:flex-row lg:items-center">

        {/* LEFT */}
        <div className="max-w-2xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-300 backdrop-blur-xl"
          >
            <Music2 size={16} />
            Featured Release
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .1,
            }}
            className="mt-8 uppercase tracking-[0.5em] text-red-400"
          >
            Made For You
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .15,
            }}
            className="mt-6 text-7xl font-black leading-none lg:text-[96px]"
          >
            {song.title}
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .25,
            }}
            className="mt-5 text-3xl font-semibold text-zinc-300"
          >
            {song.artist}
          </motion.h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Based on your recent listening,
            we created a cinematic experience
            you'll never forget.
          </p>

          {/* Stats */}
          <div className="mt-12 flex gap-12">

            <div>
              <h3 className="text-4xl font-black">
                24M+
              </h3>

              <p className="mt-1 text-zinc-500">
                Streams
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">
                #1
              </h3>

              <p className="mt-1 text-zinc-500">
                Trending
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black">
                4K
              </h3>

              <p className="mt-1 text-zinc-500">
                Audio
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap gap-5">

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .97,
              }}
              className="flex items-center gap-3 rounded-full bg-red-500 px-10 py-5 text-lg font-bold text-white shadow-[0_20px_80px_rgba(239,68,68,.45)]"
            >
              <Play
                size={22}
                fill="white"
              />
              Play Mix
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: .97,
              }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold backdrop-blur-xl"
            >
              <Shuffle size={22} />
              Shuffle
            </motion.button>

          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex justify-center lg:w-[45%]"
        >

          <Image
            src={song.image}
            alt={song.title}
            width={520}
            height={520}
            priority
            className="rounded-[42px] border border-white/10 object-cover shadow-[0_70px_180px_rgba(239,68,68,.35)]"
          />

          <div className="absolute bottom-8 left-8 rounded-3xl border border-white/10 bg-black/40 p-6 backdrop-blur-2xl">

            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
              Featuring
            </p>

            <h3 className="mt-3 text-3xl font-black">
              {song.title}
            </h3>

            <p className="mt-2 text-zinc-300">
              {song.artist}
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}