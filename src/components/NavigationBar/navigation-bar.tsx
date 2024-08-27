"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../Button/button";
import { usePathname } from "next/navigation";
import { IoClose, IoMenu } from "react-icons/io5";

const links = [
  { href: "/", text: "Home" },
  { href: "/teams", text: "Teams" },
  { href: "/success-stories", text: "Success Stories" },
  { href: "/about-us", text: "About Us" },
  { href: "/blogs", text: "Blogs" },
  { href: "/get-involved", text: "Get Involved" },
];

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      onClick={toggleMobileMenu}
      className="fixed z-10 top-0 right-0 bg-white md:flex justify-between items-center py-4 px-4 md:px-8 lg:px-12 w-full"
    >
      <div className="flex items-center">
        <div className="relative h-12 w-36">
          <Image src="/assets/Images/logo.svg" alt="logo" fill />
        </div>
      </div>

      <button
        className=" md:hidden p-2 fixed top-4 right-4 z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
      </button>

      <div
        className={`md:flex pt-5 flex-col md:flex-row md:items-center  w-full  ${
          isMobileMenuOpen ? "block" : "hidden"
        } w-full md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row text-[16px] 2xl:text-[20px] gap-2 md:gap-3 lg:gap-5 w-full">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                onClick={toggleMobileMenu}
                className={`border-b-4 font-semibold py-1 md:py-2 gap-2 rounded-b ${
                  (pathname.startsWith(link.href) && link.href !== "/") ||
                  pathname === link.href
                    ? "text-blue border-blue"
                    : "text-gray border-transparent"
                } hover:text-[#4b4a4a]`}
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`md:flex  flex-col md:flex-row md:items-center gap-4  text-[16px] 2xl:text-[20px] mt-2 md:mt-0 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="font-bold mb-2 md:mb-0 text-[#3C3C3C] cursor-pointer hover:text-black">
          <Link href="/login">Login</Link>
        </div>

        <Button
          text="Donate"
          classname="bg-blue text-white px-8 py-2 w-full rounded-lg text-[16px] 2xl:text-[20px] 2xl:py-3 2xl:px-10"
        />
      </div>
    </div>
  );
};

export default NavigationBar;
