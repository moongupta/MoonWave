"use client";

import { motion } from "framer-motion";

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
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main Orb */}
      <motion.div
        className="absolute -top-40 -left-40 h-[650px] w-[650px] rounded-full blur-[180px]"
        style={{ backgroundColor: primary }}
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Orb */}
      <motion.div
        className="absolute bottom-[-150px] right-[-120px] h-[550px] w-[550px] rounded-full blur-[180px]"
        style={{ backgroundColor: secondary }}
        animate={{
          x: [0, -120, 0],
          y: [0, 90, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{ backgroundColor: accent }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Aurora Layer */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${primary}55, transparent 45%)`,
            `radial-gradient(circle at 80% 30%, ${secondary}55, transparent 45%)`,
            `radial-gradient(circle at 50% 80%, ${accent}55, transparent 45%)`,
            `radial-gradient(circle at 20% 20%, ${primary}55, transparent 45%)`,
          ],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      ))}

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.35))]" />
    </div>
  );
}