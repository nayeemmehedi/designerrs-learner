import React, { useEffect, useState } from "react"
import { BsCalendarCheck } from "react-icons/bs"
import { BiFile } from "react-icons/bi"
import DashboardCourse from "./DashBoardChild/DashboardCourse"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"
import Loading from "../Common/Loading"
import SweetAlert from "react-bootstrap-sweetalert"
import tv from "../../Assets/Images/icons/tv.svg"
import cal from "../../Assets/Images/icons/cal.svg"
import axiosApi from "../../Helper/api"
import DashBoardMeetup from "./DashBoardChild/DashBoardMeetup"

function DashBoardMain() {
  const { courses, error } = useSelector(state => state.courseOnBoarding)
  const dispatch = useDispatch();
  const [meetups, setMeetups] = useState([])
  console.log("meetups", meetups)
  const get = () => {
    axiosApi
      .get(`/learner/meetups`)
      .then(res => {
        setMeetups(res.data)
      })
      .catch(err => {
        setMeetups([])
      })
  }
  useEffect(() => {
    get()
  }, [])

  return (
    <div style={{ background: "#FAFAFA" }}>
      {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() =>
            dispatch({ type: "GET_ENROLLED_COURSE_API_ERROR", payload: "" })
          }
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}

      {courses?.lockedCourse?.length > 0 &&
        courses?.lockedCourse?.map(i => (
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>

            <div className=" col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div className="row mt-4">
                <div className="col-sm-10 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="bg-white rounded-circle">
                        <img
                          className="rounded-circle"
                          src={i?.course?.courseThumbnail?.link}
                          alt="user"
                          style={{
                            width: "55px",
                            height: "55px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="mx-3 mt-2">
                        <span className=" fw-bold fs-6">
                          {" "}
                          {i?.course?.courseName}
                        </span>
                        <p className="fw-bold text-secondary">
                          {i?.batch?.batchCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="bg-white rounded-circle">
                        {i?.batch?.primaryMentor?.profilePicture?.link ? (
                          <img
                            className="rounded-circle"
                            src={i?.batch?.primaryMentor?.profilePicture?.link}
                            alt="user"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "#C4C4C4",
                              borderRadius: "50%",
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="mx-3 mt-2">
                        <span className="text-secondary fw-bold"> Mentor</span>
                        <p className="fw-bold">
                          {i?.batch?.primaryMentor?.fullName || "Not Assigned"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex flex-row">
                    <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                      {/* <BsCalendarCheck size="25" color="#cc3359" /> */}
                      <img
                        src={cal}
                        style={{ height: "25px", width: "auto" }}
                        alt=""
                      />
                    </span>
                    <div className="mx-2">
                      <small>Ends</small>
                      <br></br>
                      <small className="fw-bold textColor3">
                        {moment(i?.batch?.endDate).format("LL")}
                      </small>
                    </div>

                    <div></div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex flex-row">
                    <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                      {/* <BiFile size="25" color="#cc3359" /> */}
                      <img
                        src={tv}
                        style={{ height: "25px", width: "auto" }}
                        alt=""
                      />
                    </span>
                    <div className="mx-2">
                      <small>Location</small>
                      <br></br>
                      <small className="fw-bold textColor3">Online</small>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <hr />
            </div>

            {/* secend work start */}

            <div>
              <DashboardCourse i={i} locked={true} />
            </div>
          </div>
        ))}
      {courses?.enrolledCourse?.length > 0 &&
        courses?.enrolledCourse?.map(i => (
          <div className="row">
            <div className="col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"></div>

            <div className=" col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
              <div className="row mt-4">
                <div className="col-sm-10 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="bg-white rounded-circle">
                        <img
                          className="rounded-circle"
                          src={i?.course?.courseThumbnail?.link}
                          alt="user"
                          style={{
                            width: "55px",
                            height: "55px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="mx-3 mt-2">
                        <span className=" fw-bold fs-6">
                          {" "}
                          {i?.course?.courseName}
                        </span>
                        <p className="fw-bold text-secondary">
                          {i?.batch?.batchCode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="bg-white rounded-circle">
                        {i?.batch?.primaryMentor?.profilePicture?.link ? (
                          <img
                            className="rounded-circle"
                            src={i?.batch?.primaryMentor?.profilePicture?.link}
                            alt="user"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              background: "#C4C4C4",
                              borderRadius: "50%",
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="mx-3 mt-2">
                        <span className="text-secondary fw-bold"> Mentor</span>
                        <p className="fw-bold">
                          {i?.batch?.primaryMentor?.fullName || "Not Assigned"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex flex-row">
                    <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                      {/* <BsCalendarCheck size="25" color="#cc3359" /> */}
                      <img
                        src={cal}
                        style={{ height: "25px", width: "auto" }}
                        alt=""
                      />
                    </span>
                    <div className="mx-2">
                      <small>Ends</small>
                      <br></br>
                      <small className="fw-bold textColor3">
                        {moment(i?.batch?.endDate).format("LL")}
                      </small>
                    </div>

                    <div></div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                  <div className="d-flex flex-row">
                    <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                      {/* <BiFile size="25" color="#cc3359" /> */}
                      <img
                        src={tv}
                        style={{ height: "25px", width: "auto" }}
                        alt=""
                      />
                    </span>
                    <div className="mx-2">
                      <small>Location</small>
                      <br></br>
                      <small className="fw-bold textColor3">
                        {i?.location?.locationName}
                      </small>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <hr />
            </div>

            {/* secend work start */}

            <div>
              <DashboardCourse i={i} />
            </div>

          </div>
        ))}
      <div style={{
        width: "100vw",
        height: "50px",
        backgroundColor: "white"
      }}>

      </div>
      <div className="container col-9" style={{
        marginTop: "30px"
      }}>

        {meetups && meetups.map((el, index) => (
          <DashBoardMeetup meetup={el} />
        ))}
      </div>
    </div>
  )
}

export default DashBoardMain
