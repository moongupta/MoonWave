"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  House,
  Compass,
  Library,
  Sparkles,
  ListMusic,
} from "lucide-react";

interface SidebarProps {
  activePage?: string;
}

const items = [
  {
    name: "Home",
    icon: House,
    href: "/",
  },
  {
    name: "Explore",
    icon: Compass,
    href: "/explore",
  },
  {
    name: "Library",
    icon: Library,
    href: "/library",
  },
  {
    name: "Playlists",
    icon: ListMusic,
    href: "/playlists",
  },
];

export default function Sidebar({
  activePage = "Home",
}: SidebarProps) {
  return (
    <aside className="sticky top-0 flex h-screen w-80 flex-col border-r border-white/10 bg-black/40 backdrop-blur-3xl">
      {/* Logo */}
      <div className="border-b border-white/10 p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 shadow-lg shadow-red-500/30">
            <Sparkles className="text-white" size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              Music2030
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Premium
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Navigation */}
        <nav className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
              >
                <motion.button
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative flex w-full items-center gap-4 rounded-2xl px-5 py-3 transition-all duration-300 ${activePage === item.name
                    ? "bg-linear-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30  shadow-xl"
                    : "text-zinc-400 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  {activePage === item.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 h-8 w-1 rounded-r-full bg-red-500"
                    />
                  )}

                  <Icon size={22} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </motion.button>
              </Link>
            );
          })}
        </nav>

        {/* Your Music */}
        <div className="mt-10">
          <p className="mb-3 px-5  font-bold uppercasetext-sm tracking-[0.25em] font-semibold text-zinc-500">
            Your Music
          </p>

          <div className="space-y-2">
            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              ❤️ Liked Songs
            </button>

            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              🕒 Recently Played
            </button>

            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              ⬇ Downloads
            </button>
          </div>
        </div>

        {/* Playlists */}
        <div className="mt-12">
          <p className="mb-3 px-5 font-bold uppercase text-sm tracking-[0.25em] font-semibold text-zinc-500">
            Playlists
          </p>

          <div className="space-y-2">
            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              🎵 BECALIVE
            </button>

            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              🌌 Future Vision
            </button>

            <button className="w-full rounded-xl p-3 text-left text-zinc-400 transition hover:bg-white/10 hover:text-white">
              💻 Coding Flow
            </button>
          </div>
        </div>
      </div>

      {/* Profile */}
      <div className="border-t border-white/10 p-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-white">
                Moon Gupta
              </p>

              <p className="text-sm text-emerald-400">
                ● Online
              </p>
            </div>

            <div className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
              Creator
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}