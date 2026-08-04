"use client";

import { motion } from "framer-motion";

interface LyricsPanelProps {
  title?: string;
}

const lyrics = [
  "Wake me from the silence...",
  "Show me where the future starts...",
  "Every heartbeat tells a story...",
  "Every dream becomes alive...",
  "",
  "Synchronized lyrics coming soon...",
];

export default function LyricsPanel({
  title = "Lyrics",
}: LyricsPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 }}
      className="
        w-[360px]
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
      "
    >
      <h2 className="mb-6 text-lg font-bold text-white">
        {title}
      </h2>

      <div className="max-h-[420px] space-y-4 overflow-y-auto pr-2">
        {lyrics.map((line, index) => (
          <motion.p
            key={index}
            whileHover={{
              x: 8,
              color: "#ffffff",
            }}
            className="cursor-default text-lg leading-8 text-zinc-400 transition-colors"
          >
            {line || <span>&nbsp;</span>}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}