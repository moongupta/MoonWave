"use client";

import { motion } from "framer-motion";
import { motionPresets } from "@/app/design";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "glass";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
}: Props) {
  return (
    <motion.button
      {...motionPresets.button}
      onClick={onClick}
      className={
        variant === "primary"
          ? "rounded-full bg-red-500 px-8 py-4 font-bold text-white shadow-lg"
          : "rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl"
      }
    >
      {children}
    </motion.button>
  );
}