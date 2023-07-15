import React from "react";
import { SpecialDishes } from "../../utils/data";
import { MdDeliveryDining } from "react-icons/md";
import { motion } from "framer-motion";

const SpecialDish = () => {
  return (
    <div className=" grid md:grid-cols-3 md:mt-11 gap-8 mt-6">
      {SpecialDishes.map((special, index) => (
        <div key={special.id}>
          <div  className=" w-[14.625rem] hidden md:block">
            <img src={special.image} alt="" />
            <div className="bg-secondaryColor py-6 px-4 max-h-[15.1875rem] rounded-b-lg">
              <span className="flex items-center justify-between mb-5">
                <h5 className=" font-bold markazi text-[1.125rem]">
                  {special.title}
                </h5>
                <p className=" text-priceColor font-bold text-sm">
                  $ {special.price}
                </p>
              </span>
              <p className=" text-sm text-primaryColor max-h-[5rem]">
                {special.desc}
              </p>

              <span className="flex items-center mt-10 justify-between">
                <p className="font-bold">Order a delivery</p>
                <MdDeliveryDining />
              </span>
            </div>
          </div>
          <div  className=" bg-secondaryColor w-full md:hidden">
            <div className=" py-2 px-4 flex gap-4 items-center justify-center">
              <span className="flex  flex-col mb-5">
                <h5 className=" font-bold markazi text-[1.125rem]">
                  {special.title}
                </h5>
                <p className=" text-xs text-primaryColor mb-9 max-w-[13.375rem] max-h-[2.625rem]">
                  {special.desc}
                </p>
                <p className=" text-priceColor font-bold text-base">
                  $ {special.price}
                </p>
              </span>
              <img className="w-[6.4375rem] h-[5.875rem]" src={special.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialDish;
