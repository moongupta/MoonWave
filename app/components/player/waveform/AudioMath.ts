const smoothValues: number[] = new Array(64).fill(0);

export function getSmoothFrequencyData(
  data: Uint8Array,
  bars = 48
) {
  const values: number[] = [];

  for (let i = 0; i < bars; i++) {
    const index = Math.floor(
      (i / bars) * data.length
    );

    const target = data[index] / 255;

    smoothValues[i] +=
      (target - smoothValues[i]) * 0.18;

    values.push(smoothValues[i]);
  }

  return values;
}