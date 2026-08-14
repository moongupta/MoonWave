import type { Album } from "../types/album";

export const albums: Album[] = [
  {
    id: "becalive",
    title: "BECALIVE",
    artist: "Moon Gupta",

    cover: "/covers/becalive.jpg",

    year: 2026,

    genre: "Cinematic Pop",

    description:
      "The debut album introducing the BECALIVE universe through cinematic storytelling and powerful melodies.",

    duration: "34 min",

    songs: [
      "becalive",
      "becalive-live",
    ],

    theme: {
      primary: "#7c3aed",
      secondary: "#2563eb",
      accent: "#ffffff",
    },
  },

  {
    id: "universe",
    title: "Universe",
    artist: "Moon Gupta",

    cover: "/covers/infinity.jpg",

    year: 2026,

    genre: "Electronic",

    description:
      "A journey through galaxies, dreams, and limitless imagination with futuristic production.",

    duration: "27 min",

    songs: [
      "infinity",
      "awaken",
      "dream-state",
      "falling-stars",
      "eclipse",
    ],

    theme: {
      primary: "#22c55e",
      secondary: "#15803d",
      accent: "#ffffff",
    },
  },

  {
    id: "afterglow",
    title: "Afterglow",
    artist: "Moon Gupta",

    cover: "/covers/neon.jpg",

    year: 2026,

    genre: "Synthwave",

    description:
      "Late-night city lights, neon reflections, and electronic rhythms inspired by a futuristic skyline.",

    duration: "18 min",

    songs: [
      "neon-nights",
    ],

    theme: {
      primary: "#2563eb",
      secondary: "#06b6d4",
      accent: "#ffffff",
    },
  },
];