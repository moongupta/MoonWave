"use client";

import {
  Search,
  Bell,
  Cast,
} from "lucide-react";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-10 py-6 backdrop-blur-3xl">

      {/* Search */}
      <div className="mx-auto flex w-full max-w-3xl items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4">

        <Search
          size={22}
          className="text-zinc-400"
        />

        <input
          placeholder="Search songs, albums, artists..."
          className="ml-4 flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none"
        />

        <div className="rounded-lg bg-white/5 px-3 py-1 text-sm text-zinc-400">
          ⌘ K
        </div>

      </div>

      {/* Right */}
      <div className="ml-8 flex items-center gap-6">

        <Cast className="text-white" />

        <Bell className="text-white" />

        <img
          src="/covers/becalive.jpg"
          alt="Profile"
          className="h-12 w-12 rounded-full border-2 border-red-500 object-cover"
        />

      </div>

    </header>
  );
}