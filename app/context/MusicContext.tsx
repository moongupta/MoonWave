"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import type { Song } from "@/app/types/song";
import { songs } from "@/app/data/songs";

interface MusicContextType {
  currentSong: Song;
  setCurrentSong: (song: Song) => void;

  playing: boolean;
  setPlaying: (value: boolean) => void;
}

const MusicContext =
  createContext<MusicContextType | null>(null);

export function MusicProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentSong, setCurrentSong] =
    useState<Song>(songs[0]);

  const [playing, setPlaying] =
    useState(false);

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        playing,
        setPlaying,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error(
      "useMusic must be used inside MusicProvider"
    );
  }

  return context;
}