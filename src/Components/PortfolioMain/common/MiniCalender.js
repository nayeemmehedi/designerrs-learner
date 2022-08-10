import React from "react";
import Calendar from "react-calendar";
import  "../portfolio.css"
import 'react-calendar/dist/Calendar.css';

export default function MiniCalender({ value, onChange, toggle }) {
  return (
    <div className="p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold p-2 text-center mt-2 mx-auto">Select Date</h5>
       {toggle && <h4 onClick={toggle} className="cursor ms-4">X</h4>}
      </div>
      <hr></hr>
      <Calendar onChange={onChange} value={value} onClick={toggle} />
    </div>
  );
}
