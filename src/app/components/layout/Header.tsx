"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../UI/Modal";
import Link from "next/link";

const NavLinks = ({ className = "" }) => (
  <ul className={`flex flex-col gap-6 ${className}`}>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/free-games"}>Free Games</Link>
    </li>
    <li>
      <Link href={"/about"}>About</Link>
    </li>
    <li>
      <Link href={"/faq"}>FAQ</Link>
    </li>
  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center font-semibold text-[1.1rem] py-8">
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={97}
          height={97}
          className="cursor-pointer"
        />
      </Link>

      <nav className="hidden lg:flex gap-8 text-[18px] font-semibold cursor-pointer">
        <NavLinks className="flex-row gap-8" />
      </nav>

      <button className="lg:hidden" onClick={() => setIsOpen(true)}>
        <Image
          src="/images/burger-menu-icon.svg"
          alt="Menu"
          width={24}
          height={24}
        />
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <NavLinks className="justify-center items-center" />
      </Modal>
    </header>
  );
};

export default Header;
