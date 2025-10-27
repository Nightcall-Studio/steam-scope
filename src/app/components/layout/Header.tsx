"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../UI/Modal";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center font-semibold text-[1.1rem] py-5">
        <Link href={"/"}>
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={97}
            height={97}
            className="cursor-pointer"
          />
        </Link>

        <nav>
          <ul className="flex gap-8 cursor-pointer max-lg:hidden text-[18px] font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
