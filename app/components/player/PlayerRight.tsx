"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ListMusic,
  Maximize2,
  Volume2,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import QueueDrawer from "./QueueDrawer";
import VolumeSlider from "./VolumeSlider";

interface PlayerRightProps {
  volume: number;
  onVolumeChange: (value: number) => void;
  onToggleExpanded: () => void;
}

export default function PlayerRight({
  volume,
  onVolumeChange,
  onToggleExpanded,
}: PlayerRightProps) {
  const [queueOpen, setQueueOpen] = useState(false);

  const { queue } = usePlayer();

  return (
    <>
      <div className="flex items-center justify-end gap-5">
        {/* Queue */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setQueueOpen(true)}
          className="relative rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ListMusic size={18} />

          {queue.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold text-white">
              {queue.length}
            </span>
          )}
        </motion.button>

        {/* Expand */}
        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: 90,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={onToggleExpanded}
          className="rounded-full border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <Maximize2 size={18} />
        </motion.button>

        {/* Volume */}
        <div className="flex items-center gap-3">
          <Volume2
            size={18}
            className="text-zinc-300"
          />

          <VolumeSlider
            volume={volume}
            onChange={onVolumeChange}
          />
        </div>
      </div>

      <QueueDrawer
        open={queueOpen}
        onClose={() => setQueueOpen(false)}
      />
    </>
  );
}