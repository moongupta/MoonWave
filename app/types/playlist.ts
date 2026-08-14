export interface Playlist {
  id: string;

  title: string;

  description: string;

  cover: string;

  creator: string;

  followers: string;

  songs: string[];

  public: boolean;

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}