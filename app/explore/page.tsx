"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";

import ExploreHero from "../components/explore/ExploreHero";
import TrendingSection from "../components/explore/TrendingSection";
import NewReleaseSection from "../components/explore/NewReleaseSection";
import ArtistRow from "../components/explore/ArtistRow";
import GenreGrid from "../components/explore/GenreGrid";

import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import { usePlayer } from "@/app/context/AudioProvider";

export default function ExplorePage() {
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
        <Sidebar />

        <main className="relative flex-1 overflow-y-auto">
          <AnimatedBackground />

          <div className="relative z-10">
            <Header />

            <div className="space-y-12 px-8 pb-44 pt-8">
              <ExploreHero />

              <TrendingSection
                onSelectSong={playSong}
              />

              <NewReleaseSection
                onSelectSong={playSong}
              />

              <ArtistRow />

              <GenreGrid />
            </div>
          </div>
        </main>
      </div>

      <BottomPlayer/>
    </main>
  );
}