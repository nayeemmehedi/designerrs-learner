import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import "../../Onboarding.css";
import { useHistory } from "react-router-dom";

function OnboardingStepperChild0() {
  const history = useHistory();
  return (
    <div className=" py-4 OtherColor">
      <div className="d-flex">
        <div className="ms-4 txtColor cursor" onClick={() => history.goBack()}>
          <AiOutlineArrowLeft /> <span> back</span>
        </div>

        <div className="ms-5 txtColor cursor">
          <BsFilterRight /> <span> filter</span>
        </div>
      </div>
    </div>
  );
}

export default OnboardingStepperChild0;
