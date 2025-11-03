"use client";

import { Suspense, useEffect, useState } from "react";
import CardSectionItem from "./CardSectionItem";
import SearchInput from "./SearchInput";
import type { Filters } from "../components/UI/FilterModal";
import FilterModal from "../components/UI/FilterModal";

interface SteamSpyGame {
  appid: number;
  name: string;
  price: number;
  initialprice: number;
  discount: number;
  positive: number;
  negative: number;
}

type SortOption =
  | "none"
  | "priceHighToLow"
  | "priceLowToHigh"
  | "discountHighToLow"
  | "discountLowToHigh"
  | "ratingHighToLow"
  | "ratingLowToHigh";

export default function CardSection({
  initialGames,
}: {
  initialGames: SteamSpyGame[];
}) {
  const [games, setGames] = useState<SteamSpyGame[]>(initialGames);
  const [filteredGames, setFilteredGames] =
    useState<SteamSpyGame[]>(initialGames);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("none");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // debounce search
  useEffect(() => {
    if (searchTerm.trim() !== "") setSearchLoading(true);
    const timeout = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // filter by search
  useEffect(() => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [debouncedTerm, games]);

  // sort logic
  useEffect(() => {
    let sorted = [...filteredGames];
    const getRating = (g: SteamSpyGame) =>
      g.positive + g.negative > 0
        ? (g.positive / (g.positive + g.negative)) * 100
        : 0;

    switch (sortOption) {
      case "priceHighToLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "priceLowToHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "discountHighToLow":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      case "discountLowToHigh":
        sorted.sort((a, b) => a.discount - b.discount);
        break;
      case "ratingHighToLow":
        sorted.sort((a, b) => getRating(b) - getRating(a));
        break;
      case "ratingLowToHigh":
        sorted.sort((a, b) => getRating(a) - getRating(b));
        break;
      default:
        break;
    }

    setFilteredGames(sorted);
  }, [sortOption]);

  // handle filters
  const handleApplyFilters = (filters: Filters) => {
    if (filters.sortByPrice === "desc") setSortOption("priceHighToLow");
    else if (filters.sortByPrice === "asc") setSortOption("priceLowToHigh");
    else if (filters.sortByRating === "desc") setSortOption("ratingHighToLow");
    else if (filters.sortByRating === "asc") setSortOption("ratingLowToHigh");
    else setSortOption("none");
  };

  return (
    <section>
      {/* Search + Filter UI */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-between items-center ">
        <SearchInput onSearchChange={setSearchTerm} />
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {searchLoading && (
            <div className="flex items-center">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin sm:w-6 sm:h-6"></div>
            </div>
          )}
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-[10px] px-4 py-2 border border-white/30 flex-1 sm:flex-none flex items-center justify-center gap-2"
          >
            <span>⚙️</span>
            <span className="sm:hidden">Filters</span>
          </button>
        </div>
      </div>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={handleApplyFilters}
      />

      {/* Suspense boundary just for cards */}
      <Suspense fallback={<CardSkeletonList count={8} />}>
        <ul className="flex flex-col gap-4 max-xl:justify-center max-xl:items-center">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <CardSectionItem
                key={game.appid}
                appid={game.appid}
                name={game.name}
                discount={game.discount}
                price={(game.price / 100).toFixed(2)}
                score={
                  game.positive + game.negative > 0
                    ? (game.positive / (game.positive + game.negative)) * 100
                    : 0
                }
                initialprice={(game.initialprice / 100).toFixed(2)}
                image={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/header.jpg`}
              />
            ))
          ) : (
            <p className="text-center text-white/70 mt-10 text-lg">
              No games found.
            </p>
          )}
        </ul>
      </Suspense>
    </section>
  );
}

/* ---------------- Skeleton Loader ---------------- */

function CardSkeletonList({ count = 6 }: { count?: number }) {
  return (
    <ul className="flex flex-col gap-4 mt-6 animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <li
          key={i}
          className="p-[10px] rounded-[20px] bg-white/5 flex justify-between items-center 
                     max-xl:flex-col max-lg:gap-4 max-xl:gap-y-5 max-xl:w-fit border border-white/10 relative overflow-hidden"
        >
          <div className="flex gap-4 max-lg:flex-col md:flex-row w-full md:gap-4">
            <div className="relative max-lg:w-[272px] lg:w-[214px] md:w-[180px] h-[100px] bg-white/10 rounded-[10px] overflow-hidden">
              <Shimmer />
            </div>

            <div className="flex flex-col justify-center gap-2 w-full">
              <div className="h-[22px] bg-white/10 rounded-md w-1/3 relative overflow-hidden">
                <Shimmer />
              </div>
              <div className="h-[26px] bg-white/10 rounded-md w-2/3 relative overflow-hidden">
                <Shimmer />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-full mt-4">
            <ul className="flex flex-wrap justify-center gap-10 max-lg:gap-6 font-semibold text-[20px] lg:pr-5">
              {Array.from({ length: 4 }).map((_, j) => (
                <li
                  key={j}
                  className="flex flex-col gap-2 items-center justify-center"
                >
                  <div className="h-[20px] w-[70px] bg-white/10 rounded-md relative overflow-hidden">
                    <Shimmer />
                  </div>
                  <div className="h-[28px] w-[90px] bg-white/10 rounded-md relative overflow-hidden">
                    <Shimmer />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Shimmer() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00c6ff33] to-transparent animate-[shimmer_1.5s_infinite] rounded-md" />
  );
}
