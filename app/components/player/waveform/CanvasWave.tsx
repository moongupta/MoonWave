"use client";

import { useEffect, useRef } from "react";

import { usePlayer } from "@/app/context/AudioProvider";

import { drawWave } from "./WaveRenderer";

export default function CanvasWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    analyserRef,
    dataArrayRef,
    currentSong,
    isPlaying,
  } = usePlayer();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame: number;

    const render = () => {
      animationFrame = requestAnimationFrame(render);

      drawWave({
        ctx,
        canvas,
        analyser: analyserRef.current,
        dataArray: dataArrayRef.current,
        color: currentSong.theme.primary,
        playing: isPlaying,
      });
    };

    render();

    return () => cancelAnimationFrame(animationFrame);
  }, [
    analyserRef,
    dataArrayRef,
    currentSong,
    isPlaying,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={240}
      height={56}
      className="block"
    />
  );
}