"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Shuffle,
  Heart,
  Plus,
  CheckCircle,
} from "lucide-react";

export default function AlbumHero() {
  return (
    <section className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#070707] px-14 py-16">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#170615] via-[#130a20] to-[#090909]" />

      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-pink-500/20 blur-[180px]" />

      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-red-500/20 blur-[180px]" />

      <div className="absolute bottom-[-120px] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[180px]" />

      <div className="relative z-10 flex flex-col items-center gap-16 lg:flex-row">

        {/* Album Cover */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >

          <Image
            src="/covers/becalive.jpg"
            alt="BECALIVE"
            width={420}
            height={420}
            priority
            className="rounded-[36px] border border-white/10 shadow-[0_45px_130px_rgba(255,70,120,.35)]"
          />

          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-t from-black/30 to-transparent" />

        </motion.div>

        {/* Content */}

        <div className="max-w-[720px]">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-red-400">
            Album
          </p>

          <h1 className="mt-5 text-7xl font-black tracking-[-0.05em] text-white xl:text-8xl">
            BECALIVE
          </h1>

          <div className="mt-5 flex items-center gap-3">

            <h2 className="text-3xl font-semibold text-zinc-200">
              Moon Gupta
            </h2>

            <CheckCircle
              size={24}
              className="fill-sky-500 text-white"
            />

          </div>

          <p className="mt-8 max-w-[650px] text-lg leading-9 text-zinc-400">
            A cinematic album blending orchestral emotion, futuristic
            production, and immersive storytelling into one continuous
            listening experience.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .97 }}
              className="flex items-center gap-3 rounded-full bg-red-500 px-9 py-4 font-bold text-white shadow-[0_25px_70px_rgba(255,40,90,.45)]"
            >
              <Play
                size={20}
                fill="currentColor"
              />
              Play Album
            </motion.button>

            <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10">
              <Shuffle size={19} />
              Shuffle
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
              <Heart size={20} />
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
              <Plus size={20} />
            </button>

          </div>

          {/* Metadata */}

          <div className="mt-12 flex flex-wrap gap-12">

            <div>
              <h3 className="text-5xl font-black text-white">
                18
              </h3>

              <p className="mt-2 text-zinc-500">
                Tracks
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                64m
              </h3>

              <p className="mt-2 text-zinc-500">
                Duration
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                24M+
              </h3>

              <p className="mt-2 text-zinc-500">
                Streams
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                2026
              </h3>

              <p className="mt-2 text-zinc-500">
                Released
              </p>
            </div>

          </div>

          {/* Info */}

          <div className="mt-12 flex flex-wrap gap-8 text-sm uppercase tracking-[0.3em] text-zinc-500">

            <span>Cinematic Pop</span>

            <span>Spatial Audio</span>

            <span>Dolby Atmos</span>

            <span>Lossless</span>

          </div>

        </div>

      </div>

    </section>
  );
}