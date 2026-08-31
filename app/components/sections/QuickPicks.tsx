"use client";

import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

import QuickPickCard from "@/app/components/cards/QuickPickCard";
import { usePlayer } from "@/app/context/AudioProvider";

interface Props {
  onSelectSong: (song: Song) => void;
}

const cards = [
  {
    title: "New Releases",
    subtitle: "Mix",
  },
  {
    title: "Bollywood",
    subtitle: "Hitlist",
  },
  {
    title: "Lo-Fi",
    subtitle: "Study",
  },
  {
    title: "Peak",
    subtitle: "Energy",
  },
  {
    title: "Chill",
    subtitle: "Acoustic",
  },
  {
    title: "Top 100",
    subtitle: "India",
  },
];

export default function QuickPicks({
  onSelectSong,
}: Props) {
  const {
    addToQueue,
    playNext,
  } = usePlayer();

  return (
    <section
      className="
        relative
        mt-2
        w-full
        space-y-6
        sm:space-y-7
      "
    >
      {/* =======================================================
          HEADER
      ======================================================= */}

      <div className="flex items-end justify-between gap-4">
        {/* Left */}

        <div>
          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.45,
            }}
            className="flex items-center gap-2"
          >
            <h2
              className="
                text-[1.75rem]
                font-black
                tracking-[-0.04em]
                text-white
                sm:text-[2rem]
              "
            >
              Quick picks
            </h2>

            <ChevronRight
              size={23}
              strokeWidth={2.2}
              className="mt-1 text-white/30"
            />
          </motion.div>

          <p
            className="
              mt-1
              text-xs
              text-white/35
              sm:text-sm
            "
          >
            Curated for your listening mood
          </p>
        </div>

        {/* View all */}

        <motion.button
          type="button"
          whileHover={{ x: 2 }}
          className="
            group
            hidden
            items-center
            gap-2
            pb-1
            text-xs
            font-semibold
            text-white/40
            transition
            hover:text-white
            sm:flex
            sm:text-sm
          "
        >
          View all

          <ArrowRight
            size={16}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </motion.button>
      </div>

      {/* =======================================================
          QUICK PICK ROW
      ======================================================= */}

      <div
        className="
          relative
          -mx-1
          overflow-hidden
        "
      >
        <div
          className="
            flex
            gap-4
            overflow-x-auto
            px-1
            pb-4
            scrollbar-none
            sm:gap-5
            lg:gap-6
          "
        >
          {cards.map((card, index) => {
            const song =
              songs[index % songs.length];

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.055,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                }}
                className="
                  w-[235px]
                  shrink-0
                  sm:w-[255px]
                  lg:w-[270px]
                  xl:w-[285px]
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[26px]
                    transition-all
                    duration-500
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                  "
                >
                  <QuickPickCard
                    song={song}
                    title={card.title}
                    subtitle={card.subtitle}
                    onClick={() =>
                      onSelectSong(song)
                    }
                    onAddToQueue={() =>
                      addToQueue(song)
                    }
                    onPlayNext={() =>
                      playNext(song)
                    }
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right fade */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            top-0
            hidden
            w-16
            bg-gradient-to-l
            from-black
            to-transparent
            lg:block
          "
        />
      </div>

      {/* Mobile View All */}

      <div className="flex justify-center sm:hidden">
        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-5
            py-2.5
            text-xs
            font-semibold
            text-white/45
            transition
            hover:border-white/15
            hover:text-white
          "
        >
          View all

          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}