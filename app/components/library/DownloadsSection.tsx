"use client";

import { motion } from "framer-motion";
import {
  Download,
  CheckCircle2,
  Music2,
  HardDrive,
  ChevronRight,
  Play,
} from "lucide-react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";
import { usePlayer } from "@/app/context/AudioProvider";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function DownloadsSection({
  onSelectSong,
}: Props) {
  const {
    downloadedSongs,
    toggleDownload,
  } = usePlayer();

  const downloaded = songs.filter((song) =>
    downloadedSongs.includes(song.id)
  );

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

        <span className="text-sm font-semibold text-zinc-500">
          {downloaded.length}{" "}
          {downloaded.length === 1 ? "song" : "songs"}
        </span>
      </div>

      {/* Empty State */}
      {downloaded.length === 0 && (
        <div className="flex min-h-56 flex-col items-center justify-center rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Download
              size={28}
              className="text-zinc-400"
            />
          </div>

          <h3 className="mt-5 text-xl font-bold text-white">
            No downloads yet
          </h3>

          <p className="mt-2 max-w-md text-sm text-zinc-500">
            Download your favorite songs to keep them
            available in your Library.
          </p>
        </div>
      )}

      {/* Download Cards */}
      {downloaded.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {downloaded.map((song) => (
            <motion.div
              key={song.id}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                {/* Song Information */}
                <button
                  type="button"
                  onClick={() => onSelectSong(song)}
                  className="flex min-w-0 flex-1 items-start gap-5 text-left"
                >
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-red-500 to-pink-600">
                    <Music2
                      size={28}
                      className="text-white"
                    />

                    <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-xl font-bold text-white">
                      {song.title}
                    </h3>

                    <p className="mt-1 truncate text-zinc-400">
                      {song.artist}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                        Offline
                      </span>

                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                        {song.genre}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Status */}
                <div className="flex shrink-0 items-center gap-2">
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />

                  <button
                    type="button"
                    onClick={() => onSelectSong(song)}
                    aria-label={`Play ${song.title}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 transition hover:bg-white/20 group-hover:opacity-100"
                  >
                    <Play
                      size={16}
                      fill="currentColor"
                      className="ml-0.5"
                    />
                  </button>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                  <span>
                    Download Progress
                  </span>

                  <span>100%</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-linear-to-r from-red-500 to-pink-500" />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <HardDrive size={16} />

                  Available Offline
                </div>

                <button
                  type="button"
                  onClick={() => toggleDownload(song)}
                  className="text-xs font-semibold text-zinc-500 transition hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}