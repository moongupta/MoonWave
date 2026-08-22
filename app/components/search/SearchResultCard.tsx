"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

import type { Song } from "@/app/types/song";
import { usePlayer } from "@/app/context/AudioProvider";
import { useSearchContext } from "./SearchProvider";

interface Props {
  song: Song;
}

export default function SearchResultCard({
  song,
}: Props) {
  const { playSong } = usePlayer();

  const {
    closeSearch,
    saveHistory,
    setQuery,
  } = useSearchContext();

  const handleClick = async () => {
    saveHistory(song.title);
    setQuery("");
    closeSearch();

    await playSong(song);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="
        group
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        p-3
        text-left
        transition-all
        hover:bg-white/5
      "
    >
      {/* Artwork */}

      <Image
        src={song.image}
        alt={song.title}
        width={58}
        height={58}
        className="rounded-xl object-cover"
      />

      {/* Song Info */}

      <div className="min-w-0 flex-1">

        <h3 className="truncate text-base font-semibold text-white">
          {song.title}
        </h3>

        <p className="truncate text-sm text-zinc-400">
          {song.artist}
        </p>

      </div>

      {/* Album */}

      <span className="hidden text-sm text-zinc-500 md:block">
        {song.album}
      </span>

      {/* Play */}

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-white/10
          opacity-0
          transition-all
          group-hover:opacity-100
        "
      >
        <Play
          size={18}
          className="fill-white text-white"
        />
      </div>
    </motion.button>
  );
}