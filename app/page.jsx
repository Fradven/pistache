import Image from "next/image";
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
          <Image src="/images/pictures/restaurent/resto-1.jpg" alt="restaurent" width={1200} height={1200} className="w-full md:w-1/3" />
          <Image src="/images/pictures/restaurent/resto-2.jpg" alt="restaurent" width={1200} height={1200} className="w-full md:w-1/3" />
          <Image src="/images/pictures/restaurent/resto-3.webp" alt="restaurent" width={1200} height={1200} className="w-full md:w-1/3" />
        </section>
      </section>

      <section className="max-w-screen-md m-auto p-5">
        <h3 className="text-xl mb-4">Contact Us</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-800">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-800">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-gray-800">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-gambol-6 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
