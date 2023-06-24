"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });
const playDis = Playfair_Display({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-full m-auto">
      <nav className="">
        <section className="w-full py-10 bg-hero-pattern bg-cover bg-center">
          <article className="w-1/2 sm:w-2/12 m-auto p-2 rounded-lg bg-gambol-3-500/50">
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
        </section>

        <div className="md:hidden bg-purplish-2">
          <button
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleMenu}
          >
            <span className="sr-only">Toggle Menu</span>
            {isMenuOpen ? (
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
          className={`md:flex md:gap-5 md:justify-around p-1 bg-purplish-2 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="m-1">
            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-1 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/" ? "underline underline-offset-8" : ""
              }`}
              href="/"
            >
              Home
            </Link>

            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-1 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/" ? "underline underline-offset-8" : ""
              }`}
              href="/"
            >
              Menu
            </Link>

            <Link
              className={`${
                playDis.className
              } text-lg mx-3 p-1 transition duration-300 hover:bg-australien-3 hover:ease-in ${
                usePathname() === "/" ? "underline underline-offset-8" : ""
              }`}
              href="/"
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
