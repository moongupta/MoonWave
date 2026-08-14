"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, BadgeCheck } from "lucide-react";

const artists = [
  {
    name: "Moon Gupta",
    image: "/covers/becalive.jpg",
    followers: "2.4M Followers",
  },
  {
    name: "Michael Jackson",
    image: "/covers/humannature.jpg",
    followers: "31M Followers",
  },
  {
    name: "The Weeknd",
    image: "/covers/infinity.jpg",
    followers: "18M Followers",
  },
  {
    name: "Daft Punk",
    image: "/covers/neonnights.jpg",
    followers: "12M Followers",
  },
  {
    name: "Hans Zimmer",
    image: "/covers/infinite.jpg",
    followers: "9M Followers",
  },
  {
    name: "ODESZA",
    image: "/covers/becalive.jpg",
    followers: "6M Followers",
  },
];

export default function ArtistRow() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Popular Artists
          </h2>

          <ChevronRight
            size={24}
            className="text-zinc-500"
          />
        </div>

        <button className="text-sm font-semibold text-zinc-400 transition hover:text-white">
          View All
        </button>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-3">
        {artists.map((artist) => (
          <motion.div
            key={artist.name}
            whileHover={{
              y: -8,
              scale: 1.04,
            }}
            className="min-w-[180px] cursor-pointer text-center"
          >
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)]">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              <h3 className="font-bold text-white">
                {artist.name}
              </h3>

              <BadgeCheck
                size={18}
                className="text-sky-400"
              />
            </div>

            <p className="mt-2 text-sm text-zinc-500">
              {artist.followers}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}