const STORAGE_KEY = "music2030-player";

export type RepeatMode = "off" | "all" | "one";

export interface PlayerStorageData {
  currentSongId: string;
  currentIndex: number;
  currentTime: number;
  volume: number;
  muted: boolean;
  shuffle: boolean;
  repeatMode: RepeatMode;
  likedSongs: string[];
  downloadedSongs: string[];
  queue: string[];
}

export function loadPlayerState(): PlayerStorageData | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      !Array.isArray(parsed.queue) ||
      !Array.isArray(parsed.likedSongs) ||
      !Array.isArray(parsed.downloadedSongs)
    ) {
      clearPlayerState();
      return null;
    }

    return parsed as PlayerStorageData;
  } catch (error) {
    console.error(
      "Failed to load player state:",
      error
    );

    clearPlayerState();

    return null;
  }
}

export function savePlayerState(
  data: PlayerStorageData
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  } catch (error) {
    console.error(
      "Failed to save player state:",
      error
    );
  }
}

export function clearPlayerState(): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error(
      "Failed to clear player state:",
      error
    );
  }
}