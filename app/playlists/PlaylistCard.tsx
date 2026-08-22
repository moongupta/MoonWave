"use client";

import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import Link from "next/link";

interface PlaylistCardProps {
    id: string;
    name: string;
    songs: number;
}

export default function PlaylistCard({
    id,
    name,
    songs,
}: PlaylistCardProps) {
    return (
        <Link href={`/playlists/${id}`}>
            <motion.div
                whileHover={{
                    y: -8,
                    scale: 1.02,
                }}
                transition={{
                    duration: 0.25,
                }}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 shadow-xl transition-all hover:border-red-500/40 hover:shadow-red-500/20"
            >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">
                    <Music2
                        size={34}
                        className="text-red-400"
                    />
                </div>

                <h2 className="mt-6 text-2xl font-black text-white">
                    {name}
                </h2>

                <p className="mt-2 text-zinc-400">
                    {songs} Songs
                </p>

                <p className="mt-6 text-sm text-zinc-500">
                    Created today
                </p>
            </motion.div>
        </Link>
    );
}