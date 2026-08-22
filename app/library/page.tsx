"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";
import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import LibraryHero from "@/app/components/library/LibraryHero";
import LibraryTabs from "@/app/components/library/LibraryTabs";
import RecentlyAdded from "@/app/components/library/RecentlyAdded";
import DownloadsSection from "@/app/components/library/DownloadsSection";
import RecentlyPlayed from "@/app/components/library/RecentlyPlayed";

import { usePlayer } from "@/app/context/AudioProvider";

export default function LibraryPage() {
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

  const progress =
    duration === 0
      ? 0
      : (currentTime / duration) * 100;

  return (
    <main className="min-h-screen overflow-hidden bg-[#06070b] text-white">
      <div className="flex min-h-screen">
        <Sidebar activePage="Library" />

        <main className="relative flex-1 overflow-y-auto">
          <AnimatedBackground />

          <div className="relative z-10">
            <Header />

            <div className="space-y-12 px-8 pb-44 pt-8">
              <LibraryHero />

              <LibraryTabs />

              <RecentlyAdded
                onSelectSong={playSong}
              />

              <DownloadsSection
                onSelectSong={playSong}
              />

              <RecentlyPlayed
                onSelectSong={playSong}
              />
            </div>
          </div>
        </main>
      </div>

      <BottomPlayer />
    </main>
  );
}