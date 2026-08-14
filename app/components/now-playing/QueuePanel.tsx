"use client";

import { motion } from "framer-motion";
import { Play, Music2, ListMusic } from "lucide-react";

const queue = [
  { title: "Infinity", artist: "Moon Gupta", duration: "3:52" },
  { title: "Dreamwalker", artist: "Moon Gupta", duration: "5:11" },
  { title: "Human Future", artist: "Moon Gupta", duration: "4:41" },
  { title: "Rise", artist: "Moon Gupta", duration: "3:34" },
  { title: "Gravity", artist: "Moon Gupta", duration: "5:03" },
  { title: "Awaken", artist: "Moon Gupta", duration: "4:12" },
];

export default function QueuePanel() {
  return (
    <section className="rounded-[36px] border border-white/10 bg-[#090909] p-10 backdrop-blur-3xl">

      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <ListMusic className="text-red-400" />

        <div>
          <h2 className="text-4xl font-black text-white">
            Up Next
          </h2>

          <p className="mt-1 text-zinc-500">
            Your upcoming queue
          </p>
        </div>
      </div>

      {/* Queue */}
      <div className="space-y-4">

        {queue.map((song, index) => (

          <motion.div
            key={song.title}
            whileHover={{
              x: 6,
              scale: 1.01,
            }}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-fuchsia-500">

                {index === 0 ? (
                  <Play
                    size={20}
                    fill="white"
                  />
                ) : (
                  <Music2 size={20} />
                )}

              </div>

              <div>

                <h3 className="text-xl font-bold text-white">
                  {song.title}
                </h3>

                <p className="text-zinc-500">
                  {song.artist}
                </p>

              </div>

            </div>

            <span className="text-zinc-400">
              {song.duration}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}