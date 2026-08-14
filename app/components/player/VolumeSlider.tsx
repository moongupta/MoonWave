"use client";

interface VolumeSliderProps {
  volume: number;
  onChange: (value: number) => void;
}

export default function VolumeSlider({
  volume,
  onChange,
}: VolumeSliderProps) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={volume}
      onChange={(e) =>
        onChange(Number(e.target.value))
      }
      className="w-28 cursor-pointer appearance-none"
    />
  );
}