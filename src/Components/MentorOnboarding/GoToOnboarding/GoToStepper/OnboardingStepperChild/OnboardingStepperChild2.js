import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsCheck } from "react-icons/bs";
// import "../../Onboarding.css";

function OnboardingStepperChild2() {
  const [tick, settick] = useState(0);

  const value = useSelector((state) => state.onboarding);

  useEffect(() => {
    settick(value);
  }, [value]);

  return (
    <div className="pt-5">
      <div className="ps-3 d-flex">
        <div className="bg-success mt-1 divbox">
          {" "}
          {0 < tick && tick < 4 ? (
            <BsCheck color="white" className="mb-3 p-0" />
          ) : (
            ""
          )}{" "}
        </div>
        <div className="ps-2" style={{ fontSize: "14px" }}>
          Join detaux comunity{" "}
        </div>
      </div>

      <div>
        <div className="pip" />
      </div>

      <div className="ps-3 d-flex">
        <div
          className={
            0 < tick && tick < 4
              ? ` mt-1 ${tick == 1 ? "heightWidthborder" : "heightWidth"}`
              : "grayColor heightWidth1"
          }
        >
          {1 < tick && tick < 4 ? (
            <BsCheck color="white" className="mb-3 p-0" />
          ) : tick == 1 ? (
            <div className="heightWidthUnder"></div>
          ) : (
            ""
          )}
        </div>

        <div className="ps-2" style={{ fontSize: "14px" }}>
          Mentor Agreement{" "}
        </div>
      </div>


     

     
    </div>
  );
}

export default OnboardingStepperChild2;
