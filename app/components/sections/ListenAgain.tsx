"use client";

import { songs } from "../../data/songs";
import type { Song } from "../../types/song";
import MusicCard from "../cards/MusicCard";
import SectionTitle from "../ui/SectionTitle";

interface ListenAgainProps {
  onSelectSong: (song: Song) => void;
}

export default function ListenAgain({
  onSelectSong,
}: ListenAgainProps) {
  return (
    <section className="mt-16">
      <SectionTitle
        title="Listen Again"
        subtitle="Continue where you left off."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {songs.map((song) => (
          <MusicCard
            key={`listen-${song.id}`}
            song={song}
            onClick={() => onSelectSong(song)}
          />
        ))}
      </div>
    </section>
  );
}