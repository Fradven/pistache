import Image from "next/image";

const MenuCard = () => {
  return (
    <section className="m-auto p-4 bg-australien-1 rounded-lg">
      <h2 className="text-lg text-center">Title</h2>

      <div className="w-10/12 m-auto">
        <Image
          src={`/images/pictures/menu/american_feast.jpg`}
          alt="title"
          width={1200}
          height={1200}
        />
      </div>

      <article className="p-5">
        <p>
          <strong>Starter:</strong> Vietnamese Spring Rolls with Peanut Dipping
          Sauce
        </p>
        <p>
          <strong>Main Course:</strong> Thai Green Curry with Jasmine Rice
        </p>
        <p>
          <strong>Dessert:</strong> Mango Sticky Rice
        </p>
      </article>
    </section>
  );
};

export default MenuCard;
