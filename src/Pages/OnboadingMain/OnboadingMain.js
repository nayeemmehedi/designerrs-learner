import axios from "axios";
import React, { useEffect } from "react";
import Onboarding from "../../Components/Onboarding/Onboarding";

function OnboadingMain() {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  };

  return (
    <div>
      <Onboarding></Onboarding>
    </div>
  );
}

export default OnboadingMain;
