import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOccasion } from "../../redux/dropDownSlice";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { images } from "../../constants";
import { useClickOutside } from "../../utils/HelperFunctions";

const SelectOccasion = () => {
  const dispatch = useDispatch();
  const selectedOccasion = useSelector(
    (state) => state.dropDown.selectedOccasion
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleOccasionChange = (occasions) => {
    dispatch(setSelectedOccasion(occasions));
    setIsDropdownOpen(false);
    localStorage.setItem("selectedOccasion", occasions);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen && selectedOccasion) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    const storedOccasion = localStorage.getItem("selectedOccasion");
    if (storedOccasion) {
      dispatch(setSelectedOccasion(storedOccasion));
    }
  }, [dispatch]);
  return (
    <div className="relative">
      <div
        className={`${
          selectedOccasion ? "bg-primaryColor text-white" : "bg-white"
        } flex items-center justify-between  text-sm md:text-lg py-3 rounded-md px-3 min-w-[180px] w-full cursor-pointer`}
        onClick={toggleDropdown}
      >
        <img src={selectedOccasion ? images.cheers : images.cheers2} alt="" />
        <span>{selectedOccasion ? selectedOccasion : "Occasions"}</span>
        {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {isDropdownOpen && (
        <div className="mt-2 bg-white absolute z-20 w-full" ref={dropdownRef}>
          {["Birthday", "Engagement", "Anniversary", "Graduation"].map(
            (occasions) => (
              <div
                key={occasions}
                className="py-2 px-3 cursor-pointer border flex items-center justify-center hover:bg-secondaryColor"
                onClick={() => handleOccasionChange(occasions)}
              >
                {occasions}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SelectOccasion;
