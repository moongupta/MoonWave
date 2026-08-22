"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import { usePlayer } from "@/app/context/AudioProvider";

interface LyricLine {
  time: number;
  text: string;
}

interface LyricsContextType {
  lyrics: LyricLine[];
  activeIndex: number;
  currentTime: number;
  color: string;
}

const LyricsContext =
  createContext<LyricsContextType | null>(null);

interface LyricsProviderProps {
  children: ReactNode;
}

export function LyricsProvider({
  children,
}: LyricsProviderProps) {
  const {
    currentSong,
    currentTime,
  } = usePlayer();

  const lyrics =
    currentSong?.lyrics ?? [];

  const color =
    currentSong?.theme?.primary ??
    "#8B5CF6";

  const activeIndex = useMemo(() => {
    if (!lyrics.length) {
      return -1;
    }

    let index = 0;

    for (
      let i = 0;
      i < lyrics.length;
      i++
    ) {
      if (currentTime >= lyrics[i].time) {
        index = i;
      } else {
        break;
      }
    }

    return index;
  }, [lyrics, currentTime]);

  const value = useMemo(
    () => ({
      lyrics,
      activeIndex,
      currentTime,
      color,
    }),
    [
      lyrics,
      activeIndex,
      currentTime,
      color,
    ]
  );

  return (
    <LyricsContext.Provider value={value}>
      {children}
    </LyricsContext.Provider>
  );
}

export function useLyrics() {
  const context =
    useContext(LyricsContext);

  if (!context) {
    throw new Error(
      "useLyrics must be used inside LyricsProvider"
    );
  }

  return context;
}