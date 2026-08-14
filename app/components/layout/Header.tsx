"use client";

import {
  Bell,
  Cast,
} from "lucide-react";

import SearchBar from "../ui/SearchBar";
import IconButton from "../ui/IconButton";
import Avatar from "../ui/Avatar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-5 sm:px-8 lg:px-10">

      <div className="header-bar flex items-center justify-between gap-4">

        {/* Logo */}
        <div className="hidden items-center gap-3 xl:flex">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 shadow-[0_0_30px_rgba(239,68,68,.35)]">

            <span className="text-lg font-black text-white">
              M
            </span>

          </div>

          <div>

            <h1 className="text-lg font-black text-white">
              Music2030
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Next Generation Audio
            </p>

          </div>

        </div>

        {/* Search */}
        <div className="mx-auto flex-1 max-w-[550px]">

          <SearchBar />

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">

          <IconButton
            icon={<Cast size={18} />}
          />

          <IconButton
            icon={<Bell size={20} />}
          />

          <Avatar
            src="/covers/becalive.jpg"
          />

        </div>

      </div>

    </header>
  );
}
