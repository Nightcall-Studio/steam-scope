import CardSection from "./CardSection";

interface SteamSpyGame {
  appid: number;
  name: string;
  price: number;
  initialprice: number;
  discount: number;
  positive: number;
  negative: number;
}

export default async function CardSectionServer() {
  const res = await fetch("https://steamspy.com/api.php?request=all", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SteamSpy data");
  }

  const data = await res.json();
  const gamesArray: SteamSpyGame[] = Object.values(data);
  const discountedGames = gamesArray.filter(
    (game) => game.discount && game.discount > 0
  );

  return <CardSection initialGames={discountedGames} />;
}
