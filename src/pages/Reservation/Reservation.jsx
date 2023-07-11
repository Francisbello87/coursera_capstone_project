import React, { useState } from "react";
import Nav from "../../components/Nav";
import { images } from "../../constants";
import {SelectDiner, SelectDates, SelectTime, SelectOccasion} from "../../components";


const Reservation = () => {
  return (
    <div className=" h-full">
      {/* <Nav /> */}
      <div className=" px-4  md:px-72 bg-primaryColor ">
        <div className="md:hidden">
          <h1 className=" markazi text-[44px] md:text-[64px] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[40px] text-[#EDEFEE] -mt-4">
            Chicago
          </h4>
        </div>
        <h3 className=" font-extrabold markazi md:text-4xl text-center  text-2xl mt-5 text-white">
          Find a table for any occasion
        </h3>

        <div className=" flex items-center justify-between w-full mt-7">
          <div className=" bg-secondaryColor pt-10 px-6   ">
            <div className=" flex items-center gap-8  mb-6 ">
              <SelectDates />
              <SelectTime />
            </div>
            <SelectDiner />
            <SelectOccasion/>
          </div>

          <div className=" flex md:flex-col flex-row gap-3 ">
            <img className=" h-[250px]" src={images.Outdoor} alt="" />
            <img className=" h-[250px]" src={images.standard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
