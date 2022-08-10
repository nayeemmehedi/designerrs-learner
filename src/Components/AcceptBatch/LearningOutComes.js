import React from "react"
import CourseSection3 from "../Course/Section3"

const LearningOutComes = ({ details }) => {
  return (
    <div className="m-2">
      <CourseSection3
        courseOutcomes={{
          title: "Learning Outcomes for Learners",
          ...details?.course?.courseOutcomes,
          description: ''
        }}
      />
    </div>
  )
}

export default LearningOutComes
