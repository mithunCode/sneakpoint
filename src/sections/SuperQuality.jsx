import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-us"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold max-w-lg">
          We provide you
          <span className="text-coral-red">&nbsp;Super Quality&nbsp;</span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          All SneakPoint shoes are hand made in Italy by expert shoemaker
          artisans combining premium quality materials with crafty balanced
          structures and attention for every detail, so to grant the greatest
          comfort to the feet. All this while staying classy and stylish.
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-start items-center">
        <img
          src={shoe8}
          alt=""
          height={522}
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
