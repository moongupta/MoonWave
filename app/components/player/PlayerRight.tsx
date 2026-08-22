"use client";

import Waveform from "./Waveform";
import FavoriteButton from "./FavoriteButton";
import Volume from "./Volume";
import QueueButton from "./QueueButton";
import ExpandButton from "./ExpandButton";

interface Props {
  onQueue: () => void;
  onExpand: () => void;
}

export default function PlayerRight({
  onQueue,
  onExpand,
}: Props) {
  return (
    <div className="ml-10 flex items-center gap-4">

      {/* Waveform */}
      <div
        className="
          flex
          h-[64px]
          w-[180px]
          items-center
          justify-center
          rounded-[22px]
          border
          border-white/10
          bg-white/5
          px-3
          backdrop-blur-2xl
        "
      >
        <Waveform />
      </div>

      {/* Favorite */}
      <FavoriteButton />

      {/* Volume */}
      <Volume />

      {/* Queue */}
      <QueueButton
        onClick={onQueue}
      />

      {/* Expanded Player */}
      <ExpandButton
        onClick={onExpand}
      />

    </div>
  );
}