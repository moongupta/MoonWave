"use client";

import { motion } from "framer-motion";
import {
  Mic2,
  Sparkles,
} from "lucide-react";

const lyrics = [
  "I became alive...",
  "Through the silence...",
  "Every heartbeat echoes...",
  "Into the light...",
  "No more fear...",
  "Now I'm becoming...",
  "BECALIVE.",
];

export default function LyricsPreview() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#090909]">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-red-500/10" />

      <div className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-red-500/15 blur-[170px]" />

      <div className="absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[170px]" />

      <div className="relative z-10 p-12">

        <div className="flex items-center gap-3">

          <Mic2 className="text-red-400" />

          <h2 className="text-4xl font-black">
            Lyrics
          </h2>

          <Sparkles className="text-yellow-400" />

        </div>

        <p className="mt-3 text-zinc-500">
          Live synchronized lyrics coming soon.
        </p>

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          className="mt-12 space-y-7"
        >
          {lyrics.map((line, index) => (
            <motion.p
              key={line}
              initial={{
                opacity: .35,
              }}
              whileHover={{
                opacity: 1,
                x: 12,
                scale: 1.02,
              }}
              transition={{
                duration: .25,
              }}
              className={`text-3xl font-semibold ${
                index === 3
                  ? "text-red-400"
                  : "text-zinc-300"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>

      </div>

    </section>
  );
}