"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { songs } from "../data/songs";
import type { Song } from "../types/song";

export function useAudioPlayer() {
  // -----------------------------
  // Refs
  // -----------------------------
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);

  const analyserRef = useRef<AnalyserNode | null>(null);

  const sourceRef =
    useRef<MediaElementAudioSourceNode | null>(null);

  const dataArrayRef =
    useRef<Uint8Array | null>(null);

  // -----------------------------
  // State
  // -----------------------------
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [currentSong, setCurrentSong] =
    useState<Song>(songs[0]);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(0);

  const [volume, setVolume] =
    useState(1);

  // -----------------------------
  // Create Audio Element
  // -----------------------------
  useEffect(() => {
    const audio = new Audio();

    audio.preload = "auto";

    audio.volume = volume;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // -----------------------------
  // Load Song
  // -----------------------------
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const song = songs[currentIndex];

    setCurrentSong(song);

    audio.src = song.audio;

    audio.load();

    if (isPlaying) {
      audio.play().catch(console.error);
    }
  }, [currentIndex]);

  // -----------------------------
  // Volume
  // -----------------------------
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
  }, [volume]);

  // -----------------------------
  // Audio Events
  // -----------------------------
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const loadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const timeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener(
      "loadedmetadata",
      loadedMetadata
    );

    audio.addEventListener(
      "timeupdate",
      timeUpdate
    );

    return () => {
      audio.removeEventListener(
        "loadedmetadata",
        loadedMetadata
      );

      audio.removeEventListener(
        "timeupdate",
        timeUpdate
      );
    };
  }, []);
    // -----------------------------
  // Audio Context
  // -----------------------------
  const initializeAudioContext = useCallback(async () => {
    if (!audioRef.current) return;

    if (audioContextRef.current) return;

    const context = new AudioContext();

    const analyser = context.createAnalyser();

    analyser.fftSize = 256;

    const source =
      context.createMediaElementSource(audioRef.current);

    source.connect(analyser);

    analyser.connect(context.destination);

    const buffer = new ArrayBuffer(analyser.frequencyBinCount);

const dataArray = new Uint8Array(buffer);

dataArrayRef.current = dataArray;


    audioContextRef.current = context;
    analyserRef.current = analyser;
    sourceRef.current = source;
  }, []);

  // -----------------------------
  // Controls
  // -----------------------------
  const play = useCallback(async () => {
    if (!audioRef.current) return;

    await initializeAudioContext();

    if (
      audioContextRef.current?.state === "suspended"
    ) {
      await audioContextRef.current.resume();
    }

    try {
      await audioRef.current.play();

      setIsPlaying(true);
    } catch (err) {
      console.error(err);
    }
  }, [initializeAudioContext]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();

    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const seek = useCallback((time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
  }, []);

  const nextSong = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  }, []);

  const previousSong = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? songs.length - 1 : prev - 1
    );
  }, []);

  const playSong = useCallback(
    (song: Song) => {
      const index = songs.findIndex(
        (s) => s.id === song.id
      );

      if (index === -1) return;

      setCurrentIndex(index);

      setIsPlaying(true);
    },
    []
  );

  // -----------------------------
  // Auto Next
  // -----------------------------
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handleEnded = () => {
      nextSong();
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener(
        "ended",
        handleEnded
      );
    };
  }, [nextSong]);

  // -----------------------------
  // Cleanup
  // -----------------------------
  useEffect(() => {
    return () => {
      audioRef.current?.pause();

      audioContextRef.current?.close();
    };
  }, []);

  // -----------------------------
  // Return
  // -----------------------------
  return {
    songs,

    currentIndex,

    currentSong,

    isPlaying,

    currentTime,

    duration,

    volume,

    play,

    pause,

    togglePlay,

    nextSong,

    previousSong,

    playSong,

    seek,

    setVolume,

    setCurrentSong,

    setCurrentIndex,

    audioRef,

    analyserRef,

    audioContextRef,

    sourceRef,

    dataArrayRef,
  };
}