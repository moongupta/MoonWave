"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const genres = [
  {
    name: "Pop",
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Hip-Hop",
    color: "from-orange-500 to-yellow-500",
  },
  {
    name: "Electronic",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Rock",
    color: "from-red-700 to-red-500",
  },
  {
    name: "Jazz",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Lo-Fi",
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    name: "Ambient",
    color: "from-sky-500 to-indigo-600",
  },
  {
    name: "Workout",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Focus",
    color: "from-slate-600 to-slate-800",
  },
  {
    name: "Sleep",
    color: "from-indigo-700 to-purple-700",
  },
  {
    name: "Classical",
    color: "from-stone-500 to-neutral-700",
  },
  {
    name: "Trending",
    color: "from-rose-500 to-pink-600",
  },
];

export default function GenreGrid() {
  return (
    <section className="space-y-8 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Browse Genres
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

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {genres.map((genre) => (
          <motion.button
            key={genre.name}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className={`relative overflow-hidden rounded-[30px] bg-gradient-to-br ${genre.color} p-8 text-left shadow-[0_30px_80px_rgba(0,0,0,.35)]`}
          >
            <div className="absolute inset-0 bg-black/20" />

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white">
                {genre.name}
              </h3>

              <p className="mt-3 text-white/80">
                Discover playlists,
                artists and albums.
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}