"use client";

import Image from "next/image";

import {
  Maximize2,
  Pause,
  Play,
  Repeat2,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import { formatTime } from "@/app/utils/formatTime";

import ProgressBar from "./ProgressBar";
import VolumeSlider from "./VolumeSlider";

interface BottomPlayerProps {
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export default function BottomPlayer({
  isExpanded,
  onToggleExpanded,
}: BottomPlayerProps) {
  const {
    currentSong,

    isPlaying,

    togglePlay,

    nextSong,
    previousSong,

    progress,
    seek,

    volume,
    setVolume,

    currentTime,
    duration,
  } = usePlayer();

  return (
    <footer className="bottom-player">
      <div className="player-main">

        {/* Left */}

        <button
          onClick={onToggleExpanded}
          className="player-track"
        >
          <Image
            src={currentSong.image}
            alt={currentSong.title}
            width={72}
            height={72}
          />

          <span>
            <b>{currentSong.title}</b>

            <small>
              {currentSong.artist}
            </small>
          </span>
        </button>

        {/* Center */}

        <div className="player-controls">

          <div>

            <button aria-label="Shuffle">
              <span className="text-lg">
                ⌘
              </span>
            </button>

            <button
              aria-label="Previous"
              onClick={previousSong}
            >
              <SkipBack
                size={23}
                fill="currentColor"
              />
            </button>

            <button
              aria-label={
                isPlaying
                  ? "Pause"
                  : "Play"
              }
              onClick={togglePlay}
              className="play-control"
            >
              {isPlaying ? (
                <Pause
                  size={28}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={28}
                  fill="currentColor"
                  className="ml-1"
                />
              )}
            </button>

            <button
              aria-label="Next"
              onClick={nextSong}
            >
              <SkipForward
                size={23}
                fill="currentColor"
              />
            </button>

            <button aria-label="Repeat">
              <Repeat2 size={21} />
            </button>

          </div>

          <div className="player-progress">

            <time>
              {formatTime(currentTime)}
            </time>

            <ProgressBar
              progress={progress}
              duration={duration}
              onSeek={seek}
            />

            <time>
              {formatTime(duration)}
            </time>

          </div>

        </div>

        {/* Right */}

        <div className="player-tools">

          <Volume2 size={20} />

          <VolumeSlider
            volume={volume}
            onChange={setVolume}
          />

          <button aria-label="Lyrics">
            ☷
          </button>

          <button aria-label="Comments">
            ▣
          </button>

          <button
            aria-label="Expand"
            onClick={onToggleExpanded}
          >
            <Maximize2 size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}