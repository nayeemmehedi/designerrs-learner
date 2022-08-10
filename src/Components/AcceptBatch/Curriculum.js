import React from "react"
import CourseSection7 from "../Course/Section7"

const Curriculum = ({ details }) => {
  return (
    <div className="m-2">
      <CourseSection7
        modules={details?.course?.modules}
        title={"Curriculum"}
      />
    </div>
  )
}

export default Curriculum
