"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${raleway.className} my-10`}>
      <section
        className={`max-w-screen-lg border-2 border-gray-300 px-6 py-4 relative m-auto`}
      >
        <h2 className="text-lg">Qui sommes-nous ?</h2>
        <p className="p-3 text-lg">
          Au restaurant Pistache, vous pourrez déguster des plats raffinés issus
          de la cuisine franco-méditerranéenne. Passion et dévouement sont nos
          leitmotivs. Venir chez nous c'est l'assurance de découvrir une
          expérience culinaire hors du commun.
        </p>

        <section className="flex flex-wrap p-5">
          <Image
            src="/images/pictures/restaurent/resto-1.jpg"
            alt="restaurent"
            width={1200}
            height={1200}
            className="w-full md:w-1/3"
          />
          <Image
            src="/images/pictures/restaurent/resto-2.jpg"
            alt="restaurent"
            width={1200}
            height={1200}
            className="w-full md:w-1/3"
          />
          <Image
            src="/images/pictures/restaurent/resto-3.webp"
            alt="restaurent"
            width={1200}
            height={1200}
            className="w-full md:w-1/3"
          />
        </section>

        <section className="m-auto p-5">
          <Link
            className={`text-lg m-auto p-2 transition duration-300 bg-gambol-4 hover:bg-australien-3 hover:ease-in ${
              usePathname() === "/contact" ? "underline underline-offset-8" : ""
            }`}
            href="/contact"
          >
            Contact us
          </Link>
        </section>
      </section>
    </main>
  );
}
