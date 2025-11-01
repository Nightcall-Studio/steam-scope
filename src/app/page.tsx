import HeroSection from "./home/HeroSection";
import CardSectionServer from "./home/CardSectionServer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <section>
        <CardSectionServer />
      </section>
    </>
  );
}
