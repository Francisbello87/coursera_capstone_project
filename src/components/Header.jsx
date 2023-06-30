import React from "react";
import Nav from "./Nav";
import Hero from "../assets/hero.png"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
 
const Header = () => {
const navigate = useNavigate()

const navigateToReservations = () => {
  navigate('/reservations')
}
  return (
    <header className=" w-full relative md:h-[622px] bg-primaryColor">
      <Nav />
      <div className="flex py-28 md:pt-40  md:flex-row justify-between w-full gap-11 px-4 md:px-72">
        <div className=" ">
          <h1 className=" markazi text-[44px] md:text-[64px] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[40px] text-[#EDEFEE] -mt-4">
            Chicago
          </h4>
          <p className=" font-Karla z-40 font-medium text-left text-sm md:text-[18px] md:max-w-[310px] max-w-[164px] mt-5 md:mt-11 text-white">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <motion.button onClick={navigateToReservations} whileInView={{opacity: [0,1]}} whileTap={{scale: 1.1}} className="md:mt-16 hover:bg-[#f6d964] mt-6 drop-shadow shadow-pryColor font-Karla font-bold md:text-[18px] transition duration-150 bg-pryColor rounded-[16px] md:py-4 md:px-9 px-4 py-2">
            Reserve a Table
          </motion.button>
        </div>
        <div>
          <img className="w-[135px] h-[180px] md:hidden  absolute right-3 top-44 z-10 " src={Hero} alt="Hero Image" />
          <img className="hidden md:block " src={Hero} alt="Hero" />
        </div>
      </div>
    </header>
  );
};

export default Header;
