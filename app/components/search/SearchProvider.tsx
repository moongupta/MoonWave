"use client";

import {
  createContext,
  useContext,
} from "react";

import { useSearch } from "@/app/hooks/useSearch";

type SearchContextType =
  ReturnType<typeof useSearch>;

const SearchContext =
  createContext<SearchContextType | null>(null);

export function SearchProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const search = useSearch();

  return (
    <SearchContext.Provider value={search}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used inside SearchProvider."
    );
  }

  return context;
}