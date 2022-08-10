import React from "react"
import { useHistory, useParams } from "react-router-dom"
import axiosApi from "../../Helper/api"
import { AiOutlineClockCircle } from "react-icons/ai"

const RightCard = ({ details }) => {
  const { batchId } = useParams()
  const history = useHistory()

  const acceptInvite = () => {
    axiosApi
      .post(`/mentor/batch/${batchId}/invitation`)
      .then(res => {
        history.push("/dashboard")
      })
      .catch(err => {
        dispatch(notifyError("Invalid Operation"))
      })
  }
  return (
    <div>
      <img src={details?.course?.courseThumbnail?.link} alt="couse thumbnail" />
      <h2 className="fw-thin my-3">{details?.course?.courseName}</h2>
      <hr></hr>
      <div className="my-4">
        <div className="d-flex align-items-center">
          <AiOutlineClockCircle
            size="40"
            className="bg-white p-2"
            style={{ borderRadius: "50%", color: "#FF842B" }}
          />
          <small className="ms-2"> You have 48 hours to<br></br> accept this invite.</small>
        </div>{" "}
      </div>
      <button className="btn btn-main2" onClick={acceptInvite}>
        Accept Batch Invite
      </button>
    </div>
  )
}

export default RightCard
