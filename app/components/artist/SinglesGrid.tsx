"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

const singles = [
  {
    title: "BECALIVE",
    image: "/covers/becalive.jpg",
    year: "2026",
  },
  {
    title: "Infinity",
    image: "/covers/infinity.jpg",
    year: "2025",
  },
  {
    title: "Human Nature",
    image: "/covers/humannature.jpg",
    year: "1982",
  },
  {
    title: "Neon Dreams",
    image: "/covers/neon.jpg",
    year: "2024",
  },
];

export default function SinglesGrid() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Singles & EPs
          </h2>

          <ChevronRight
            size={24}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-400 transition hover:text-white">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {singles.map((single) => (
          <motion.button
            key={single.title}
            whileHover={{
              x: 6,
              scale: 1.01,
            }}
            whileTap={{
              scale: 0.99,
            }}
            className="group flex w-full items-center gap-6 rounded-[24px] border border-white/10 bg-white/5 p-4 text-left backdrop-blur-xl"
          >
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
              <Image
                src={single.image}
                alt={single.title}
                fill
                sizes="80px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">
                {single.title}
              </h3>

              <p className="mt-1 text-zinc-400">
                Single • {single.year}
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 opacity-0 transition duration-300 group-hover:opacity-100">
              <Play
                size={18}
                fill="white"
              />
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}