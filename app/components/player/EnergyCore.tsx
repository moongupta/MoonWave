"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";
import { useTheme } from "@/app/context/ThemeProvider";

export default function EnergyCore() {
  const {
    isPlaying,
    togglePlay,
    analyserRef,
    dataArrayRef,
  } = usePlayer();

  const theme = useTheme();

  const [energy, setEnergy] = useState(1);

  useEffect(() => {
    let frame: number;

    const update = () => {
      const analyser = analyserRef.current;
      const data = dataArrayRef.current;

      if (analyser && data) {
        analyser.getByteFrequencyData(data);

        let sum = 0;

        for (let i = 0; i < data.length; i++) {
          sum += data[i];
        }

        const average = sum / data.length;

        setEnergy(1 + average / 400);
      }

      frame = requestAnimationFrame(update);
    };

    update();

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [analyserRef, dataArrayRef]);

  /*
   * Keep the visual energy contained.
   * The analyser can still react strongly,
   * but the button itself will not become huge.
   */
  const buttonScale = Math.min(energy * 0.97, 1.05);

  const pulseScale = Math.min(energy, 1.12);

  return (
    <div
      className="
        relative
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center

        sm:h-12
        sm:w-12

        md:h-16
        md:w-16

        lg:h-20
        lg:w-20
      "
    >
      {/* Outer Glow */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-14
          w-14
          rounded-full
          blur-xl

          sm:h-16
          sm:w-16

          md:h-20
          md:w-20

          lg:h-28
          lg:w-28
        "
        style={{
          background: `
            conic-gradient(
              ${theme.primary},
              ${theme.secondary},
              ${theme.accent},
              ${theme.primary}
            )
          `,
          opacity: 0.5,
        }}
      />

      {/* Energy Ring */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          pointer-events-none
          absolute
          h-12
          w-12
          rounded-full
          border
          border-white/20

          sm:h-14
          sm:w-14

          md:h-18
          md:w-18

          lg:h-24
          lg:w-24
        "
      />

      {/* Pulse */}
      <motion.div
        animate={{
          scale: pulseScale,
          opacity: 0.35 + Math.min(energy - 1, 0.35) * 0.18,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          h-10
          w-10
          rounded-full
          blur-xl

          sm:h-12
          sm:w-12

          md:h-16
          md:w-16

          lg:h-20
          lg:w-20
        "
        style={{
          background: theme.primary,
        }}
      />

      {/* Main Play / Pause Button */}
      <motion.button
        type="button"
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
        animate={{
          scale: buttonScale,
        }}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="
          relative
          z-20
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/90
          text-white

          sm:h-11
          sm:w-11

          md:h-14
          md:w-14

          lg:h-16
          lg:w-16
        "
      >
        {isPlaying ? (
          <Pause
            size={19}
            fill="currentColor"
            className="
              sm:size-5
              md:size-6.25
              lg:size-7
            "
          />
        ) : (
          <Play
            size={19}
            fill="currentColor"
            className="
              sm:size-5
              md:size-6.25
              lg:size-7
            "
          />
        )}
      </motion.button>
    </div>
  );
}