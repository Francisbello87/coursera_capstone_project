import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTime } from "../../redux/dropDownSlice";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { generateTimeOptions } from "../../utils/HelperFunctions";
import { useClickOutside } from "../../utils/HelperFunctions";

const TimeDropdown = () => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.dropDown.selectedTime);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeOptions = generateTimeOptions();
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (time) => {
    dispatch(setSelectedTime(time));
    setIsDropdownOpen(false);
    localStorage.setItem("selectedTime", time);
  };

  useEffect(() => {
    const storedTime = localStorage.getItem("selectedTime");
    if (storedTime) {
      dispatch(setSelectedTime(storedTime))
    }
  }, [dispatch]);
 
  return (
    <div className="relative w-full">
      <div className="" onClick={toggleDropdown}>
        <span
          className={`${
            selectedTime ? "bg-primaryColor text-white" : "bg-white"
          } flex items-center justify-between  rounded-md py-3 text-sm md:text-lg px-3 w-full cursor-pointer`}
        >
          {selectedTime ? selectedTime : "Select a time"}
          {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="dropdown absolute z-20 mt-2 bg-white w-full rounded-md shadow-lg max-h-40 overflow-y-auto">
            <ul className="time-options py-2 px-3">
              {timeOptions.map((time, index) => (
                <li
                  key={index}
                  className="dropdown-item cursor-pointer hover:bg-gray-200"
                  onClick={() => handleTimeSelect(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default TimeDropdown;
