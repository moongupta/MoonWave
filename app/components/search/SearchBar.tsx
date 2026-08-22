"use client";

import { Search } from "lucide-react";
import { useSearchContext } from "./SearchProvider";

export default function SearchBar() {
  const {
    query,
    setQuery,
    openSearch,
  } = useSearchContext();

  return (
    <button
      onClick={()=>{
        console.log("Search Clicked");
        openSearch();
      }}
      className="
        group
        flex
        h-12
        w-full
        max-w-md
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/5
        px-4
        backdrop-blur-2xl
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/10
      "
    >
      {/* Left */}

      <div className="flex items-center gap-3">

        <Search
          size={18}
          className="text-zinc-400"
        />

        <span
          className={`text-sm ${
            query
              ? "text-white"
              : "text-zinc-500"
          }`}
        >
          {query || "Search songs, artists, albums..."}
        </span>

      </div>

      {/* Shortcut */}

      <div
        className="
          rounded-lg
          border
          border-white/10
          bg-white/5
          px-2
          py-1
          text-[11px]
          text-zinc-400
        "
      >
        Ctrl K
      </div>
    </button>
  );
}