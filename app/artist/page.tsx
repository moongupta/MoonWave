"use client";

import Sidebar from "@/app/components/layout/Sidebar";
import Header from "@/app/components/layout/Header";
import BottomPlayer from "@/app/components/player/BottomPlayer";

import ArtistHero from "@/app/components/artist/ArtistHero";
import PopularSongs from "@/app/components/artist/PopularSongs";
import AlbumsGrid from "../components/artist/AlbumGrid";
import SinglesGrid from "@/app/components/artist/SinglesGrid";
import AboutArtist from "@/app/components/artist/AboutArtist";
import RelatedArtists from "@/app/components/artist/RelatedArtists";

import AnimatedBackground from "@/app/components/effects/AnimatedBackground";

import { usePlayer } from "@/app/context/AudioProvider";

export default function ArtistPage() {
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
        playSong,
    } = usePlayer();

const progress =
  duration > 0
    ? (currentTime / duration) * 100
    : 0;
    return (
        <div className="relative flex h-screen overflow-hidden bg-[#07070a] text-white">
            <AnimatedBackground
                primary="#7c3aed"
                secondary="#ef4444"
                accent="#ffffff"
            />

            <Sidebar />

            <main className="relative z-10 flex flex-1 flex-col overflow-hidden">
                <Header />

                <div className="flex-1 overflow-y-auto px-8 pb-44 pt-8 space-y-12">

                    <ArtistHero />

                    <PopularSongs onSelectSong={playSong} />

                    <AlbumsGrid />

                    <SinglesGrid />

                    <AboutArtist />

                    <RelatedArtists />

                </div>
            </main>

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
                onToggleExpanded={() => { }}
            />
        </div>
    );
}