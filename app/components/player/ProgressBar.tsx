"use client";

interface ProgressBarProps {
  progress: number;
  onSeek: (value: number) => void;
}

export default function ProgressBar({
  progress,
  onSeek,
}: ProgressBarProps) {
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={progress}
      onChange={(e) => onSeek(Number(e.target.value))}
      className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10"
    />
  );
}