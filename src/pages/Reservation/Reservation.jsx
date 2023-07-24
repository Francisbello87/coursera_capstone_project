import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { images } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  SelectDiner,
  SelectDates,
  SelectTime,
  SelectOccasion,
  SelectOptions,
} from "../../components";
import Button from "../../components/Button/Button";
import {
  setSelectedDiners,
  setRadioButtonSelection,
  setSelectedOccasion,
  setSelectedOption,
  setSelectedTime,
} from "../../redux/dropDownSlice";
import { setUser, setError } from "../../redux/authSlice";
const Reservation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const selectedOption = useSelector((state) => state.dropDown.selectedOption);
  const selectedTime = useSelector((state) => state.dropDown.selectedTime);
  const selectedDiners = useSelector((state) => state.dropDown.selectedDiners);
  const selectedOccasion = useSelector(
    (state) => state.dropDown.selectedOccasion
  );
  const radioButtonSelection = useSelector(
    (state) => state.dropDown.radioButtonSelection
  );
  const user = useSelector((state) => state.auth.user);

  const navigateToConfirmationPage = () => {
    if (
      !selectedOption ||
      !selectedTime ||
      !selectedDiners ||
      !selectedOccasion ||
      !radioButtonSelection
    ) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    } else if (user) {
      navigate("/confirmationpage");
    } else {
      navigate("/signin");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);

  return (
    <div className=" h-screen w-full">
      <Nav />
      <div className=" px-4 md:pt-24 md:px-64 pt-24 bg-brownColor md:bg-primaryColor h-full w-full flex flex-col justify-center">
        <div className="md:hidden mb-5">
          <h1 className=" markazi text-[2.75rem] md:text-[4rem] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[2.5rem] text-secondaryColor -mt-4">
            Chicago
          </h4>
        </div>
        <h3 className=" font-extrabold markazi md:text-4xl text-center  text-2xl text-white">
          Find a table for any occasion
        </h3>
        <div className=" flex items-center justify-between flex-col-reverse md:flex-row w-full h-full mt-5 md:overflow-y-hidden">
          <div className="  md:bg-secondaryColor md:py-12 mb-7 md:px-6  w-full md:max-w-[430px]">
            <div className=" flex items-center md:gap-8 gap-2 w-full  mb-6">
              <SelectDates
                selectedOption={selectedOption}
                setSelectedOption={(date) => dispatch(setSelectedOption(date))}
              />
              <SelectTime
                selectedTime={selectedTime}
                setSelectedTime={(time) => dispatch(setSelectedTime(time))}
              />
            </div>
            <SelectDiner
              selectedDiners={selectedDiners}
              setSelectedDiners={(diners) =>
                dispatch(setSelectedDiners(diners))
              }
            />
            <SelectOccasion
              selectedOccasion={selectedOccasion}
              setSelectedOccasion={(occasion) =>
                dispatch(setSelectedOccasion(occasion))
              }
            />
            <SelectOptions
              radioButtonSelection={radioButtonSelection}
              setRadioButtonSelection={(selection) =>
                dispatch(setRadioButtonSelection(selection))
              }
            />
            <div className="md:text-right flex justify-end w-full mt-8">
              <div className=" md:w-[50%] w-full text-right ">
                <Button onClick={navigateToConfirmationPage} text="Let's go" />
              </div>
            </div>
          </div>
          <div className=" flex md:flex-col flex-row items-center gap-3 w-full flex-1 justify-between pb-8">
            <img
              className=" min-w-[8.75rem] md:w-[260px]"
              src={images.Outdoor}
              alt=""
            />
            <img
              className="min-w-[8.75rem] md:w-[260px] "
              src={images.standard}
              alt=""
            />
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <p>Please fill all details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservation;
