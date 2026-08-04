"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (name: string) => void;
}

export default function CreatePlaylistModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState("");

  const handleCreate = () => {
    if (!name.trim()) return;

    onCreate(name.trim());

    setName("");

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/10 bg-zinc-900 p-8 shadow-2xl"
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <h2 className="text-3xl font-black text-white">
              Create Playlist
            </h2>

            <p className="mt-2 text-zinc-400">
              Give your playlist a beautiful name.
            </p>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Playlist Name..."
              className="mt-6 w-full rounded-2xl border border-zinc-700 bg-zinc-800 px-5 py-4 text-white outline-none transition focus:border-red-500"
            />

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded-xl bg-zinc-800 px-6 py-3 font-semibold text-white transition hover:bg-zinc-700"
              >
                Cancel
              </button>

              <button
                onClick={handleCreate}
                className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition hover:bg-red-600"
              >
                Create
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}