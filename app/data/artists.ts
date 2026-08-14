import type { Artist } from "../types/artist";

export const artists: Artist[] = [
  {
    id: "moon-gupta",

    name: "Moon Gupta",

    image: "/artists/moon.jpg",

    cover: "/artists/moon-cover.jpg",

    verified: true,

    biography:
      "Moon Gupta is an independent artist and creator of the Music2030 universe. His music blends cinematic storytelling, electronic production, pop melodies, and futuristic sound design.",

    genres: [
      "Cinematic Pop",
      "Electronic",
      "Synthwave",
      "Alternative Pop",
    ],

    followers: "2.4M",

    monthlyListeners: "18.7M",

    albums: [
      "becalive",
      "universe",
      "afterglow",
    ],

    songs: [
      "becalive",
      "becalive-live",
      "infinity",
      "neon-nights",
      "awaken",
      "dream-state",
      "falling-stars",
      "eclipse",
    ],

    socials: {
      instagram: "https://instagram.com/moongupta",
      youtube: "https://youtube.com/@moongupta",
      website: "https://music2030.com",
    },

    theme: {
      primary: "#7c3aed",
      secondary: "#2563eb",
      accent: "#ffffff",
    },
  },
];