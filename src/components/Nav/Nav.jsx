import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { images } from "../../constants";
import { FaCartArrowDown } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInitialsFromDisplayName } from "../../utils/HelperFunctions";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  const renderUserProfile = () => {
    if (user) {
      const initials = getInitialsFromDisplayName(user.displayName);
      console.log(initials);
      return (
        <div className="bg-primaryColor cursor-pointer rounded-full w-[2.1875rem] h-[2.1875rem] flex items-center justify-center text-white">
          {initials}
        </div>
      );
    } else {
      return (
        <Link to="/signin" className="text-black">
          Login
        </Link>
      );
    }
  };

  return (
    <nav className=" w-screen z-50  h-[5rem] bg-white px-4 md:px-64  flex items-center justify-between">
      <FaCartArrowDown className="w-[1.5625rem] h-[1.5625rem] md:hidden" />
      <Link to="/">
        <img src={images.Logo} alt="Logo" />
      </Link>
      <button className=" md:hidden" onClick={handleMenu}>
        {!isMenu ? (
          <HiMenu className="w-[1.5625rem] h-[1.5625rem]" />
        ) : (
          <AiOutlineClose className="w-[1.5625rem] h-[1.5625rem]" />
        )}
      </button>
      <ul className="md:flex hidden items-center uppercase font-Karla font-bold nav-Links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Menu</Link>
        </li>
        <li>
          <Link>Reservations</Link>
        </li>
        <li>
          <Link>Order Online</Link>
        </li>
        <li>{renderUserProfile()}</li>
      </ul>
      {isMenu && (
        <ul className="bg-pryColor absolute mobile-navLinks py-5 text-black drop-shadow-lg font-bold top-20 w-full transition duration-500 flex items-center justify-center flex-col left-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link>Reservations</Link>
          </li>
          <li>
            <Link>Order Online</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
