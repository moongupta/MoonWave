"use client";

import { motion } from "framer-motion";
import { motionPresets } from "@/app/design";

interface Props {
  icon: React.ReactNode;
}

export default function IconButton({
  icon,
}: Props) {
  return (
    <motion.button
      {...motionPresets.button}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {icon}
    </motion.button>
  );
}