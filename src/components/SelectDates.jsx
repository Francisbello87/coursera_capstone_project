import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedOption } from "../redux/dropDownSlice";
import { Calendar } from "react-date-range";

import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SelectDates = () => {
  const selectedOption = useSelector((state) => state.dropDown.selectedOption);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    } else {
      localStorage.removeItem("selectedDate");
    }
  }, [selectedOption]);

  return (
    <div className="relative">
      <div onClick={handleDropdownToggle}>
        <span
          className={`${
            selectedOption ? "bg-primaryColor text-white" : "bg-white"
          } flex items-center justify-between py-3 px-3 min-w-[180px] w-full`}
        >
          {selectedOption
            ? format(selectedOption, "dd/MM/yyyy")
            : "Select a date"}
          {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>

        {isDropdownOpen && (
          <div className="dropdown">
            <div className="calendar absolute">
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
