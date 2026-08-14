import type { Song } from "@/app/types/song";

interface MediaSessionProps {
  song: Song;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  nextSong: () => void;
  previousSong: () => void;
}

export function updateMediaSession({
  song,
  isPlaying,
  play,
  pause,
  nextSong,
  previousSong,
}: MediaSessionProps) {
  if (
    typeof navigator === "undefined" ||
    !("mediaSession" in navigator)
  ) {
    return;
  }

  navigator.mediaSession.metadata =
    new MediaMetadata({
      title: song.title,
      artist: song.artist,
      album: song.album,
      artwork: [
        {
          src: song.image,
          sizes: "512x512",
          type: "image/jpeg",
        },
      ],
    });

  navigator.mediaSession.playbackState =
    isPlaying ? "playing" : "paused";

  navigator.mediaSession.setActionHandler(
    "play",
    play
  );

  navigator.mediaSession.setActionHandler(
    "pause",
    pause
  );

  navigator.mediaSession.setActionHandler(
    "nexttrack",
    nextSong
  );

  navigator.mediaSession.setActionHandler(
    "previoustrack",
    previousSong
  );
}