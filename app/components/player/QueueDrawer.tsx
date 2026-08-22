"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Check,
  GripVertical,
  ListPlus,
  Music2,
  Play,
  Trash2,
  X,
} from "lucide-react";

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
    playNext,
    removeFromQueue,
    clearQueue,
    moveQueueItem,
  } = usePlayer();

  const [toast, setToast] = useState<string | null>(null);

  const upcomingSongs = queue.filter(
    (song) => song.id !== currentSong.id
  );

  const showToast = (message: string) => {
    setToast(message);

    window.setTimeout(() => {
      setToast(null);
    }, 1800);
  };

  const handlePlaySong = (
    song: (typeof queue)[number]
  ) => {
    playSong(song);
    showToast(`Playing ${song.title}`);
  };

  const handlePlayNext = (
    song: (typeof queue)[number]
  ) => {
    playNext(song);
    showToast(`${song.title} will play next`);
  };

  const handleRemove = (
    song: (typeof queue)[number]
  ) => {
    removeFromQueue(song.id);
    showToast(`${song.title} removed`);
  };

  const handleClear = () => {
    clearQueue();
    showToast("Queue cleared");
  };

  const handleDrop = (
    draggedId: string,
    targetId: string
  ) => {
    if (!draggedId || draggedId === targetId) {
      return;
    }

    const from = queue.findIndex(
      (song) => song.id === draggedId
    );

    const to = queue.findIndex(
      (song) => song.id === targetId
    );

    if (from === -1 || to === -1) {
      return;
    }

    moveQueueItem(from, to);

    showToast("Queue reordered");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="
                fixed
                inset-0
                z-[400]
                bg-black/55
                backdrop-blur-md
              "
            />

            {/* DRAWER */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="
                fixed
                right-0
                top-0
                z-[401]
                flex
                h-screen
                w-[min(420px,100vw)]
                flex-col
                border-l
                border-white/10
                bg-zinc-950/95
                shadow-[-30px_0_100px_rgba(0,0,0,.45)]
                backdrop-blur-3xl
              "
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  p-6
                "
              >
                <div className="min-w-0">
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.35em]
                      text-zinc-500
                    "
                  >
                    Music2030
                  </p>

                  <div className="mt-1 flex items-center gap-3">
                    <h2 className="text-2xl font-black text-white">
                      Queue
                    </h2>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-2.5
                        py-1
                        text-xs
                        font-semibold
                        text-zinc-400
                      "
                    >
                      {upcomingSongs.length}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-zinc-500">
                    {upcomingSongs.length === 0
                      ? "Nothing coming up"
                      : `${upcomingSongs.length} ${
                          upcomingSongs.length === 1
                            ? "song"
                            : "songs"
                        } coming up`}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  aria-label="Close queue"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-zinc-400
                    transition-all
                    duration-200
                    hover:scale-105
                    hover:bg-white/10
                    hover:text-white
                    active:scale-95
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* NOW PLAYING */}

              <div className="border-b border-white/10 p-5">
                <p
                  className="
                    mb-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                  "
                >
                  Now Playing
                </p>

                <motion.div
                  layout
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    p-4
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-white/[0.04]
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="relative flex items-center gap-4">
                    {/* ARTWORK */}

                    <div className="relative shrink-0">
                      <img
                        src={currentSong.image}
                        alt={currentSong.title}
                        className="
                          h-14
                          w-14
                          rounded-xl
                          object-cover
                          shadow-lg
                        "
                      />

                      <span
                        className="
                          absolute
                          -bottom-1
                          -right-1
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-full
                          border-2
                          border-zinc-950
                          bg-green-500
                          shadow-[0_0_14px_rgba(34,197,94,.7)]
                        "
                      >
                        <Play
                          size={9}
                          fill="currentColor"
                          className="text-black"
                        />
                      </span>
                    </div>

                    {/* INFO */}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-white">
                        {currentSong.title}
                      </h3>

                      <p className="mt-1 truncate text-sm text-zinc-400">
                        {currentSong.artist}
                      </p>

                      <div className="mt-2 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">
                          Playing
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* QUEUE */}

              <div className="min-h-0 flex-1 overflow-y-auto">
                {upcomingSongs.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                    <motion.div
                      initial={{
                        scale: 0.8,
                        opacity: 0,
                      }}
                      animate={{
                        scale: 1,
                        opacity: 1,
                      }}
                      className="
                        mb-5
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                      "
                    >
                      <Music2
                        size={26}
                        className="text-zinc-600"
                      />
                    </motion.div>

                    <h3 className="font-bold text-white">
                      Queue is empty
                    </h3>

                    <p className="mt-2 max-w-[240px] text-sm leading-6 text-zinc-500">
                      Add songs to your queue and keep the music going.
                    </p>
                  </div>
                ) : (
                  <div className="py-2">
                    {upcomingSongs.map(
                      (song, index) => (
                        <div
                          key={song.id}
                          draggable
                          onDragStart={(event) => {
                            event.dataTransfer.effectAllowed =
                              "move";

                            event.dataTransfer.setData(
                              "text/plain",
                              song.id
                            );
                          }}
                          onDragOver={(event) => {
                            event.preventDefault();

                            event.dataTransfer.dropEffect =
                              "move";
                          }}
                          onDrop={(event) => {
                            event.preventDefault();

                            const draggedId =
                              event.dataTransfer.getData(
                                "text/plain"
                              );

                            handleDrop(
                              draggedId,
                              song.id
                            );
                          }}
                          className="
                            group
                            border-b
                            border-white/[0.05]
                            transition-colors
                            last:border-b-0
                          "
                        >
                          <motion.div
                            layout
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              x: 30,
                            }}
                            whileHover={{
                              backgroundColor:
                                "rgba(255,255,255,.045)",
                            }}
                            className="
                              flex
                              items-center
                              gap-3
                              px-4
                              py-3
                            "
                          >
                            {/* POSITION */}

                            <span
                              className="
                                w-5
                                shrink-0
                                text-center
                                text-[11px]
                                font-semibold
                                text-zinc-600
                              "
                            >
                              {index + 1}
                            </span>

                            {/* DRAG HANDLE */}

                            <div
                              className="
                                flex
                                h-9
                                w-5
                                shrink-0
                                cursor-grab
                                items-center
                                justify-center
                                text-zinc-700
                                transition
                                group-hover:text-zinc-400
                                active:cursor-grabbing
                              "
                              title="Drag to reorder"
                            >
                              <GripVertical size={17} />
                            </div>

                            {/* ARTWORK */}

                            <div className="relative shrink-0">
                              <img
                                src={song.image}
                                alt={song.title}
                                className="
                                  h-12
                                  w-12
                                  rounded-xl
                                  object-cover
                                "
                              />
                            </div>

                            {/* SONG */}

                            <button
                              onClick={() =>
                                handlePlaySong(song)
                              }
                              className="
                                min-w-0
                                flex-1
                                text-left
                                outline-none
                              "
                            >
                              <h4
                                className="
                                  truncate
                                  font-semibold
                                  text-white
                                  transition-colors
                                  group-hover:text-white
                                "
                              >
                                {song.title}
                              </h4>

                              <p className="mt-0.5 truncate text-xs text-zinc-500">
                                {song.artist}
                              </p>
                            </button>

                            {/* PLAY NEXT */}

                            <button
                              onClick={() =>
                                handlePlayNext(song)
                              }
                              aria-label={`Play ${song.title} next`}
                              title="Play next"
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                text-zinc-500
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:opacity-100
                                hover:scale-105
                                hover:bg-white/10
                                hover:text-white
                                active:scale-95
                              "
                            >
                              <ListPlus size={17} />
                            </button>

                            {/* REMOVE */}

                            <button
                              onClick={() =>
                                handleRemove(song)
                              }
                              aria-label={`Remove ${song.title} from queue`}
                              title="Remove from queue"
                              className="
                                flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                text-zinc-600
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:opacity-100
                                hover:scale-105
                                hover:bg-red-500/15
                                hover:text-red-400
                                active:scale-95
                              "
                            >
                              <Trash2 size={16} />
                            </button>
                          </motion.div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* FOOTER */}

              {upcomingSongs.length > 0 && (
                <div
                  className="
                    border-t
                    border-white/10
                    p-5
                  "
                >
                  <button
                    onClick={handleClear}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-red-500/20
                      bg-red-500/10
                      py-3
                      font-semibold
                      text-red-400
                      transition-all
                      duration-200
                      hover:border-red-500/30
                      hover:bg-red-500/15
                      hover:text-red-300
                      active:scale-[0.99]
                    "
                  >
                    <Trash2 size={17} />
                    Clear Queue
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* TOAST */}

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              bottom-8
              left-1/2
              z-[500]
              flex
              max-w-[90vw]
              -translate-x-1/2
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-zinc-900/95
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_20px_70px_rgba(0,0,0,.55)]
              backdrop-blur-2xl
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-500/15
              "
            >
              <Check
                size={14}
                className="text-green-400"
              />
            </span>

            <span className="truncate">
              {toast}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}