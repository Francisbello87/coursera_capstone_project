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
