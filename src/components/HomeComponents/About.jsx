import React from "react";
import { images } from "../../constants";

const About = () => {
  return (
    <div className=" px-4 md:px-64 py-12">
      <h3 className="markazi text-primaryColor font-bold text-2xl text-center md:text-[40px] ">
        About
      </h3>
      <div className="flex items-center flex-col md:flex-row justify-between w-full gap-6">
        <div className=" text-center md:text-left">
          <h1 className=" markazi text-[44px] md:text-[64px] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[40px] text-grayColor -mt-4">
            Chicago
          </h4>
          <p className=" font-Karla z-40 font-medium text-sm md:text-[18px] md:max-w-[310px]  mt-5 md:mt-11 text-black">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          
        </div>
        <div className="relative pb-14">
            <img src={images.About1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
