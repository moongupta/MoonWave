"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  BadgeCheck,
  UserPlus,
} from "lucide-react";

const artists = [
  {
    name: "Michael Jackson",
    image: "/covers/mj.jpg",
    listeners: "31M",
  },
  {
    name: "The Weeknd",
    image: "/covers/weeknd.jpg",
    listeners: "27M",
  },
  {
    name: "Daft Punk",
    image: "/covers/daftpunk.jpg",
    listeners: "18M",
  },
  {
    name: "Hans Zimmer",
    image: "/covers/hans.jpg",
    listeners: "12M",
  },
  {
    name: "ODESZA",
    image: "/covers/odesza.jpg",
    listeners: "9M",
  },
];

export default function RelatedArtists() {
  return (
    <section className="space-y-8 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-3xl font-black text-white">
            Related Artists
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

      {/* Artist Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {artists.map((artist) => (
          <motion.div
            key={artist.name}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-[30px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl"
          >
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border border-white/10">
              <Image
                src={artist.image}
                alt={artist.name}
                fill
                sizes="144px"
                className="object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <h3 className="font-bold text-white">
                {artist.name}
              </h3>

              <BadgeCheck
                size={18}
                className="text-sky-400"
              />
            </div>

            <p className="mt-2 text-sm text-zinc-500">
              {artist.listeners} Monthly Listeners
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold transition hover:bg-white/10">
              <UserPlus size={16} />
              Follow
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}