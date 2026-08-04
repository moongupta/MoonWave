"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Target,
  Dumbbell,
  Car,
  PartyPopper,
  CloudRain,
  Heart,
  Moon,
} from "lucide-react";

const moods = [
  {
    title: "Relax",
    icon: Leaf,
    active: true,
  },
  {
    title: "Focus",
    icon: Target,
  },
  {
    title: "Workout",
    icon: Dumbbell,
  },
  {
    title: "Commute",
    icon: Car,
  },
  {
    title: "Party",
    icon: PartyPopper,
  },
  {
    title: "Sad",
    icon: CloudRain,
  },
  {
    title: "Romance",
    icon: Heart,
  },
  {
    title: "Sleep",
    icon: Moon,
  },
];

export default function MoodChips() {
  return (
    <section className="flex flex-wrap gap-4">

      {moods.map((mood) => {
        const Icon = mood.icon;

        return (
          <motion.button
            key={mood.title}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`flex items-center gap-3 rounded-full border px-7 py-4 transition-all duration-300 ${
              mood.active
                ? "border-red-500 bg-red-500/15 text-red-300 shadow-[0_0_40px_rgba(239,68,68,.35)]"
                : "border-white/10 bg-white/5 text-white hover:border-red-500 hover:bg-red-500/10"
            }`}
          >
            <Icon size={18} />

            <span className="font-medium">
              {mood.title}
            </span>
          </motion.button>
        );
      })}

    </section>
  );
}