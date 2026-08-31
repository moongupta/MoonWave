"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Hero from "./components/hero/Hero";

import MoodChips from "./components/sections/MoodChips";
import QuickPicks from "./components/sections/QuickPicks";
import ListenAgain from "./components/sections/ListenAgain";
import NowPlaying from "./components/sections/NowPlaying";
import NewReleases from "./components/sections/NewReleases";

import AnimatedBackground from "./components/effects/AnimatedBackground";

import BottomPlayer from "./components/player/BottomPlayer";

import SearchModal from "./components/search/SearchModal";
import CommandPalette from "./components/command/CommandPalette";

import { usePlayer } from "./context/AudioProvider";

export default function Home() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    nextSong,
    previousSong,
  } = usePlayer();

  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      // Don't trigger shortcuts while typing
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      // Command palette: Cmd/Ctrl + K
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setCommandOpen(true);
        return;
      }

      // Escape
      if (event.key === "Escape") {
        setCommandOpen(false);
        return;
      }

      // Player keyboard controls
      switch (event.code) {
        case "Space":
          event.preventDefault();
          togglePlay();
          break;

        case "ArrowRight":
          nextSong();
          break;

        case "ArrowLeft":
          previousSong();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlay, nextSong, previousSong]);

  return (
    <main className="app-shell min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="flex min-h-screen w-full">
        {/* SIDEBAR */}
        <div className="hidden w-72 shrink-0 lg:block">
          <Sidebar />
        </div>

        {/* CONTENT */}
        <div className="relative min-w-0 flex-1 overflow-y-auto overflow-x-hidden">
          {/* Animated background */}
          <AnimatedBackground />

          {/* Main animated content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="relative z-10 w-full"
          >
            {/* HEADER */}
            <Header />

            {/* HOME CONTENT */}
            <div
              className="
                home-content
                w-full
                space-y-6
                px-4
                pt-5
                pb-56
                sm:px-6
                lg:px-10
                xl:px-12
              "
            >
              {/* HERO */}
              <Hero />

              {/* MOOD CHIPS */}
              <MoodChips />

              {/* QUICK PICKS */}
              <QuickPicks onSelectSong={playSong} />

              {/* LISTEN AGAIN */}
              <ListenAgain onSelectSong={playSong} />

              {/* NEW RELEASES */}
              <NewReleases onSelectSong={playSong} />

              {/* NOW PLAYING */}
              <NowPlaying
                song={currentSong}
                isPlaying={isPlaying}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FIXED PLAYER */}
      <BottomPlayer />

      {/* SEARCH */}
      <SearchModal />

      {/* COMMAND PALETTE */}
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </main>
  );
}