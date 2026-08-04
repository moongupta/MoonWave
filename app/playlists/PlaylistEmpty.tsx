"use client";

import { Music2 } from "lucide-react";

export default function PlaylistEmpty() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <Music2
        size={70}
        className="mb-6 text-zinc-600"
      />

      <h2 className="text-3xl font-bold text-white">
        No Playlists Yet
      </h2>

      <p className="mt-4 text-zinc-400">
        Create your first playlist and start organizing your music.
      </p>
    </div>
  );
}