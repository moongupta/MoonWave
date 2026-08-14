"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Shuffle,
  Repeat2,
  Volume2,
  Heart,
} from "lucide-react";

export default function PlaybackControls() {
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(42);
  const [volume, setVolume] = useState(75);

  return (
    <section className="rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

      {/* Progress */}

      <div>

        <div className="mb-3 flex justify-between text-sm text-zinc-400">
          <span>1:48</span>
          <span>4:28</span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          className="h-2 w-full cursor-pointer accent-red-500"
        />

      </div>

      {/* Controls */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-6">

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <Shuffle size={22} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <SkipBack
            size={26}
            fill="currentColor"
          />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={() => setPlaying(!playing)}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-[0_25px_80px_rgba(255,50,90,.45)]"
        >
          {playing ? (
            <Pause
              size={34}
              fill="white"
            />
          ) : (
            <Play
              size={34}
              fill="white"
            />
          )}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <SkipForward
            size={26}
            fill="currentColor"
          />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: .92 }}
          className="rounded-full border border-white/10 bg-white/5 p-4"
        >
          <Repeat2 size={22} />
        </motion.button>

      </div>

      {/* Bottom Row */}

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <Heart
            size={20}
            className="text-red-400"
          />

          <span className="text-zinc-400">
            Added to Favorites
          </span>

        </div>

        <div className="flex items-center gap-4">

          <Volume2 />

          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-44 accent-red-500"
          />

          <span className="w-10 text-right text-zinc-400">
            {volume}
          </span>

        </div>

      </div>

    </section>
  );
}