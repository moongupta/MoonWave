"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

export default function Hero() {
  const {
    currentSong,
    playSong,
    nextSong,
    previousSong,
    toggleShuffle,
  } = usePlayer();

  const song = currentSong;

  return (
    <section
      key={song.id}
      className="relative h-[540px] overflow-hidden rounded-[42px] border border-white/10 bg-black">

      {/* Background */}
      <Image
        src={song.image}
        alt={song.title}
        fill
        priority
        className="object-cover scale-[1.7] opacity-15 blur-[100px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />

      {/* Ambient Light 1 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: `${song.theme.primary}33`,
        }}
        className="absolute left-1/4 top-[-180px] h-[720px] w-[720px] rounded-full blur-[190px]"
      />

      {/* Ambient Light 2 */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: `${song.theme.secondary}33`,
        }}
        className="absolute bottom-[-220px] right-[-120px] h-[760px] w-[760px] rounded-full blur-[200px]"
      />

      {/* Ambient Light 3 */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        style={{
          backgroundColor: `${song.theme.accent}22`,
        }}
        className="absolute left-1/2 top-20 h-[520px] w-[520px] rounded-full blur-[170px]"
      />

      {/* Previous */}
      <button
        aria-label="Previous"
        onClick={previousSong}
        className="absolute left-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition hover:bg-white/10"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        aria-label="Next"
        onClick={nextSong}
        className="absolute right-8 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition hover:bg-white/10"
      >
        <ChevronRight size={22} />
      </button>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-20">
        {/* Left Content */}
        <div className="flex h-full max-w-[620px] flex-col justify-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-bold uppercase tracking-[0.45em] text-red-400"
          >
            MADE FOR YOU
          </motion.p>

          <motion.h1
            key={song.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-7 text-8xl font-black leading-none tracking-[-0.05em] text-white"
          >
            {song.title}
          </motion.h1>

          <motion.h2
            key={song.artist}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .1 }}
            className="mt-6 text-3xl font-semibold text-zinc-300"
          >
            {song.artist}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mt-8 max-w-[540px] text-lg leading-8 text-zinc-400"
          >
            Experience{" "}
            <span className="font-semibold text-white">
              {song.album}
            </span>{" "}
            by{" "}
            <span className="font-semibold text-white">
              {song.artist}
            </span>
            . A premium{" "}
            <span className="text-red-400">
              {song.genre}
            </span>{" "}
            release from {song.year}.
          </motion.p>

          {/* Buttons */}

          <div className="mt-10 flex gap-5">

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: .97 }}
              onClick={toggleShuffle}
              className="flex items-center gap-3 rounded-full style={{
  background: song.theme.primary,
}} px-9 py-4 text-lg font-bold text-white shadow-[0_25px_80px_rgba(255,40,90,.35)]
 transition={{
  duration: .45,
}}"
            >
              <Play
                size={22}
                fill="currentColor"
              />
              Play
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: .97 }}
              className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-9 py-4 text-lg font-semibold text-white backdrop-blur-xl"
            >
              <Shuffle size={20} />
              Shuffle
            </motion.button>

          </div>

          {/* Stats */}

          <div className="mt-14 flex gap-16">

            <div>
              <h3 className="text-5xl font-black">
                {song.streams}
              </h3>

              <p className="mt-2 text-zinc-500">
                Streams
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black">
                {song.featured ? "#1 Trending" : "New"}
              </h3>

              <p className="mt-2 text-zinc-500">
                Trending
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black">
                {song.year}
              </h3>

              <p className="mt-2 text-zinc-500">
                Released
              </p>
            </div>

          </div>

        </div>
        {/* Artwork */}
        <motion.div
          key={song.id}
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.03,
            rotate: -1,
          }}
          className="relative mr-10 hidden lg:block"
        >
          <Image
            src={song.image}
            alt={song.title}
            width={430}
            height={430}
            priority
            className="rounded-[36px] border border-white/10 object-cover style={{
  boxShadow: `0 45px 130px ${song.theme.primary}66`,
}}"
          />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-7 left-7 rounded-3xl border border-white/10 bg-black/55 px-6 py-5 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
              Featuring
            </p>

            <h3 className="mt-2 text-4xl font-black text-white">
              {song.title}
            </h3>

            <p className="mt-1 text-lg text-zinc-300">
              {song.artist}
            </p>

            <div className="mt-4 flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  background: song.theme.primary,
                }}
              />

              <span className="text-sm text-zinc-400">
                {song.genre}
              </span>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}