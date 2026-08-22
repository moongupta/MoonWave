"use client";

import { motion } from "framer-motion";
import { Music4, X } from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

interface QueuePanelProps {
  onClose?: () => void;
}

export default function QueuePanel({
  onClose,
}: QueuePanelProps) {
  const {
    queue,
    currentSong,
    playSong,
    removeFromQueue,
    clearQueue,
  } = usePlayer();

  const upcomingSongs = queue.filter(
    (song) => song.id !== currentSong.id
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.15,
      }}
      className="
        w-[360px]
        max-h-[680px]
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black/35
        p-6
        backdrop-blur-2xl
        shadow-2xl
      "
    >
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Music2030
          </p>

          <h2 className="mt-1 text-xl font-bold text-white">
            Queue
          </h2>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-zinc-400
              transition
              hover:bg-white/10
              hover:text-white
            "
          >
            <X size={17} />
          </button>
        )}

      </div>

      {/* Now Playing */}

      <div className="mb-6">

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Now Playing
        </p>

        <div
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-3
          "
        >

          <img
            src={currentSong.image}
            alt={currentSong.title}
            className="h-14 w-14 rounded-xl object-cover"
          />

          <div className="min-w-0">

            <p className="truncate font-semibold text-white">
              {currentSong.title}
            </p>

            <p className="truncate text-sm text-zinc-400">
              {currentSong.artist}
            </p>

          </div>

        </div>

      </div>

      {/* Upcoming */}

      <div className="mb-5">

        <div className="mb-3 flex items-center justify-between">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Up Next
          </p>

          {upcomingSongs.length > 0 && (
            <span className="text-xs text-zinc-500">
              {upcomingSongs.length} songs
            </span>
          )}

        </div>

        <div className="max-h-[390px] space-y-2 overflow-y-auto pr-1">

          {upcomingSongs.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-white/10 p-6 text-center">

              <Music4
                size={22}
                className="mx-auto mb-2 text-zinc-600"
              />

              <p className="text-sm text-zinc-500">
                Your queue is empty
              </p>

            </div>

          ) : (

            upcomingSongs.map((song) => (

              <motion.div
                key={song.id}
                whileHover={{
                  x: 4,
                  backgroundColor:
                    "rgba(255,255,255,.06)",
                }}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  p-2
                  transition
                "
              >

                <img
                  src={song.image}
                  alt={song.title}
                  className="
                    h-12
                    w-12
                    rounded-xl
                    object-cover
                  "
                />

                <button
                  onClick={() => playSong(song)}
                  className="min-w-0 flex-1 text-left"
                >

                  <p className="truncate font-medium text-white">
                    {song.title}
                  </p>

                  <p className="truncate text-xs text-zinc-400">
                    {song.artist}
                  </p>

                </button>

                <button
                  onClick={() =>
                    removeFromQueue(song.id)
                  }
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-zinc-500
                    opacity-0
                    transition
                    hover:bg-white/10
                    hover:text-white
                    group-hover:opacity-100
                  "
                  aria-label={`Remove ${song.title} from queue`}
                >
                  <X size={15} />
                </button>

              </motion.div>

            ))

          )}

        </div>

      </div>

      {/* Clear Queue */}

      {upcomingSongs.length > 0 && (
        <button
          onClick={clearQueue}
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/5
            py-3
            text-sm
            font-semibold
            text-zinc-300
            transition
            hover:bg-white/10
            hover:text-white
          "
        >
          Clear Queue
        </button>
      )}

    </motion.div>
  );
}