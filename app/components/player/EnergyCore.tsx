"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

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

        return () => cancelAnimationFrame(frame);
    }, [analyserRef, dataArrayRef]);

    return (
        <div className="relative flex items-center justify-center">

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
                className="absolute h-36 w-36 rounded-full blur-2xl"
                style={{
                    background: `
            conic-gradient(
              ${theme.primary},
              ${theme.secondary},
              ${theme.accent},
              ${theme.primary}
            )
          `,
                    opacity: 0.55,
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
          absolute
          h-28
          w-28
          rounded-full
          border
          border-white/20
        "
            />

            {/* Pulse */}

            <motion.div
                animate={{
                    scale: energy,
                    opacity: 0.35 + energy * 0.18,
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                className="absolute h-24 w-24 rounded-full"
                style={{
                    background: theme.primary,
                    filter: "blur(35px)",
                }}
            />

            {/* Main Button */}

            <motion.button
                whileHover={{
                    scale: 1.08,
                }}
                whileTap={{
                    scale: .95,
                }}
                animate={{
                    scale: energy * 0.97,
                }}
                onClick={togglePlay}
                className="
          relative
          z-20
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-black/90
          text-white
        "
            >
                {isPlaying ? (
                    <Pause
                        size={34}
                        fill="currentColor"
                    />
                ) : (
                    <Play
                        size={34}
                        fill="currentColor"
                    />
                )}
            </motion.button>

        </div>
    );
}