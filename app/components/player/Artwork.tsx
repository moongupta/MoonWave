"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { usePlayer } from "@/app/context/AudioProvider";

export default function Artwork() {
  const { currentSong, isPlaying } = usePlayer();

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        rotate: -2,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="relative"
    >
      {/* Glow */}

      <div
        className="absolute inset-0 rounded-[24px] blur-2xl"
        style={{
          background: `${currentSong.theme.primary}55`,
          transform: "scale(1.08)",
        }}
      />

      {/* Artwork */}

      <motion.div
        animate={
          isPlaying
            ? {
                rotate: [0, 1, 0, -1, 0],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-[22px]"
      >
        <Image
          src={currentSong.image}
          alt={currentSong.title}
          width={82}
          height={82}
          priority
          className="rounded-[22px] object-cover shadow-2xl"
        />

        {/* Glass reflection */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
      </motion.div>
    </motion.div>
  );
}