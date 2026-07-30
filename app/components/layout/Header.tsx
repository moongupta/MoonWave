"use client";

import { Bell, Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-3xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Search */}
        <div className="relative w-[520px]">
          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search songs, artists, albums..."
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              py-4
              pl-14
              pr-5
              text-white
              outline-none
              backdrop-blur-xl
              transition-all
              duration-300
              placeholder:text-zinc-500
              focus:border-red-500
              focus:bg-white/10
            "
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
            <Bell size={20} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
            <Settings size={20} />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 font-bold text-white">
              M
            </div>

            <div>
              <p className="font-semibold text-white">
                Moon Gupta
              </p>

              <p className="text-xs text-zinc-500">
                Premium
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}