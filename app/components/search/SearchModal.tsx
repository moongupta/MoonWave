"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

import { useSearchContext } from "./SearchProvider";
import SearchResults from "./SearchResults";
import SearchEmpty from "./SearchEmpty";

export default function SearchModal() {
  const {
    open,
    closeSearch,
    query,
    setQuery,
    results,
  } = useSearchContext();

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-start
            justify-center
            bg-black/60
            backdrop-blur-xl
            p-8
          "
          onClick={closeSearch}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              mt-20
              w-full
              max-w-3xl
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#090909]/90
              shadow-[0_30px_120px_rgba(0,0,0,.55)]
              backdrop-blur-3xl
            "
          >

            {/* Search Header */}

            <div
              className="
                flex
                items-center
                gap-4
                border-b
                border-white/10
                px-6
                py-5
              "
            >

              <Search
                size={22}
                className="text-zinc-400"
              />

              <input
                autoFocus
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Search songs, artists, albums..."
                className="
                  flex-1
                  bg-transparent
                  text-lg
                  outline-none
                  placeholder:text-zinc-500
                "
              />

              <button
                onClick={closeSearch}
                className="
                  rounded-xl
                  p-2
                  text-zinc-400
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <X size={20} />
              </button>

            </div>

            {/* Results */}

            <div
              className="
                max-h-[600px]
                overflow-y-auto
              "
            >

              {results.length > 0 ? (
                <SearchResults />
              ) : (
                <SearchEmpty />
              )}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}