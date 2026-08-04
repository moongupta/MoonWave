import type { Song } from "../types/song";

export const songs: Song[] = [
  {
    id: 1,
    title: "BECALIVE",
    artist: "Moon Gupta",
    album: "BECALIVE",

    image: "/covers/becalive.jpg",
    audio: "/songs/BECALIVE.mp3",

    duration: "4:36",

    theme: {
      primary: "#7c3aed",
      secondary: "#2563eb",
      accent: "#ffffff",
    },
  },

  {
    id: 2,
    title: "Future Vision",
    artist: "Moon Gupta",
    album: "Future Vision",

    image: "/covers/futurevision.jpg",
    audio: "/songs/FutureVision.mp3",

    duration: "3:58",

    theme: {
      primary: "#2563eb",
      secondary: "#06b6d4",
      accent: "#ffffff",
    },
  },

  {
    id: 3,
    title: "Human Nature 2030",
    artist: "Moon Gupta",
    album: "Future Vision",

    image: "/covers/humannature.jpg",
    audio: "/songs/HumanNature2030.mp3",

    duration: "5:12",

    theme: {
      primary: "#22c55e",
      secondary: "#15803d",
      accent: "#ffffff",
    },
  },

  {
    id: 4,
    title: "Infinite",
    artist: "Moon Gupta",
    album: "Universe",

    image: "/covers/infinite.jpg",
    audio: "/songs/Infinite.mp3",

    duration: "4:09",

    theme: {
      primary: "#f97316",
      secondary: "#ea580c",
      accent: "#ffffff",
    },
  },
];