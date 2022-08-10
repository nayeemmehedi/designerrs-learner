import React from "react";
import { DiCloud9 } from "react-icons/di";
import { useSelector } from "react-redux";
import "../../Onboarding.css";

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
          <DiCloud9 size="26" color="green" />
          <small>This Saterday</small>
        </div>
      </div>
    </div>
  );
}

export default OnboardingStepperChild1;
