"use client";

import { motion } from "framer-motion";

const tabs = [
  "All",
  "Songs",
  "Albums",
  "Artists",
  "Playlists",
  "Downloads",
] as const;

export type LibraryTab = (typeof tabs)[number];

interface LibraryTabsProps {
  activeTab: LibraryTab;
  onTabChange: (tab: LibraryTab) => void;
}

export default function LibraryTabs({
  activeTab,
  onTabChange,
}: LibraryTabsProps) {
  return (
    <section>
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const selected = activeTab === tab;

          return (
            <motion.button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className={`relative overflow-hidden rounded-full border px-7 py-3 text-sm font-semibold transition-all duration-300 ${
                selected
                  ? "border-red-500 bg-red-500 text-white shadow-[0_15px_40px_rgba(239,68,68,0.35)]"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {selected && (
                <motion.div
                  layoutId="library-tab"
                  className="absolute inset-0 rounded-full bg-red-500"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {tab}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}