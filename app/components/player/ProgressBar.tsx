"use client";

interface ProgressBarProps {
  progress: number;
  duration: number;
  onSeek: (time: number) => void;
}

export default function ProgressBar({
  progress,
  duration,
  onSeek,
}: ProgressBarProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const percentage = Number(event.target.value);

    const time =
      (percentage / 100) * duration;

    onSeek(time);
  };

  return (
    <input
      type="range"
      min={0}
      max={100}
      step={0.1}
      value={progress}
      onChange={handleChange}
      className="
        h-1.5
        w-full
        cursor-pointer
        appearance-none
        rounded-full
        bg-white/10
      "
    />
  );
}