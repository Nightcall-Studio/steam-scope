import CardSectionItem from "./CardSectionItem";

const CardSection = () => {
  return (
    <section>
      <ul className="flex flex-col gap-4 max-xl:justify-center max-xl:items-center">
        <CardSectionItem />
      </ul>
    </section>
  );
};

export default CardSection;
