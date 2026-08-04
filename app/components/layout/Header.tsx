"use client";

import {
  Bell,
  Settings,
  Mic,
} from "lucide-react";

import SearchBar from "../ui/SearchBar";
import IconButton from "../ui/IconButton";
import Avatar from "../ui/Avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-10 pt-8">

      <div className="flex items-center justify-between rounded-[32px] border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 shadow-[0_0_40px_rgba(239,68,68,.45)]">

            <span className="text-2xl font-black text-white">
              M
            </span>

          </div>

          <div>

            <h1 className="text-2xl font-black text-white">
              Music2030
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Next Generation Audio
            </p>

          </div>

        </div>

        {/* Search */}
        <div className="mx-12 flex-1 max-w-3xl">

          <SearchBar />

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          <IconButton
            icon={<Mic size={20} />}
          />

          <IconButton
            icon={<Bell size={20} />}
          />

          <IconButton
            icon={<Settings size={20} />}
          />

          <Avatar
            src="/covers/becalive.jpg"
          />

        </div>

      </div>

    </header>
  );
}