"use client";

import { useState } from "react";

import Controls from "./Controls";
import Progress from "./Progress";
import PlayerLeft from "./PlayerLeft";
import PlayerRight from "./PlayerRight";
import ExpandedPlayer from "./ExpandedPlayer";
import QueueDrawer from "./QueueDrawer";

import { usePlayer } from "@/app/context/AudioProvider";

export default function BottomPlayer() {
  const {
    currentSong,
    expanded,
    toggleExpanded,
    isPlaying,
    togglePlay,
    nextSong,
    previousSong,
    currentTime,
    duration,
    seek,
  } = usePlayer();

  const [queueOpen, setQueueOpen] =
    useState(false);

  return (
    <>
      {/* ================================
          BOTTOM PLAYER
      ================================= */}

      {!expanded && (
        <footer
          className="
            fixed
            bottom-4
            left-1/2
            z-50
            flex
            h-[110px]
            w-[96%]
            max-w-[1900px]
            -translate-x-1/2
            items-center
            rounded-[34px]
            border
            border-white/10
            bg-black/55
            px-8
            backdrop-blur-3xl
          "
          style={{
            boxShadow: `
              0 25px 80px rgba(0,0,0,.55),
              inset 0 0 120px ${currentSong.theme.primary}20
            `,
          }}
        >
          {/* Left */}
          <PlayerLeft />

          {/* Center */}
          <div className="flex flex-1 flex-col px-10">

            <Controls />

            <div className="mt-4">
              <Progress />
            </div>

          </div>

          {/* Right */}
          <PlayerRight
            onQueue={() =>
              setQueueOpen(true)
            }
            onExpand={toggleExpanded}
          />

        </footer>
      )}

      {/* ================================
          QUEUE DRAWER
      ================================= */}

      <QueueDrawer
        open={queueOpen}
        onClose={() =>
          setQueueOpen(false)
        }
      />

      {/* ================================
          EXPANDED PLAYER
      ================================= */}

      <ExpandedPlayer
        open={expanded}
        song={currentSong}
        isPlaying={isPlaying}
        togglePlay={togglePlay}
        nextSong={nextSong}
        previousSong={previousSong}
        currentTime={currentTime}
        duration={duration}
        onSeek={seek}
        onClose={toggleExpanded}
      />
    </>
  );
}