import moment from "moment"
import React from "react"
import announceLogo from "../../Assets/Images/announce.svg"
import session from "../../Assets/Images/notification/session.svg"
import sessionFeedback from "../../Assets/Images/notification/sessionFeedback.svg"
import sessionCancel from "../../Assets/Images/notification/sessionCancel.svg"
import assignmentDeadline from "../../Assets/Images/notification/assignmentDeadline.svg"
import payment from "../../Assets/Images/notification/payment.svg"
import mentorYellowLogo from "../../Assets/Images/mentor_yellow.svg"
import { useHistory } from "react-router-dom"

const MentorUi = ({ i }) => {
  const history = useHistory()
  const logo = type => {
    switch (type) {
      case "mentor_batch_invite":
        return mentorYellowLogo
      case "mentor_invite":
        return mentorYellowLogo
      case "mentor_batch_allocated":
        return session
      case "mentor_reschedule_request_recieved":
        return session
      case "mentor_session_cancelation_rejected ":
        return sessionCancel
      case "mentor_session_rescheduled":
        return assignmentDeadline
      case "mentor_feedback_submmited":
        return session
      case "mentor_assignment_submitted":
        return session
      default:
        return announceLogo
    }
  }
  return (
    <div
      className={
        (i?.type == "mentor_invite" ||i?.type == "mentor_batch_invite")
          ? "bgColor p-3 fw-bold cursor d-flex align-items-center"
          : "d-flex align-items-center"
      }
    >
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
        <small
          className={
         (   i?.type == "mentor_invite" ||i?.type == "mentor_batch_invite")
              ? "fw-normal text-white"
              : "fw-normal text-secondary"
          }
        >
          Course Updates
        </small>
        <br></br>
        <span>
          {(i?.type == "mentor_invite" ||i?.type == "mentor_batch_invite") && <span>You are invited to mentor</span>}
        </span>
        <br></br>
        <span> {i?.objectName}</span>
        <br></br>
        <small
          className={
           ( i?.type == "mentor_invite" ||i?.type == "mentor_batch_invite")
              ? "fw-normal text-white"
              : "fw-normal text-secondary"
          }
        >
          {moment(i?.timestamp).format("LL")}
        </small>
        <button className="btn-main form-control" onClick={()=> history.push(`/mentorship/batch/${i?.batchId}/course/${i?.courseId}`)}>See Details</button>
      </div>
    </div>
  )
}

export default MentorUi
