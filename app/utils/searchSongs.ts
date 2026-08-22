import type { Song } from "@/app/types/song";

export function searchSongs(
  songs: Song[],
  query: string
): Song[] {
  const search = query.trim().toLowerCase();

  if (!search) {
    return songs;
  }

  return songs.filter((song) => {
    return (
      song.title.toLowerCase().includes(search) ||
      song.artist.toLowerCase().includes(search) ||
      song.album.toLowerCase().includes(search)
    );
  });
}