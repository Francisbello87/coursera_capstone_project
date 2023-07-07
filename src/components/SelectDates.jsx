import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../redux/dropDownSlice";

const SelectDates = () => {
  const selectedOption = useSelector((state) => state.dropDown);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (event) => {
    dispatch(setSelectedOption(event.target.value));
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      <h1>Dropdown Example</h1>
      {/* <input type="date" value={selectedOption} onChange={handleOptionChange} />
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: selectedOption ? "green" : "default",
        }}
      >
        You selected: {selectedOption || "No option selected"}
      </div> */}
      <div onClick={handleDropdownToggle}>
        <span>{selectedOption || "Select a date"}</span>
        {isDropdownOpen && (
          <input
            type="date"
            value={selectedOption}
            onChange={handleOptionChange}
            onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing when clicking inside input
            min={getCurrentDate()}
          />
        )}
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: selectedOption ? "green" : "default",
        }}
      >
        You selected: {selectedOption || "No option selected"}
      </div>
    </div>
  );
};

export default SelectDates;
