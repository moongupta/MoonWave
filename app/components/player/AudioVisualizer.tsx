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
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let frame = 0;

        const animate = () => {
            const analyser = analyserRef.current;
            const data = dataArrayRef.current;

            if (analyser && data && isPlaying) {
                // Create the exact array type expected by the Web Audio API.
                const frequencyData = new Uint8Array(data.buffer);

                (analyser.getByteFrequencyData as (data: Uint8Array) => void)(
                    frequencyData
                );

                for (let i = 0; i < barsRef.current.length; i++) {
                    const bar = barsRef.current[i];

                    if (!bar) continue;

                    const value = frequencyData[i] ?? 0;

                    const height = Math.max(10, value * 0.6);

                    bar.style.height = `${height}px`;
                }
            }

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, [analyserRef, dataArrayRef, isPlaying]);

    return (
        <div className="relative flex h-24 w-24 items-center justify-center">
            {Array.from({ length: 32 }).map((_, index) => {
                const angle = (360 / 32) * index;
                const radius = 34;

                return (
                    <div
                        key={index}
                        ref={(el) => {
                            barsRef.current[index] = el;
                        }}
                        className="absolute origin-bottom rounded-full"
                        style={{
                            width: "4px",
                            height: "12px",
                            backgroundColor: color,
                            boxShadow: `0 0 14px ${color}`,
                            transform: `rotate(${angle}deg) translateY(-${radius}px)`,
                        }}
                    />
                );
            })}
        </div>
    );
}