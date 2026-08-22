"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  ListPlus,
  Play,
  Plus,
} from "lucide-react";
import { useState } from "react";

import type { Song } from "@/app/types/song";

interface Props {
  song: Song;
  title: string;
  subtitle: string;
  onClick: () => void;
  onAddToQueue?: () => void;
  onPlayNext?: () => void;
}

export default function QuickPickCard({
  song,
  title,
  subtitle,
  onClick,
  onAddToQueue,
  onPlayNext,
}: Props) {
  const [added, setAdded] = useState(false);

  const handleAddToQueue = () => {
    onAddToQueue?.();
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1200);
  };

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.28,
        ease: "easeOut",
      }}
      className="
        group
        relative
        h-[185px]
        w-[285px]
        flex-shrink-0
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-zinc-900
        text-left
        shadow-[0_35px_90px_rgba(0,0,0,0.45)]
      "
    >
      {/* Background */}

      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0"
      >
        <Image
          src={song.image}
          alt={song.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-red-500/10" />

      {/* Main card play area */}

      <button
        type="button"
        onClick={onClick}
        className="absolute inset-0 z-10"
        aria-label={`Play ${song.title}`}
      />

      {/* Text */}

      <div className="pointer-events-none absolute bottom-6 left-6 z-20">
        <h3 className="text-[42px] font-black leading-[0.9] tracking-[-0.04em] text-white">
          {title}
        </h3>

        <p className="mt-2 text-[22px] font-semibold text-white/90">
          {subtitle}
        </p>
      </div>

      {/* Actions */}

      <div
        className="
          absolute
          bottom-6
          right-6
          z-30
          flex
          items-center
          gap-2
          opacity-0
          transition-opacity
          duration-200
          group-hover:opacity-100
        "
      >
        {/* Play Next */}

        {onPlayNext && (
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={(event) => {
              event.stopPropagation();
              onPlayNext();
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-black/60
              text-white
              backdrop-blur-xl
              hover:bg-white/15
            "
            title="Play next"
            aria-label={`Play ${song.title} next`}
          >
            <ListPlus size={19} />
          </motion.button>
        )}

        {/* Add to Queue */}

        {onAddToQueue && (
          <motion.button
            type="button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={(event) => {
              event.stopPropagation();
              handleAddToQueue();
            }}
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              backdrop-blur-xl
              transition-all
              ${
                added
                  ? "border-green-400/40 bg-green-500/20 text-green-300"
                  : "border-white/15 bg-black/60 text-white hover:bg-white/15"
              }
            `}
            title={
              added
                ? "Added to queue"
                : "Add to queue"
            }
            aria-label={
              added
                ? `${song.title} added to queue`
                : `Add ${song.title} to queue`
            }
          >
            {added ? (
              <Check size={20} />
            ) : (
              <Plus size={20} />
            )}
          </motion.button>
        )}

        {/* Play */}

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-2xl
          "
          title="Play"
          aria-label={`Play ${song.title}`}
        >
          <Play
            size={22}
            fill="currentColor"
          />
        </motion.button>
      </div>

      {/* Border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[30px]
          ring-1
          ring-white/5
          transition
          group-hover:ring-white/15
        "
      />
    </motion.div>
  );
}