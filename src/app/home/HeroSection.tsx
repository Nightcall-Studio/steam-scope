const HeroSection = () => {
  return (
    <section className="mt-20 mb-18 flex flex-col items-center justify-center gap-4 text-center max-w-[627px] m-auto max-lg:mt-8 max-lg:mb-10">
      <h1 className="text-6xl font-semibold  text-wrap max-lg:text-4xl leading-[50px] max-lg:leading-[35px]">
        Database of everything on Steam.
      </h1>
      <span className="opacity-80 font-medium text-wrap text-[22px] leading-[23px] max-lg:text-[16px] max-lg:leading-[20px]">
        This third-party website gives you better insight into the Steam
        platform and everything in its database.
      </span>
    </section>
  );
};

export default HeroSection;
