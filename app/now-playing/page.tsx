"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";
import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import PlayerHero from "@/app/components/now-playing/PlayerHero";
import PlaybackControls from "@/app/components/now-playing/PlaybackControls";
import Visualizer from "@/app/components/now-playing/Visualizer";
import LyricsPanel from "@/app/components/now-playing/LyricsPanel";
import QueuePanel from "@/app/components/now-playing/QueuePanel";
import DevicePanel from "@/app/components/now-playing/DevicePanel";

import { usePlayer } from "@/app/context/AudioProvider";

export default function NowPlayingPage() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    nextSong,
    previousSong,
    seek,
    volume,
    setVolume,
    currentTime,
    duration,
    analyserRef,
    dataArrayRef,
  } = usePlayer();

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="relative flex-1 overflow-y-auto">
          <AnimatedBackground
            primary="#ff2d55"
            secondary="#7c3aed"
            accent="#ffffff"
          />

          <div className="relative z-10">
            <Header />

            <div className="space-y-12 px-8 pb-44 pt-8">

              <PlayerHero />

              <PlaybackControls />

              <Visualizer />

              <LyricsPanel />

              <QueuePanel />

              <DevicePanel />

            </div>
          </div>
        </main>
      </div>

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
        isExpanded={false}
        onToggleExpanded={() => {}}
      />
    </main>
  );
}