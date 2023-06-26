import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={`${raleway.className}`}>
      {/* General inforamtion about the store with links towards social media pages */}
      <section className="md:flex max-w-screen-lg m-auto px-5">
        <article className="p-4 md:py-10 md:w-1/2 my-auto">
          <h4 className="text-lg mb-4">Restaurant Information</h4>
          <p className="mb-2">Restaurant Name: Pistache</p>
          <p className="mb-2">Address: 123 Main Street, City, State, ZIP</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: info@pistacherestaurant.com</p>
          <p className="mb-2">Opening Hours:</p>
          <ul className="list-disc list-inside">
            <li>Monday to Friday: 11:00 AM - 10:00 PM</li>
            <li>Saturday and Sunday: 12:00 PM - 11:00 PM</li>
          </ul>
          <p className="mt-4">Follow us on social media:</p>
          <ul className="flex gap-4 mt-2">
            <li>
              <a
                href="https://facebook.com/pistacherestaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/pistache_restaurant"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pistache_tweet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </article>

        {/* iframe with the google map location of the store */}
        <article className="py-10  md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5060.35847350768!2d5.5843471446239485!3d50.64236230453931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0fa0c1f6d3b07%3A0xdd9d59ea234b528a!2sLa%20Maison%20du%20Peket%20bar%20-%20Amon%20Nanesse%20Restaurant%20Li%C3%A8ge%20-%20Appart%20Hotel!5e0!3m2!1sen!2sbe!4v1687684222256!5m2!1sen!2sbe"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </article>
      </section>

      {/* Contact form */}
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
