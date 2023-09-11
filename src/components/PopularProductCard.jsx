import { Link } from "react-router-dom";
import { star } from "../assets/icons";

const PopularProductCard = ({ id, imgURL, name, price }) => {
  return (
    <Link to={`/ShoeDetails/${id}`} state={{ id }}>
      <div className="flex flex-1 flex-col items-center w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-monsterrat text-xl leading-normal text-slate-gray">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="font-semibold mt-2 font-montserrat text-coral-red text-2xl leading-normal">
          {price}
        </p>
      </div>
    </Link>
  );
};

export default PopularProductCard;
