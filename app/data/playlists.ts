import type { Playlist } from "../types/playlist";

export const playlists: Playlist[] = [
  {
    id: "daily-mix",

    title: "Daily Mix",

    description:
      "A personalized mix of your favorite tracks and recent discoveries.",

    cover: "/playlists/daily-mix.jpg",

    creator: "Music2030",

    followers: "2.3M",

    songs: [
      "becalive",
      "infinity",
      "dream-state",
      "neon-nights",
    ],

    public: true,

    theme: {
      primary: "#7c3aed",
      secondary: "#2563eb",
      accent: "#ffffff",
    },
  },

  {
    id: "late-night-drive",

    title: "Late Night Drive",

    description:
      "Smooth electronic tracks for driving through the city after dark.",

    cover: "/playlists/night-drive.jpg",

    creator: "Music2030",

    followers: "1.1M",

    songs: [
      "neon-nights",
      "dream-state",
      "eclipse",
    ],

    public: true,

    theme: {
      primary: "#2563eb",
      secondary: "#06b6d4",
      accent: "#ffffff",
    },
  },

  {
    id: "cinematic",

    title: "Cinematic Journey",

    description:
      "Epic, emotional, and immersive music for deep focus and storytelling.",

    cover: "/playlists/cinematic.jpg",

    creator: "Music2030",

    followers: "890K",

    songs: [
      "becalive",
      "awaken",
      "falling-stars",
      "eclipse",
    ],

    public: true,

    theme: {
      primary: "#f97316",
      secondary: "#ea580c",
      accent: "#ffffff",
    },
  },

  {
    id: "top-hits",

    title: "Top Hits",

    description:
      "The most streamed songs from the Music2030 library.",

    cover: "/playlists/top-hits.jpg",

    creator: "Music2030",

    followers: "4.8M",

    songs: [
      "becalive",
      "infinity",
      "neon-nights",
      "falling-stars",
      "eclipse",
    ],

    public: true,

    theme: {
      primary: "#22c55e",
      secondary: "#15803d",
      accent: "#ffffff",
    },
  },
];