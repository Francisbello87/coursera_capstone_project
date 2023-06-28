import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <nav className=" w-screen z-50  h-[80px] bg-white px-4 md:px-72  flex items-center justify-between">
      <FaCartArrowDown className="w-[25px] h-[25px] md:hidden" />
      <a href="">
        <img className=" " src={Logo} alt="Logo" />
      </a>
      <button className=" md:hidden" onClick={handleMenu}>
        {!isMenu ? (
          <HiMenu className="w-[25px] h-[25px]" />
        ) : (
          <AiOutlineClose className="w-[25px] h-[25px]" />
        )}
      </button>
      <ul className="md:flex hidden items-center uppercase font-Karla font-bold nav-Links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">Reservations</a>
        </li>
        <li>
          <a href="">Order Online</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
      {isMenu && (
        <ul className="bg-pryColor absolute mobile-navLinks py-5 text-black drop-shadow-lg font-bold top-20 w-full transition duration-500 flex items-center justify-center flex-col left-0">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Reservations</a>
          </li>
          <li>
            <a href="">Order Online</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
