import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between my-10">
      <section
        className={`${raleway.className} max-w-screen-lg border-2 border-gray-300 px-6 py-4 relative`}
      >
        <h2 className="text-xl text-center underline underline-offset-8">Welcome to Pistache</h2>
        <p className="p-3">
          A culinary oasis that celebrates the flavors of fine dining. Located
          in the heart of the city, Pistache offers an exquisite dining
          experience that tantalizes your taste buds and leaves you craving for
          more.
        </p>
        <p className="p-3">
          At Pistache, we are passionate about creating memorable moments
          through exceptional cuisine. Our team of talented chefs meticulously
          crafts each dish, blending traditional culinary techniques with
          innovative flavors. We take pride in sourcing the freshest ingredients
          from local farms and suppliers, ensuring that every plate is a
          masterpiece of taste and quality.
        </p>
        <p className="p-3">
          Step into our elegant and inviting atmosphere, where you'll be greeted
          by our attentive staff dedicated to providing impeccable service.
          Whether you're celebrating a special occasion, enjoying a romantic
          evening, or simply looking for a delightful meal, Pistache offers the
          perfect setting to create lasting memories.
        </p>
        <p className="p-3">
          Our menu showcases a diverse selection of gastronomic delights,
          inspired by both classic and contemporary influences. From succulent
          seafood and tender meats to vibrant vegetarian options, every dish is
          thoughtfully curated to satisfy even the most discerning palate.
          Complement your meal with a carefully curated wine list featuring both
          local and international selections, expertly chosen to enhance your
          dining experience.
        </p>
        <p className="p-3">
          We believe that dining is an art form, and at Pistache, we aim to
          elevate it to new heights. Join us on a culinary journey where passion
          meets perfection, and indulge in the flavors that make every bite an
          extraordinary experience.
        </p>
        <p className="p-3">
          Experience Pistache today and discover why we are the destination for
          food enthusiasts and connoisseurs alike. We look forward to serving
          you and creating a dining experience that exceeds your expectations.
        </p>
      </section>
    </main>
  );
}
