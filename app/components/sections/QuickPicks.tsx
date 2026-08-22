"use client";

import { ChevronRight } from "lucide-react";

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
  const { addToQueue, playNext } = usePlayer();

  return (
    <section className="mt-14 space-y-10">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-[2rem] font-black tracking-tight text-white">
            Quick picks
          </h2>

          <ChevronRight
            size={26}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-500 transition hover:text-white">
          View all →
        </button>
      </div>

      {/* Cards */}

      <div className="flex gap-7 overflow-x-auto pb-3">
        {cards.map((card, index) => {
          const song = songs[index % songs.length];

          return (
            <QuickPickCard
              key={card.title}
              song={song}
              title={card.title}
              subtitle={card.subtitle}
              onClick={() => onSelectSong(song)}
              onAddToQueue={() => addToQueue(song)}
              onPlayNext={() => playNext(song)}
            />
          );
        })}
      </div>
    </section>
  );
}