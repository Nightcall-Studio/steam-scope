import Image from "next/image";
import Link from "next/link";

interface CardSectionItemProps {
  appid: number;
  name: string;
  discount: number;
  price: string;
  initialprice: string;
  score: number;
  image: string;
}

const CardSectionItem = ({
  appid,
  name,
  discount,
  price,
  initialprice,
  score,
  image,
}: CardSectionItemProps) => {
  return (
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
      <div className="flex gap-4 max-md:gap-0 max-lg:flex-col md:flex-row max-md:w-full md:mr-auto md:gap-4">
        <div className="relative max-lg:w-[272px] lg:w-[214px] md:w-[180px] h-[100px] max-lg:mb-[10px] overflow-hidden rounded-[10px]">
          <Image
            src={image}
            alt={name}
            fill
            loading="eager"
            className="object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          />
        </div>

        <div className="flex flex-col justify-center gap-0 max-lg:gap-1 max-lg:pl-1">
          <span className="text-[22px] font-medium opacity-70 max-lg:text-[16px]">
            Name
          </span>

          <h3 className="w-[500px] max-lg:w-[268px] truncate text-[24px] font-medium max-lg:text-[26px] leading-[30px] max-lg:leading-[25px] h-auto text-wrap break-words">
            <Link
              href={`https://store.steampowered.com/app/${appid}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#66c0f4] transition-colors duration-200"
            >
              {name}
            </Link>
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <ul className="flex flex-wrap items-center justify-center gap-10 max-lg:justify-center max-lg:gap-12 max-lg:gap-y-3 font-semibold text-[20px] max-xl:gap-15 lg:pr-5">
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
              Discount
            </span>
            <div className="bg-radial from-[#00C707] to-[#027D06] px-4 max-lg:px-2 py-2 rounded-[10px] text-center max-lg:text-[18px] max-lg:font-semibold">
              -{discount}%
            </div>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
              Price
            </span>
            <div className="py-2 rounded-[10px] max-lg:text-[18px]">
              ${price}
            </div>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
              Initial Price
            </span>
            <div className="py-2 rounded-[10px] max-lg:text-[18px]">
              ${initialprice}
            </div>
          </li>
          <li className="flex flex-col gap-2 items-center justify-center">
            <span className="text-white opacity-50 font-bold text-[20px] max-lg:text-[18px] max-lg:font-semibold">
              Rating
            </span>
            <div className="py-2 rounded-[10px] max-lg:text-[18px] max-lg:font-semibold">
              {score.toFixed(2)}%
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CardSectionItem;
