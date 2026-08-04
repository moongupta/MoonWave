"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AlbumArtworkProps {
  image: string;
  title: string;
  isPlaying: boolean;
  primaryColor: string;
}

export default function AlbumArtwork({
  image,
  title,
  isPlaying,
  primaryColor,
}: AlbumArtworkProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
      style={{
        perspective: 1200,
      }}
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-[48px] blur-[90px]"
        style={{
          background: primaryColor,
        }}
      />

      {/* Album Artwork */}
      <motion.div
        layoutId={`album-${title}`}
        whileHover={{
          rotateY: 12,
          rotateX: 6,
          scale: 1.03,
        }}
        animate={{
          rotate: isPlaying ? 360 : 0,
        }}
        transition={{
          rotate: {
            duration: 18,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          },
        }}
        className="relative"
      >
        <Image
          src={image}
          alt={title}
          width={520}
          height={520}
          priority
          draggable={false}
          className="
            h-[420px]
            w-[420px]
            rounded-[42px]
            border
            border-white/10
            object-cover
            shadow-[0_50px_150px_rgba(0,0,0,0.45)]
            select-none
          "
        />
      </motion.div>

      {/* Reflection */}
      <div
        className="
          absolute
          left-6
          right-6
          top-full
          h-24
          rounded-full
          blur-3xl
          opacity-30
        "
        style={{
          background: primaryColor,
        }}
      />
    </motion.div>
  );
}