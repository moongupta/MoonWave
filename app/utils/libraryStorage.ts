const KEY = "moonwave-library";

export function loadLibrary(): number[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(KEY);

  return data ? JSON.parse(data) : [];
}

export function saveLibrary(ids: number[]) {
  if (typeof window === "undefined") return;

  localStorage.setItem(KEY, JSON.stringify(ids));
}