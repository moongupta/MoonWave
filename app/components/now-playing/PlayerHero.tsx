"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Heart,
  Plus,
  MoreHorizontal,
  Disc3,
} from "lucide-react";

export default function PlayerHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[#07070b]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#170814] via-[#12091d] to-[#050505]" />

      {/* Glow Effects */}
      <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-red-500/20 blur-[170px]" />
      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-[170px]" />
      <div className="absolute bottom-[-150px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[170px]" />

      <div className="relative z-10 flex flex-col gap-16 px-10 py-12 xl:flex-row xl:items-center">

        {/* Album Cover */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto xl:mx-0"
        >
          <Image
            src="/covers/becalive.jpg"
            alt="BECALIVE"
            width={420}
            height={420}
            priority
            className="rounded-[34px] border border-white/10 shadow-[0_40px_140px_rgba(255,70,120,.45)]"
          />
        </motion.div>

        {/* Song Details */}
        <div className="flex-1">

          <div className="flex items-center gap-3">
            <Disc3 className="text-red-400" />
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-red-400">
              Now Playing
            </span>
          </div>

          <h1 className="mt-6 text-6xl font-black leading-none tracking-[-0.05em] text-white xl:text-8xl">
            BECALIVE
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <h2 className="text-3xl font-semibold text-zinc-200">
              Moon Gupta
            </h2>

            <BadgeCheck
              size={22}
              className="fill-sky-500 text-white"
            />
          </div>

          <p className="mt-8 max-w-[700px] text-lg leading-9 text-zinc-400">
            A cinematic musical journey that blends emotion,
            orchestral textures, futuristic production and
            immersive storytelling into one unforgettable
            listening experience.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-full bg-red-500 px-9 py-4 font-bold text-white shadow-[0_20px_70px_rgba(255,40,90,.45)] transition hover:scale-105">
              Playing
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
              <Heart size={20} />
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
              <Plus size={20} />
            </button>

            <button className="rounded-full border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:bg-white/10">
              <MoreHorizontal size={20} />
            </button>

          </div>

          {/* Statistics */}
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">

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
                #1
              </h3>
              <p className="mt-2 text-zinc-500">
                Trending
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Dolby
              </h3>
              <p className="mt-2 text-zinc-500">
                Atmos
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Hi-Res
              </h3>
              <p className="mt-2 text-zinc-500">
                Audio
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}