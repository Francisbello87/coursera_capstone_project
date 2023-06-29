import React from "react";
import Logo2 from "../assets/Logo2.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" px-4 md:px-72 py-12 bg-primaryColor flex md:gap-20 items-center justify-between">
      <div>
        <img className="w-[87px] md:[132px]" src={Logo2} alt="" />
      </div>
      <div className=" flex justify-between flex-col md:flex-row gap-4 w-full">
        <div>
          <p className=" text-pryColor">Navigation</p>
          <ul className="grid grid-cols-3 gap-2 text-xs md:mt-4 footer-navLinks md:text-sm truncate w-full md:grid-cols-1 text-white uppercase font-Karla font-bold">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li className=" truncate">
              <a href="">Reservations</a>
            </li>
            <li className="truncate">
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-pryColor md:mb-4">Contact</p>

          <span className=" text-white text-xs md:text-sm">
            <p>Illinois, Chicago</p>
            <p className=" my-2">+1 (765) 456 7654</p>
            <p>info@littlelemon.com</p>
          </span>
        </div>
        <div>
          <p className=" text-pryColor">Social Media Links</p>
          <div className=" flex items-center w-[50%] md:w-[80%] mt-2 justify-between">
            <BsFacebook className=" text-lg md:text-2xl hover:text-[#4267B2] cursor-pointer " />
            <BsTwitter className=" text-lg md:text-2xl hover:text-[#1DA1F2] cursor-pointer " />
            <BsInstagram className=" text-lg md:text-2xl hover:text-[#E1306C] cursor-pointer " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
