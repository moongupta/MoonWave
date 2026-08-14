"use client";

import {
  Globe,
  Music2,
  Calendar,
  Headphones,
  Users,
} from "lucide-react";

export default function AboutArtist() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black text-white">
          About
        </h2>

        <p className="mt-2 text-zinc-500">
          Artist biography and statistics
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        {/* Biography */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
          <h3 className="text-2xl font-bold text-white">
            Moon Gupta
          </h3>

          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Moon Gupta is building Music2030, combining cinematic
            storytelling, immersive visuals, and modern music production
            into one unified experience. The focus is on creating songs,
            albums, and interactive experiences that feel timeless while
            embracing the future of digital music.
          </p>

          <p className="mt-6 text-lg leading-9 text-zinc-300">
            Every release is designed with attention to production,
            interface, and visual identity, making Music2030 more than a
            streaming app—it is an ecosystem for music and creativity.
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-5">
          {[
            {
              icon: Users,
              label: "Monthly Listeners",
              value: "2.4M",
            },
            {
              icon: Headphones,
              label: "Total Streams",
              value: "148M",
            },
            {
              icon: Music2,
              label: "Genres",
              value: "Pop • Electronic",
            },
            {
              icon: Globe,
              label: "Country",
              value: "India",
            },
            {
              icon: Calendar,
              label: "Joined",
              value: "2026",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <item.icon
                  size={22}
                  className="text-red-400"
                />

                <div>
                  <p className="text-sm text-zinc-500">
                    {item.label}
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-white">
                    {item.value}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}