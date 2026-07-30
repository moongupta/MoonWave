export interface SongTheme {
  primary: string;
  secondary: string;
  accent: string;
}

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;

  image: string;
  cover: string;
  audio: string;

  duration: number;

  plays: string;

  theme: SongTheme;
}