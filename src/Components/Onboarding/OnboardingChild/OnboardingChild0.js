import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DownloadFile from "./DownloadFile";
import JoinCommunity from "./JoinCommunity";
import LearnerAgreement from "./LearnerAgreement";
import SelectProblem from "./SelectProblem";

function OnboardingChildMain() {
  const [bordingValue, setBordingValue] = useState(0);

  const value = useSelector((state) => state.onboarding);

  useEffect(() => {
    setBordingValue(value);
  }, [value]);

  const OnboardingComponent = (value) => {
    switch (value) {
      case 0:
        return <JoinCommunity />;

      case 1:
        return <LearnerAgreement />;

      case 2:
        return <SelectProblem />;

      case 3:
        return <DownloadFile />;

      default:
        return <JoinCommunity />;
    }
  };

  return <div>{OnboardingComponent(bordingValue)}</div>;
}

export default OnboardingChildMain;
