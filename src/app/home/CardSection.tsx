"use client";

import { useEffect, useState } from "react";
import CardSectionItem from "./CardSectionItem";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/steamspy")
      .then((res) => res.json())
      .then((data) => {
        const gamesArray: SteamSpyGame[] = Object.values(data);
        const discounted = gamesArray.filter(
          (game) => game.discount && game.discount > 0
        );
        setGames(discounted.slice(0, 100));
      })
      .catch((err) => console.error("Ошибка загрузки:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Загрузка...</p>;

  return (
    <section>
      <ul className="flex flex-col gap-4 max-xl:justify-center max-xl:items-center">
        {games.map((game) => (
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
        ))}
      </ul>
    </section>
  );
};

export default CardSection;
