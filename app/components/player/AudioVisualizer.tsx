"use client";

import { useEffect, useRef } from "react";
import { usePlayer } from "@/app/context/AudioProvider";
import { useTheme } from "@/app/context/ThemeProvider";

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const {
    analyserRef,
    dataArrayRef,
  } = usePlayer();

  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let frame: number;

    const render = () => {
      const analyser = analyserRef.current;
      const data = dataArrayRef.current;

      if (analyser && data) {
        analyser.getByteFrequencyData(data);

        ctx.clearRect(
          0,
          0,
          canvas.width,
          canvas.height
        );

        const bars = 40;

        const barWidth =
          canvas.width / bars;

        for (let i = 0; i < bars; i++) {
          const value =
            data[i] / 255;

          const height =
            Math.max(
              6,
              value * canvas.height * 0.95
            );

          const x = i * barWidth;

          const y = canvas.height - height;

          const radius = 6;

          const gradient = ctx.createLinearGradient(
            0,
            y,
            0,
            canvas.height
          );

          gradient.addColorStop(0, theme.accent);
          gradient.addColorStop(0.4, theme.primary);
          gradient.addColorStop(1, theme.secondary);

          ctx.fillStyle = gradient;

          ctx.beginPath();

          ctx.roundRect(
            x,
            y,
            barWidth - 4,
            height,
            radius
          );
          ctx.shadowBlur = 18;

          ctx.shadowColor = theme.primary;

          ctx.fill();

          ctx.shadowBlur = 0;
        }
      }

      frame =
        requestAnimationFrame(render);
    };

    render();

    return () =>
      cancelAnimationFrame(frame);

  }, [
    analyserRef,
    dataArrayRef,
    theme,
  ]);

  return (
    <canvas
      ref={canvasRef}
      width={420}
      height={70}
      className="rounded-xl"
    />
  );
}