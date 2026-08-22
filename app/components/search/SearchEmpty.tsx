"use client";

import { Search } from "lucide-react";

export default function SearchEmpty() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        px-8
        py-20
        text-center
      "
    >
      {/* Icon */}

      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
        "
      >
        <Search
          size={36}
          className="text-zinc-500"
        />
      </div>

      {/* Title */}

      <h2
        className="
          text-2xl
          font-bold
          text-white
        "
      >
        No Results Found
      </h2>

      {/* Description */}

      <p
        className="
          mt-3
          max-w-md
          text-sm
          leading-6
          text-zinc-500
        "
      >
        Try searching by song title,
        artist name, or album.
      </p>
    </div>
  );
}