import React, { useEffect, useState } from "react"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { GiSettingsKnobs } from "react-icons/gi"
import Info from "../../Assets/Images/info.svg"
import weekChart from "../../Assets/Images/icons/weekChart.svg"
import stopTimer from "../../Assets/Images/icons/stopTimer.svg"
import reload from "../../Assets/Images/icons/reload.svg"
import { Input } from "reactstrap"
import moment from "moment"
import {
  getWeekData,
  getEffortData,
} from "../../Store/PandingAssignment/action"
import { useDispatch, useSelector } from "react-redux"
import Filter from "./Filter"
import { useHistory } from "react-router-dom"
import checkBord from "../../Assets/Images/icons/checkBord.svg"
import Loading from "../Common/Loading"
import { toCapitalize } from "../../Helper/Custom/toCapitalize"

function padTo2Digits(num) {
  return num.toString().padStart(2, "0")
}

export function convertMsToH(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24

  return hours
}

export function convertMsToHM(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  // 👇️ if seconds are greater than 30, round minutes up (optional)
  minutes = seconds >= 30 ? minutes + 1 : minutes

  minutes = minutes % 60

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  hours = hours % 24

  return `${padTo2Digits(hours)} hours ${padTo2Digits(minutes)} minutes`
}

const PandingAssignment = () => {
  const history = useHistory()
  const [filterOpen, setFilterOpen] = useState(false)

  const [pandingAssignmentData, setPandingAssignmentData] = useState([])
  const dispatch = useDispatch()

  const allWeekData = useSelector(
    state => state?.PandingAssignment?.weekData?.sessions
  )
  const allEffortData = useSelector(state => state?.PandingAssignment?.Effort)

  console.log("weekData", allEffortData);
  console.log(
    "assignments",
    allWeekData?.map(i => i?.session?.assignments)
  )

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  useEffect(() => {
    let startOfWeek = moment().startOf("week").toDate().toISOString()
    let endOfWeek = moment().endOf("week").toDate().toISOString()
    console.log(startOfWeek, endOfWeek)
    dispatch(getWeekData(startOfWeek, endOfWeek))
    dispatch(getEffortData(startOfWeek, endOfWeek))
  }, [])

  const styles = {
    position: "absolute",
    height: "4.16%",
    bottom: "-16px",
    backgroundColor: "#EBEBEB",
    width: "100%",
    borderTop: "2px silid red",
  }

  const convertHour = time => {
    let seconds = Math.floor(time / 1000)
    let minutes = Math.floor(time / 60)
    let hours = Math.floor(time / 60)

    seconds = seconds % 60

    minutes = seconds >= 30 ? minutes + 1 : minutes

    minutes = minutes % 60

    hours = hours % 24

    const styles = {
      position: "absolute",
      height: ` ${4.16 * Math.abs(`${padTo2Digits(hours)}`)}` + "%",
      bottom: "-16px",
      backgroundColor: "#EBEBEB",
      width: "100%",
      borderTop: "3px solid red",
    }

    return styles
  }

  const dayLatter = day => {
    let weekday = new Date(day).toLocaleString("en-us", { weekday: "long" })
    return weekday.substring(0, 2)[0]
  }

  if (!allWeekData) {
    return <Loading></Loading>
  }

  return (
    <div className="row pandingAssignment">
      <div className="d-flex">
        <div className="col-md-3 my-3 order-md-first">
          <div className="m-3">
            <button
              style={{
                border: "none",
                color: "#CD2026",
                backgroundColor: "transparent",
              }}
              onClick={() => history.push("/dashboard")}
            >
              <AiOutlineArrowLeft></AiOutlineArrowLeft> Back to Dashboard
            </button>
            <h4 style={{ color: "#1F1F1F", margin: "20px 0px" }}>
              Your efforts
            </h4>

            <div style={{ width: "200px" }}>
              <Input name="course" type="select" className="mb-3">
                <option>This Week</option>
              </Input>
            </div>

            <small className="my-2">
              Avg {convertMsToH(allEffortData?.average?.[0]?.avgTime)} hrs per
              week
            </small>

            <div className="d-flex">
              {allEffortData?.days?.map((day, index) => {
                return (
                  <div
                    style={{
                      width: "14px",
                      height: "120px",
                      position: "relative",

                      marginLeft: "5px",
                    }}
                  >
                    <p style={convertHour(day.Time)}></p>
                    <p style={{ position: "absolute", bottom: "-46px" }}>
                      <b>{dayLatter(day.Date)}</b>
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 p-3" style={{ backgroundColor: "white" }}>
              <small style={{ color: "#570DB4", marginTop: "55px" }}>
                <img
                  style={{ width: "24px", height: "28px" }}
                  src={stopTimer}
                  alt="stopTimmer"
                ></img>
              </small>
              <p
                className="mt-2 mb-0"
                style={{ color: "#1F1F1F", fontWeight: "500" }}
              >
                {convertMsToHM(allEffortData?.average?.[0]?.avgTime)}
              </p>
              <small style={{ color: "#414141" }}>
                Avg Time spent on deliverables
              </small>
            </div>

            <div className="mt-4 p-3" style={{ backgroundColor: "white" }}>
              <small style={{ marginTop: "55px" }}>
                <img
                  src={reload}
                  alt="reload"
                  style={{ width: "24px", height: "28px" }}
                />
              </small>
              <p
                className="mt-2 mb-0"
                style={{ color: "#1F1F1F", fontWeight: "500" }}
              >
                02 Iterations
              </p>
              <small style={{ color: "#414141" }}>
                Avg no. of iterations you require
              </small>
            </div>
            <div></div>
          </div>
        </div>

        <div className="col-md-8 order-md-last">
          <div className="d-flex mt-4 justify-content-between">
            <p
              className="headlinePandingAssignment"
              style={{ color: "#1F1F1F", fontSize: "24px" }}
            >
              Complete your pending assignments
            </p>
            <div
              className="d-flex"
              style={{ fontSize: "20px", marginRight: "30px" }}
            >
              <span className="txtColor cursor" onClick={toggleFilter}>
                <GiSettingsKnobs />{" "}
                <span className=" pandingAssignmetfilterText">Filter</span>
              </span>
            </div>
          </div>

          {allWeekData?.map((data, index) => {
            return (
              <div
                style={{ backgroundColor: "white", padding: "40px" }}
                className="my-5"
              >
                <div>
                  <small>Session {index + 1}</small>
                  <p className="pSessionName">{data?.session?.sessionName}</p>
                </div>

                {data?.session?.assignments?.map(
                  (assignment, indexAssignment) => {
                    return (
                      <div className="row">
                        <hr></hr>
                        <div className="col-8">
                          <small style={{ color: "#414141" }}>
                            Assignment {indexAssignment + 1}
                          </small>
                          <p
                            className="my-1 mb-3 pAssignmentTitle"
                            style={{ color: "#CD2026" }}
                          >
                            {assignment?.assignmentTitle}
                          </p>

                          <small style={{ color: "#414141" }}>
                            INSTRUCTIONS
                          </small>
                          <br></br>
                          <small
                            style={{ fontSize: "14px", marginLeft: "20px" }}
                          >
                            {assignment?.assignmentInstructions}
                          </small>
                        </div>
                        <div className="col-4">
                          <div
                            className="d-flex"
                            style={{ marginLeft: "85px" }}
                          >
                            <img
                              src={
                                assignment?.status == "submitted"
                                  ? checkBord
                                  : Info
                              }
                              alt="info"
                              style={{ width: "40px", height: "40px" }}
                            />

                            <div className="ms-3">
                              <p className="mb-0 sessionStatus">Status</p>

                              <h6 className="mb-0 sessionStatus">
                                {toCapitalize(assignment?.status)}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                )}
              </div>
            )
          })}

          {/*     <div
            style={{ backgroundColor: "white", padding: "40px" }}
            className="my-5"
          >
            <div>
              <small>Session 1</small>
              <p style={{ fontSize: "20px" }}>Introduction to UX/UI Design</p>
            </div>

            <div className="row">
              <hr></hr>
              <div className="col-md-8">
                <small style={{ color: "#414141" }}>Assignment 1</small>
                <h5 className="my-1 mb-3" style={{ color: "#CD2026" }}>
                  Study Navigation Patterns from different apps
                </h5>

                <small style={{ color: "#414141" }}>INSTRUCTIONS</small>

                <ol style={{ fontSize: "16px", marginTop: "10px" }}>
                  <li style={{ color: "#414141" }}>
                    {" "}
                    <small>
                      Go through the apps in your mobile phone and find
                      different kinds of navigation.
                    </small>
                  </li>
                  <li style={{ color: "#414141" }}>
                    {" "}
                    <small>
                      Name the type of navigation pattern in your example.
                    </small>
                  </li>
                </ol>
              </div>
              <div className="col-md-4">
                <div className="d-flex" style={{ marginLeft: "85px" }}>
                  <div>
                    <img
                      src={Info}
                      alt="info"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <p className="mb-0">Status</p>

                    <h6 className="mb-0">Not Submitted</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <hr></hr>
              <div className="col-md-8">
                <small style={{ color: "#414141" }}>Assignment 2</small>
                <h5 className="my-1 mb-3" style={{ color: "#CD2026" }}>
                  Journal today’s session
                </h5>

                <small style={{ color: "#414141" }}>INSTRUCTIONS</small>

                <ol style={{ fontSize: "16px", marginTop: "10px" }}>
                  <li style={{ color: "#414141" }}>
                    {" "}
                    <small>
                      Go through the apps in your mobile phone and find
                      different kinds of navigation.
                    </small>
                  </li>
                  <li style={{ color: "#414141" }}>
                    {" "}
                    <small>
                      Name the type of navigation pattern in your example.
                    </small>
                  </li>
                </ol>
              </div>
              <div className="col-md-4">
                <div className="d-flex" style={{ marginLeft: "150px" }}>
                  <div>
                    <img
                      src={reload}
                      alt="info"
                      style={{ width: "30px", height: "35px" }}
                    />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <p className="mb-0">Status</p>

                    <h6 className="mb-0">Rework</h6>
                  </div>
                </div>
              </div>
            </div>
          </div> /*}









{/*


          <div
          style={{ backgroundColor: "white", padding: "40px" }}
          className="my-5"
        >
          <div>
            <small>Session 2</small>
            <p style={{ fontSize: "20px" }}>Introduction to UX/UI Design</p>
          </div>

          <div className="row">
            <hr></hr>
            <div className="col-md-8">
              <small style={{ color: "#414141" }}>Assignment 1</small>
              <h5 className="my-1 mb-3" style={{ color: "#CD2026" }}>
                Study Navigation Patterns from different apps
              </h5>

              <small style={{ color: "#414141" }}>INSTRUCTIONS</small>

              <ol style={{ fontSize: "16px", marginTop: "10px" }}>
                <li style={{ color: "#414141" }}>
                  {" "}
                  <small>
                    Go through the apps in your mobile phone and find
                    different kinds of navigation.
                  </small>
                </li>
                <li style={{ color: "#414141" }}>
                  {" "}
                  <small>
                    Name the type of navigation pattern in your example.
                  </small>
                </li>
              </ol>
            </div>
            <div className="col-md-4">
              <div className="d-flex" style={{ marginLeft: "85px" }}>
                <div>
                  <img
                    src={Info}
                    alt="info"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p className="mb-0">Status</p>

                  <h6 className="mb-0">Not Submitted</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <hr></hr>
            <div className="col-md-8">
              <small style={{ color: "#414141" }}>Assignment 2</small>
              <h5 className="my-1 mb-3" style={{ color: "#CD2026" }}>
                Journal today’s session
              </h5>

              <small style={{ color: "#414141" }}>INSTRUCTIONS</small>

              <ol style={{ fontSize: "16px", marginTop: "10px" }}>
                <li style={{ color: "#414141" }}>
                  {" "}
                  <small>
                    Go through the apps in your mobile phone and find
                    different kinds of navigation.
                  </small>
                </li>
                <li style={{ color: "#414141" }}>
                  {" "}
                  <small>
                    Name the type of navigation pattern in your example.
                  </small>
                </li>
              </ol>
            </div>
            <div className="col-md-4">
              <div className="d-flex" style={{ marginLeft: "150px" }}>
                <div>
                  <img
                    src={reload}
                    alt="info"
                    style={{ width: "30px", height: "35px" }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p className="mb-0">Status</p>

                  <h6 className="mb-0">Rework</h6>
                </div>
              </div>
            </div>
          </div>
        </div>


*/}
        </div>
      </div>
      <div className=" order-md-0">
        {filterOpen && <Filter toggleFilter={toggleFilter} />}
      </div>
    </div>
  )
}

export default PandingAssignment

// <div className="my-3">
//   <img
//     className="weekChart"
//     src={weekChart}
//     alt="weekChart"
//     style={{ width: "80%" }}
//   />
// </div>
