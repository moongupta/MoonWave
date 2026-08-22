"use client";

import { useEffect, useMemo, useState } from "react";

import { songs } from "@/app/data/songs";
import { searchSongs } from "@/app/utils/searchSongs";
import type { Song } from "@/app/types/song";

export function useSearch() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(false);

  const [history, setHistory] = useState<string[]>([]);

  // ==========================================
  // Search Results
  // ==========================================

  const results: Song[] = useMemo(() => {
    return searchSongs(songs, query);
  }, [query]);

  // ==========================================
  // Open / Close
  // ==========================================

  const openSearch = () => {
    setOpen(true);
  };

  const closeSearch = () => {
    setOpen(false);
  };

  // ==========================================
  // Save Search History
  // ==========================================

  const saveHistory = (text: string) => {
    const value = text.trim();

    if (!value) return;

    setHistory((old) => [
      value,
      ...old.filter((item) => item !== value),
    ].slice(0, 10));
  };

  // ==========================================
  // Keyboard Shortcuts
  // ==========================================

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // Ctrl + K or Cmd + K
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }

      // Escape
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return {
    query,
    setQuery,

    open,
    openSearch,
    closeSearch,

    results,

    history,
    saveHistory,
  };
}