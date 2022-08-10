import React, { useEffect, useState } from "react";
import { FaRegFileArchive } from "react-icons/fa";
import { BiCalendarCheck } from "react-icons/bi";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

import { useHistory } from "react-router-dom";
import "../Mentor.css";
import { useSelector } from "react-redux";
import NavigationMain from "../Navigation/NavigationMain";

function Course({ i }) {
  const history = useHistory();
  // const { onBoarding } = useSelector((state) => state.courseOnBoarding);
  // console.log("myData batch no", i);

  const [ModalOpen, setModalOpen] = useState(false);

  const togglModal = () => setModalOpen(!ModalOpen);

  const role = localStorage.getItem("role");

  return (
    <div>
      <div className="row mb-5 me-3">
        <div className="col-sm-12 col-md-12 col-lg-4   mt-5 mt-sm-5">
          <div className="shadow boxColor">
            <div className="px-3 pt-4 pb-2 mx-3">
              <div className="d-flex mb-4">
                <FaRegFileArchive />
                <div className="ps-2">
                  {" "}
                  <h5 style={{ fontSize: "14px" }}>Course</h5>
                </div>
              </div>

              <div>
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-8  ">
                    <div className="circleBase circleSecond ">
                      <div className="circleBase circleFirst">
                        <div className="text-center">
                          <div className="totalMargin">
                            <p style={{ height: "10px" }}>{i?.totalSessions}</p>
                            <p>Total Session</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div
                      style={{ height: "45px", borderLeft: "3px solid green" }}
                    >
                      <div className="ps-2">
                        <p style={{ height: "5px" }}>06 </p>
                        <h5 style={{ fontSize: "12px" }}>Completed </h5>
                      </div>
                    </div>
                    <br />

                    <div
                      style={{ height: "45px", borderLeft: "3px solid yellow" }}
                    >
                      <div className="ps-2">
                        <p style={{ height: "5px" }}> 10 </p>
                        <h5 style={{ fontSize: "12px" }}>Incomplete </h5>
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
                        <p style={{ height: "5px" }}> 14 </p>
                        <h5 style={{ fontSize: "12px" }}>Upcoming </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 pb-4 text-center">
              <button
                style={{ width: "80%", height: "50px" }}
                className="btn btn-outline-danger side"
              >
                <small
                  onClick={() =>
                    history.push(
                      `/courseMaterial/${i.courseId.id}/${i.courseId.courseName?.replace(/\s/g, "-")}?batch=${i._id}`
                    )
                  }
                >
                  Go To Course Details
                </small>
              </button>
            </div>
          </div>

          <div></div>
        </div>

        {/* First box complete */}

        <div className="col-sm-12 col-md-12 col-lg-4 mt-5 mt-sm-0">
          <div className=" mx-4 shadow boxColor mt-0 mt-sm-5">
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
                  <h5 style={{ fontSize: "14px" }}> 12 Reviewed</h5>
                </div>
              </div>

              <div className="hrColor mt-3" style={{ height: "18px" }} />

              <div className="mt-4 pt-2">
                <div className="row">
                  <div
                    className="col-4"
                    style={{
                      height: "46px",
                      borderLeft: "3px solid green",
                      marginLeft: "10px",
                    }}
                  >
                    <div>
                      <p style={{ height: "13px" }}>06</p>
                      <p style={{ fontSize: "10px" }}>Approved</p>
                    </div>
                  </div>

                  {/* <div
                    className="col-4"
                    style={{ height: "46px", borderLeft: "2px solid #A6672E" }}
                  >
                    <div>
                      <p style={{ height: "13px" }}>15</p>
                      <p style={{ fontSize: "10px" }}>Reiterate</p>
                    </div>
                  </div> */}

                  <div
                    className="col-sm-12 col-md-12 col-lg-3"
                    style={{ height: "46px", borderLeft: "3px solid #FFB800" }}
                  >
                    <div>
                      <p style={{ height: "13px" }}>15</p>
                      <p style={{ fontSize: "10px" }}>Reiterate</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex mt-5">
                <MdOutlineAssignmentInd color="#FFB800" />
                <div className="ps-2">
                  {" "}
                  <h5 style={{ fontSize: "14px" }}>12 Not Reviewed</h5>
                </div>
              </div>

              <div className="hrColor2 mt-3" style={{ height: "18px" }} />

              <div className="mt-3">
                <div
                  className="mb-1"
                  style={{ height: "46px", borderLeft: "3px solid #FFB800" }}
                >
                  <div className="ms-2 ">
                    <p style={{ height: "13px" }}>14</p>
                    <p style={{ fontSize: "10px" }}>Overdue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* box 2 fininish */}
        {/* box 3 start */}

        <div className="col-sm-12 col-md-12 col-lg-3 mt-5 mt-sm-0">
          <div className=" ms-2 me-4 boxColor mt-0 mt-sm-5">
            <div
              className="p-4 shadow "
              style={{ minHeight: "403px", position: "relative" }}
            >
              <div className="d-flex mb-3">
                <AiOutlineCalendar />
                <div className="ps-2">
                  {" "}
                  <h5 style={{ fontSize: "14px" }}>Upcomming Session</h5>
                </div>
              </div>
              <div className="pb-5">
                <small style={{ fontSize: "12px" }}>Onbording</small>
                <br></br>
                <small className="mt-2" style={{ fontSize: "15px" }}>
                  Get Started with your Course
                </small>

                <div className="mt-3">
                  <small style={{ fontSize: "12px" }}>Complete by </small>
                  <p style={{ fontSize: "18px" }} className="text-success">
                    This Saturday
                  </p>
                </div>
              </div>

              {ModalOpen && (
                <NavigationMain modal={ModalOpen} togglModal={togglModal} />
              )}

              <div className="">
                <div className="d-grid gap-2   mt-sm-3 mt-md-3 mt-lg-3 mt-xl-3 mt-xxl-5          pt-sm-3 pt-md-3 pt-lg-1 pt-xl-3 pt-xxl-4         ">
                  <button
                    className="btn btn-main2     "
                    // onClick={togglModal}
                    onClick={() => history.push(`/mentorOnboading/${i?.id}`)}
                  >
                    <p
                      className="py-2 m-0"
                      // style={{ position: "absolute", bottom: "0px" }}
                    >
                      {" "}
                      Go to Onboarding
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
