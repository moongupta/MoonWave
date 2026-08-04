"use client";

import { useEffect, useRef } from "react";

interface AudioVisualizerProps {
  analyserRef: React.RefObject<AnalyserNode | null>;
  dataArrayRef: React.RefObject<Uint8Array | null>;
  isPlaying: boolean;
  color: string;
}

export default function AudioVisualizer({
  analyserRef,
  dataArrayRef,
  isPlaying,
  color,
}: AudioVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = 220 * dpr;
    canvas.height = 220 * dpr;

    ctx.scale(dpr, dpr);

    let animationId = 0;

    const draw = () => {
      animationId = requestAnimationFrame(draw);

      ctx.clearRect(0, 0, 220, 220);

      const analyser = analyserRef.current;
      const dataArray = dataArrayRef.current;

      if (!analyser || !dataArray || !isPlaying) return;

      analyser.getByteFrequencyData(dataArray);

      const cx = 110;
      const cy = 110;

      const radius = 46;

      const bars = 96;

      for (let i = 0; i < bars; i++) {
        const value =
          dataArray[Math.floor((i / bars) * dataArray.length)] / 255;

        const barHeight = value * 32 + 4;

        const angle = (Math.PI * 2 * i) / bars;

        const x1 = cx + Math.cos(angle) * radius;
        const y1 = cy + Math.sin(angle) * radius;

        const x2 =
          cx +
          Math.cos(angle) * (radius + barHeight);

        const y2 =
          cy +
          Math.sin(angle) * (radius + barHeight);

        ctx.beginPath();

        ctx.moveTo(x1, y1);

        ctx.lineTo(x2, y2);

        ctx.lineWidth = 2;

        ctx.strokeStyle = color;

        ctx.shadowColor = color;

        ctx.shadowBlur = 10;

        ctx.stroke();
      }
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, [
    analyserRef,
    dataArrayRef,
    isPlaying,
    color,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={220}
      height={220}
      className="h-20 w-20"
    />
  );
}