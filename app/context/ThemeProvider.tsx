"use client";

import {
  createContext,
  useContext,
  useMemo,
} from "react";

import { usePlayer } from "./AudioProvider";

interface Theme {
  primary: string;
  secondary: string;
  accent: string;
}

const ThemeContext =
  createContext<Theme>({
    primary: "#7c3aed",
    secondary: "#2563eb",
    accent: "#ffffff",
  });

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentSong } = usePlayer();

  const value = useMemo(
    () => ({
      primary: currentSong.theme.primary,
      secondary: currentSong.theme.secondary,
      accent: currentSong.theme.accent,
    }),
    [currentSong]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}