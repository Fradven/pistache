import Image from "next/image";

const MenuCard = ({ title, content, imageURl }) => {

  const createMarkup = () => {
    return { __html: content };
  };

  return (
    <section className="m-auto px-4 py-2rounded-lg border-2 border-gray-300">
      <h2 className="text-2xl text-center rounded-md m-3 py-2">{title}</h2>

      <div className="w-10/12 m-auto">
        <Image src={imageURl} alt={title} width={1200} height={1200} />
      </div>

      <article className="p-5" dangerouslySetInnerHTML={createMarkup()} />
    </section>
  );
};

export default MenuCard;
