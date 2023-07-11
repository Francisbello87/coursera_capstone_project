import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDiners } from "../redux/dropDownSlice";
import { FaAngleDown, FaAngleUp,  } from "react-icons/fa";
import { images } from "../constants";


const SelectDiner = () => {
  const dispatch = useDispatch();
  const selectedDiners = useSelector((state) => state.dropDown.selectedDiners);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDinersChange = (diners) => {
    dispatch(setSelectedDiners(diners));
    setIsDropdownOpen(false);
    localStorage.setItem("selectedDiner", diners);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen && selectedDiners) {
      setIsDropdownOpen(false);
    } else {
      setIsDropdownOpen(true);
    }
  };

  useEffect(() => {
    // Retrieve the selected time from localStorage on component mount
    const storedDiner = localStorage.getItem("selectedDiner");
    if (storedDiner) {
      dispatch( setSelectedDiners (storedDiner));
    }
  }, [dispatch]);
  return (
    <div className="mb-6">
      <div
        className={`${
          selectedDiners ? "bg-primaryColor text-white" : "bg-white"
        } flex items-center justify-between py-3 px-3 min-w-[180px] w-full cursor-pointer`}
        onClick={toggleDropdown}
      >
        <img src={selectedDiners ?images.people2 : images.people  } alt="" />
        <span>{selectedDiners ? selectedDiners : "Number of Diners"}</span>
        {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      {isDropdownOpen && (
        <div className="mt-2 bg-white">
          {[1, 2, 3, 4, 5].map((diners) => (
            <div
              key={diners}
              className="py-2 px-3 cursor-pointer hover:bg-secondaryColor"
              onClick={() => handleDinersChange(diners)}
            >
              {diners}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDiner;
