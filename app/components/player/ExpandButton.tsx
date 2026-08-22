"use client";

import { Maximize2 } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onClick?: () => void;
}

export default function ExpandButton({
  onClick,
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all hover:bg-white/10"
    >
      <Maximize2 size={18} />
    </motion.button>
  );
}