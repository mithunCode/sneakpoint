import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize  font-bold max-w-lg">
          <span className="text-coral-red">Special&nbsp;</span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Unbelievably low prices for these great deals. Hurry up, grab the
          best. The same Things, at low Prices. Secret Sale. Special prices
          await you!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Show Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backGroundColor="bg-white"
            textColor="text-black"
            borderColor="border-red-100"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
