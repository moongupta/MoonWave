import { songs } from "../data/songs";


export function findSongIndex(
  id: string
) {

  return songs.findIndex(
    (song) =>
      song.id === id
  );

}