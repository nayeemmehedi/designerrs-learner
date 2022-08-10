import React, { useState, useEffect } from "react"
import { RiBookMarkLine } from "react-icons/ri"
import { TbLocation } from "react-icons/tb"
import { BiCalendarCheck } from "react-icons/bi"
import { useHistory } from "react-router-dom"
import "./styleValue/dashboard.css"
import { useSelector } from "react-redux"
import { AiOutlineCalendar } from "react-icons/ai"
import { MdOutlineAssignmentInd } from "react-icons/md"
import tala from "../../../Assets/Images/icons/tala.svg"
import moment from "moment"
import ProgressBarData from "./ProgressBarData"


function DashboardCourse({ i, locked }) {

  const history = useHistory()
  const { courses } = useSelector(state => state.courseOnBoarding)

  console.log("myData", i)
  useEffect(() => {
    let progress = document.querySelectorAll(".progress")
    let progress_text = document.querySelectorAll(".data-progress")

    progress.forEach(pro => {
      let percentage = pro.getAttribute("data-value")
      let color = pro.getAttribute("data-stroke")
      let animateTime = pro.getAttribute("data-time")
      let radius = pro?.r?.baseVal?.value
      let circumference = radius * 2 * Math.PI
      let stroke = circumference - (circumference * percentage) / 100
      pro.style.setProperty("--stroke-dashoffset", stroke)
      pro.style.setProperty("--stroke-dasharray", circumference)
      pro.style.setProperty("--stroke", color)
      pro.style.setProperty("--animation-time", `${animateTime * 100}ms`)
    })

    progress_text.forEach(text => {
      let data = text.getAttribute("data-value")
      let progress_value = 0
      let progress_bar = setInterval(() => {
        progress_value++
        text.innerText = `${progress_value}%`
        if (progress_value == data) {
          clearInterval(progress_bar)
        }
      }, 100)
    })
  }, [])

  return (
    <div>
      {(courses?.lockedCourse?.length > 0 ||
        courses?.enrolledCourse?.length > 0) && (
        <div>
          <div className="row">
            <div className="col-2"></div>
            <div className=" col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-9">
              <div>
                {!locked ? (
                  <div className="row mb-5">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                      <div className="shadow boxColor">
                        <div className="p-sm-3  p-lg-3 p-md-3 p-xl-3 p-xxl-3  ">
                          <div className="d-flex mb-4">
                            <RiBookMarkLine />
                            <div className="ps-2">
                              <h5 style={{ fontSize: "14px" }}>Course</h5>
                            </div>
                          </div>

                          <div>
                            <div className="row">
                              <div className="col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7 dashboard">
                                <div className="skill">
                                  <svg>
                                    <circle cx="100" cy="100" r="70"></circle>
                                    <circle
                                      cx="100"
                                      cy="100"
                                      r="70"
                                      className="progress"
                                      data-value="100"
                                      data-stroke="#EBEBEB"
                                      data-time="90"
                                    ></circle>
                                    <circle
                                      cx="100"
                                      cy="100"
                                      r="70"
                                      className="progress"
                                      data-value={(
                                        (i?.incompleteSessions / 100) *
                                        i?.completedSessions
                                      ).toString()}
                                      data-stroke="#FFB800"
                                      data-time="90"
                                    ></circle>
                                    <circle
                                      cx="100"
                                      cy="100"
                                      r="70"
                                      className="progress"
                                      data-value={(
                                        (i?.upcomingSessions / 100) *
                                        i?.completedSessions
                                      ).toString()}
                                      data-stroke="#169F32"
                                      data-time="90"
                                    ></circle>
                                  </svg>
                                  {/* <span className="data-progress" data-value="90"></span> */}
                                  <div className="center-circle text-center">
                                    <h5>{i.totalSessions}</h5>
                                    <small>
                                      <b>Total Sessions</b>
                                    </small>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                <div
                                  style={{
                                    height: "45px",
                                    borderLeft: "3px solid green",
                                  }}
                                >
                                  <div className="ps-2 ">
                                    <p style={{ height: "5px" }}>
                                      {" "}
                                      {i?.completedSessions || "--"}{" "}
                                    </p>
                                    <h5 style={{ fontSize: "12px" }}>
                                      Completed{" "}
                                    </h5>
                                  </div>
                                </div>
                                <br />

                                <div
                                  style={{
                                    height: "45px",
                                    borderLeft: "3px solid yellow",
                                  }}
                                >
                                  <div className="ps-2">
                                    <p style={{ height: "5px" }}>
                                      {i?.incompleteSessions || "--"}{" "}
                                    </p>
                                    <h5 style={{ fontSize: "12px" }}>
                                      Incomplete{" "}
                                    </h5>
                                  </div>
                                </div>
                                <br />

                                <div
                                  style={{
                                    height: "45px",
                                    borderLeft: "3px solid #dedbdc",
                                  }}
                                >
                                  <div className="ps-2">
                                    <p style={{ height: "5px" }}>
                                      {" "}
                                      {i?.upcomingSessions || "--"}{" "}
                                    </p>
                                    <h5 style={{ fontSize: "12px" }}>
                                      Upcoming{" "}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="mt-5 pt-4 pb-4 text-center"
                          onClick={() =>
                            history.push(
                              `/courseMaterial/${
                                i.course.id
                              }/${i.course.courseName?.replace(/\s/g, "-")}`
                            )
                          }
                        >
                          <button
                            style={{ width: "80%", height: "50px" }}
                            className="btn btn-outline-danger side"
                          >
                            <small>Go To Course Details</small>
                          </button>
                        </div>
                      </div>

                      <div></div>
                    </div>

                    {/* First box complete */}

                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4  ">
                      <div className=" mx-4 shadow boxColor ">
                        <div className="p-4">
                          <div className="d-flex mb-4">
                            <MdOutlineAssignmentInd />
                            <div className="ps-2">
                              {" "}
                              <h5 style={{ fontSize: "14px" }}>Assignments</h5>
                            </div>
                          </div>

                          <div className="d-flex ">
                            <BiCalendarCheck color="green" />
                            <div className="ps-2">
                              {" "}
                              <h5 style={{ fontSize: "14px" }}>
                                {i?.assignments?.submittedAssignments} submitted
                              </h5>
                            </div>
                          </div>

                          {/* <ProgressBarData vartiant="success" value={(i?.assignments?.approvedAssignments * 100) / i?.assignments?.submittedAssignments} />
                            <ProgressBarData vartiant="success" value={(i?.assignments?.inReviewAssignments * 100) / i?.assignments?.submittedAssignments} />
                            <ProgressBarData vartiant="success" value={(i?.assignments?.reworkAssignments * 100) / i?.assignments?.submittedAssignments} /> */}
                          <div
                            class="progress my-3"
                            style={{ borderRadius: 0 }}
                          >
                            <ProgressBarData
                              color="#43BE5C"
                              value={Math.ceil(
                                (i?.assignments?.approvedAssignments * 100) /
                                  i?.assignments?.submittedAssignments /
                                  3
                              )?.toString()}
                            />
                            <ProgressBarData
                              color="#8A4B12"
                              value={Math.ceil(
                                (i?.assignments?.inReviewAssignments * 100) /
                                  i?.assignments?.submittedAssignments /
                                  3
                              )?.toString()}
                            />
                            <ProgressBarData
                              color="#FFB800"
                              value={Math.ceil(
                                (i?.assignments?.reworkAssignments * 100) /
                                  i?.assignments?.submittedAssignments /
                                  3
                              )?.toString()}
                            />
                          </div>

                          <div className="mt-4 pt-2">
                            <div className="row">
                              <div
                                className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-4 ms-xxl-3 ms-xl-0 ms-lg-0 "
                                style={{
                                  height: "46px",
                                  borderLeft: "2px solid #43BE5C",
                                }}
                              >
                                <div>
                                  <p style={{ height: "13px" }}>
                                    {i?.assignments?.approvedAssignments ||
                                      "--"}
                                  </p>
                                  <p className="pipeFont">Approved</p>
                                </div>
                              </div>

                              <div
                                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4"
                                style={{
                                  height: "46px",
                                  borderLeft: "2px solid #8A4B12",
                                }}
                              >
                                <div>
                                  <p style={{ height: "13px" }}>
                                    {i?.assignments?.inReviewAssignments ||
                                      "--"}
                                  </p>
                                  <p className="pipeFont">In Review</p>
                                </div>
                              </div>

                              <div
                                className="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3"
                                style={{
                                  height: "46px",
                                  borderLeft: "2px solid #FFB800",
                                }}
                              >
                                <div>
                                  <p style={{ height: "13px" }}>
                                    {i?.assignments?.reworkAssignments || "--"}
                                  </p>
                                  <p className="pipeFont">Reiterate</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex mt-5">
                            <BiCalendarCheck color="#FFB800" />
                            <div className="ps-2">
                              {" "}
                              <h5 style={{ fontSize: "14px" }}>
                                {i?.assignments?.notSubmittedAssignments} Not
                                submitted
                              </h5>
                            </div>
                          </div>

                          {/* <hr style={{ height: "18px", color: "#a5a2a3" }} /> */}
                          <div
                            class="progress my-3"
                            style={{ borderRadius: 0 }}
                          >
                            <ProgressBarData
                              color="#FF842B"
                              value={Math.ceil(
                                (i?.assignments?.overdueAssignments * 100) /
                                  i?.assignments?.notSubmittedAssignments
                              )?.toString()}
                            />
                          </div>

                          <div className="pt-1">
                            <div
                              className="mb-1"
                              style={{
                                height: "46px",
                                borderLeft: "2px solid #FF842B",
                              }}
                            >
                              <div className="ms-2 ">
                                <p style={{ height: "13px" }}>
                                  {i?.assignments?.overdueAssignments || "--"}
                                </p>
                                <p style={{ fontSize: "10px" }}>Overdue</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* box 2 fininish */}

                    <div className=" col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3  mt-sm-5  mt-md-5  mt-lg-0 mt-xl-0 mt-xxl-0 ">
                      <div className="ms-2 me-4 boxColor">
                        <div className="p-4 shadow ">
                          <div className="d-flex mb-3">
                            <AiOutlineCalendar />
                            <div className="ps-2">
                              {" "}
                              <h5 style={{ fontSize: "14px" }}>
                                Upcoming Session
                              </h5>
                            </div>
                          </div>
                          <div className="pb-5">
                            <small
                              style={{ fontSize: "12px" }}
                              className="text-secondary"
                            >
                              {!i?.onboardingCompleted
                                ? "OnBoarding"
                                : i?.upcomingSession?.sessionType}
                            </small>
                            <br></br>
                            <small
                              className="mt-2"
                              style={{ fontSize: "15px" }}
                            >
                              {!i?.onboardingCompleted
                                ? "OnBoarding"
                                : i?.upcomingSession?.sessionName}
                            </small>

                            <div className="py-3">
                              <small style={{ fontSize: "12px" }}>
                                {!i?.onboardingCompleted
                                  ? "Complete your onboarding"
                                  : "Next Session starts from"}
                              </small>
                              {i?.onboardingCompleted && (
                                <p
                                  style={{ fontSize: "15px" }}
                                  className="text-success"
                                >
                                  {moment(i?.upcomingSession?.startDate).format(
                                    "HH A"
                                  )}
                                  ,{" "}
                                  {moment(i?.upcomingSession?.startDate).format(
                                    "dddd"
                                  )}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="height_issue"></div>
                          <div
                            className=" mt-sm-0  mt-md-0  mt-lg-0 mt-xl-2 mt-xxl-4     mb-1"
                            onClick={() =>
                              history.push(
                                !i?.onboardingCompleted
                                  ? `/onboarding/${i.course.id}`
                                  : `/courseMaterial/${
                                      i.course.id
                                    }/${i.course.courseName?.replace(
                                      /\s/g,
                                      "-"
                                    )}?id=${i?.upcomingSession?._id}`
                              )
                            }
                          >
                            <button
                              className="btn btn-main form-control"
                              // onClick={togglModal}
                            >
                              <small>
                                {!i?.onboardingCompleted ? (
                                  "Go to onboading"
                                ) : (
                                  <span>
                                    <TbLocation size="20" />{" "}
                                    <span className="ms-2">Navigate</span>
                                  </span>
                                )}
                              </small>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-center py-5">
                      <img
                        src={tala}
                        style={{ maxHeight: "166px", maxWidth: "130px" }}
                        alt=""
                      />
                      <h6 className="my-4">Your Course is locked</h6>
                      <small>
                        You will get access to your courses after <br />{" "}
                      </small>
                      <small>your documents are verified</small>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="col-1"></div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardCourse
