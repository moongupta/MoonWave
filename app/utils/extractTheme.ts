import { FastAverageColor } from "fast-average-color";

export interface AlbumTheme {
  primary: string;
  secondary: string;
  accent: string;
}

const fac = new FastAverageColor();

function adjustColor(hex: string, amount: number): string {
  const color = hex.replace("#", "");

  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.max(0, Math.min(255, r + amount));
  g = Math.max(0, Math.min(255, g + amount));
  b = Math.max(0, Math.min(255, b + amount));

  return `rgb(${r}, ${g}, ${b})`;
}

export async function extractTheme(
  imageSrc: string
): Promise<AlbumTheme> {
  try {
    const result = await fac.getColorAsync(imageSrc);

    return {
      primary: result.hex,
      secondary: adjustColor(result.hex, -40),
      accent: adjustColor(result.hex, 60),
    };
  } catch {
    return {
      primary: "#6366f1",
      secondary: "#8b5cf6",
      accent: "#ffffff",
    };
  }
}