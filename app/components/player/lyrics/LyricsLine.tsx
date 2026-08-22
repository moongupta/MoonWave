"use client";

import { motion } from "framer-motion";

export type LyricsFontSize =
  | "small"
  | "medium"
  | "large";

interface LyricsLineProps {
  text: string;
  active: boolean;
  passed: boolean;
  color: string;
  fontSize?: LyricsFontSize;
}

export default function LyricsLine({
  text,
  active,
  passed,
  color,
  fontSize = "medium",
}: LyricsLineProps) {

  const activeSize = {
    small: "text-[28px] md:text-[32px]",
    medium: "text-[34px] md:text-[40px]",
    large: "text-[42px] md:text-[52px]",
  };

  const normalSize = {
    small: "text-[17px] md:text-[20px]",
    medium: "text-[21px] md:text-[24px]",
    large: "text-[25px] md:text-[30px]",
  };


  return (
    <motion.div
      layout

      initial={{
        opacity: 0,
        y: 24,
        filter: "blur(8px)",
      }}

      animate={{
        opacity: active
          ? 1
          : passed
          ? 0.42
          : 0.18,

        y: active
          ? -4
          : 0,

        scale: active
          ? 1.08
          : 1,

        filter: active
          ? "blur(0px)"
          : "blur(1px)",
      }}

      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}

      className="
        flex
        w-full
        justify-center
        px-6
      "
    >

      <motion.p

        animate={{
          color: active
            ? color
            : "#ffffff",

          textShadow: active
            ? `
              0 0 12px ${color}90,
              0 0 30px ${color}60,
              0 0 60px ${color}35
            `
            : "0 0 0 transparent",

          letterSpacing: active
            ? "0.01em"
            : "0em",
        }}

        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}

        className={`
          max-w-[650px]
          text-center
          font-semibold
          leading-[1.3]
          tracking-[-0.03em]

          ${
            active
              ? `${activeSize[fontSize]} font-bold`
              : normalSize[fontSize]
          }
        `}
      >

        {text}

      </motion.p>

    </motion.div>
  );
}