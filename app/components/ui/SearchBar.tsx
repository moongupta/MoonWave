"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex h-11 w-full items-center rounded-xl border border-white/10 bg-white/[0.06] px-4 shadow-[0_8px_30px_rgba(0,0,0,.16)] backdrop-blur-2xl transition-all duration-300 focus-within:border-white/25 hover:border-white/20">

      <Search
        size={20}
        className="text-zinc-400"
      />

      <input
        placeholder="Search songs, artists, albums..."
        className="ml-3 flex-1 bg-transparent text-sm text-white placeholder:text-zinc-400 outline-none"
      />

      <kbd className="hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-400 sm:block">
        ⌘ K
      </kbd>

    </div>
  );
}
