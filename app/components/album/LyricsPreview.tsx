"use client";

import { motion } from "framer-motion";
import { Mic2, Sparkles } from "lucide-react";
import { songs } from "@/app/data/songs";

interface LyricsPreviewProps {
  title?: string;
}

export default function LyricsPreview({
  title = "Lyrics",
}: LyricsPreviewProps) {

  const currentSong = songs.find(
    (song) => song.id === "becalive"
  );

  const lyrics = currentSong?.lyrics || [];


  return (
    <motion.div

      initial={{
        opacity: 0,
        x: 30,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        delay: 0.25,
      }}

      className="
        w-[360px]
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-6
        backdrop-blur-2xl
      "

    >

      <div className="flex items-center gap-3">

        <Mic2
          size={18}
          className="text-red-400"
        />

        <h2
          className="
            text-lg
            font-bold
            text-white
          "
        >
          {title}
        </h2>

      </div>


      <div
        className="
          mt-6
          space-y-4
          max-h-[520px]
          overflow-y-auto
        "
      >

        {lyrics.map((line, index) => (

          <motion.p

            key={index}

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            transition={{
              delay:index * 0.02,
            }}

            className="
              text-lg
              leading-8
              text-zinc-300
            "

          >
            {line.text}

          </motion.p>

        ))}


      </div>


      <div
        className="
          mt-6
          flex
          items-center
          gap-2
          text-sm
          text-zinc-500
        "
      >

        <Sparkles size={15}/>

        Live lyrics powered by MoonWave

      </div>


    </motion.div>
  );
}