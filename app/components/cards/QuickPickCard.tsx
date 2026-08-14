"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import type { Song } from "@/app/types/song";

interface Props {
  song: Song;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function QuickPickCard({
  song,
  title,
  subtitle,
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.28,
        ease: "easeOut",
      }}
      onClick={() => {
        console.log("CARD CLICKED");
        onClick();
      }}
      className="group relative h-[185px] w-[285px] flex-shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-zinc-900 text-left shadow-[0_35px_90px_rgba(0,0,0,0.45)]"
    >
      {/* Background */}
      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute inset-0"
      >
        <Image
          src={song.image}
          alt={song.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-red-500/10" />

      {/* Text */}
      <div className="absolute bottom-6 left-6 z-20">
        <h3 className="text-[42px] font-black leading-[0.9] tracking-[-0.04em] text-white">
          {title}
        </h3>

        <p className="mt-2 text-[22px] font-semibold text-white/90">
          {subtitle}
        </p>
      </div>

      {/* Play Button */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileHover={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute bottom-6 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl"
      >
        <Play
          size={22}
          fill="currentColor"
        />
      </motion.div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[30px] ring-1 ring-white/5 transition group-hover:ring-white/15" />
    </motion.button>
  );
}