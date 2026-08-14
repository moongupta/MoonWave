"use client";

import { motion } from "framer-motion";
import { Mic2, Sparkles } from "lucide-react";

const lyrics = [
  "I became alive...",
  "Through the silence...",
  "Searching for a light...",
  "Every heartbeat guides me...",
  "No fear remains...",
  "Every dream awakens...",
  "I'm becoming...",
  "BECALIVE.",
];

export default function LyricsPanel() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-red-500/10" />

      <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-violet-500/15 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-red-500/15 blur-[150px]" />

      <div className="relative z-10 p-12">

        {/* Header */}
        <div className="flex items-center gap-3">

          <Mic2 className="text-red-400" />

          <h2 className="text-4xl font-black text-white">
            Live Lyrics
          </h2>

          <Sparkles className="text-yellow-400" />

        </div>

        <p className="mt-3 text-zinc-500">
          Synced lyrics experience
        </p>

        {/* Lyrics */}
        <div className="mt-12 space-y-8">

          {lyrics.map((line, index) => (

            <motion.p
              key={line}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                x: 12,
                scale: 1.02,
              }}
              className={`cursor-default text-center text-4xl font-bold transition-all duration-300 ${
                index === 4
                  ? "text-red-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {line}
            </motion.p>

          ))}

        </div>

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#090909] to-transparent" />

      </div>

    </section>
  );
}