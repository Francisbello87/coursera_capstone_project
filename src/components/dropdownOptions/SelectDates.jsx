import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOption } from "../../redux/dropDownSlice";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useClickOutside } from "../../utils/HelperFunctions";

const SelectDates = () => {
  const selectedOption = useSelector((state) => state.dropDown.selectedOption);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    setIsDropdownOpen(false);
  });

  const handleOptionChange = (value) => {
    dispatch(setSelectedOption(value));
    setIsDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      dispatch(setSelectedOption(new Date(storedDate)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (selectedOption) {
      localStorage.setItem("selectedDate", selectedOption.toISOString());
    }
  }, [selectedOption]);
 
  return (
    <div className="relative w-full cursor-pointer">
      <div className="" onClick={handleDropdownToggle}>
        <span
          className={`${
            selectedOption ? "bg-primaryColor text-white" : "bg-white"
          } flex items-center justify-between rounded-md py-3 md:px-3 px-1 text-sm md:text-lg   w-full`}
        >
          {selectedOption
            ? format(selectedOption, "dd-MM-yyyy")
            : "Select a date"}
          {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
        {isDropdownOpen && (
          <div className="dropdown" ref={dropdownRef}>
            <div className="calendar absolute z-20">
              <Calendar
                onChange={handleOptionChange}
                date={selectedOption}
                minDate={new Date()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectDates;
