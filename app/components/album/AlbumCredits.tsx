"use client";

import { motion } from "framer-motion";
import {
  Disc3,
  Music2,
  Calendar,
  Mic2,
  AudioLines,
  Globe,
} from "lucide-react";

const credits = [
  {
    icon: Mic2,
    title: "Artist",
    value: "Moon Gupta",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Disc3,
    title: "Producer",
    value: "Music2030 Studios",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Music2,
    title: "Genre",
    value: "Cinematic Pop",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Calendar,
    title: "Released",
    value: "2026",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: AudioLines,
    title: "Audio",
    value: "Dolby Atmos • Lossless",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Globe,
    title: "Label",
    value: "Music2030",
    color: "from-indigo-500 to-violet-600",
  },
];

export default function AlbumCredits() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-4xl font-black text-white">
          Credits
        </h2>

        <p className="mt-2 text-zinc-500">
          Album information and production details
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {credits.map((credit) => (
          <motion.div
            key={credit.title}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.35)]"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${credit.color}`}
            >
              <credit.icon
                size={28}
                className="text-white"
              />
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              {credit.title}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {credit.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}