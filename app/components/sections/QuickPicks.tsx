"use client";

import { songs } from "../../data/songs";
import type { Song } from "../../types/song";
import MusicCard from "../cards/MusicCard";
import SectionTitle from "../ui/SectionTitle";

interface QuickPicksProps {
  onSelectSong: (song: Song) => void;
}

export default function QuickPicks({
  onSelectSong,
}: QuickPicksProps) {
  return (
    <section className="mt-12">
      <SectionTitle
        title="Quick Picks"
        subtitle="Jump back into your favorite music."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {songs.map((song) => (
          <MusicCard
            key={song.id}
            song={song}
            onClick={() => onSelectSong(song)}
          />
        ))}
      </div>
    </section>
  );
}