"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { songs } from "@/app/data/songs";
import type { Song } from "@/app/types/song";

export type RepeatMode =
  | "off"
  | "all"
  | "one";

export function useAudioPlayer() {
  // =====================================================
  // AUDIO
  // =====================================================

  const audioRef =
    useRef<HTMLAudioElement | null>(null);

  const audioContextRef =
    useRef<AudioContext | null>(null);

  const analyserRef =
    useRef<AnalyserNode | null>(null);

  const sourceRef =
    useRef<MediaElementAudioSourceNode | null>(
      null
    );

  const dataArrayRef =
    useRef<Uint8Array | null>(null);

  // =====================================================
  // QUEUE
  // =====================================================

  const [queue, setQueue] =
    useState<Song[]>(songs);

  const [history, setHistory] =
    useState<Song[]>([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [currentSong, setCurrentSong] =
    useState<Song>(songs[0]);

  // =====================================================
  // PLAYBACK
  // =====================================================

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(
      songs[0]?.duration ?? 0
    );

  const [volume, setVolume] =
    useState(1);

  const [muted, setMuted] =
    useState(false);

  // =====================================================
  // MODES
  // =====================================================

  const [shuffle, setShuffle] =
    useState(false);

  const [repeatMode, setRepeatMode] =
    useState<RepeatMode>("off");
  // =====================================================
  // EXPANDED PLAYER
  // =====================================================

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  // =====================================================
  // LIBRARY
  // =====================================================

  const [likedSongs, setLikedSongs] =
    useState<string[]>([]);

  const [downloadedSongs, setDownloadedSongs] =
    useState<string[]>([]);

  // =====================================================
  // DERIVED
  // =====================================================

  const progress = useMemo(() => {
    if (duration <= 0) {
      return 0;
    }

    return (
      (currentTime / duration) *
      100
    );
  }, [
    currentTime,
    duration,
  ]);

  const isLiked =
    likedSongs.includes(
      currentSong.id
    );

  const isDownloaded =
    downloadedSongs.includes(
      currentSong.id
    );

  // =====================================================
  // CREATE AUDIO ELEMENT
  // =====================================================

  useEffect(() => {
    const audio =
      new Audio();

    audio.preload = "auto";
    audio.volume = volume;

    audioRef.current =
      audio;

    const handleTimeUpdate =
      () => {
        setCurrentTime(
          audio.currentTime
        );
      };

    const handleLoadedMetadata =
      () => {
        if (
          Number.isFinite(
            audio.duration
          )
        ) {
          setDuration(
            audio.duration
          );
        }
      };

    const handlePlay =
      () => {
        setIsPlaying(true);
      };

    const handlePause =
      () => {
        setIsPlaying(false);
      };

    audio.addEventListener(
      "timeupdate",
      handleTimeUpdate
    );

    audio.addEventListener(
      "loadedmetadata",
      handleLoadedMetadata
    );

    audio.addEventListener(
      "play",
      handlePlay
    );

    audio.addEventListener(
      "pause",
      handlePause
    );

    return () => {
      audio.pause();

      audio.removeEventListener(
        "timeupdate",
        handleTimeUpdate
      );

      audio.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );

      audio.removeEventListener(
        "play",
        handlePlay
      );

      audio.removeEventListener(
        "pause",
        handlePause
      );

      audio.src = "";

      audioRef.current =
        null;

      if (
        audioContextRef.current
      ) {
        void audioContextRef.current.close();
      }

      audioContextRef.current =
        null;

      analyserRef.current =
        null;

      sourceRef.current =
        null;

      dataArrayRef.current =
        null;
    };

    // IMPORTANT:
    // We only create the Audio element once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =====================================================
  // VOLUME
  // =====================================================

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    audio.volume =
      muted
        ? 0
        : Math.max(
          0,
          Math.min(
            1,
            volume
          )
        );
  }, [
    volume,
    muted,
  ]);

  // =====================================================
  // AUDIO CONTEXT
  // =====================================================

  const initializeAudioContext =
    useCallback(
      async () => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        if (
          !audioContextRef.current
        ) {
          const context =
            new AudioContext();

          const analyser =
            context.createAnalyser();

          analyser.fftSize =
            256;

          const source =
            context.createMediaElementSource(
              audio
            );

          source.connect(
            analyser
          );

          analyser.connect(
            context.destination
          );

          audioContextRef.current =
            context;

          analyserRef.current =
            analyser;

          sourceRef.current =
            source;

          dataArrayRef.current =
            new Uint8Array(
              analyser.frequencyBinCount
            );
        }

        if (
          audioContextRef.current
            .state ===
          "suspended"
        ) {
          await audioContextRef.current.resume();
        }
      },
      []
    );

  // =====================================================
  // PLAY SONG
  // =====================================================

  const playSong =
    useCallback(
      async (song: Song) => {
        const audio =
          audioRef.current;

        if (!audio) {
          console.error(
            "[Music2030] Audio element missing"
          );

          return;
        }

        const index =
          queue.findIndex(
            (item) =>
              item.id === song.id
          );

        if (index === -1) {
          console.error(
            "[Music2030] Song not found in queue:",
            song.id
          );

          return;
        }

        console.log(
          "[Music2030] CLICK:",
          song.id,
          song.title
        );

        console.log(
          "[Music2030] AUDIO:",
          song.audio
        );

        // -------------------------------------------------
        // UPDATE UI IMMEDIATELY
        // -------------------------------------------------

        setCurrentSong(
          song
        );

        setCurrentIndex(
          index
        );

        setCurrentTime(
          0
        );

        setDuration(
          song.duration ?? 0
        );

        // -------------------------------------------------
        // LOAD NEW AUDIO
        // -------------------------------------------------

        audio.pause();

        audio.currentTime =
          0;

        audio.src =
          song.audio;

        audio.load();

        // -------------------------------------------------
        // PLAY
        // -------------------------------------------------

        try {
          await initializeAudioContext();

          await audio.play();
          console.log("PLAYING:", song.title);

          setIsPlaying(
            true
          );

          console.log(
            "[Music2030] PLAYING:",
            song.title
          );
        } catch (error) {
          console.error(
            "[Music2030] PLAY FAILED:",
            error
          );

          setIsPlaying(
            false
          );
        }
      },
      [
        queue,
        initializeAudioContext,
      ]
    );

  // =====================================================
  // PLAY CURRENT
  // =====================================================

  const play =
    useCallback(
      async () => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        try {
          await initializeAudioContext();


          await audio.play();

          setIsPlaying(
            true
          );
        } catch (error) {
          console.error(
            "[Music2030] PLAY ERROR:",
            error
          );

          setIsPlaying(
            false
          );
        }
      },
      [
        initializeAudioContext,
      ]
    );

  // =====================================================
  // PAUSE
  // =====================================================

  const pause =
    useCallback(
      () => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        audio.pause();

        setIsPlaying(
          false
        );
      },
      []
    );

  // =====================================================
  // TOGGLE PLAY
  // =====================================================

  const togglePlay =
    useCallback(
      () => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        if (audio.paused) {
          void play();
        } else {
          pause();
        }
      },
      [
        play,
        pause,
      ]
    );

  // =====================================================
  // SEEK
  // =====================================================

  const seek =
    useCallback(
      (time: number) => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        const safeTime =
          Math.max(
            0,
            Math.min(
              time,
              duration ||
              time
            )
          );

        audio.currentTime =
          safeTime;

        setCurrentTime(
          safeTime
        );
      },
      [duration]
    );

  // =====================================================
  // NEXT SONG
  // =====================================================

  const nextSong =
    useCallback(
      () => {
        if (
          queue.length === 0
        ) {
          return;
        }

        // Repeat one
        if (
          repeatMode ===
          "one"
        ) {
          void playSong(
            queue[currentIndex]
          );

          return;
        }

        let nextIndex =
          currentIndex;

        // Shuffle
        if (
          shuffle &&
          queue.length > 1
        ) {
          do {
            nextIndex =
              Math.floor(
                Math.random() *
                queue.length
              );
          } while (
            nextIndex ===
            currentIndex
          );
        }

        // Normal
        else {
          nextIndex =
            currentIndex + 1;

          if (
            nextIndex >=
            queue.length
          ) {
            if (
              repeatMode ===
              "all"
            ) {
              nextIndex = 0;
            } else {
              pause();

              return;
            }
          }
        }

        setHistory(
          (old) => [
            ...old,
            queue[
            currentIndex
            ],
          ]
        );

        void playSong(
          queue[nextIndex]
        );
      },
      [
        queue,
        currentIndex,
        repeatMode,
        shuffle,
        playSong,
        pause,
      ]
    );

  // =====================================================
  // PREVIOUS SONG
  // =====================================================

  const previousSong =
    useCallback(
      () => {
        if (
          queue.length === 0
        ) {
          return;
        }

        if (
          history.length >
          0
        ) {
          const previous =
            history[
            history.length - 1
            ];

          setHistory(
            (old) =>
              old.slice(
                0,
                -1
              )
          );

          void playSong(
            previous
          );

          return;
        }

        const previousIndex =
          currentIndex === 0
            ? queue.length - 1
            : currentIndex - 1;

        void playSong(
          queue[
          previousIndex
          ]
        );
      },
      [
        history,
        currentIndex,
        queue,
        playSong,
      ]
    );

  // =====================================================
  // AUTO NEXT
  // =====================================================

  useEffect(() => {
    const audio =
      audioRef.current;

    if (!audio) {
      return;
    }

    const handleEnded =
      () => {
        void nextSong();
      };

    audio.addEventListener(
      "ended",
      handleEnded
    );

    return () => {
      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [
    nextSong,
  ]);

  // =====================================================
  // PLAY PLAYLIST
  // =====================================================

  const playPlaylist =
    useCallback(
      (
        playlistSongs: Song[]
      ) => {
        if (
          playlistSongs.length ===
          0
        ) {
          return;
        }

        setQueue(
          playlistSongs
        );

        setHistory([]);

        setCurrentIndex(
          0
        );

        setCurrentSong(
          playlistSongs[0]
        );

        setCurrentTime(
          0
        );

        setDuration(
          playlistSongs[0]
            .duration ?? 0
        );

        // The queue state updates asynchronously,
        // so playlist playback can be started
        // separately by the UI when needed.
      },
      []
    );

  // =====================================================
  // QUEUE
  // =====================================================

  const addToQueue =
    useCallback(
      (song: Song) => {
        setQueue(
          (old) => [
            ...old,
            song,
          ]
        );
      },
      []
    );

  const playNext = useCallback(
    (song: Song) => {
      setQueue((old) => {
        if (old.length === 0) {
          return [song];
        }

        // Remove the song if it already exists.
        const filteredQueue = old.filter(
          (item) => item.id !== song.id
        );

        // Find the current song again
        // after removing the selected song.
        const newCurrentIndex =
          filteredQueue.findIndex(
            (item) => item.id === currentSong.id
          );

        // If current song somehow isn't in the queue,
        // safely put the song at the beginning.
        if (newCurrentIndex === -1) {
          return [
            song,
            ...filteredQueue,
          ];
        }

        // Insert immediately after current song.
        filteredQueue.splice(
          newCurrentIndex + 1,
          0,
          song
        );

        return filteredQueue;
      });
    },
    [currentSong.id]
  );

  const removeFromQueue =
    useCallback(
      (id: string) => {
        setQueue(
          (old) =>
            old.filter(
              (song) =>
                song.id !== id
            )
        );
      },
      []
    );

  const clearQueue =
    useCallback(
      () => {
        setQueue([]);
      },
      []
    );

  const moveQueueItem =
    useCallback(
      (
        from: number,
        to: number
      ) => {
        setQueue(
          (old) => {
            if (
              from < 0 ||
              from >=
              old.length ||
              to < 0 ||
              to >=
              old.length
            ) {
              return old;
            }

            const copy =
              [...old];

            const [
              item,
            ] =
              copy.splice(
                from,
                1
              );

            copy.splice(
              to,
              0,
              item
            );

            return copy;
          }
        );
      },
      []
    );

  // =====================================================
  // SHUFFLE
  // =====================================================

  const toggleShuffle = useCallback(() => {
    setShuffle(prev => {
      console.log("Shuffle:", !prev);
      return !prev;
    });
  }, []);

  const playShuffle = useCallback(async () => {
    if (queue.length === 0) return;

    const randomIndex = Math.floor(
      Math.random() * queue.length
    );
    console.log("Random Index:", randomIndex);
    console.log("Random Song:", queue[randomIndex].title);

    setShuffle(true);

    await playSong(queue[randomIndex]);
  }, [queue, playSong]);

  // =====================================================
  // REPEAT
  // =====================================================

  const toggleRepeat =
    useCallback(
      () => {
        setRepeatMode(
          (old) => {
            if (
              old === "off"
            ) {
              return "all";
            }

            if (
              old === "all"
            ) {
              return "one";
            }

            return "off";
          }
        );
      },
      []
    );

  // =====================================================
  // MUTE
  // =====================================================

  const toggleMute =
    useCallback(
      () => {
        setMuted(
          (old) => !old
        );
      },
      []
    );

  // =====================================================
  // LIKE
  // =====================================================

  const toggleLike =
    useCallback(
      (song: Song) => {
        setLikedSongs(
          (old) => {
            if (
              old.includes(
                song.id
              )
            ) {
              return old.filter(
                (id) =>
                  id !==
                  song.id
              );
            }

            return [
              ...old,
              song.id,
            ];
          }
        );
      },
      []
    );

  // =====================================================
  // DOWNLOAD
  // =====================================================

  const toggleDownload =
    useCallback(
      (song: Song) => {
        setDownloadedSongs(
          (old) => {
            if (
              old.includes(
                song.id
              )
            ) {
              return old.filter(
                (id) =>
                  id !==
                  song.id
              );
            }

            return [
              ...old,
              song.id,
            ];
          }
        );
      },
      []
    );

  // =====================================================
  // PUBLIC API
  // =====================================================

  return {
    // Music
    songs,

    // Queue
    queue,
    history,
    currentIndex,

    // Current song
    currentSong,
    currentArtist:
      currentSong.artist,
    currentAlbum:
      currentSong.album,

    // Playback
    isPlaying,
    currentTime,
    duration,
    progress,
    playShuffle,

    // Audio
    volume,
    muted,

    // Modes
    shuffle,
    repeatMode,

    // Library
    likedSongs,
    downloadedSongs,
    isLiked,
    isDownloaded,

    // Status
    hasNext:
      queue.length > 1,
    hasPrevious:
      queue.length > 1 ||
      history.length > 0,

    // Playback
    play,
    pause,
    togglePlay,
    seek,
    playSong,
    nextSong,
    previousSong,
    playPlaylist,

    // Queue
    addToQueue,
    playNext,
    removeFromQueue,
    clearQueue,
    moveQueueItem,

    // Library
    toggleLike,
    toggleDownload,

    // Modes
    toggleMute,
    toggleShuffle,
    toggleRepeat,

    // Setters
    setVolume,
    setCurrentSong,
    setCurrentIndex,
    setQueue,

    // Audio refs
    audioRef,
    audioContextRef,
    analyserRef,
    sourceRef,
    dataArrayRef,
    // Expanded Player
    expanded,
    setExpanded,
    toggleExpanded,
  };
}