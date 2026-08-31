"use client";

import { useState } from "react";
import { SkipBack, SkipForward } from "lucide-react";

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

  const [queueOpen, setQueueOpen] = useState(false);

  return (
    <>
      {/* ==========================================================
          MINI PLAYER
      ========================================================== */}

      {!expanded && (
        <footer
          className="
            fixed
            inset-x-2
            bottom-2
            z-50

            flex
            h-17
            items-center

            rounded-2xl
            border
            border-white/10

            bg-black/85
            px-2

            backdrop-blur-3xl

            shadow-[0_20px_60px_rgba(0,0,0,0.65)]

            sm:inset-x-3
            sm:bottom-3
            sm:h-19
            sm:rounded-3xl
            sm:px-3

            md:h-20.5
            md:px-4

            lg:left-[2%]
            lg:right-[2%]
            lg:h-26.25
            lg:px-8
          "
          style={{
            boxShadow: `
              0 25px 80px rgba(0, 0, 0, 0.65),
              inset 0 0 100px ${currentSong.theme.primary}20
            `,
          }}
        >
          {/* ======================================================
              SONG INFORMATION
          ======================================================= */}

          <div
            className="
              min-w-0
              flex-1
              overflow-hidden
              pr-1

              sm:pr-2

              md:flex-[0.9]

              lg:flex-1
            "
          >
            <PlayerLeft />
          </div>

          {/* ======================================================
              DESKTOP / TABLET CONTROLS
          ======================================================= */}

          <div
            className="
              hidden
              min-w-0
              flex-1
              flex-col
              px-3
              md:flex
              lg:px-8
            "
          >
            <Controls />

            <div className="mt-2 lg:mt-3">
              <Progress />
            </div>
          </div>

          {/* ======================================================
              MOBILE CONTROLS
              Previous / Play / Next only
          ======================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-center
              gap-1

              md:hidden
            "
          >
            {/* Previous */}
            <button
              type="button"
              onClick={previousSong}
              aria-label="Previous song"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-zinc-200
                transition
                hover:bg-white/10
                active:scale-95
              "
            >
              <SkipBack
                size={17}
                fill="currentColor"
              />
            </button>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white
                transition
                hover:scale-105
                active:scale-95
              "
              style={{
                backgroundColor: `${currentSong.theme.primary}cc`,
                boxShadow: `0 0 25px ${currentSong.theme.primary}55`,
              }}
            >
              {isPlaying ? (
                <span className="text-sm font-bold">
                  ❚❚
                </span>
              ) : (
                <span className="ml-0.5 text-sm font-bold">
                  ▶
                </span>
              )}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextSong}
              aria-label="Next song"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-zinc-200
                transition
                hover:bg-white/10
                active:scale-95
              "
            >
              <SkipForward
                size={17}
                fill="currentColor"
              />
            </button>
          </div>

          {/* ======================================================
              DESKTOP RIGHT CONTROLS
          ======================================================= */}

          <div
            className="
              ml-2
              hidden
              shrink-0
              md:block
              lg:ml-4
            "
          >
            <PlayerRight
              onQueue={() => setQueueOpen(true)}
              onExpand={toggleExpanded}
            />
          </div>
        </footer>
      )}

      {/* ==========================================================
          QUEUE DRAWER
      ========================================================== */}

      <QueueDrawer
        open={queueOpen}
        onClose={() => setQueueOpen(false)}
      />

      {/* ==========================================================
          EXPANDED PLAYER
      ========================================================== */}

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