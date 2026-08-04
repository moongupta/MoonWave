"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  loadLibrary,
  saveLibrary,
} from "../utils/libraryStorage";

interface LibraryContextType {
  library: number[];
  isFavorite: (id: number) => boolean;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (id: number) => void;
}

const LibraryContext =
  createContext<LibraryContextType | null>(null);

export function LibraryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [library, setLibrary] = useState<number[]>(() =>
  loadLibrary()
);;

  useEffect(() => {
    saveLibrary(library);
  }, [library]);

  const isFavorite = (id: number) =>
    library.includes(id);

  const addFavorite = (id: number) => {
    setLibrary((old) =>
      old.includes(id) ? old : [...old, id]
    );
  };

  const removeFavorite = (id: number) => {
    setLibrary((old) =>
      old.filter((songId) => songId !== id)
    );
  };

  const toggleFavorite = (id: number) => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <LibraryContext.Provider
      value={{
        library,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error(
      "useLibrary must be used inside LibraryProvider."
    );
  }

  return context;
}