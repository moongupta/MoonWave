"use client";

import { useSearchContext } from "./SearchProvider";
import SearchResultCard from "./SearchResultCard";

export default function SearchResults() {
  const { results } = useSearchContext();

  return (
    <div className="flex flex-col gap-1 p-3">
      {results.map((song) => (
        <SearchResultCard
          key={song.id}
          song={song}
        />
      ))}
    </div>
  );
}