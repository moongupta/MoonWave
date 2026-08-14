"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Heart, Download } from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

import PlaybackControls from "./PlaybackControls";
import ProgressBar from "../player/ProgressBar";
import Visualizer from "./Visualizer";

import { formatTime } from "@/app/utils/formatTime";

export default function NowPlaying() {
  const {
    currentSong,

    currentTime,
    duration,
    progress,

    seek,

    isLiked,
    isDownloaded,

    toggleLike,
    toggleDownload,

    isPlaying,
    togglePlay,

    nextSong,
    previousSong,
  } = usePlayer();

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl">

      {/* Album Artwork */}

      <div className="flex flex-col items-center">

        <motion.div
          animate={
            isPlaying
              ? { rotate: 360 }
              : {}
          }
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <Image
            src={currentSong.image}
            alt={currentSong.title}
            width={340}
            height={340}
            priority
            className="rounded-[34px] shadow-2xl"
          />
        </motion.div>

        <h1 className="mt-8 text-5xl font-black">
          {currentSong.title}
        </h1>

        <p className="mt-3 text-2xl text-zinc-400">
          {currentSong.artist}
        </p>

        <div className="mt-6 flex gap-4">

          <button
            onClick={() =>
              toggleLike(currentSong)
            }
            className={`rounded-full border p-4 transition ${
              isLiked
                ? "border-red-500 bg-red-500 text-white"
                : "border-white/10 bg-white/5"
            }`}
          >
            <Heart
              size={20}
              fill={
                isLiked
                  ? "currentColor"
                  : "none"
              }
            />
          </button>

          <button
            onClick={() =>
              toggleDownload(
                currentSong
              )
            }
            className={`rounded-full border p-4 transition ${
              isDownloaded
                ? "border-green-500 bg-green-500 text-white"
                : "border-white/10 bg-white/5"
            }`}
          >
            <Download size={20} />
          </button>

        </div>

      </div>

      {/* Visualizer */}

      <Visualizer />

      {/* Progress */}

      <div className="flex items-center gap-5">

        <time className="w-12 text-right">
          {formatTime(currentTime)}
        </time>

        <ProgressBar
          progress={progress}
          duration={duration}
          onSeek={seek}
        />

        <time className="w-12">
          {formatTime(duration)}
        </time>

      </div>

      {/* Controls */}

      <PlaybackControls/>

    </section>
  );
}