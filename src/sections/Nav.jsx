import { headerlogomain } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <header className=" absolute padding-x py-8  z-10 w-full ">
      <nav className="flex justify-between items-center  max-container mb-3">
        <a href="/" className="flex justify-start items-center ">
          <img src={headerlogomain} alt="logo" width={70} height={25} />
          <h3 className="text-coral-red text-lg font-bold">SneakPoint</h3>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={`/${item.href}`}
                className="font-monsterrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={` max-lg:block hidden`}>
          <img
            src={hamburger}
            alt=""
            height={25}
            width={25}
            onClick={handleClick}
          />
        </div>
        {/* !--Mobile Nav--! */}
        {open ? (
          <div
            className="mt-6 absolute text-4xl w-full h-full left-0 font-palanquin   lg:hidden  "
            onClick={handleClick}
          >
            <ul className="flex flex-col justify-center items-center gap-16 p-10 z-40 bg-slate-200 my-16 w-full mt-24 ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`/${item.href}`}
                    className="font-monsterrat p-1 leading-normal text-2xl z-50 font-bold text-coral-red   border"
                    onClick={() => {
                      handleClick;
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {/* {"-----"} */}
      </nav>
    </header>
  );
};

export default Nav;
