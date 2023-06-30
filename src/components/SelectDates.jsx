import React from 'react'

const SelectDates = () => {
    const generateDates = () => {
        const startDate = new Date();
        const dates = [];
    
        for (let i = 0; i < 10; i++) {
          const currentDate = new Date();
          currentDate.setDate(startDate.getDate() + i);
          dates.push(currentDate.toDateString());
        }
    
        return dates;
      };

      const renderOptions = () => {
        const dates = generateDates();
    
        return dates.map((date, index) => (
          <option key={index} value={date}>
            {date}
          </option>
        ));
      };
  return (
    <div>
       <select className=' w-[200px] py-4 px-4  outline-none cursor-pointer rounded-md'>
        <option value="">Select a date</option>
        {renderOptions()}
      </select>
    </div>
  )
}

export default SelectDates
