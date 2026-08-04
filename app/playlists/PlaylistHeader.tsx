"use client";

interface PlaylistHeaderProps {
  onCreate: () => void;
}

export default function PlaylistHeader({
  onCreate,
}: PlaylistHeaderProps) {
  return (
    <div className="mb-12 flex items-center justify-between">
      <div>
        <h1 className="text-5xl font-black text-white">
          Your Playlists
        </h1>

        <p className="mt-3 text-zinc-400">
          Organize your favorite music into beautiful collections.
        </p>
      </div>

      <button
        onClick={onCreate}
        className="rounded-2xl bg-red-500 px-8 py-4 text-lg font-bold text-white transition hover:scale-105 hover:bg-red-600"
      >
        + New Playlist
      </button>
    </div>
  );
}