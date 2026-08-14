"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Heart,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

export default function ArtistHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/covers/becalive.jpg"
          alt="Moon Gupta"
          fill
          priority
          className="object-cover scale-110 opacity-25 blur-[10px]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Purple Glow */}
      <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[160px]" />

      {/* Red Glow */}
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-red-500/20 blur-[150px]" />

      <div className="relative z-10 flex items-center justify-between px-16 py-16">

        {/* Left */}
        <div className="max-w-[650px]">

          <div className="mb-5 flex items-center gap-3 text-red-400">
            <CheckCircle2 size={18} />
            <span className="text-sm font-bold uppercase tracking-[0.4em]">
              Verified Artist
            </span>
          </div>

          <h1 className="text-7xl font-black tracking-[-0.05em] text-white">
            Moon Gupta
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            Creating cinematic music, futuristic experiences and
            immersive sound for the next generation.
          </p>

          <div className="mt-10 flex flex-wrap gap-10">

            <div>
              <h2 className="text-4xl font-black">
                2.4M
              </h2>

              <p className="text-zinc-400">
                Monthly Listeners
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black">
                120
              </h2>

              <p className="text-zinc-400">
                Songs
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black">
                12
              </h2>

              <p className="text-zinc-400">
                Albums
              </p>
            </div>

          </div>

          <div className="mt-12 flex gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .98 }}
              className="flex items-center gap-3 rounded-full bg-red-500 px-9 py-4 font-bold shadow-[0_20px_70px_rgba(255,0,60,.35)]"
            >
              <Play
                size={20}
                fill="white"
              />
              Play
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .98 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 py-4 backdrop-blur-xl"
            >
              <UserPlus size={20} />
              Follow
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .98 }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5"
            >
              <Heart />
            </motion.button>

          </div>

        </div>

        {/* Right */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="hidden xl:block"
        >
          <Image
            src="/covers/becalive.jpg"
            alt="Moon Gupta"
            width={430}
            height={430}
            priority
            className="rounded-full border border-white/10 object-cover shadow-[0_40px_140px_rgba(255,0,70,.35)]"
          />
        </motion.div>

      </div>
    </section>
  );
}