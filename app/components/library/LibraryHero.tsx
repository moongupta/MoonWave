"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Music2,
  Disc3,
  Download,
} from "lucide-react";

const cards = [
  {
    title: "Liked Songs",
    value: "248",
    icon: Heart,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Playlists",
    value: "18",
    icon: Music2,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Albums",
    value: "72",
    icon: Disc3,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Downloads",
    value: "36",
    icon: Download,
    color: "from-emerald-500 to-green-600",
  },
];

export default function LibraryHero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30 p-10 backdrop-blur-3xl">

      {/* Ambient Glow */}
      <div className="absolute -top-32 left-20 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[150px]" />
      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/20 blur-[150px]" />

      <div className="relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black tracking-[-0.04em] text-white"
        >
          Library
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-5 max-w-xl text-lg leading-8 text-zinc-400"
        >
          Your music, your playlists, your albums and your
          favorite moments — all in one place.
        </motion.p>

        {/* Summary Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
              >
                <card.icon
                  size={28}
                  className="text-white"
                />
              </div>

              <h2 className="mt-6 text-4xl font-black text-white">
                {card.value}
              </h2>

              <p className="mt-2 text-zinc-400">
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}