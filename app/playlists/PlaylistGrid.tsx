"use client";

import PlaylistCard from "./PlaylistCard";

interface Playlist {
  id: number;
  name: string;
  songs: number;
}

interface PlaylistGridProps {
  playlists: Playlist[];
}

export default function PlaylistGrid({
  playlists,
}: PlaylistGridProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {playlists.map((playlist) => (
        <PlaylistCard
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
        />
      ))}
    </div>
  );
}