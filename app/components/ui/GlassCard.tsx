"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-4xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}