"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { usePlayer } from "@/app/context/AudioProvider";

export default function FavoriteButton() {
  const {
    currentSong,
    isLiked,
    toggleLike,
  } = usePlayer();

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={() => toggleLike(currentSong)}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
        isLiked
          ? "border-red-500 bg-red-500 text-white"
          : "border-white/10 bg-white/5 text-zinc-300"
      }`}
    >
      <Heart
        size={18}
        fill={isLiked ? "currentColor" : "none"}
      />
    </motion.button>
  );
}