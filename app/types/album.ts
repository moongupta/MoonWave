export interface Album {
  id: string;

  title: string;

  artist: string;

  cover: string;

  year: number;

  genre: string;

  description: string;

  duration: string;

  songs: string[];

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}