"use client";

import { motion } from "framer-motion";
import { usePlayer } from "@/app/context/AudioProvider";

export default function ThemeGlow() {
  const { currentSong } = usePlayer();

  return (
    <motion.div
      key={currentSong.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle at center, ${currentSong.theme.primary}22, transparent 70%)`,
      }}
    />
  );
}