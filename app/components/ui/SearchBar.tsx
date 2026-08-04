"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex h-14 w-full items-center rounded-full border border-white/10 bg-black/30 px-6 backdrop-blur-2xl transition-all duration-300 hover:border-red-500">

      <Search
        size={20}
        className="text-zinc-400"
      />

      <input
        placeholder="Search songs, artists, albums..."
        className="ml-4 flex-1 bg-transparent text-white placeholder:text-zinc-500 outline-none"
      />

      <kbd className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
        ⌘ K
      </kbd>

    </div>
  );
}