"use client";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  Maximize2,
  Mic2,
  MoreHorizontal,
  X,
  Sparkles,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

import { LyricsProvider } from "./LyricsProvider";
import LyricsScroller from "./LyricsScroller";


export default function LyricsPanel() {

  const {
    currentSong,
    currentTime,
  } = usePlayer();


  const [fullscreen, setFullscreen] =
    useState(false);


  useEffect(() => {

    if (!fullscreen) {
      return;
    }


    const handleKey = (
      event: KeyboardEvent
    ) => {

      if (
        event.key === "Escape"
      ) {
        setFullscreen(false);
      }

    };


    window.addEventListener(
      "keydown",
      handleKey
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );
    };


  }, [fullscreen]);



  if (!currentSong) {
    return null;
  }



  const primary =
    currentSong.theme?.primary ??
    "#8B5CF6";


  const secondary =
    currentSong.theme?.secondary ??
    "#2563EB";



  return (

    <LyricsProvider>

      <motion.div

        initial={{
          opacity:0,
          x:30,
        }}

        animate={{
          opacity:1,
          x:0,
        }}

        transition={{
          duration:0.6,
          ease:[
            0.22,
            1,
            0.36,
            1
          ],
        }}


        className={`
          relative
          overflow-hidden
          border
          border-white/[0.10]
          bg-[#080810]/80
          shadow-[0_30px_100px_rgba(0,0,0,0.55)]
          backdrop-blur-[45px]

          ${
            fullscreen
            ?
            `
            fixed
            inset-0
            z-[999]
            h-screen
            w-screen
            rounded-none
            `
            :
            `
            h-[720px]
            w-[520px]
            rounded-[36px]
            `
          }
        `}

      >


        {/* PRIMARY LIGHT */}

        <motion.div

          animate={{
            opacity:[
              0.15,
              0.3,
              0.15
            ],

            scale:[
              1,
              1.12,
              1
            ],
          }}

          transition={{
            duration:8,
            repeat:Infinity,
            ease:"easeInOut",
          }}

          className="
            pointer-events-none
            absolute
            -top-40
            left-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            blur-[120px]
          "

          style={{
            backgroundColor:primary,
          }}

        />



        {/* SECONDARY LIGHT */}

        <motion.div

          animate={{
            x:[
              -30,
              30,
              -30
            ],

            opacity:[
              0.05,
              0.15,
              0.05
            ],
          }}

          transition={{
            duration:12,
            repeat:Infinity,
            ease:"easeInOut",
          }}

          className="
            pointer-events-none
            absolute
            bottom-[-160px]
            left-[-100px]
            h-[350px]
            w-[350px]
            rounded-full
            blur-[110px]
          "

          style={{
            backgroundColor:secondary,
          }}

        />



        {/* HEADER */}

        <div
          className="
            relative
            z-40
            flex
            items-center
            justify-between
            border-b
            border-white/[0.08]
            bg-black/30
            px-7
            py-5
            backdrop-blur-xl
          "
        >


          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
              "
            >

              <Mic2
                size={18}
                style={{
                  color:primary,
                }}
              />

            </div>



            <div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >

                <h2
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Lyrics
                </h2>


                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-2
                    py-0.5
                    text-[9px]
                    uppercase
                    tracking-widest
                    text-white/40
                  "
                >
                  Live
                </span>

              </div>


              <p
                className="
                  text-xs
                  text-white/40
                "
              >
                {currentSong.title}
                {" • "}
                {currentSong.artist}
              </p>

            </div>


          </div>



          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <button
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-white/40
                hover:bg-white/10
              "
            >
              <MoreHorizontal size={18}/>
            </button>


            <button

              onClick={() =>
                setFullscreen(
                  value => !value
                )
              }

              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                text-white/40
                hover:bg-white/10
              "

            >

              {
                fullscreen
                ?
                <X size={18}/>
                :
                <Maximize2 size={17}/>
              }


            </button>


          </div>


        </div>




        {/* TIME STRIP */}

        <div
          className="
            relative
            z-30
            flex
            items-center
            justify-between
            px-7
            py-3
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-white/30
          "
        >

          <span
            className="
              flex
              items-center
              gap-2
            "
          >

            <Sparkles
              size={12}
              style={{
                color:primary
              }}
            />

            Synced Experience

          </span>


          <span>
            {formatTime(currentTime)}
          </span>


        </div>




        {/* LYRICS */}

        <div
          className="
            relative
            z-10
            h-[calc(100%-120px)]
          "
        >

          <LyricsScroller

            lyrics={
              currentSong.lyrics
            }

            currentTime={
              currentTime
            }

            color={
              primary
            }

          />

        </div>



      </motion.div>

    </LyricsProvider>

  );

}



function formatTime(
  seconds:number
){

  const min =
    Math.floor(
      seconds / 60
    );


  const sec =
    Math.floor(
      seconds % 60
    )
    .toString()
    .padStart(
      2,
      "0"
    );


  return `${min}:${sec}`;

}