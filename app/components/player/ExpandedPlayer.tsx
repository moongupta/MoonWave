"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { Song } from "@/app/types/song";

import AlbumArtwork from "./expanded/AlbumArtwork";
import PlayerBackground from "./expanded/PlayerBackground";
import SongInfo from "./expanded/SongInfo";
import ProgressSection from "./expanded/ProgressSection";
import PlaybackControls from "./expanded/PlaybackControls";
import LyricsPanel from "./expanded/LyricsPanel";
import QueuePanel from "./expanded/QueuePanel";
import FavoriteButton from "../player/FavoriteButton";

interface ExpandedPlayerProps {
  open: boolean;
  song: Song;
  isPlaying: boolean;
  togglePlay: () => void;
  nextSong: () => void;
  previousSong: () => void;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
  onClose: () => void;
}

export default function ExpandedPlayer({
  open,
  song,
  isPlaying,
  togglePlay,
  nextSong,
  previousSong,
  currentTime,
  duration,
  onSeek,
  onClose,
}: ExpandedPlayerProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: "100%",
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          <PlayerBackground
            primary={song.theme?.primary ?? "#7c3aed"}
            secondary={song.theme?.secondary ?? "#2563eb"}
          />

          {/* Close */}
          <button
            onClick={onClose}
            className="
              absolute
              right-8
              top-8
              z-50
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/10
              backdrop-blur-xl
              transition
              hover:bg-white/20
            "
          >
            <X />
          </button>

          {/* Main Layout */}
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              h-full
              max-w-[1800px]
              items-center
              justify-between
              gap-10
              px-10
            "
          >
            {/* Left */}
            <div className="hidden xl:block">
              <QueuePanel />
            </div>

            {/* Center */}
            <div
              className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
              "
            >
              <AlbumArtwork
                image={song.image}
                title={song.title}
                isPlaying={isPlaying}
                primaryColor={song.theme?.primary ?? "#7c3aed"}
              />

              <div className="mt-12">
                <SongInfo
                  title={song.title}
                  artist={song.artist}
                />
                <FavoriteButton songId={song.id} />

              </div>

              <div className="mt-10 w-full max-w-3xl">
                <ProgressSection
                  currentTime={currentTime}
                  duration={duration}
                  onSeek={onSeek}
                />
              </div>

              <div className="mt-10">
                <PlaybackControls
                  isPlaying={isPlaying}
                  togglePlay={togglePlay}
                  previousSong={previousSong}
                  nextSong={nextSong}
                />
              </div>
            </div>

            {/* Right */}
            <div className="hidden xl:block">
              <LyricsPanel />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}