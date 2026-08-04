"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import CommandPalette from "./components/command/CommandPalette";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Hero from "./components/hero/Hero";

import QuickPicks from "./components/sections/QuickPicks";
import ListenAgain from "./components/sections/ListenAgain";
import NowPlaying from "./components/sections/NowPlaying";

import AnimatedBackground from "./components/effects/AnimatedBackground";

import BottomPlayer from "./components/player/BottomPlayer";
import ExpandedPlayer from "./components/player/ExpandedPlayer";
import MoodChips from "./components/sections/MoodChips";

import { usePlayer } from "./context/AudioProvider";

export default function Home() {
  console.log("Home rendered");

  const player = usePlayer();

  const {
    currentSong,
    isPlaying,
    togglePlay,
    playSong,
    nextSong,
    previousSong,
    seek,
    currentTime,
    duration,
    volume,
    setVolume,
    analyserRef,
    dataArrayRef,
  } = player;

  const [expanded, setExpanded] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  const progress = useMemo(() => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  }, [currentTime, duration]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setCommandOpen(true);
        return;
      }

      if (event.key === "Escape") {
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

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [togglePlay, nextSong, previousSong]);

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="relative flex-1 overflow-auto">
          <AnimatedBackground
            primary={currentSong.theme?.primary ?? "#7c3aed"}
            secondary={currentSong.theme?.secondary ?? "#2563eb"}
            accent={currentSong.theme?.accent ?? "#ffffff"}
          />

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

              <div className="space-y-12 px-12 py-10">

                <Hero song={currentSong} />

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

      {/* Shared Element Transition */}
      <LayoutGroup>
        <ExpandedPlayer
          open={expanded}
          song={currentSong}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          nextSong={nextSong}
          previousSong={previousSong}
          currentTime={currentTime}
          duration={duration}
          onSeek={seek}
          onClose={() => setExpanded(false)}
        />

        <BottomPlayer
          song={currentSong}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
          progress={progress}
          nextSong={nextSong}
          previousSong={previousSong}
          onSeek={seek}
          volume={volume}
          onVolumeChange={setVolume}
          currentTime={currentTime}
          duration={duration}
          analyserRef={analyserRef}
          dataArrayRef={dataArrayRef}
          isExpanded={expanded}
          onToggleExpanded={() =>
            setExpanded(!expanded)
          }
        />
      </LayoutGroup>
      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />


    </main>
  );
}