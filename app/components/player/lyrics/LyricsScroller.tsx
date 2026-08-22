"use client";

import {
  useEffect,
  useMemo,
  useRef,
} from "react";

import { motion } from "framer-motion";

import LyricsLine, {
  type LyricsFontSize,
} from "./LyricsLine";


interface LyricLine {
  time: number;
  text: string;
}


interface LyricsScrollerProps {
  lyrics: LyricLine[];
  currentTime: number;
  color?: string;
  fontSize?: LyricsFontSize;
}


export default function LyricsScroller({
  lyrics,
  currentTime,
  color = "#8B5CF6",
  fontSize = "medium",
}: LyricsScrollerProps) {


  const containerRef =
    useRef<HTMLDivElement>(null);


  const lineRefs =
    useRef<(HTMLDivElement | null)[]>([]);



  const activeIndex = useMemo(() => {

    if (!lyrics?.length) {
      return -1;
    }


    let index = 0;


    for (
      let i = 0;
      i < lyrics.length;
      i++
    ) {

      if (
        currentTime >= lyrics[i].time
      ) {
        index = i;
      } else {
        break;
      }

    }


    return index;


  }, [
    lyrics,
    currentTime,
  ]);



  useEffect(() => {

    if (
      activeIndex < 0
    ) {
      return;
    }


    const container =
      containerRef.current;


    const activeLine =
      lineRefs.current[activeIndex];


    if (
      !container ||
      !activeLine
    ) {
      return;
    }



    const center =
      container.clientHeight / 2;



    const linePosition =
      activeLine.offsetTop +
      activeLine.offsetHeight / 2;



    const target =
      linePosition - center;



    container.scrollTo({

      top:
        Math.max(
          0,
          target
        ),

      behavior:
        "smooth",

    });



  }, [
    activeIndex,
  ]);



  if (!lyrics?.length) {

    return (

      <div
        className="
          flex
          h-full
          items-center
          justify-center
        "
      >

        <p
          className="
            text-zinc-500
          "
        >
          No lyrics available
        </p>


      </div>

    );

  }



  return (

    <div
      className="
        relative
        h-full
        overflow-hidden
      "
    >


      {/* Ambient glow */}

      <motion.div

        animate={{
          opacity:[
            0.05,
            0.12,
            0.05
          ],

          scale:[
            1,
            1.08,
            1
          ],
        }}

        transition={{
          duration:7,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[120px]
        "

        style={{
          backgroundColor:color,
        }}

      />



      {/* Top fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-44
          bg-gradient-to-b
          from-[#080810]
          via-[#080810]/80
          to-transparent
        "
      />



      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-44
          bg-gradient-to-t
          from-[#080810]
          via-[#080810]/80
          to-transparent
        "
      />



      <div

        ref={containerRef}

        className="
          relative
          z-10
          h-full
          overflow-y-auto
          px-5
          py-[300px]
          scrollbar-none
        "

        style={{
          scrollbarWidth:"none",
          msOverflowStyle:"none",
        }}

      >


        <div
          className="
            flex
            flex-col
            gap-10
          "
        >


          {lyrics.map(
            (
              line,
              index
            ) => {


              const active =
                index === activeIndex;


              const passed =
                index < activeIndex;



              return (

                <motion.div

                  key={
                    `${line.time}-${index}`
                  }


                  ref={
                    (element)=>{
                      lineRefs.current[index]
                        = element;
                    }
                  }


                  animate={{

                    opacity:
                      active
                        ? 1
                        : passed
                        ? 0.7
                        : 0.35,

                  }}


                  transition={{
                    duration:0.5,
                  }}


                  className="
                    flex
                    min-h-[70px]
                    items-center
                    justify-center
                  "

                >


                  <LyricsLine

                    text={line.text}

                    active={active}

                    passed={passed}

                    color={color}

                    fontSize={fontSize}

                  />


                </motion.div>

              );


            }
          )}


        </div>


      </div>


    </div>

  );

}