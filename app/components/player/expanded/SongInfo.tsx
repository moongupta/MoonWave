"use client";

import { motion } from "framer-motion";

interface SongInfoProps {
  title: string;
  artist: string;
}

export default function SongInfo({
  title,
  artist,
}: SongInfoProps) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <p className="mb-3 uppercase tracking-[0.45em] text-sm font-semibold text-red-400">
          NOW PLAYING
        </p>

        <h1 className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-6xl font-black text-transparent lg:text-7xl">
          {title}
        </h1>

        <p className="mt-4 text-2xl font-medium text-zinc-400">
          {artist}
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="mt-10 flex justify-center gap-12"
      >
        <div className="text-center">
          <p className="text-3xl font-black text-white">
            24M+
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Streams
          </p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-black text-white">
            #1
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Trending
          </p>
        </div>

        <div className="text-center">
          <p className="text-3xl font-black text-white">
            Dolby
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Spatial Audio
          </p>
        </div>
      </motion.div>
    </div>
  );
}