import React, {useState} from "react";
import Nav from "../../components/Nav";
import SelectDates from "../../components/SelectDates";
import { images } from "../../constants";
import SelectButton from "../../components/SelectButton";

const Reservation = () => {
  // const [selectedDate, setSelectedDate] = useState(null);

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };
  // const generateTimeOptions = () => {
  //   const options = [];

  //   for (let hour = 0; hour < 24; hour++) {
  //     for (let minute = 0; minute < 60; minute += 15) {
  //       const formattedHour = hour.toString().padStart(2, "0");
  //       const formattedMinute = minute.toString().padStart(2, "0");
  //       const time = `${formattedHour}:${formattedMinute}`;
  //       options.push(time);
  //     }
  //   }

  //   return options;
  // };
  // const handleTimeSelect = (selectedTime) => {
  //   console.log("Selected time:", selectedTime);
  // };

  // const startTime = new Date();
  // const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000);
  // const interval = 15;
  // const label = "Time";

  // const renderOptions = () => {
  //   const timeOptions = generateTimeOptions();

  //   return timeOptions.map((time, index) => (
  //     <option key={index} value={time}>
  //       {time}
  //     </option>
  //   ));
  // };
  return (
    <div className="bg-primaryColor h-[100vh] w-full">
      <Nav />
      <div className=" md:py-40 py-20 px-4 md:px-72 ">
        <div className="md:hidden">
          <h1 className=" markazi text-[44px] md:text-[64px] text-pryColor">
            Little Lemon
          </h1>
          <h4 className="markazi font-semibold text-3xl md:text-[40px] text-[#EDEFEE] -mt-4">
            Chicago
          </h4>
        </div>
        <h3 className=" font-extrabold markazi md:text-4xl text-center  text-2xl mt-5 text-white">
          Find a table for any occasion
        </h3>

        <div className=" flex items-center justify-between w-full gap-5 mt-11">
          <div className=" bg-secondaryColor py-14 px-12 flex items-center h-[607px] justify-between gap-8 ">
            <SelectDates />
          
            {/* {selectedDate && <p>Selected Date: {selectedDate}</p>} */}
            {/* <SelectButton
              startTime={startTime}
              endTime={endTime}
              interval={interval}
              defaultValue={label}
              onSelect={handleTimeSelect}
            /> */}
          </div>
          <div className=" flex flex-col gap-4">
            <img src={images.Outdoor} alt="" />
            <img src={images.standard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
