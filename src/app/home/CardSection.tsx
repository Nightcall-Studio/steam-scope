"use client";

import { useEffect, useState } from "react";
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

const CardSection = () => {
  const [games, setGames] = useState<SteamSpyGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<SteamSpyGame[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [loading, setLoading] = useState(true);
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

  // fetch data
  useEffect(() => {
    fetch("/api/steamspy")
      .then((res) => res.json())
      .then((data) => {
        const gamesArray: SteamSpyGame[] = Object.values(data);
        const discounted = gamesArray.filter(
          (game) => game.discount && game.discount > 0
        );
        setGames(discounted);
        setFilteredGames(discounted);
      })
      .catch((err) => console.error("Loading error:", err))
      .finally(() => setLoading(false));
  }, []);

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
      case "none":
      default:
        break;
    }

    setFilteredGames(sorted);
  }, [sortOption]); // 👈 import modal

  // handle filters from modal
  const handleApplyFilters = (filters: Filters) => {
    if (filters.sortByPrice === "desc") setSortOption("priceHighToLow");
    else if (filters.sortByPrice === "asc") setSortOption("priceLowToHigh");
    else if (filters.sortByRating === "desc") setSortOption("ratingHighToLow");
    else if (filters.sortByRating === "asc") setSortOption("ratingLowToHigh");
    else setSortOption("none");
  };

  if (loading) return <p className="text-center mt-10">Loading..</p>;

  return (
    <section>
      {/* Search and Filter Section */}
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

      <ul className="flex flex-col gap-4 max-xl:justify-center max-xl:items-center">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <CardSectionItem
              key={game.appid}
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
    </section>
  );
};

export default CardSection;
