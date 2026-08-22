"use client";

import PlaylistCard from "./PlaylistCard";

import type { Playlist } from "../types/playlist";


interface PlaylistGridProps {

  playlists: Playlist[];

}



export default function PlaylistGrid({
  playlists,
}: PlaylistGridProps) {


  return (

    <div
      className="
        grid
        grid-cols-4
        gap-8
      "
    >

      {playlists.map(
        (playlist) => (

          <PlaylistCard

            key={
              playlist.id
            }


            id={
              playlist.id
            }


            name={
              playlist.title
            }


            songs={
              playlist.songs.length
            }

          />

        )
      )}

    </div>

  );

}