"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-linear-to-r from-[#14101f] via-[#241533] to-[#3a1c33] px-12 py-16">

      {/* Left Content */}
      <div className="relative z-10 max-w-xl">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-400">
          Made For You
        </p>

        <h1 className="mt-5 text-6xl font-black leading-tight text-white">
          Your Evening
          <br />
          Soundtrack
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Based on your recent listening,
          we curated something you'll love.
        </p>

        <div className="mt-10 flex gap-5">

          <button className="rounded-full bg-red-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-red-600">
            ▶ Play Mix
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10">
            Shuffle
          </button>

        </div>

      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 h-full w-[45%]">

        <Image
          src="/covers/becalive.jpg"
          alt="BECALIVE"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#241533]" />

      </div>

    </section>
  );
}