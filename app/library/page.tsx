"use client";

import { useState } from "react";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";
import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import LibraryHero from "@/app/components/library/LibraryHero";
import LibraryTabs, {
  type LibraryTab,
} from "@/app/components/library/LibraryTabs";
import LikedSongs from "@/app/components/library/LikedSongs";
import RecentlyAdded from "@/app/components/library/RecentlyAdded";
import DownloadsSection from "@/app/components/library/DownloadsSection";
import RecentlyPlayed from "@/app/components/library/RecentlyPlayed";

import { usePlayer } from "@/app/context/AudioProvider";

export default function LibraryPage() {
  const { playSong } = usePlayer();

  const [activeTab, setActiveTab] = useState<LibraryTab>("All");

  return (
    <main className="min-h-screen overflow-hidden bg-[#06070b] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar activePage="Library" />

        {/* Main Content */}
        <main className="relative flex-1 overflow-y-auto">
          <AnimatedBackground />

          <div className="relative z-10">
            {/* Header */}
            <Header />

            {/* Library Content */}
            <div className="space-y-12 px-8 pb-44 pt-8">
              {/* Library Hero */}
              <LibraryHero />

              {/* Library Tabs */}
              <LibraryTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {/* All */}
              {activeTab === "All" && (
                <>
                  <LikedSongs onSelectSong={playSong} />

                  <RecentlyAdded
                    onSelectSong={playSong}
                  />

                  <DownloadsSection
                    onSelectSong={playSong}
                  />

                  <RecentlyPlayed
                    onSelectSong={playSong}
                  />
                </>
              )}

              {/* Songs */}
              {activeTab === "Songs" && (
                <RecentlyAdded
                  onSelectSong={playSong}
                />
              )}

              {/* Albums */}
              {activeTab === "Albums" && (
                <RecentlyAdded
                  onSelectSong={playSong}
                />
              )}

              {/* Artists */}
              {activeTab === "Artists" && (
                <RecentlyPlayed
                  onSelectSong={playSong}
                />
              )}

              {/* Playlists */}
              {activeTab === "Playlists" && (
                <RecentlyPlayed
                  onSelectSong={playSong}
                />
              )}

              {/* Downloads */}
              {activeTab === "Downloads" && (
                <DownloadsSection
                  onSelectSong={playSong}
                />
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Fixed Player */}
      <BottomPlayer />
    </main>
  );
}