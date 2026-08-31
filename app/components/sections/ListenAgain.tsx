"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface ListenAgainProps {
  onSelectSong: (song: Song) => void;
}

export default function ListenAgain({
  onSelectSong,
}: ListenAgainProps) {
  const listenAgainSongs = songs
    .concat(songs)
    .slice(0, 6);

  return (
    <section className="space-y-5">
      {/* Section Header */}
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-[1.7rem] font-black tracking-[-0.03em] text-white sm:text-[1.9rem]">
              Listen again
            </h2>

            <ChevronRight
              size={23}
              strokeWidth={2.5}
              className="mb-[2px] text-zinc-500 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>

          <p className="mt-1 text-sm text-zinc-500">
            Your recently played music
          </p>
        </div>

        <button
          type="button"
          className="
            hidden
            text-sm
            font-semibold
            text-zinc-500
            transition-colors
            duration-200
            hover:text-white
            sm:block
          "
        >
          View all
        </button>
      </div>

      {/* Songs */}
      <div
        className="
          listen-row
          flex
          gap-3
          overflow-x-auto
          pb-2
          scrollbar-none
          sm:gap-4
        "
      >
        {listenAgainSongs.map((song, index) => (
          <motion.button
            key={`${song.id}-${index}`}
            type="button"
            onClick={() => onSelectSong(song)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              group
              relative
              flex
              min-w-[250px]
              flex-1
              items-center
              gap-3
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.035]
              px-3
              py-3
              text-left
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-white/[0.14]
              hover:bg-white/[0.07]
              hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]
              sm:min-w-[270px]
            "
          >
            {/* Artwork */}
            <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-xl">
              <Image
                src={song.image}
                alt={song.title}
                fill
                sizes="58px"
                className="
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Hover Play */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/45
                  opacity-0
                  transition-opacity
                  duration-200
                  group-hover:opacity-100
                "
              >
                <Play
                  size={17}
                  fill="currentColor"
                  className="text-white"
                />
              </div>
            </div>

            {/* Song Information */}
            <span className="min-w-0 flex-1">
              <b
                className="
                  block
                  truncate
                  text-[14px]
                  font-bold
                  leading-5
                  text-white
                "
              >
                {song.title}
              </b>

              <small
                className="
                  mt-0.5
                  block
                  truncate
                  text-[12px]
                  font-medium
                  leading-5
                  text-zinc-500
                  transition-colors
                  duration-200
                  group-hover:text-zinc-400
                "
              >
                {song.artist}
              </small>
            </span>

            {/* Play Button */}
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-zinc-400
                opacity-0
                translate-x-1
                transition-all
                duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
                group-hover:bg-white/[0.09]
                group-hover:text-white
              "
              aria-hidden="true"
            >
              <Play
                size={14}
                fill="currentColor"
              />
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}