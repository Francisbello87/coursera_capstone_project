// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setSelectedTime } from "../redux/dropDownSlice";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// const SelectTime = () => {
//   const dispatch = useDispatch();
//   const selectedTime = useSelector((state) => state.dropDown.selectedTime);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const generateTimeOptions = () => {
//     const currentTime = new Date();
//     const startTime = new Date(currentTime.getTime());
//     startTime.setHours(9, 0, 0); // Start time: 09:00
//     const endTime = new Date(currentTime.getTime());
//     endTime.setHours(17, 0, 0); // End time: 17:00
//     const interval = 15; // Interval between time options in minutes

//     const options = [];
//     let time = new Date(startTime);

//     while (time <= endTime) {
//       if (time > currentTime) {
//         const formattedTime = time.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });
//         options.push(formattedTime);
//       }
//       time.setMinutes(time.getMinutes() + interval);
//     }

//     return options;
//   };

//   const handleTimeChange = (time) => {
//     dispatch(setSelectedTime(time));
//     setIsDropdownOpen(false);
//     localStorage.setItem("selectedTime", time);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const timeOptions = generateTimeOptions();

//   useEffect(() => {
//     // Retrieve the selected time from localStorage on component mount
//     const storedTime = localStorage.getItem("selectedTime");
//     if (storedTime) {
//       dispatch(setSelectedTime(storedTime));
//     }
//   }, [dispatch]);

//   return (
//     <div className=" relative">
//       <span
//         className={`${
//           selectedTime ? "bg-primaryColor text-white" : "bg-white"
//         } flex items-center justify-between py-3 px-3 min-w-[180px] w-full cursor-pointer`}
//         onClick={toggleDropdown}
//       >
//         {selectedTime ? selectedTime : "Select a time"}
//         {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
//       </span>
//       {!isDropdownOpen && (
//         <div className="mt-2 bg-white  ">
//           {timeOptions.map((time, index) => (
//             <div
//               key={index}
//               className="py-2 px-3 cursor-pointer hover:bg-gray-200"
//               onClick={() => handleTimeChange(time)}
//             >
//               {time}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectTime;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTime } from "../redux/dropDownSlice";

const TimeDropdown = () => {
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.dropDown.selectedTime);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTimeSelect = (time) => {
    dispatch(setSelectedTime(time));
    setIsDropdownOpen(false);
  };

  const generateTimeOptions = () => {
    const options = [];

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const time = `${formattedHour}:${formattedMinute}`;
        options.push(time);
      }
    }

    return options;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="relative">
      <div onClick={toggleDropdown}>
        <span
          className={`${
            selectedTime ? "bg-primaryColor text-white" : "bg-white"
          } flex items-center justify-between py-3 px-3 min-w-[180px] w-full cursor-pointer`}
        >
          {selectedTime ? selectedTime : "Select a time"}
          {!isDropdownOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>

        {isDropdownOpen && (
          <div className="dropdown absolute mt-2 bg-white w-full rounded-md shadow-lg max-h-32 overflow-y-auto">
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
