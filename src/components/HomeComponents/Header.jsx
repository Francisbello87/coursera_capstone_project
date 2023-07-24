import React from "react";
import Nav from "../Nav/Nav";
import { images } from "../../constants";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const navigateToReservations = () => {
    navigate("/reservations");
  };
  return (
    <header className=" w-full relative md:h-[38.875rem] bg-primaryColor">
      <Nav />
      <div className="flex py-28 md:pt-40  md:flex-row justify-between w-full gap-11 px-4 md:px-64">
        <div className=" ">
          <h1 className=" markazi text-[2.75rem] md:text-[4rem] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[2.5rem] text-secondaryColor-mt-4">
            Chicago
          </h4>
          <p className=" font-Karla z-40 font-medium text-left text-sm md:text-[1.125rem] md:max-w-[19.375rem] max-w-[10.25rem] mt-5 md:mt-11 text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <div className="md:mt-16 mt-6 w-[70%]">
            <Button onClick={navigateToReservations} text="Reserve a Table" />
          </div>
        </div>
        <div>
          <img
            className="w-[8.4375rem] h-[11.25rem] md:hidden  absolute right-3 top-44 z-10 "
            src={images.Hero}
            alt="Hero Image"
          />
          <img className="hidden md:block " src={images.Hero} alt="Hero" />
        </div>
      </div>
    </header>
  );
};

export default Header;
