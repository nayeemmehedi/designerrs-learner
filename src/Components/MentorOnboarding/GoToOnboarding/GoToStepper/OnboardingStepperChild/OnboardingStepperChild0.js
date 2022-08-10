import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { useHistory } from "react-router-dom";
// import "../../Onboarding.css";

function OnboardingStepperChild0() {

  const history = useHistory();


  return (
    <div className=" py-4 OtherColor">
      <div className="d-flex">
        <div className="ms-4 text-danger"  onClick={() => history.goBack()}>
          <AiOutlineArrowLeft /> <span> back</span>
        </div>

        <div className="ms-5 text-danger">
        <GiSettingsKnobs /> <span className="ms-2">Filter</span>

        </div>
      </div>
    </div>
  );
}

export default OnboardingStepperChild0;
