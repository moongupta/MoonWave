"use client";

import Artwork from "./Artwork";
import SongInfo from "./SongInfo";

export default function PlayerLeft() {
  return (
    <div className="flex w-[340px] items-center gap-5">

      <Artwork />

      <SongInfo />

    </div>
  );
}