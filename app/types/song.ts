export interface LyricLine {
  time: number;
  text: string;
}


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


  lyrics: LyricLine[];


  theme: {

  primary: string;

  secondary: string;

  accent: string;

  mood?: string;

  energy?:
    | "low"
    | "medium"
    | "high";

  atmosphere?: string;

  visualStyle?: string;

};

}