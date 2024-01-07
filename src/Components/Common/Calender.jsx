import React from 'react';
import './calender.css'; // Import your CSS file

const Calendar = ({data , width}) => {
  return (
    <div className="custom-select-container">
      <select className={`custom-select ${width} `}>
        <option value="option1">{data}</option>
       
      </select>
      <div className="custom-arrow-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <path d="M3.83889 0.462036L0 4.30093L10.237 14.538L20.4741 4.30093L16.6352 0.462036L10.237 6.86019L3.83889 0.462036Z" fill="#FF8080"/>
</svg>
      </div>
    </div>
  );
};

export default Calendar;
