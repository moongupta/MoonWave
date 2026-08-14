"use client";

import { motion } from "framer-motion";
import {
  Speaker,
  Smartphone,
  AudioLines,
  Download,
  SlidersHorizontal,
  BadgeCheck,
} from "lucide-react";

const cards = [
  {
    icon: Speaker,
    title: "Output Device",
    value: "MacBook Speakers",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: AudioLines,
    title: "Audio Quality",
    value: "Dolby Atmos",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Download,
    title: "Download",
    value: "Lossless",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: SlidersHorizontal,
    title: "Equalizer",
    value: "Balanced",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Connected Device",
    value: "iPhone 13",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BadgeCheck,
    title: "Playback",
    value: "Hi-Res Certified",
    color: "from-indigo-500 to-violet-600",
  },
];

export default function DevicePanel() {
  return (
    <section className="space-y-8 pb-28">
      {/* Header */}
      <div>
        <h2 className="text-4xl font-black text-white">
          Audio Settings
        </h2>

        <p className="mt-2 text-zinc-500">
          Playback devices and sound quality
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.35)]"
          >
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color}`}
            >
              <card.icon
                size={30}
                className="text-white"
              />
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
              {card.title}
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {card.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}