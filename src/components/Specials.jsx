import React from "react";
import SpecialDish from "./SpecialDish";
import { motion } from "framer-motion";


const Specials = () => {
  return (
    <div className=" py-28 md:pt-40 w-full px-4 md:px-72">
      <div className="flex items-center justify-between">
        <h3 className="markazi md:text-[40px] text-[24px] font-semibold">
          {" "}
          This week's specials!
        </h3>
        <motion.button whileTap={{scale: 1.1}} className=" drop-shadow hover:bg-[#f6d964] shadow-pryColor font-Karla font-bold md:text-[18px] text-sm bg-pryColor rounded-[16px] md:py-4 md:px-9 px-4 py-2">
          Online Menu
        </motion.button>
      </div>
      <SpecialDish/>
    </div>
  );
};

export default Specials;
