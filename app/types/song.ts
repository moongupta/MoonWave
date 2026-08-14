export interface Song {
  id: string;

  title: string;

  artist: string;

  album: string;

  image: string;

  audio: string;

  duration: number;

  durationLabel: string;

  year: number;

  genre: string;

  streams: string;

  plays: number;

  explicit: boolean;

  featured: boolean;

  liked: boolean;

  downloaded: boolean;

  lyrics: string[];

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}