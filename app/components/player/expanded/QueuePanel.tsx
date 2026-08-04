"use client";

import { motion } from "framer-motion";
import { Music4 } from "lucide-react";

interface QueueSong {
  title: string;
  artist: string;
}

interface QueuePanelProps {
  queue?: QueueSong[];
}

const defaultQueue: QueueSong[] = [
  {
    title: "Future Vision",
    artist: "Moon Gupta",
  },
  {
    title: "The Awakening",
    artist: "Moon Gupta",
  },
  {
    title: "Human Nature 2030",
    artist: "Moon Gupta",
  },
  {
    title: "Infinite",
    artist: "Moon Gupta",
  },
];

export default function QueuePanel({
  queue = defaultQueue,
}: QueuePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="
        w-[340px]
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
      "
    >
      <h2 className="mb-6 text-lg font-bold text-white">
        Up Next
      </h2>

      <div className="space-y-3">
        {queue.map((song, index) => (
          <motion.div
            key={index}
            whileHover={{
              x: 8,
              backgroundColor: "rgba(255,255,255,.06)",
            }}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              p-3
              transition-colors
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/10
              "
            >
              <Music4 size={18} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-white">
                {song.title}
              </p>

              <p className="truncate text-sm text-zinc-400">
                {song.artist}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}