"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";

import BottomPlayer from "@/app/components/player/BottomPlayer";

import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import PlayerHero from "@/app/components/now-playing/PlayerHero";
import PlaybackControls from "@/app/components/now-playing/PlaybackControls";
import Visualizer from "@/app/components/now-playing/Visualizer";
import LyricsPanel from "@/app/components/player/lyrics/LyricsPanel";
import QueuePanel from "@/app/components/now-playing/QueuePanel";
import DevicePanel from "@/app/components/now-playing/DevicePanel";

export default function NowPlayingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      {/* =========================================
          PAGE LAYOUT
      ========================================== */}

      <div className="flex min-h-screen">

        {/* =======================================
            SIDEBAR
        ======================================== */}

        <Sidebar />

        {/* =======================================
            MAIN CONTENT
        ======================================== */}

        <main className="relative flex-1 overflow-y-auto">

          {/* Animated background already gets
              its theme from ThemeProvider */}

          <AnimatedBackground />

          <div className="relative z-10">

            {/* =================================
                HEADER
            ================================== */}

            <Header />

            {/* =================================
                NOW PLAYING CONTENT
            ================================== */}

            <div className="space-y-12 px-8 pb-44 pt-8">

              {/* HERO */}

              <PlayerHero />

              {/* PLAYBACK CONTROLS */}

              <PlaybackControls />

              {/* AUDIO VISUALIZER */}

              <Visualizer />

              {/* =================================
                  NEXT-LEVEL LYRICS
              ================================== */}

              <LyricsPanel />

              {/* QUEUE */}

              <QueuePanel />

              {/* DEVICE */}

              <DevicePanel />

            </div>
          </div>
        </main>
      </div>

      {/* =========================================
          GLOBAL BOTTOM PLAYER

          BottomPlayer gets everything directly
          from AudioProvider.
      ========================================== */}

      <BottomPlayer />

    </main>
  );
}