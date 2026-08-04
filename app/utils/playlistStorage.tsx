import type { Playlist } from "../types/playlist";

const STORAGE_KEY = "music2030-playlists";

export function loadPlaylists(): Playlist[] {
  if (typeof window === "undefined") {
    return [];
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function savePlaylists(
  playlists: Playlist[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(playlists)
  );
}