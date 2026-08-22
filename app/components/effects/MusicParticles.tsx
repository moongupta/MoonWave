"use client";

import { motion } from "framer-motion";


export default function MusicParticles({
  color,
}: {
  color: string;
}) {

  const particles = Array.from(
    { length: 20 },
    (_, i) => i
  );


  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
    >

      {particles.map((particle) => (

        <motion.div
          key={particle}

          animate={{
            y: [-100, -800],
            opacity: [0, 1, 0],
          }}

          transition={{
            duration: 10,
            repeat: Infinity,
          }}

          className="
            absolute
            rounded-full
            blur-sm
          "

          style={{
            left: `${particle * 5}%`,
            bottom: "-20px",
            width: "8px",
            height: "8px",
            background: color,
          }}

        />

      ))}

    </div>
  );
}