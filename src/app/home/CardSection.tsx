"use client";

import { useEffect, useState } from "react";
import CardSectionItem from "./CardSectionItem";
import SearchInput from "./SearchInput";

interface SteamSpyGame {
  appid: number;
  name: string;
  price: number;
  initialprice: number;
  discount: number;
  positive: number;
  negative: number;
}

const CardSection = () => {
  const [games, setGames] = useState<SteamSpyGame[]>([]);
  const [filteredGames, setFilteredGames] = useState<SteamSpyGame[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() !== "") setSearchLoading(true);

    const timeout = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    fetch("/api/steamspy")
      .then((res) => res.json())
      .then((data) => {
        const gamesArray: SteamSpyGame[] = Object.values(data);
        const discounted = gamesArray.filter(
          (game) => game.discount && game.discount > 0
        );
        const sliced = discounted.slice(0, 100);
        setGames(sliced);
        setFilteredGames(sliced);
      })
      .catch((err) => console.error("Loading error:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtered = games.filter((game) =>
      game.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
    setFilteredGames(filtered);
  }, [debouncedTerm, games]);

  if (loading) return <p className="text-center mt-10">Loading..</p>;

  return (
    <section>
      <div className="relative">
        <SearchInput onSearchChange={setSearchTerm} />
        {searchLoading && (
          <div className="absolute right-[20px] top-[10px] max-lg:top-[7px]">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

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
