import React from "react";

const SelectButton = ({
  startTime,
  endTime,
  interval,
  defaultValue,
  onSelect,
}) => {
  const generateTimeOptions = () => {
    const options = [];
    let currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      options.push(formattedTime);

      currentTime = new Date(currentTime.getTime() + interval * 60000); // Increment by interval minutes
    }

    return options;
  };

  const handleSelect = (event) => {
    const selectedOption = event.target.value;
    onSelect(selectedOption);
  };

  const timeOptions = generateTimeOptions();

  return (
    <select className="w-[200px] py-4 px-4  outline-none cursor-pointer rounded-md" defaultValue={defaultValue} onChange={handleSelect}>
      {timeOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectButton;
