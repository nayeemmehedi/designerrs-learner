import React from "react";
import OnboardingStepperChild0 from "./OnboardingStepperChild/OnboardingStepperChild0";
// import "../Onboarding.css";
import OnboardingStepperChild1 from "./OnboardingStepperChild/OnboardingStepperChild1";
import OnboardingStepperChild2 from "./OnboardingStepperChild/OnboardingStepperChild2";
import StepperChild3 from "./OnboardingStepperChild/StepperChild3";

function OnboardingStepper() {
  return (
    <div>
      <OnboardingStepperChild0 />

      <div className="whiteColor">
        <OnboardingStepperChild1 />
        <OnboardingStepperChild2 />
        <StepperChild3 />
      </div>
    </div>
  );
}

export default OnboardingStepper;
