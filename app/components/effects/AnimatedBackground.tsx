"use client";

import { motion } from "framer-motion";
import MusicParticles from "./MusicParticles";

interface AnimatedBackgroundProps {
  primary: string;
  secondary: string;
  accent: string;
}

export default function AnimatedBackground({
  primary,
  secondary,
  accent,
}: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Aurora Primary */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 50, -40],
          scale: [1, 1.2, 1],
          opacity: [0.28, 0.42, 0.28],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-72 -top-72 h-[900px] w-[900px] rounded-full blur-[180px]"
        style={{
          background: primary,
        }}
      />

      {/* Aurora Secondary */}
      <motion.div
        animate={{
          x: [60, -60, 60],
          y: [30, -50, 30],
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-80 -right-72 h-[1000px] w-[1000px] rounded-full blur-[200px]"
        style={{
          background: secondary,
        }}
      />

      {/* Center Accent Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          background: accent,
        }}
      />

      {/* Rotating Light Sweep */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[1800px] w-[1800px] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 blur-xl"
          style={{
            background: accent,
            opacity: 0.08,
          }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1]">
        <MusicParticles color={accent} />
      </div>

      {/* Cinematic Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.08), transparent 25%, transparent 75%, rgba(0,0,0,.35))",
        }}
      />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,.55)_100%)]" />
    </div>
  );
}