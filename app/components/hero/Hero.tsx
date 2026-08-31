"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

export default function Hero() {
  const {
    currentSong,
    playShuffle,
    previousSong,
    nextSong,
  } = usePlayer();

  const song = currentSong;

  return (
    <section
      className="
        relative
        isolate
        w-full
        min-h-102.5
        shrink-0
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-black
        shadow-[0_35px_120px_rgba(0,0,0,0.45)]

        sm:min-h-112.5

        lg:h-140
        lg:min-h-0
        lg:rounded-4xl
      "
    >
      {/* =====================================================
          BACKGROUND ART
      ====================================================== */}

      <Image
        src={song.image}
        alt=""
        fill
        priority
        sizes="(max-width: 1023px) 100vw, 1200px"
        className="
          object-cover
          scale-[1.5]
          opacity-20
          blur-[70px]

          lg:scale-[1.6]
          lg:blur-[90px]
        "
      />

      {/* =====================================================
          DARK GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-black/70
          via-black/85
          to-black

          lg:bg-linear-to-r
          lg:from-black
          lg:via-black/70
          lg:to-black/20
        "
      />

      {/* =====================================================
          MOVING LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          backgroundColor: `${song.theme.primary}44`,
        }}
        className="
          pointer-events-none
          absolute
          -top-32
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          blur-[110px]

          lg:-top-40
          lg:h-100
          lg:w-100
          lg:blur-[150px]
        "
      />

      {/* =====================================================
          PREVIOUS SONG
      ====================================================== */}

      <button
        type="button"
        onClick={previousSong}
        aria-label="Previous song"
        className="
          absolute
          left-2
          top-1/2
          z-30
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur-xl
          transition
          duration-200
          hover:bg-white/10
          active:scale-95

          sm:left-3
          sm:h-9
          sm:w-9

          lg:left-8
          lg:h-10
          lg:w-10
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* =====================================================
          NEXT SONG
      ====================================================== */}

      <button
        type="button"
        onClick={nextSong}
        aria-label="Next song"
        className="
          absolute
          right-2
          top-1/2
          z-30
          flex
          h-8
          w-8
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur-xl
          transition
          duration-200
          hover:bg-white/10
          active:scale-95

          sm:right-3
          sm:h-9
          sm:w-9

          lg:right-8
          lg:h-10
          lg:w-10
        "
      >
        <ChevronRight size={18} />
      </button>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-102.5
          flex-col
          px-4
          py-5

          sm:min-h-112.5
          sm:px-6
          sm:py-7

          lg:h-full
          lg:min-h-0
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-16
          lg:py-0
        "
      >
        {/* =================================================
            MOBILE ARTWORK
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            mb-4
            h-36
            w-36
            shrink-0
            overflow-hidden
            rounded-2xl
            border
            border-white/10

            sm:mb-5
            sm:h-40
            sm:w-40
            sm:rounded-[22px]

            lg:hidden
          "
          style={{
            boxShadow: `0 25px 70px ${song.theme.primary}55`,
          }}
        >
          <Image
            src={song.image}
            alt={song.title}
            fill
            sizes="160px"
            className="object-cover"
          />
        </motion.div>

        {/* =================================================
            TEXT CONTENT
        ================================================== */}

        <div
          className="
            w-full
            max-w-162.5
            text-center

            lg:text-left
          "
        >
          {/* Made For You */}

          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-white/50

              sm:text-[10px]
              sm:tracking-[0.35em]
            "
          >
            Made For You
          </p>

          {/* Title */}

          <h1
            className="
              mt-2
              text-[34px]
              font-black
              leading-[0.92]
              tracking-tighter
              text-white

              sm:text-5xl

              lg:mt-4
              lg:text-8xl
            "
          >
            {song.title}
          </h1>

          {/* Artist / Genre */}

          <div
            className="
              mt-2
              flex
              items-center
              justify-center
              gap-1.5

              lg:mt-4
              lg:justify-start
              lg:gap-2
            "
          >
            <h2
              className="
                text-base
                font-bold
                text-white

                sm:text-lg

                lg:text-3xl
              "
            >
              {song.artist}
            </h2>

            <span className="text-white/30">
              •
            </span>

            <span
              className="
                text-xs
                text-white/50

                sm:text-sm

                lg:text-base
              "
            >
              {song.genre}
            </span>
          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-2
              max-w-130
              text-xs
              leading-5
              text-white/50

              sm:mt-3
              sm:text-sm
              sm:leading-6

              lg:mx-0
              lg:mt-5
              lg:text-lg
            "
          >
            Experience{" "}
            <span className="font-semibold text-white">
              {song.album}
            </span>{" "}
            by{" "}
            <span className="font-semibold text-white">
              {song.artist}
            </span>
            . Premium {song.genre} release.
          </p>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div
            className="
              mt-4
              flex
              justify-center
              gap-2

              sm:mt-5
              sm:gap-3

              lg:mt-7
              lg:justify-start
            "
          >
            {/* Play */}

            <button
              type="button"
              onClick={playShuffle}
              style={{
                backgroundColor: song.theme.primary,
              }}
              className="
                flex
                h-9
                items-center
                gap-1.5
                rounded-full
                px-4
                text-xs
                font-bold
                text-white
                transition
                duration-200
                hover:scale-105
                active:scale-95

                sm:h-10
                sm:px-5
                sm:text-sm

                lg:h-12
                lg:gap-2
                lg:px-7
              "
            >
              <Play
                size={15}
                fill="white"
              />

              Play
            </button>

            {/* Shuffle */}

            <button
              type="button"
              onClick={playShuffle}
              className="
                flex
                h-9
                items-center
                gap-1.5
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                text-xs
                font-bold
                text-white
                backdrop-blur-xl
                transition
                duration-200
                hover:bg-white/10
                active:scale-95

                sm:h-10
                sm:px-5
                sm:text-sm

                lg:h-12
                lg:gap-2
                lg:px-7
              "
            >
              <Shuffle size={15} />

              Shuffle
            </button>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div
            className="
              mt-4
              flex
              justify-center
              gap-7

              sm:mt-5
              sm:gap-8

              lg:mt-8
              lg:justify-start
              lg:gap-10
            "
          >
            <Stat
              value={song.streams}
              label="Streams"
            />

            <Stat
              value={song.featured ? "#1" : "NEW"}
              label="Trending"
            />

            <Stat
              value={song.year}
              label="Released"
            />
          </div>
        </div>

        {/* =================================================
            DESKTOP ARTWORK
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="
            relative
            hidden
            h-95
            w-95
            shrink-0

            lg:block

            xl:h-107.5
            xl:w-107.5
          "
        >
          <Image
            src={song.image}
            alt={song.title}
            fill
            sizes="430px"
            className="
              rounded-[36px]
              border
              border-white/10
              object-cover
              shadow-[0_40px_100px_rgba(0,0,0,0.5)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ==========================================================
   STAT COMPONENT
========================================================== */

function Stat({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="text-center">
      <h3
        className="
          text-xl
          font-black
          text-white

          sm:text-2xl

          lg:text-3xl
        "
      >
        {value}
      </h3>

      <p
        className="
          text-[8px]
          uppercase
          tracking-wide
          text-white/40

          sm:text-[9px]
        "
      >
        {label}
      </p>
    </div>
  );
}