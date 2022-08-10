import React from "react";
import { DiCloud9 } from "react-icons/di";
import { useSelector } from "react-redux";
import course from "../../../../../Assets/Images/icons/course.svg"

// import "../../Onboarding.css";

function OnboardingStepperChild1() {
  const {onBoarding} = useSelector(state=> state.courseOnBoarding)
  console.log(onBoarding)
  return (
    <div className="child2">
      <div className="p-4 ">
        <div className="text-danger">
          <p style={{ height: "10px" }}>01</p>
          <p>{onBoarding?.sessionName} </p>
        </div>
        <div className="d-flex">
        <img src={course} alt="none" style={{height:'15px',width:'auto',color:'green'}}  />
          {/* <img src="" alt="" /> */}
          <small className='ms-2 text-secondary'>This Saterday</small>
        </div>
      </div>
    </div>
  );
}

export default OnboardingStepperChild1;
