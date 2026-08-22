export function createWaveGradient(
  ctx: CanvasRenderingContext2D,
  height: number,
  theme: string
) {
  const gradient = ctx.createLinearGradient(
    0,
    0,
    0,
    height
  );

  gradient.addColorStop(0, "#22d3ee");
  gradient.addColorStop(0.30, "#60a5fa");
  gradient.addColorStop(0.55, "#8b5cf6");
  gradient.addColorStop(0.80, "#ec4899");
  gradient.addColorStop(1, theme);

  return gradient;
}