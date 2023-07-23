import React, { useState } from "react";
import { Testimonials } from "../../utils/data";

const Testimonial = () => {
  return (
    <div className=" bg-primaryColor w-full font-Karla flex items-center justify-center text-white flex-col py-12 px-4 md:px-64">
      <h3 className="markazi font-bold text-2xl text-center md:text-[2.5rem] ">Testimonials</h3>
      <div className=" flex items-center w-full overflow-x-scroll scrollbar-none gap-4 md:gap-5 md:overflow-x-visible mt-10">
        {Testimonials.map((testimonial, index) => (
          <div key={testimonial.id} className=" flex">
            <div  className="bg-secondaryColor rounded-md drop-shadow-lg min-w-[11.875rem] px-4 py-12">
              <span className=" flex items-center justify-between gap-3">
                <img
                  className=" w-14 min-h-[3.8125rem] rounded-md drop-shadow-sm"
                  src={testimonial.image}
                  alt="user profile"
                />
                <p className=" text-xs font-medium md:text-sm flex-1 text-primaryColor">{testimonial.name}</p>
              </span>
              <p className=" text-xs mt-2 text-black text-left max-h-[3.75rem] mb-7">{testimonial.testi}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" hidden md:flex items-center justify-between max-w-[5.8125rem] w-full py-10">
        <div className=" rounded-full cursor-pointer  w-[1.4375rem] h-[1.4375rem] bg-white"></div>
        <div className=" rounded-full cursor-pointer  w-[1.4375rem] h-[1.4375rem] bg-pryColor"></div>
        <div className=" rounded-full cursor-pointer  w-[1.4375rem] h-[1.4375rem] bg-white"></div>
      </div>
    </div>
  );
};

export default Testimonial;
