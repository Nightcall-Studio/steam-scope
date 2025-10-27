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
        <div className="flex justify-center items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/steam-icon.svg"
            alt="Steam icon"
            width={32}
            height={32}
            className="cursor-pointer hidden sm:block"
          />
          <span className="hidden sm:block">Sign In</span>
          <Image
            src="/images/burger-menu-icon.svg"
            alt="Burger menu icon"
            width={26}
            height={26}
            className="block sm:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <Modal onClose={() => setIsOpen(false)}>
              <nav className="flex flex-col items-center gap-6 text-white">
                <ul className="flex flex-col gap-6 text-[18px] font-semibold cursor-pointer">
                  <li>Home</li>
                  <li>About</li>
                  <li>FAQ</li>
                </ul>

                <div className="flex justify-center items-center gap-2.5 cursor-pointer">
                  <Image
                    src="/images/steam-icon.svg"
                    alt="Steam icon"
                    width={32}
                    height={32}
                    className="cursor-pointer"
                  />
                  <span className="text-lg font-medium">Sign In</span>
                </div>
              </nav>
            </Modal>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
