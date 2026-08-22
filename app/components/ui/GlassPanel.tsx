"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeProvider";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-3xl
        ${className}
      `}
      style={{
        boxShadow: `
          inset 0 1px 1px rgba(255,255,255,.08),
          0 0 80px ${theme.primary}15,
          0 20px 80px rgba(0,0,0,.45)
        `,
      }}
    >
      {/* Reflection */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-white/10
          via-transparent
          to-transparent
        "
      />

      {/* Border Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[34px]"
        style={{
          boxShadow: `inset 0 0 50px ${theme.primary}18`,
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}