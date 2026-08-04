"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Music2, Trash2, X } from "lucide-react";
import { usePlayer } from "@/app/context/AudioProvider";

interface QueueDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function QueueDrawer({
  open,
  onClose,
}: QueueDrawerProps) {
  const {
    queue,
    currentSong,
    playSong,
    removeFromQueue,
    clearQueue,
  } = usePlayer();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[400] bg-black/50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-[401] flex h-screen w-[420px] flex-col border-l border-white/10 bg-zinc-950/95 backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Queue
                </h2>

                <p className="text-sm text-zinc-500">
                  {queue.length} songs
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 transition hover:bg-white/10"
              >
                <X size={22} />
              </button>
            </div>

            {/* Now Playing */}
            <div className="border-b border-white/10 p-5">
              <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">
                NOW PLAYING
              </p>

              <div className="rounded-2xl bg-white/5 p-4">
                <h3 className="font-semibold text-white">
                  {currentSong.title}
                </h3>

                <p className="text-zinc-400">
                  {currentSong.artist}
                </p>
              </div>
            </div>

            {/* Queue */}
            <div className="flex-1 overflow-y-auto">
              {queue.map((song) => (
                <motion.div
                  key={song.id}
                  whileHover={{ x: 6 }}
                  className="flex items-center justify-between border-b border-white/5 p-5 transition-colors hover:bg-white/5"
                >
                  <div
                    className="flex flex-1 cursor-pointer items-center gap-4"
                    onClick={() => playSong(song)}
                  >
                    <Music2
                      size={18}
                      className="text-zinc-500"
                    />

                    <div>
                      <h4 className="font-medium text-white">
                        {song.title}
                      </h4>

                      <p className="text-sm text-zinc-500">
                        {song.artist}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromQueue(song.id)}
                    className="rounded-lg p-2 transition hover:bg-red-500/20"
                  >
                    <Trash2
                      size={16}
                      className="text-red-400"
                    />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 p-6">
              <button
                onClick={clearQueue}
                className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
              >
                Clear Queue
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}