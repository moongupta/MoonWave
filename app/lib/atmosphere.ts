import type { Song } from "@/app/types/song";


export function getAtmosphere(
  song: Song
) {

  const energy =
    song.theme.energy;


  return {

    glow:
      energy === "high"
        ? 1.4
        : energy === "medium"
        ? 1.15
        : 0.8,


    speed:
      energy === "high"
        ? 8
        : energy === "medium"
        ? 12
        : 16,


    particles:
      energy === "high"
        ? 1.5
        : energy === "medium"
        ? 1
        : 0.6,


    cinematic:
      song.theme.visualStyle === "dream",


  };

}