import Button from "../components/Button";
import Nav from "./Nav";
import { products } from "../constants";
import { useParams } from "react-router-dom";
import PopularProductCard from "../components/PopularProductCard";

import ScrollToTop from "../components/Stop";

const ShoeDetails = () => {
  let { id } = useParams();
  const px = products.filter((item) => item.id == id);
  const productItem = [...px][0];
  const similarProducts = products.filter((item) => item.id != id);

  return (
    <>
      <Nav />
      <ScrollToTop />
      <section className="absolute mt-5 w-full ">
        <div className=" mt-10 flex flex-row gap-16 justify-evenly items-center p-5 max-sm:flex-col max-sm:gap-3">
          <div className="mt-5 bg-[rgb(245,245,245)] rounded-xl shadow-2xl  p-3 sticky">
            <img src={productItem.imgURL} alt="" width={500} />
          </div>
          <div>
            <div className="mt-5   p-3">
              <div className="flex flex-col justify-start items-start">
                <h1 className="font-palanquin text-4xl">{productItem.name}</h1>
                <p>Men&apos;s Shoe</p>
                <p className="font-monsterrat mt-6 font-semibold">
                  MRP : {productItem.price} <br />
                  <span className="info text-slate-gray">
                    incl. of taxes (Also includes all applicable duties)
                  </span>{" "}
                </p>
                <div className="mt-6">
                  <p>Select Size ( UK ) : </p>
                  <div className="mt-1 flex flex-1 gap-2 flex-wrap ">
                    <input
                      type="submit"
                      value={6}
                      className="border rounded py-1 px-6 shadow "
                    />
                    <input
                      type="submit"
                      value={7}
                      className="border rounded py-1 px-6 shadow"
                    />
                    <input
                      type="submit"
                      value={8}
                      className="border rounded py-1 px-6 shadow"
                    />
                    <input
                      type="submit"
                      value={9}
                      className="border rounded py-1 px-6 shadow"
                    />
                    <input
                      type="submit"
                      value={10}
                      className="border rounded py-1 px-6 shadow"
                    />
                    <input
                      type="submit"
                      value={11}
                      className="border rounded py-1 px-6 shadow"
                    />
                    <input
                      type="submit"
                      value={12}
                      className="border rounded py-1 px-6 shadow"
                    />
                  </div>
                  <div className="mt-6 px-4">
                    <ul className="list-disc">
                      <li>Colour Shown: White/White</li>
                      <li>Style: CW2288-111</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 flex flex-1 flex-row flex-wrap gap-6 justify-between items-center">
                  <Button label="Add to bag" />
                  <Button
                    label="WishList"
                    backGroundColor="bg-white"
                    textColor="text-black-900"
                    borderColor="border-slate-gray"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-4xl mt-6 pl-10 font-palanquin font-bold">
            <span className="text-coral-red"> Similar </span> Products
          </h2>
          <div>
            <div className="mt-16 flex justify-around	items-center max-sm:flex-col gap-14">
              {similarProducts.map((product) => (
                <PopularProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShoeDetails;
