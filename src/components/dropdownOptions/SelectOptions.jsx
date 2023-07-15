import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRadioButtonSelection } from "../../redux/dropDownSlice";

const SelectOptions = () => {
  const radioButtonSelection = useSelector(
    (state) => state.dropDown.radioButtonSelection
  );
  const dispatch = useDispatch();

  const handleOptionChange = (option) => {
    dispatch(setRadioButtonSelection(option));
    console.log(option);
    localStorage.setItem("radioButtonSelection", option);
  };
  useEffect(() => {
    const storedOptions = localStorage.getItem("radioButtonSelection");
    if (storedOptions) {
      dispatch(setRadioButtonSelection(storedOptions))
    }
  }, [dispatch]);
  return (
    <div className=" text-white md:text-black">
      <h4 className=" font-bold markazi md:text-2xl text-2xl">
        Seating options
      </h4>
      <div className=" flex flex-col cursor-pointer">
        <label className="flex items-center justify-between w-full">
          Standard
          <input
            type="radio"
            value="standard"
            checked={radioButtonSelection === "standard"}
            onChange={() => handleOptionChange("standard")}
            className="radioBtn"
          />
        </label>
        <label className="flex items-center justify-between w-full">
          Outdoor
          <input
            type="radio"
            value="outdoor"
            checked={radioButtonSelection === "outdoor"}
            onChange={() => handleOptionChange("outdoor")}
            className="radioBtn"
          />
        </label>
      </div>
    </div>
  );
};

export default SelectOptions;
