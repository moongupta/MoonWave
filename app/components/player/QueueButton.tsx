"use client";

import { ListMusic } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
  active?: boolean;
}

export default function QueueButton({
  onClick,
  active = false,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
        active
          ? "border-red-500 bg-red-500 text-white"
          : "border-white/10 bg-white/5 text-zinc-300"
      }`}
    >
      <ListMusic size={20} />
    </motion.button>
  );
}