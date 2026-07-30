"use client";

import { Play, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { Song } from "../../types/song";

interface HeroProps {
  song: Song;
}

export default function Hero({ song }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30 backdrop-blur-3xl">

      {/* Animated Aurora */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-48 left-1/3 h-[700px] w-[700px] rounded-full blur-[170px]"
        style={{
          background: song.theme.primary,
          opacity: 0.16,
        }}
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-60 -right-48 h-[750px] w-[750px] rounded-full blur-[170px]"
        style={{
          background: song.theme.secondary,
          opacity: 0.16,
        }}
      />

      {/* Background Image */}
      <img
        src={song.image}
        alt={song.title}
        className="absolute inset-0 h-full w-full scale-125 object-cover opacity-15 blur-3xl"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30" />

      <div className="relative z-10 flex flex-col gap-12 p-12 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.5em] text-sm font-bold text-red-400"
          >
            Featured Album
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-6xl font-black leading-none text-white lg:text-8xl"
          >
            {song.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl font-semibold text-zinc-300"
          >
            {song.artist}
          </motion.h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Experience cinematic sound, futuristic visuals and immersive
            interactions built for the next generation of music.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black shadow-2xl"
            >
              <Play fill="black" size={20} />
              Play Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl"
            >
              <Heart size={20} />
              Like Album
            </motion.button>

          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -14, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto lg:mx-0"
        >
          <motion.img
            src={song.image}
            alt={song.title}
            whileHover={{
              rotateY: 10,
              rotateX: 5,
              scale: 1.04,
            }}
            transition={{
              duration: 0.35,
            }}
            className="h-[320px] w-[320px] rounded-[36px] border border-white/10 object-cover shadow-[0_40px_120px_rgba(0,0,0,.45)] lg:h-[430px] lg:w-[430px]"
          />
        </motion.div>

      </div>
    </section>
  );
}