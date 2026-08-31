"use client";

import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

interface NewReleasesProps {
  onSelectSong: (song: Song) => void;
}

export default function NewReleases({
  onSelectSong,
}: NewReleasesProps) {
  const releases = songs.slice(0, 6);

  return (
    <section className="relative space-y-5">
      {/* =========================================================
          SECTION HEADER
      ========================================================= */}

      <div className="flex items-end justify-between">
        <div>
          <button
            type="button"
            className="group flex items-center gap-2"
          >
            <h2 className="text-[1.75rem] font-black tracking-[-0.035em] text-white sm:text-[2rem]">
              New releases
            </h2>

            <ChevronRight
              size={24}
              strokeWidth={2.5}
              className="
                text-zinc-600
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:text-white
              "
            />
          </button>

          <p className="mt-1 text-sm font-medium text-zinc-500">
            Fresh music worth discovering
          </p>
        </div>

        <button
          type="button"
          className="
            hidden
            rounded-full
            px-3
            py-2
            text-sm
            font-semibold
            text-zinc-500
            transition-all
            duration-200
            hover:bg-white/5
            hover:text-white
            sm:block
          "
        >
          View all →
        </button>
      </div>

      {/* =========================================================
          RELEASE ROW
      ========================================================= */}

      <div
        className="
          flex
          gap-4
          overflow-x-auto
          pb-3
          scrollbar-none
          sm:gap-5
          lg:gap-6
        "
      >
        {releases.map((song, index) => (
          <motion.button
            key={`${song.id}-${index}`}
            type="button"
            onClick={() => onSelectSong(song)}
            whileHover={{
              y: -6,
            }}
            whileTap={{
              scale: 0.985,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              group
              relative
              w-[190px]
              shrink-0
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-2
              text-left
              shadow-[0_10px_35px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:border-white/[0.14]
              hover:bg-white/[0.05]
              hover:shadow-[0_24px_70px_rgba(0,0,0,0.38)]
              sm:w-[205px]
              lg:w-[210px]
              xl:w-[220px]
            "
          >
            {/* =====================================================
                ARTWORK
            ===================================================== */}

            <div
              className="
                relative
                aspect-square
                w-full
                overflow-hidden
                rounded-[17px]
                bg-zinc-900
              "
            >
              <Image
                src={song.image}
                alt={song.title}
                fill
                sizes="
                  (max-width: 640px) 190px,
                  (max-width: 1024px) 205px,
                  220px
                "
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.06]
                "
              />

              {/* Dark cinematic gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  opacity-80
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* Top glass highlight */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-20
                  bg-gradient-to-b
                  from-white/[0.08]
                  to-transparent
                  opacity-60
                "
              />

              {/* =================================================
                  NEW BADGE
              ================================================= */}

              <span
                className="
                  absolute
                  left-3
                  top-3
                  rounded-full
                  border
                  border-white/10
                  bg-black/45
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                  backdrop-blur-md
                "
              >
                New
              </span>

              {/* =================================================
                  PLAY BUTTON
              ================================================= */}

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 8,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  absolute
                  bottom-3
                  right-3
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  opacity-0
                  shadow-[0_10px_35px_rgba(0,0,0,0.45)]
                  transition-all
                  duration-300
                  group-hover:translate-y-0
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              >
                <Play
                  size={17}
                  fill="currentColor"
                  className="ml-[2px]"
                />
              </motion.span>
            </div>

            {/* =====================================================
                SONG INFORMATION
            ===================================================== */}

            <div className="px-1 pb-2 pt-3">
              <h3
                className="
                  truncate
                  text-[14px]
                  font-bold
                  leading-5
                  text-white
                "
              >
                {song.title}
              </h3>

              <p
                className="
                  mt-1
                  truncate
                  text-[12px]
                  font-medium
                  text-zinc-500
                  transition-colors
                  duration-200
                  group-hover:text-zinc-400
                "
              >
                {song.artist}
              </p>

              {/* Bottom metadata */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-white/50
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-zinc-600
                      transition-colors
                      duration-300
                      group-hover:text-zinc-400
                    "
                  >
                    New release
                  </span>
                </div>

                <span
                  className="
                    text-[10px]
                    font-medium
                    text-zinc-700
                    transition-colors
                    duration-300
                    group-hover:text-zinc-500
                  "
                >
                  {song.year}
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}