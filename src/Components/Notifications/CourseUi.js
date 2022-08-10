import moment from "moment"
import React from "react"
import announceLogo from "../../Assets/Images/announce.svg"
import session from "../../Assets/Images/notification/session.svg"
import sessionFeedback from "../../Assets/Images/notification/sessionFeedback.svg"
import sessionCancel from "../../Assets/Images/notification/sessionCancel.svg"
import assignmentDeadline from "../../Assets/Images/notification/assignmentDeadline.svg"
import payment from "../../Assets/Images/notification/payment.svg"

const CourseUi = ({ i }) => {
  const logo =(type) =>{
    switch(type){
      case "mentor_missed_session":
        return sessionCancel
      case "learner_missed_session":
        return sessionCancel
      case "learner_missed_3_session":
        return sessionCancel
      case "learner_sesionReacording_uploaded":
        return announceLogo
      case "learner_assignment_submitted":
        return session
      case "learner_assignment_status_updated":
        return session
      case "learner_feedback_submmited":
        return session
      case "learner_course_completed":
        return session
      case "learner_portfolio_completed":
        return session
      default :
        return announceLogo
    }
  }
  return (
    <div className="d-flex align-items-center">
      <img
        src={logo(i?.type)}
        alt="courseName"
        className="rounded-circle"
        style={{
          height: "50px",
          width: "50px",
          objectFit: "cover",
        }}
      />{" "}
      <div className="mx-3">
        <small className="fw-normal text-secondary">Course Updates</small>
        <br></br>
        <span> {i?.objectName}</span>
        <br></br>
        <small className="fw-normal text-secondary">{moment(i?.timestamp).format("LL")}</small>
       
      </div>
    </div>
  )
}

export default CourseUi
