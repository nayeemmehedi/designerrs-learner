import React from "react";

import DashBoardChild from "../../Components/Dashboard/DashBoardChild/DashBoardChild";

import MentorOnboarding from "../MentorOnboarding";

function DashBoardMain() {

  const role = localStorage.getItem("role")

  return (
    <div>
      {role == "learner" && <DashBoardChild />}
      {role == "mentor" && <MentorOnboarding />}
    </div>
  );
}

export default DashBoardMain;
