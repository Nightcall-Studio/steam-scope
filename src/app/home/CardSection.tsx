import Image from "next/image";

const CardSection = () => {
  return (
    <section>
      <ul className="flex flex-col gap-4 max-xl:justify-center max-xl:items-center">
        <li
          style={{
            boxShadow: `
                    inset 1px 1px 4px rgba(255, 255, 255, 0.4),
                    inset -1px -1px 2px rgba(255, 255, 255, 0.4),
                    0px 8px 13px rgba(0, 0, 0, 0.25)
                  `,
          }}
          className="p-[10px] rounded-[20px] bg-white/5 flex justify-between items-center max-xl:flex-col max-lg:gap-4 max-xl:gap-y-5 max-xl:w-fit"
        >
          <div className="flex gap-4 max-md:gap-0 max-lg:flex-col md:flex-row max-md:w-full md:mr-auto md:gap-4 ">
            <div className="max-lg:w-[272px] lg:w-[214px] max-lg:mb-[10px] md:w-[180px] ">
              <Image
                src="/images/dbd-image.png"
                alt="DBD image"
                width={272}
                height={100}
                className="rounded-[10px] object-cover max-h-[100px] "
              />
            </div>

            <div className="flex flex-col justify-center gap-0 max-lg:gap-1">
              <span className="text-[22px] font-medium opacity-70 max-lg:text-[16px]">
                Name
              </span>
              <h3 className="text-[28px] font-semibold max-lg:text-[26px] text-wrap  max-lg:leading-[22px] h-auto">
                Sex By Seymur
              </h3>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <ul className="flex flex-wrap items-center justify-center gap-10 max-lg:justify-center max-lg:gap-12 max-lg:gap-y-6 font-semibold text-[20px] max-xl:gap-15 ">
              <li className="flex flex-col gap-2  items-center justify-center ">
                <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
                  Discount
                </span>
                <div className="bg-radial from-[#00C707] to-[#027D06] px-4 max-lg:px-2 py-2 rounded-[10px] text-center max-lg:text-[18px] max-lg:font-semibold">
                  -40%
                </div>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center">
                <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
                  Price
                </span>
                <div className="py-2 rounded-[10px] max-lg:text-[18px]">
                  $20
                </div>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center">
                <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
                  Rating
                </span>
                <div className="py-2 rounded-[10px] max-lg:text-[18px] max-lg:font-semibold">
                  67.9%
                </div>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center">
                <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
                  Release
                </span>
                <div className="py-2 rounded-[10px] max-lg:text-[18px] max-lg:font-semibold">
                  06.09.2025
                </div>
              </li>
              <li className="flex flex-col gap-2 items-center justify-center">
                <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
                  Ends
                </span>
                <div className="py-2 rounded-[10px] max-lg:text-[18px] max-lg:font-semibold">
                  08.09.2025
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CardSection;
