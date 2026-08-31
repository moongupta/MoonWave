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
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-black

        min-h-[640px]

        lg:h-[560px]

        lg:rounded-[42px]
      "
        >


            {/* BACKGROUND */}

            <Image
                src={song.image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="
          object-cover
          scale-[1.8]
          opacity-20
          blur-[90px]
        "
            />


            <div
                className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/70
          via-black/80
          to-black

          lg:bg-gradient-to-r
          lg:from-black
          lg:via-black/70
          lg:to-black/20
        "
            />


            {/* GLOW */}

            <motion.div

                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}

                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}

                style={{
                    backgroundColor: `${song.theme.primary}44`
                }}

                className="
          absolute
          -top-40
          left-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          blur-[150px]
        "
            />



            {/* ARROWS */}

            <button
                onClick={previousSong}
                className="
          absolute
          left-3
          top-1/2
          z-40
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur-xl

          lg:left-8
        "
            >

                <ChevronLeft size={20} />

            </button>



            <button
                onClick={nextSong}
                className="
          absolute
          right-3
          top-1/2
          z-40
          flex
          h-10
          w-10
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/50
          text-white
          backdrop-blur-xl

          lg:right-8
        "
            >

                <ChevronRight size={20} />

            </button>



            {/* CONTENT */}

            <div
                className="
          relative
          z-20

          flex
          flex-col

          px-5
          pt-8
          pb-32

          sm:px-8


          lg:h-full
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-16
          lg:pb-0
        "
            >



                {/* MOBILE ARTWORK */}

                <motion.div

                    initial={{
                        opacity: 0,
                        scale: .9
                    }}

                    animate={{
                        opacity: 1,
                        scale: 1
                    }}

                    transition={{
                        duration: .6
                    }}

                    className="
            mx-auto
            mb-8

            h-[210px]
            w-[210px]

            overflow-hidden
            rounded-[30px]

            border
            border-white/10

            shadow-2xl

            lg:hidden
          "

                    style={{
                        boxShadow:
                            `0 40px 120px ${song.theme.primary}88`
                    }}
                >


                    <Image
                        src={song.image}
                        alt={song.title}
                        fill
                        className="object-cover"
                    />


                </motion.div>





                {/* LEFT TEXT */}


                <div
                    className="
            max-w-[650px]
          "
                >



                    <p
                        className="
              text-xs
              font-bold
              uppercase
              tracking-[0.35em]
              text-white/50
            "
                    >
                        MADE FOR YOU
                    </p>



                    <h1
                        className="
              mt-4

              text-[40px]
              font-black
              leading-none
              tracking-[-0.05em]

              text-white


              sm:text-5xl

              lg:text-8xl
            "
                    >

                        {song.title}

                    </h1>




                    <div
                        className="
              mt-3
              flex
              items-center
              gap-2
            "
                    >

                        <h2
                            className="
                text-lg
                font-bold
                text-white

                lg:text-3xl
              "
                        >
                            {song.artist}
                        </h2>


                        <span className="text-white/30">
                            •
                        </span>


                        <span className="text-sm text-white/50">
                            {song.genre}
                        </span>


                    </div>




                    <p
                        className="
              mt-5

              text-sm
              leading-6

              text-white/50

              lg:text-lg
            "
                    >

                        Experience{" "}

                        <span className="text-white font-semibold">
                            {song.album}
                        </span>

                        {" "}by{" "}

                        <span className="text-white font-semibold">
                            {song.artist}
                        </span>

                        . Premium {song.genre} release.

                    </p>




                    {/* BUTTONS */}


                    <div
                        className="
              mt-7
              flex
              gap-3
            "
                    >


                        <button
                            onClick={playShuffle}

                            style={{
                                backgroundColor:
                                    song.theme.primary
                            }}

                            className="
                flex
                h-11
                items-center
                gap-2
                rounded-full
                px-6
                text-sm
                font-bold
                text-white
              "
                        >

                            <Play
                                size={18}
                                fill="currentColor"
                            />

                            Play

                        </button>




                        <button

                            onClick={playShuffle}

                            className="
                flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                text-sm
                font-bold
                text-white
              "
                        >

                            <Shuffle size={18} />

                            Shuffle


                        </button>


                    </div>




                    {/* STATS */}


                    <div
                        className="
              mt-8
              flex
              gap-10
            "
                    >

                        <div>

                            <h3 className="text-3xl font-black text-white">
                                {song.streams}
                            </h3>

                            <p className="text-[10px] uppercase text-white/40">
                                Streams
                            </p>

                        </div>


                        <div>

                            <h3 className="text-3xl font-black text-white">
                                {song.featured ? "#1" : "NEW"}
                            </h3>

                            <p className="text-[10px] uppercase text-white/40">
                                Trending
                            </p>

                        </div>


                        <div>

                            <h3 className="text-3xl font-black text-white">
                                {song.year}
                            </h3>

                            <p className="text-[10px] uppercase text-white/40">
                                Released
                            </p>

                        </div>


                    </div>



                </div>





                {/* DESKTOP ARTWORK */}


                <div
                    className="
            hidden

            lg:block

            relative

            h-[430px]
            w-[430px]
          "
                >

                    <Image
                        src={song.image}
                        alt={song.title}

                        fill

                        className="
              rounded-[36px]
              object-cover

              border
              border-white/10
            "
                    />


                </div>



            </div>


        </section>

    );
}