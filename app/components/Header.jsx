"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

// Create a variable to set the font-familly Playfair_Display
const playDis = Playfair_Display({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  // Boolean that will be used to check if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to change isMenuOpen to its opposite
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        {/* The h1 is also and ancho to return to the home page */}
        <h1 className="w-full py-10 bg-hero-pattern bg-cover bg-center">
          <article className="w-1/2 sm:w-2/12 m-auto px-2 py-10 rounded-full bg-gambol-3-500/50 bg-neutral-300/50">
            <Link href={"/"} className="">
              <Image
                src="/images/logo/logo_pistache.png"
                alt="logo"
                width={1200}
                height={1200}
                className="w-full"
              ></Image>
            </Link>
          </article>
        </h1>

        {/* This is the button show/hide the menu in mobile view */}
        <div className="md:hidden bg-purplish-2">
          <button className="text-gray-800" onClick={toggleMenu}>
            <span className="sr-only">Toggle Menu</span>
            {/* Switch between menu icon and the cross depending on the boolean isMenuOpen */}
            {isMenuOpen ? (
              // menu icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // cross icon
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <menu
          className={`md:flex md:gap-5 md:justify-center p-1 bg-purplish-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Link to the home page if it's the current page, it will be underlined */}
          <li className="m-1">
            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-2 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/" ? "underline underline-offset-8" : ""
              }`}
              href="/"
            >
              Home
            </Link>
          </li>

          {/* link to the menu page */}
          <li className="m-1">
            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-2 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/menu" ? "underline underline-offset-8" : ""
              }`}
              href="/menu"
            >
              Menu
            </Link>
          </li>

          {/* link to the about page */}
          <li className="m-1">
            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-2 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/about" ? "underline underline-offset-8" : ""
              }`}
              href="/about"
            >
              About us
            </Link>
          </li>

          {/* link to the contact page */}
          <li className="m-1">
            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-2 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/contact"
                  ? "underline underline-offset-8"
                  : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
};

export default Header;
