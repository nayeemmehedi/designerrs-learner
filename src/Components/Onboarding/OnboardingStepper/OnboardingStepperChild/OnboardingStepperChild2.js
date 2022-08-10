import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsCheck } from "react-icons/bs";
import "../../Onboarding.css";

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
          Learner Agreement{" "}
        </div>
      </div>

      <div>
        <div className="pip" />
      </div>

      {/* starting community 2 */}

      <div className="ps-3 d-flex">
        <div
          className={
            1 < tick && tick < 4
              ? ` mt-1 ${tick == 2 ? "heightWidthborder" : "heightWidth"}`
              : "grayColor heightWidth1"
          }
        >
          {2 < tick && tick < 4 ? (
            <BsCheck color="white" className="mb-3 p-0" />
          ) : tick == 2 ? (
            <div className="heightWidthUnder"></div>
          ) : (
            ""
          )}
        </div>

        <div className="ps-2" style={{ fontSize: "14px" }}>
          Select your Problem briefs{" "}
        </div>
      </div>
      <div>
        <div className="pip" />
      </div>

      {/* starting community 3 */}

      <div className="ps-3 d-flex">
        <div
          className={
            2 < tick && tick < 4
              ? ` mt-1 ${tick == 3 ? "heightWidthborder" : "heightWidth"}`
              : "grayColor heightWidth1"
          }
        >
          {3 < tick && tick < 4 ? (
            <BsCheck color="white" className="mb-3 p-0" />
          ) : tick == 3 ? (
            <div className="heightWidthUnder"></div>
          ) : (
            ""
          )}
        </div>

        <div className="ps-2 mb-4" style={{ fontSize: "14px" }}>
          Download Activity file{" "}
        </div>
      </div>
    </div>
  );
}

export default OnboardingStepperChild2;
