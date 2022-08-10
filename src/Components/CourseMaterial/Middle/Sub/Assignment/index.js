import React from "react"
import LearnerAssignment from "./lerarnerIndex"
import MentorAssignment from "./MentorAssignment"

const index = () => {
  const role = localStorage.getItem("role")

  if (role == "learner") {
    return <LearnerAssignment></LearnerAssignment>
  } else if (role == "mentor") {
    return <MentorAssignment></MentorAssignment>
  }
}

export default index
