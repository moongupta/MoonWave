"use client";

import type { Song } from "@/app/types/song";

interface Props {
  song: Song;
  isPlaying: boolean;
}

export default function NowPlaying({ song, isPlaying }: Props) {
  void song;
  void isPlaying;

  return null;
}