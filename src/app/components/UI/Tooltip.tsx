"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DiscountTooltip = () => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      className="relative inline-block"
      onClick={() => setVisible((prev) => !prev)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Image
        alt="question mark"
        src="/images/question-mark-icon.svg"
        width={18}
        height={18}
        className="opacity-100 cursor-pointer"
      />

      {visible && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#111] px-3 py-1 text-xs text-white shadow-lg z-50">
          Prices or the discount may not be accurate to your region
        </span>
      )}
    </div>
  );
};

export default DiscountTooltip;
