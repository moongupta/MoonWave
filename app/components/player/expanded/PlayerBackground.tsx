"use client";

import { motion } from "framer-motion";

interface PlayerBackgroundProps {
  primary: string;
  secondary: string;
}

export default function PlayerBackground({
  primary,
  secondary,
}: PlayerBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#020202]" />

      {/* Primary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [-40, 40, -40],
          y: [-20, 30, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[900px] w-[900px] rounded-full blur-[180px]"
        style={{
          background: primary,
          opacity: 0.28,
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          x: [40, -50, 40],
          y: [20, -30, 20],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-56 -right-56 h-[950px] w-[950px] rounded-full blur-[180px]"
        style={{
          background: secondary,
          opacity: 0.24,
        }}
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[160px]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}