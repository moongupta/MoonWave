"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";
import AnimatedBackground from "@/app/components/effects/AnimatedBackground";
import { Song } from "../types/song";

import AlbumHero from "@/app/components/album/AlbumHero";
import TrackList from "@/app/components/album/TrackList";
import AlbumCredits from "@/app/components/album/AlbumCredits";
import LyricsPreview from "@/app/components/album/LyricsPreview";
import MoreLikeThis from "@/app/components/album/MoreLikeThis";

import { usePlayer } from "@/app/context/AudioProvider";

export default function AlbumPage() {
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
    duration === 0 ? 0 : (currentTime / duration) * 100;

  return (
    <main className="min-h-screen overflow-hidden bg-[#06070b] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="relative flex-1 overflow-y-auto">
          <AnimatedBackground
            primary="#7c3aed"
            secondary="#ef4444"
            accent="#ffffff"
          />

          <div className="relative z-10">
            <Header />

            <div className="space-y-12 px-8 pb-44 pt-8">
              <AlbumHero />

              <TrackList />

              <AlbumCredits />

              <LyricsPreview />

              <MoreLikeThis />
            </div>
          </div>
        </main>
      </div>

      <BottomPlayer
        Song={currentSong}
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
        isExpanded={false}
        onToggleExpanded={() => {}}
      />
    </main>
  );
}