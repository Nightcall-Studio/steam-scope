import Image from "next/image";

const SearchInput = () => {
  return (
    <section className="flex justify-between items-center mb-4 max-xl:justify-center max-xl:items-center">
      <div className="flex w-[413px] border px-4 rounded-[20px] border-white/80 justify-between items-center max-lg:m-auto max-lg:px-2  max-lg:w-[288px]">
        <input
          type="input"
          placeholder="Search..."
          className="py-1 focus:outline-none text-[22px] max-lg:text-[16px] font-medium"
        />

        <Image
          src="/images/search-icon.svg"
          alt="Search Icon"
          width={22}
          height={22}
          className="cursor-pointer w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]"
        />
      </div>
    </section>
  );
};

export default SearchInput;
