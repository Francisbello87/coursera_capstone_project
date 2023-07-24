import React from "react";
import { motion } from 'framer-motion';

const Button = ({ onClick, text }) => {
  
  return (
    <div>
      <motion.button
        onClick={onClick}
        whileInView={{ opacity: [0, 1] }}
        whileTap={{ scale: 1.1 }}
        className=" hover:bg-yellowColor w-full  drop-shadow shadow-pryColor font-Karla font-bold md:text-[1.125rem] transition duration-150 bg-pryColor rounded md:rounded-[1rem] md:py-4 md:px-9 px-4 py-2"
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;
