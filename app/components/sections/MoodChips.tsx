"use client";

import { useState } from "react";
import {
  Car,
  CloudRain,
  Dumbbell,
  Heart,
  Leaf,
  Moon,
  PartyPopper,
  Target,
} from "lucide-react";

const moods = [
  { title: "Relax", icon: Leaf },
  { title: "Focus", icon: Target },
  { title: "Workout", icon: Dumbbell },
  { title: "Commute", icon: Car },
  { title: "Party", icon: PartyPopper },
  { title: "Sad", icon: CloudRain },
  { title: "Romance", icon: Heart },
  { title: "Sleep", icon: Moon },
];

export default function MoodChips() {
  const [active, setActive] = useState("Relax");

  return (
    <section
      className="
        -mx-1
        overflow-x-auto
        pb-1
        scrollbar-none
        sm:mx-0
      "
      aria-label="Music moods"
    >
      <div
        className="
          flex
          w-max
          items-center
          gap-2
          pr-4
          sm:w-auto
          sm:flex-wrap
          sm:pr-0
        "
      >
        {moods.map(({ title, icon: Icon }) => {
          const isActive = active === title;

          return (
            <button
              key={title}
              type="button"
              onClick={() => setActive(title)}
              className={`
                flex
                h-10
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                px-4
                text-sm
                font-semibold
                transition-all
                duration-200
                ${
                  isActive
                    ? "border-white/20 bg-white/[0.12] text-white shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
                    : "border-white/[0.08] bg-white/[0.025] text-zinc-500 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-zinc-200"
                }
              `}
            >
              <Icon size={15} strokeWidth={2} />
              <span>{title}</span>
            </button>
          );
        })}

        <button
          type="button"
          className="
            flex
            h-10
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.025]
            px-4
            text-sm
            font-semibold
            text-zinc-500
            transition-all
            duration-200
            hover:border-white/[0.14]
            hover:bg-white/[0.06]
            hover:text-white
          "
        >
          More
          <span className="text-xs">⌄</span>
        </button>
      </div>
    </section>
  );
}