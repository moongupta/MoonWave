"use client";

interface ProgressSectionProps {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

function formatTime(time: number) {
  if (!time || isNaN(time)) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function ProgressSection({
  currentTime,
  duration,
  onSeek,
}: ProgressSectionProps) {
  return (
    <div className="w-full max-w-3xl">
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="
          h-2
          w-full
          cursor-pointer
          appearance-none
          rounded-full
          bg-white/10
          accent-white
        "
      />

      <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
        <span>{formatTime(currentTime)}</span>

        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}