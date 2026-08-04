"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import { songs } from "@/app/data/songs";
import CommandItem from "./CommandItem";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({
  open,
  onClose,
}: CommandPaletteProps) {
  const { playSong } = usePlayer();

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return songs;

    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(q) ||
        song.artist.toLowerCase().includes(q) ||
        song.album.toLowerCase().includes(q)
    );
  }, [query]);

  const closePalette = () => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  };

  const handlePlaySong = (index: number) => {
    const song = results[index];

    if (!song) return;

    playSong(song);
    closePalette();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePalette}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: -25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: -25,
            }}
            transition={{
              duration: 0.22,
            }}
            className="fixed left-1/2 top-24 z-[201] w-full max-w-2xl -translate-x-1/2 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-3xl"
          >
            <div className="flex items-center gap-4 border-b border-white/10 px-6 py-5">
              <Search
                size={20}
                className="text-zinc-500"
              />

              <input
                autoFocus
                value={query}
                placeholder="Search songs, artists, albums..."
                className="w-full bg-transparent text-lg outline-none placeholder:text-zinc-500"
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={(e) => {
                  switch (e.key) {
                    case "ArrowDown":
                      e.preventDefault();
                      setSelectedIndex((prev) =>
                        Math.min(prev + 1, results.length - 1)
                      );
                      break;

                    case "ArrowUp":
                      e.preventDefault();
                      setSelectedIndex((prev) =>
                        Math.max(prev - 1, 0)
                      );
                      break;

                    case "Enter":
                      e.preventDefault();
                      handlePlaySong(selectedIndex);
                      break;

                    case "Escape":
                      e.preventDefault();
                      closePalette();
                      break;
                  }
                }}
              />
            </div>

            <div className="max-h-[420px] overflow-y-auto p-3">
              {results.length ? (
                results.map((song, index) => (
                  <CommandItem
                    key={song.id}
                    song={song}
                    active={selectedIndex === index}
                    onClick={() =>
                      handlePlaySong(index)
                    }
                  />
                ))
              ) : (
                <div className="py-12 text-center text-zinc-500">
                  No songs found.
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}