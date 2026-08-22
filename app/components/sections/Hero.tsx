"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    Play,
    Shuffle,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { usePlayer } from "@/app/context/AudioProvider";

export default function Hero() {
    const {
        currentSong,
        playSong,
        playShuffle,
        previousSong,
        nextSong,
        toggleShuffle,
        shuffle,
    } = usePlayer();

    const song = currentSong;

    return (
        <section
            className="relative overflow-hidden rounded-[40px] border border-white/10"
            style={{
                minHeight: 620,
            }}
        >
            {/* Background */}

            <Image
                src={song.image}
                alt={song.title}
                fill
                priority
                className="object-cover scale-150 opacity-20 blur-[120px]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

            {/* Animated Glow */}

            <motion.div
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                }}
                className="absolute left-[-120px] top-[-150px] h-[650px] w-[650px] rounded-full blur-[180px]"
                style={{
                    background: `${song.theme.primary}40`,
                }}
            />

            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 18,
                }}
                className="absolute bottom-[-180px] right-[-100px] h-[700px] w-[700px] rounded-full blur-[180px]"
                style={{
                    background: `${song.theme.secondary}40`,
                }}
            />

            <div className="relative z-20 flex h-full items-center justify-between px-24 py-20">
                {/* LEFT */}

                <div className="max-w-[620px] flex-1">

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-bold tracking-[0.45em] uppercase text-red-400"
                    >
                        MADE FOR YOU
                    </motion.p>

                    <motion.h1
                        key={song.id}
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .45 }}
                        className="mt-6 text-8xl font-black leading-none tracking-[-0.05em]"
                    >
                        {song.title}
                    </motion.h1>

                    <motion.h2
                        key={song.artist}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .1 }}
                        className="mt-5 text-3xl font-semibold text-zinc-300"
                    >
                        {song.artist}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .2 }}
                        className="mt-8 max-w-[560px] text-lg leading-8 text-zinc-400"
                    >
                        Experience{" "}
                        <span className="font-semibold text-white">
                            {song.album}
                        </span>{" "}
                        in a futuristic listening environment built for MoonWave.
                    </motion.p>

                    {/* Buttons */}

                    <div className="mt-10 flex gap-5">

                        {/* PLAY */}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: .96 }}
                            onClick={() => playSong(song)}
                            style={{
                                background: song.theme.primary,
                                boxShadow: `0 20px 80px ${song.theme.primary}66`,
                            }}
                            className="flex items-center gap-3 rounded-full px-10 py-4 text-lg font-bold text-white"
                        >
                            <Play
                                size={22}
                                fill="currentColor"
                            />
                            Play
                        </motion.button>

                        {/* SHUFFLE */}

                        <motion.button
                            onClick={() => {
                                console.log("🔥 SHUFFLE BUTTON CLICKED");
                                playShuffle();
                            }}
                            className="..."
                        >
                            <Shuffle size={20} />
                            Shuffle
                        </motion.button>

                    </div>

                    {/* STATS */}

                    <div className="mt-14 flex gap-16">

                        <div>
                            <h3 className="text-5xl font-black">
                                {song.streams}
                            </h3>

                            <p className="mt-2 text-zinc-500">
                                Streams
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-black">
                                {song.year}
                            </h3>

                            <p className="mt-2 text-zinc-500">
                                Released
                            </p>
                        </div>

                        <div>
                            <h3 className="text-5xl font-black">
                                {song.genre}
                            </h3>

                            <p className="mt-2 text-zinc-500">
                                Genre
                            </p>
                        </div>

                    </div>

                </div>
                {/* RIGHT */}

                <div className="relative hidden lg:flex flex-1 items-center justify-end">

                    {/* Previous */}

                    <button
                        onClick={previousSong}
                        className="absolute -left-24 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition hover:bg-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Artwork */}

                    <motion.div
                        key={song.id}
                        initial={{
                            opacity: 0,
                            scale: .9,
                            x: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: .55,
                        }}
                        whileHover={{
                            scale: 1.03,
                            rotate: -1,
                        }}
                        className="relative"
                    >
                        <Image
                            src={song.image}
                            alt={song.title}
                            width={470}
                            height={470}
                            priority
                            className="rounded-[34px] border border-white/10 object-cover"
                            style={{
                                boxShadow: `0 45px 140px ${song.theme.primary}66`,
                            }}
                        />

                        {/* Floating Info Card */}

                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-black/60 px-6 py-5 backdrop-blur-2xl"
                        >

                            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                                NOW PLAYING
                            </p>

                            <h3 className="mt-2 text-4xl font-black">
                                {song.title}
                            </h3>

                            <p className="mt-1 text-lg text-zinc-400">
                                {song.artist}
                            </p>

                            <div className="mt-4 flex items-center gap-3">

                                <span
                                    className="h-3 w-3 rounded-full"
                                    style={{
                                        background: song.theme.primary,
                                    }}
                                />

                                <span className="text-sm text-zinc-400">
                                    {song.genre}
                                </span>

                            </div>

                        </motion.div>

                    </motion.div>

                    {/* Next */}

                    <button
                        onClick={nextSong}
                        className="absolute -right-24 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl transition hover:bg-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>

                </div>

            </div>

            {/* Bottom Fade */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

            {/* Top Fade */}

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />

            {/* Border Glow */}

            <div
                className="pointer-events-none absolute inset-0 rounded-[40px]"
                style={{
                    boxShadow: `inset 0 0 140px ${song.theme.primary}22`,
                }}
            />

        </section>
    );
}
