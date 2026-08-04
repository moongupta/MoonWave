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
  audio: string;

  duration: string;

  theme: SongTheme;

  queueId?: string;
}