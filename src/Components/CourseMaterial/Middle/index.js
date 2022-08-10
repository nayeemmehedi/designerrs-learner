import React, { useEffect, useState } from "react"
import moment from "moment"
import tickCal from "../../../Assets/Images/tickCalender.svg"
import StudyMaterial from "./Sub/StudyMaterial"
import Assignment from "./Sub/Assignment"
import { useSelector } from "react-redux"

import CustomModal from "../../PortfolioMain/common/CustomModal"
import { FaTimes } from "react-icons/fa"
import { GiSandsOfTime } from "react-icons/gi"
import { useHistory } from "react-router-dom"
import { BsCalendarX } from "react-icons/bs"
import Mentor from "./Sub/Mentor"

const demoData = [
  {
    id: 0,
    title: "Timings: 11AM to 2PM",
  },
  {
    id: 1,
    title: "Timings: 2PM to 5PM",
  },
]

const Middle = ({ sessionInfo, active, setActive }) => {
  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)
  const [cancle, setCancle] = useState(false)
  const [nextBtn, setNextBtn] = useState(false)
  const history = useHistory()
  const role = localStorage.getItem("role")

  return (
    <div className="courseMaterial" id="courseMaterial">
      {/* Top */}
      <div className="topMain">
        <div>
          <small className="text-secondary">
            Session {sessionInfo?.sessionNumber}
          </small>
          <p className="fw-bold"> {sessionInfo?.sessionName}</p>
          <h5>{sessionInfo?.session?.sessionName}</h5>
        </div>
        <div className="additon  mt-4">
          {role == "mentor" && (
            <BsCalendarX
              className="cancleSessionCalender"
              style={{ fontSize: "24px", color: "#CD2026", cursor: "pointer" }}
              onClick={togglModal}
            ></BsCalendarX>
          )}

          <div className="bg-white p-3 rounded-circle">
            <img src={tickCal} alt="calender" />
          </div>
          <div className="mx-3 mt-2 Attended">
            <span className="text-secondary">Attended on</span>
            <p className="fw-bold">
              {moment(sessionInfo?.createdAt).format("ll")}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-5 middleBar">
          <span
            onClick={() => setActive("StudyMaterial")}
            style={
              active == "StudyMaterial"
                ? {
                    borderBottom: "3px solid #cd2026",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }
                : { borderBottom: "3px solid #daf4df", cursor: "pointer" }
            }
            className="cursors  py-2"
          >
            Study Material
          </span>{" "}
          <span
            onClick={() => setActive("Assignment")}
            className="cursors  py-2"
            style={
              active == "Assignment"
                ? {
                    borderBottom: "3px solid #cd2026",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }
                : { borderBottom: "3px solid #daf4df", cursor: "pointer" }
            }
          >
            Assignment
          </span>
          {role == "mentor" && (
            <span
              onClick={() => setActive("Mentor")}
              className="cursors  py-2"
              style={
                active == "Mentor"
                  ? {
                      borderBottom: "3px solid #cd2026",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }
                  : { borderBottom: "3px solid #daf4df", cursor: "pointer" }
              }
            >
              Mentor Guidelines
            </span>
          )}
          {role == "mentor" && (
            <span
              className="checkClander"
              onClick={() => history.push("/calender")}
            >
              <img src={tickCal} alt="calender"></img>
            </span>
          )}
        </div>
      </div>

      {active === "StudyMaterial" && <StudyMaterial />}
      {active === "Assignment" && <Assignment />}

      {active === "Mentor" && <Mentor />}

      <CustomModal
        toggle={togglModal}
        modal={ModalOpen}
        size={nextBtn ? "md" : "lg"}
      >
        <div className="p-4">
          <div className="d-flex justify-content-between">
            <h6>Request for Cancellation</h6>
            <FaTimes
              onClick={togglModal}
              style={{ cursor: "pointer", width: "40px" }}
            ></FaTimes>
          </div>
          <hr></hr>

          <h5 className={!nextBtn && "txtColor"}>17 April 2021, Sunday</h5>
          <small>Make sure you only cancel sessions on emergencies as </small>
          <br></br>
          <small>it affects your learner’s learning experience.</small>
          <br></br>
          <br></br>
          {!nextBtn && (
            <small style={{ color: "#616161" }}>Sessions on this day</small>
          )}
          {nextBtn && <b>Please give a reason</b>}

          {!nextBtn && (
            <div>
              <div className="d-flex justify-content-around">
                {demoData.map((el, idx) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#EBEBEB",
                        margin: "0px 4px 0px 0px",
                      }}
                      className="px-2 py-2"
                    >
                      <p className="txtColor">
                        <b>{el.title}</b>
                      </p>

                      <small>Batch: 0080-onl-fsux-6April21</small>
                      <br></br>
                      <small>Session 7</small>
                      <br></br>
                      <b>Information Architecture: Content Strategy</b>
                      <p>
                        Updated Session Date:<br></br>{" "}
                        <span className="txtColor">18 April 2021</span>{" "}
                      </p>

                      {!cancle && (
                        <button
                          className="px-2 py-2"
                          style={{
                            border: "none",
                            backgroundColor: "#CD2026",
                            color: "#fff",
                            width: "100%",
                          }}
                          onClick={() => setCancle(true)}
                        >
                          <small>Cancel this Session</small>
                        </button>
                      )}

                      {cancle && el.id == idx && (
                        <button
                          className="px-2 py-2"
                          style={{
                            border: "none",
                            backgroundColor: "#EBEBEB",
                            color: "#CD2026",
                            width: "100%",
                            border: "1px dotted #7D7D7D",
                          }}
                        >
                          <GiSandsOfTime></GiSandsOfTime>
                          <small>Request for Cancellation Sent</small>
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>

              <hr></hr>
              <button
                className="py-2 "
                style={{
                  width: "100%",
                  border: "1px dotted #7D7D7D",
                  color: "#7D7D7D",
                }}
                onClick={() => setNextBtn(true)}
              >
                Go Next
              </button>
            </div>
          )}

          {nextBtn && (
            <>
              <div>
                <textarea
                  style={{ resize: "none" }}
                  rows="5"
                  cols="50"
                  type="textarea"
                  className="form-control"
                ></textarea>

                <hr></hr>

                <button
                  className="py-2 "
                  style={{
                    border: "none",
                    backgroundColor: "#CD2026",
                    width: "100%",
                    color: "#fff",
                  }}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
      </CustomModal>
    </div>
  )
}

export default Middle
