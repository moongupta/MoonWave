import { songs } from "../data/songs";

export function findSongIndex(id: number) {
  return songs.findIndex((song) => song.id === id);
}