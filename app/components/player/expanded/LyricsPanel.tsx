"use client";

import { LyricsProvider } from "../lyrics/LyricsProvider";
import LyricsScroller from "../lyrics/LyricsScroller";

import { usePlayer } from "@/app/context/AudioProvider";


export default function LyricsPanel() {

  const {
    currentSong,
    currentTime,
  } = usePlayer();


  if (!currentSong) {
    return null;
  }


  console.log("CURRENT SONG:", currentSong.title);

  console.log(
    "CURRENT LYRICS:",
    currentSong.lyrics
  );


  return (

    <LyricsProvider>

      <div
        className="
          relative
          h-[720px]
          w-[520px]
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-[40px]
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-20
          "
          style={{
            background:
              `radial-gradient(
                circle at top,
                ${currentSong.theme.primary},
                transparent 70%
              )`
          }}
        />


        <div
          className="
            relative
            z-10
            border-b
            border-white/10
            px-8
            py-6
          "
        >

          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Lyrics
          </h2>


          <p
            className="
              mt-2
              text-zinc-400
            "
          >
            {currentSong.title}
            {" • "}
            {currentSong.artist}
          </p>


        </div>


        <LyricsScroller
          lyrics={currentSong.lyrics}
          currentTime={currentTime}
        />


      </div>


    </LyricsProvider>

  );
}