"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLibrary } from "@/app/context/LibraryProvider";

interface FavoriteButtonProps {
  songId: number;
}

export default function FavoriteButton({
  songId,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useLibrary();

  const active = isFavorite(songId);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => toggleFavorite(songId)}
      className="rounded-full p-2"
    >
      <Heart
        size={20}
        className={active ? "text-red-500" : "text-zinc-400"}
        fill={active ? "currentColor" : "none"}
      />
    </motion.button>
  );
}