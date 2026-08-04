"use client";

import React, {
  createContext,
  useContext,
} from "react";

import { useAudioPlayer } from "../hooks/useAudioPlayer";

type PlayerContextType =
  ReturnType<typeof useAudioPlayer>;

const AudioContext =
  createContext<PlayerContextType | null>(
    null
  );

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const player = useAudioPlayer();

  return (
    <AudioContext.Provider value={player}>
      {children}
    </AudioContext.Provider>
  );
}


export function usePlayer() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error(
      "usePlayer must be used inside AudioProvider."
    );
  }

  return context;
}
