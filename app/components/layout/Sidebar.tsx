"use client";

import { motion } from "framer-motion";
import {
  House,
  Compass,
  Library,
  Search,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  activePage?: string;
}

const items = [
  {
    name: "Home",
    icon: House,
  },
  {
    name: "Explore",
    icon: Compass,
  },
  {
    name: "Search",
    icon: Search,
  },
  {
    name: "Library",
    icon: Library,
  },
];

export default function Sidebar({
  activePage = "Home",
}: SidebarProps) {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-white/10 bg-black/40 backdrop-blur-3xl">

      <div className="border-b border-white/10 p-8">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700">
            <Sparkles className="text-white" size={22} />
          </div>

          <div>

            <h1 className="text-2xl font-black text-white">
              Music2030
            </h1>

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Premium
            </p>

          </div>

        </div>

      </div>

      <nav className="mt-8 flex-1 px-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              key={item.name}
              whileHover={{
                x: 8,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className={`group relative mb-2 flex w-full items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${activePage === item.name
                ? "bg-white text-black shadow-xl"
                : "text-zinc-400 hover:bg-white/10 hover:text-white hover:translate-x-2"
                }`}
            >
              {activePage === item.name && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 h-8 w-1 rounded-r-full bg-red-500"
                />
              )}
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>
            </motion.button>
          );
        })}

      </nav>

      <div className="border-t border-white/10 p-6">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

          <p className="font-bold text-white">
            Moon Gupta
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Premium Member
          </p>

        </div>

      </div>

    </aside>
  );
}