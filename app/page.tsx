"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Hero from "./components/hero/Hero";

import MoodChips from "./components/sections/MoodChips";
import QuickPicks from "./components/sections/QuickPicks";
import ListenAgain from "./components/sections/ListenAgain";
import NowPlaying from "./components/sections/NowPlaying";

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

  const [commandOpen, setCommandOpen] =
    useState(false);

  

  useEffect(() => {

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {

      const target =
        event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (
        (event.metaKey ||
          event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        setCommandOpen(true);

        return;
      }

      if (
        event.key === "Escape"
      ) {
        setCommandOpen(false);

        return;
      }

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

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [
    togglePlay,
    nextSong,
    previousSong,
  ]);

  return (
  <main className="app-shell min-h-screen overflow-hidden bg-black text-white">

    <div className="flex min-h-screen">

      <Sidebar />

      <main className="content-scroll relative flex-1 overflow-auto">

        {/* Background */}

        <AnimatedBackground />

        {/* Main Content */}

        <AnimatePresence mode="wait">

          <motion.div
            key={currentSong.id}
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
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="relative z-10"
          >

            <Header />

            <div
              className="
                home-content
                space-y-7
                px-5
                pb-44
                pt-5
                sm:px-8
                lg:px-10
                xl:px-11
              "
            >

              <Hero />

              <MoodChips />

              <QuickPicks
                onSelectSong={playSong}
              />

              <ListenAgain
                onSelectSong={playSong}
              />

              <NowPlaying
                song={currentSong}
                isPlaying={isPlaying}
              />

            </div>

          </motion.div>

        </AnimatePresence>

      </main>

    </div>
          {/* Bottom Player */}

      <BottomPlayer />

      {/* Search */}

      <SearchModal />

      {/* Command Palette */}

      <CommandPalette
        open={commandOpen}
        onClose={() =>
          setCommandOpen(false)
        }
      />

    </main>
  );
}

