"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Compass,
  Flame,
  Music2,
  Radio,
  Sparkles,
} from "lucide-react";

const chips = [
  "Pop",
  "Hip-Hop",
  "Rock",
  "Electronic",
  "Ambient",
  "Workout",
  "Focus",
  "Sleep",
];

export default function ExploreHero() {
  return (
    <section className="relative h-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-[#090909]">
      {/* Background */}
      <Image
        src="/covers/becalive.jpg"
        alt="Explore"
        fill
        priority
        className="object-cover scale-125 opacity-25 blur-[70px]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

      {/* Glow */}
      <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-fuchsia-600/20 blur-[180px]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-red-500/20 blur-[180px]" />

      <div className="relative z-10 flex h-full items-center justify-between px-16">
        {/* LEFT */}
        <div className="max-w-[650px]">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2">
            <Compass size={16} />
            <span className="text-sm font-semibold">
              Explore Music
            </span>
          </div>

          <h1 className="text-7xl font-black leading-none tracking-[-0.05em]">
            Discover
            <br />
            New Music
          </h1>

          <p className="mt-8 max-w-[520px] text-lg leading-8 text-zinc-400">
            Explore trending artists, fresh releases,
            immersive albums and playlists curated just
            for you.
          </p>

          <div className="mt-10 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .97 }}
              className="flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 font-bold"
            >
              <Play fill="white" size={20} />
              Explore Now
            </motion.button>

            <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl">
              <Sparkles size={20} />
              Trending
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <button
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
          className="hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: Flame,
                title: "Trending",
              },
              {
                icon: Music2,
                title: "Albums",
              },
              {
                icon: Radio,
                title: "Artists",
              },
              {
                icon: Sparkles,
                title: "Genres",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex h-[170px] w-[170px] flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >
                <item.icon
                  size={42}
                  className="text-red-400"
                />

                <p className="mt-5 text-xl font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}