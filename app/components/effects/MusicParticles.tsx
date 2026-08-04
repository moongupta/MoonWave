"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface MusicParticlesProps {
  color: string;
}

interface Particle {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  drift1: number;
  drift2: number;
}

function createParticles(): Particle[] {
  return Array.from({ length: 45 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 8,
    drift1: Math.random() * 120 - 60,
    drift2: Math.random() * 120 - 60,
  }));
}

export default function MusicParticles({
  color,
}: MusicParticlesProps) {
  const [particles] = useState<Particle[]>(createParticles);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [-1200],
            x: [0, particle.drift1, particle.drift2],
            scale: [0.6, 1.4, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.left}%`,
            bottom: "-20px",
            width: particle.size,
            height: particle.size,
            background: color,
            boxShadow: `0 0 20px ${color}`,
          }}
        />
      ))}
    </div>
  );
}