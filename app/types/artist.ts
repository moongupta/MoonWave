export interface Artist {
  id: string;

  name: string;

  image: string;

  cover: string;

  verified: boolean;

  biography: string;

  genres: string[];

  followers: string;

  monthlyListeners: string;

  albums: string[];

  songs: string[];

  socials: {
    instagram?: string;
    youtube?: string;
    website?: string;
  };

  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}