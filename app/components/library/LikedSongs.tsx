"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Play,
  Clock3,
  MoreHorizontal,
} from "lucide-react";

import type { Song } from "@/app/types/song";
import { songs } from "@/app/data/songs";
import { usePlayer } from "@/app/context/AudioProvider";

interface Props {
  onSelectSong: (song: Song) => void;
}

export default function LikedSongs({
  onSelectSong,
}: Props) {
  const {
    likedSongs,
    toggleLike,
  } = usePlayer();

  const liked = songs.filter((song) =>
    likedSongs.includes(song.id)
  );

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
            <Heart
              size={20}
              className="text-red-500"
              fill="currentColor"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black text-white">
              Liked Songs
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              {liked.length}{" "}
              {liked.length === 1 ? "song" : "songs"}
            </p>
          </div>
        </div>

        {liked.length > 0 && (
          <button
            type="button"
            className="text-sm font-semibold text-zinc-400 transition hover:text-white"
          >
            View All
          </button>
        )}
      </div>

      {/* Empty State */}
      {liked.length === 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            flex
            min-h-55
            flex-col
            items-center
            justify-center
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            px-6
            text-center
            backdrop-blur-2xl
          "
        >
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
            <Heart
              size={28}
              className="text-red-500"
            />
          </div>

          <h3 className="text-xl font-bold text-white">
            No liked songs yet
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Songs you like will appear here so you can
            quickly come back to your favorites.
          </p>
        </motion.div>
      )}

      {/* Liked Songs */}
      {liked.length > 0 && (
        <div className="space-y-3">
          {liked.map((song, index) => (
            <motion.div
              key={song.id}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -2,
              }}
              className="
                group
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-3
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
            >
              {/* Number */}
              <div className="hidden w-8 shrink-0 text-center text-sm text-zinc-600 sm:block">
                {index + 1}
              </div>

              {/* Artwork */}
              <button
                type="button"
                onClick={() => onSelectSong(song)}
                aria-label={`Play ${song.title}`}
                className="
                  relative
                  h-14
                  w-14
                  shrink-0
                  overflow-hidden
                  rounded-xl
                "
              >
                <Image
                  src={song.image}
                  alt={song.title}
                  fill
                  sizes="56px"
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/40
                  opacity-0
                  transition
                  group-hover:opacity-100
                ">
                  <Play
                    size={18}
                    fill="white"
                    className="text-white"
                  />
                </div>
              </button>

              {/* Song Information */}
              <button
                type="button"
                onClick={() => onSelectSong(song)}
                className="min-w-0 flex-1 text-left"
              >
                <h3 className="truncate font-bold text-white">
                  {song.title}
                </h3>

                <p className="mt-1 truncate text-sm text-zinc-500">
                  {song.artist}
                </p>
              </button>

              {/* Album */}
              <div className="hidden min-w-0 flex-1 lg:block">
                <p className="truncate text-sm text-zinc-500">
                  {song.album}
                </p>
              </div>

              {/* Duration */}
              <div className="hidden items-center gap-2 text-sm text-zinc-500 md:flex">
                <Clock3 size={15} />
                <span>{formatDuration(song.duration)}</span>
              </div>

              {/* Like */}
              <button
                type="button"
                onClick={() => toggleLike(song)}
                aria-label={`Unlike ${song.title}`}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-red-500
                  transition
                  hover:bg-red-500/10
                "
              >
                <Heart
                  size={18}
                  fill="currentColor"
                />
              </button>

              {/* More */}
              <button
                type="button"
                aria-label={`More options for ${song.title}`}
                className="
                  hidden
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-zinc-500
                  transition
                  hover:bg-white/10
                  hover:text-white
                  sm:flex
                "
              >
                <MoreHorizontal size={19} />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

function formatDuration(
  duration?: number
) {
  if (!duration || duration <= 0) {
    return "--:--";
  }

  const minutes = Math.floor(
    duration / 60
  );

  const seconds = Math.floor(
    duration % 60
  );

  return `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}