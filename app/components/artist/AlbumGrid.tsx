"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const albums = [
  {
    title: "BECALIVE",
    year: "2026",
    image: "/covers/becalive.jpg",
  },
  {
    title: "Infinity",
    year: "2025",
    image: "/covers/infinity.jpg",
  },
  {
    title: "Neon Nights",
    year: "2024",
    image: "/covers/neon.jpg",
  },
  {
    title: "Future Vision",
    year: "2023",
    image: "/covers/future.jpg",
  },
];

export default function AlbumsGrid() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Albums
          </h2>

          <ChevronRight
            size={24}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-400 hover:text-white transition">
          View All
        </button>
      </div>

      {/* Album Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {albums.map((album) => (
          <motion.button
            key={album.title}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 text-left backdrop-blur-xl"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={album.image}
                alt={album.title}
                fill
                sizes="300px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
            </div>

            <div className="space-y-2 p-5">
              <h3 className="truncate text-2xl font-black text-white">
                {album.title}
              </h3>

              <p className="text-zinc-400">
                Album • {album.year}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}