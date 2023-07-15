import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { images } from "../../constants";
import {
  SelectDiner,
  SelectDates,
  SelectTime,
  SelectOccasion,
  SelectOptions,
} from "../../components";
import Button from "../../components/Button/Button";

const Reservation = () => {
  return (
    <div className=" h-full">
      <Nav />
      <div className=" px-4 md:pt-24  md:px-72 bg-brownColor md:bg-primaryColor h-screen overflow-y-hidden ">
        <div className="md:hidden">
          <h1 className=" markazi text-[2.75rem] md:text-[4rem] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[2.5rem] text-secondaryColor -mt-4">
            Chicago
          </h4>
        </div>
        <h3 className=" font-extrabold markazi md:text-4xl text-center  text-2xl text-white">
          Find a table for any occasion
        </h3>
        <div className=" flex items-center md:justify-between flex-col-reverse w-full h-full mt-5">
          <div className="  md:bg-secondaryColor md:py-16 mb-7 md:px-6 h-full w-full">
            <div className=" flex items-center max-w-[396px] md:gap-8 gap-3 w-full  mb-6">
              <SelectDates />
              <SelectTime />
            </div>
            <SelectDiner />
            <SelectOccasion />
            <SelectOptions />
            <div className="text-right mt-8">
              <Button text="Let's go" />
            </div>
          </div>
          <div className=" flex md:flex-col flex-row md:gap-5 gap-3 pb-8 w-full">
            <img className=" w-[173px]  md:w-[258px]" src={images.Outdoor} alt="" />
            <img className="w-[173px] md:w-[258px] " src={images.standard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
