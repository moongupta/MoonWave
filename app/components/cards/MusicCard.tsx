"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Song } from "../../types/song";
import FavoriteButton from "../player/FavoriteButton";

interface MusicCardProps {
  song: Song;
  onClick: () => void;
}

export default function MusicCard({
  song,
  onClick,
}: MusicCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
        rotateX: 8,
        rotateY: -8,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 18,
      }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] text-left shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.10] hover:shadow-white/10"
    >
      {/* Shine */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.9 }}
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          background:
            "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.15) 50%, transparent 80%)",
        }}
      />
      <FavoriteButton
        songId={song.id}
      />

      {/* Cover */}
      <div className="relative z-10 overflow-hidden">
        <Image
          src={song.image}
          alt={song.title}
          width={600}
          height={600}
          priority={false}
          className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="absolute bottom-5 right-5 flex h-14 w-14 translate-y-4 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:scale-110 group-hover:opacity-100"
        >
          <Play
            size={22}
            fill="black"
          />
        </motion.div>
      </div>
      

      {/* Content */}
      <div className="relative z-10 p-6">
        <h3 className="truncate text-xl font-bold text-white">
          {song.title}
        </h3>

        <p className="mt-2 text-zinc-400">
          {song.artist}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-zinc-500">
            {song.duration}
          </p>

          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: song.theme?.primary ?? "#7c3aed",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}