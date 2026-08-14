"use client";

import { motion } from "framer-motion";
import {
  Download,
  CheckCircle2,
  Music2,
  HardDrive,
  ChevronRight,
} from "lucide-react";

import type { Song } from "@/app/types/song";

interface Props {
  onSelectSong: (song: Song) => void;
}

const downloads = [
  {
    title: "BECALIVE",
    artist: "Moon Gupta",
    quality: "Hi-Res FLAC",
    size: "42 MB",
    progress: 100,
  },
  {
    title: "Infinity",
    artist: "Music2030",
    quality: "Dolby Atmos",
    size: "38 MB",
    progress: 100,
  },
  {
    title: "Neon Nights",
    artist: "Future Waves",
    quality: "320 kbps",
    size: "16 MB",
    progress: 72,
  },
  {
    title: "Human Nature",
    artist: "Michael Jackson",
    quality: "Lossless",
    size: "31 MB",
    progress: 100,
  },
];

export default function DownloadsSection({
  onSelectSong,
}: Props) {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Downloads
          </h2>

          <ChevronRight
            size={24}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-400 transition hover:text-white">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {downloads.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,.35)]"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-pink-600">
                  <Music2
                    size={28}
                    className="text-white"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-zinc-400">
                    {item.artist}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                      {item.quality}
                    </span>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>

              {item.progress === 100 ? (
                <CheckCircle2 className="text-emerald-400" />
              ) : (
                <Download className="text-yellow-400" />
              )}
            </div>

            {/* Progress */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                <span>Download Progress</span>

                <span>{item.progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-red-500 to-pink-500"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
              <HardDrive size={16} />
              Available Offline
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}