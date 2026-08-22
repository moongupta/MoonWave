"use client";

import {
  useEffect,
  useRef,
} from "react";

import { usePlayer } from "@/app/context/AudioProvider";


export default function Visualizer() {

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);


  const {
    analyserRef,
    dataArrayRef,
    currentSong,
  } = usePlayer();



  useEffect(() => {

    const canvas =
      canvasRef.current;

    const analyser =
      analyserRef.current;

    const dataArray =
      dataArrayRef.current;


    if (
      !canvas ||
      !analyser ||
      !dataArray ||
      !currentSong
    ) {
      return;
    }


    const ctx =
      canvas.getContext("2d");


    if (!ctx) {
      return;
    }


    let animationId = 0;



    const energy =
      currentSong.theme.energy;



    const intensity =
      energy === "high"
        ? 1.35
        : energy === "medium"
        ? 1.15
        : 0.9;



    const draw = () => {

      animationId =
        requestAnimationFrame(draw);



      analyser.getByteFrequencyData(
        dataArray
      );



      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );



      const barWidth =
        canvas.width /
        dataArray.length;



      dataArray.forEach(
        (
          value,
          index
        ) => {


          const power =
            value *
            intensity;



          const height =
            Math.min(
              canvas.height,
              (power / 255) *
              canvas.height
            );



          const x =
            index *
            barWidth;



          const gradient =
            ctx.createLinearGradient(
              0,
              canvas.height,
              0,
              0
            );


          gradient.addColorStop(
            0,
            currentSong.theme.secondary
          );


          gradient.addColorStop(
            1,
            currentSong.theme.primary
          );



          ctx.fillStyle =
            gradient;



          ctx.shadowBlur =
            currentSong.theme.energy === "high"
              ? 28
              : 18;



          ctx.shadowColor =
            currentSong.theme.primary;



          ctx.fillRect(
            x,
            canvas.height - height,
            barWidth - 2,
            height
          );


        }
      );


    };


    draw();



    return () => {

      cancelAnimationFrame(
        animationId
      );

    };


  }, [
    analyserRef,
    dataArrayRef,
    currentSong,
  ]);



  return (

    <canvas

      ref={canvasRef}

      width={900}

      height={220}

      className="
        w-full
        rounded-3xl
        bg-black/40
      "

    />

  );

}