"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Play,
  Star,
} from "lucide-react";

const albums = [
  {
    title: "Infinity",
    artist: "Moon Gupta",
    image: "/covers/infinity.jpg",
    rating: "9.8",
  },
  {
    title: "Neon Nights",
    artist: "Future Waves",
    image: "/covers/neon.jpg",
    rating: "9.5",
  },
  {
    title: "Human Nature",
    artist: "Michael Jackson",
    image: "/covers/humannature.jpg",
    rating: "10",
  },
  {
    title: "Future Vision",
    artist: "Music2030",
    image: "/covers/future.jpg",
    rating: "9.6",
  },
];

export default function MoreLikeThis() {
  return (
    <section className="space-y-8 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-4xl font-black text-white">
            More Like This
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

      {/* Albums */}
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
            className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 text-left backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,.4)]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={album.image}
                alt={album.title}
                fill
                sizes="300px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Rating */}
              <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/50 px-3 py-1 backdrop-blur-xl">
                <Star
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm font-bold text-white">
                  {album.rating}
                </span>
              </div>

              {/* Play */}
              <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 opacity-0 shadow-[0_20px_60px_rgba(255,0,80,.4)] transition duration-300 group-hover:opacity-100">
                <Play
                  size={22}
                  fill="white"
                  className="ml-1"
                />
              </div>
            </div>

            <div className="space-y-2 p-5">
              <h3 className="truncate text-2xl font-black text-white">
                {album.title}
              </h3>

              <p className="text-zinc-400">
                {album.artist}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}