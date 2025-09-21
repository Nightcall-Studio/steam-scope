import SearchInput from "./home/SearchInput";
import HeroSection from "./home/HeroSection";
import CardSection from "./home/CardSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section>
        <SearchInput />
        <CardSection />
      </section>
    </>
  );
}
