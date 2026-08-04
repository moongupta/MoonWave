"use client";

import Image from "next/image";
import { usePlayer } from "../context/AudioProvider";
import { songs } from "../data/songs";
import MusicCard from "../components/cards/MusicCard";

export default function ExplorePage() {
  const { playSong } = usePlayer();

  const genres = [
    "Pop",
    "Hip-Hop",
    "Electronic",
    "Lo-Fi",
    "Rock",
    "Classical",
  ];

  const artists = [
    {
      name: "Moon Gupta",
      image: "/covers/becalive.jpg",
    },
    {
      name: "Future Vision",
      image: "/covers/futurevision.jpg",
    },
    {
      name: "Human Nature",
      image: "/covers/humannature.jpg",
    },
    {
      name: "Infinite",
      image: "/covers/infinite.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen px-10 pb-10 pt-16">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20 blur-3xl" />

      {/* Title */}
      <h1 className="mb-10 text-5xl font-black text-white">
        Explore
      </h1>

      {/* Hero */}
      <section className="rounded-4xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 p-12">
        <h2 className="max-w-4xl text-5xl font-black text-white lg:text-6xl">
          Discover Your Next Favorite Song
        </h2>

        <p className="mt-4 text-xl text-white/80">
          Trending • New Releases • AI Recommendations
        </p>
      </section>

      {/* Trending */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {songs.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              onClick={() => playSong(song)}
            />
          ))}
        </div>
      </section>

      {/* Genres */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Browse Genres
        </h2>

        <div className="flex flex-wrap gap-4">
          {genres.map((genre) => (
            <button
              key={genre}
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-red-500 hover:bg-red-500/20"
            >
              {genre}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Albums */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Featured Albums
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {songs.slice(0, 2).map((song) => (
            <div
              key={song.id}
              className="group relative h-72 overflow-hidden rounded-4xl border border-white/10"
            >
              <Image
                src={song.image}
                alt={song.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm uppercase tracking-widest text-zinc-300">
                  Featured Album
                </p>

                <h3 className="mt-2 text-4xl font-black text-white">
                  {song.album}
                </h3>

                <p className="mt-2 text-zinc-300">
                  {song.artist}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Made For You */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Made For You
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {songs.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              onClick={() => playSong(song)}
            />
          ))}
        </div>
      </section>

      {/* Trending Artists */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Trending Artists
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="flex-shrink-0 text-center"
            >
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-4 text-lg font-bold text-white">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Played */}
      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Recently Played
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {songs.map((song) => (
            <MusicCard
              key={song.id}
              song={song}
              onClick={() => playSong(song)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}