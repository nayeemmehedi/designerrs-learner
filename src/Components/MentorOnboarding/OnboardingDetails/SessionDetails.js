import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiFile } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import Loading from "../Common/Loading";
import SweetAlert from "react-bootstrap-sweetalert";
import Course from "./Course";
import Loading from "../../Common/Loading";
import Image from "../Image";
import ImageModal from "../ImageModal";
import axios from "axios";
import { getassigned_course } from "../../../Store/Mentor/actions";
import tvType from "../../../Assets/Images/icons/tvType.svg";
import fullman from "../../../Assets/Images/icons/fullman.svg";


function SessionDetails() {
  


  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const { courses, error, loading } = useSelector(
    (state) => state.OnBoardingMentor
  );

  //if mentorship true there is no course
  const [mentorship, setMentorship] = useState( courses.length>0 ? false: true);
  
  //   const courses =[1,2]

  //   console.log("course mentor",courses)

  // // const courses =[1,2]
  // const loading =false
  // const error = false

  const dispatch = useDispatch();
  if (loading) return <Loading />;

  
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

      {!mentorship ? (
        <div>
          {courses?.map((i) => (
            <div className="row">
              <div className="col-sm-0 col-md-0 col-lg-2"></div>
              <div className="col-sm-12 col-md-12 col-lg-10  ">
                {" "}
                <div>
                  <div className="row my-3">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex justify-content-between align-items-center ">
                            <div className="bg-white rounded-circle">
                              <img
                                className="rounded-circle"
                                src={i?.courseId?.courseThumbnail?.link}
                                alt="user"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                            <div className="mx-3 mt-2">
                              <span className=" fs-5">
                                {i?.courseId?.courseName}
                              </span>
                              <p className="fw-bold text-secondary ">
                                {i?.courseId?.mentorName || "No Name"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                      <div className="d-flex px-3 py-3" onClick={togglModal}>
                        <Image></Image>{" "}
                        <small className="mt-2 ms-2"> Learners</small>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-2">
                      <div className="d-flex flex-row">
                        <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor my-2">
                          <AiOutlineCalendar size="25" color="#CD2026" />
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
                    <div className="col-sm-12 col-md-12 col-lg-2">
                      <div className="d-flex flex-row">
                        <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor my-2">
                          {/* <BiFile size="25" color="#cc3359" />
                           */}
                          <img
                            style={{ height: "20px", width: "auto" }}
                            src={tvType}
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
                  {ModalOpen && (
                    <ImageModal modal={ModalOpen} togglModal={togglModal} />
                  )}
                  <hr></hr>
                  {/* secend work start */}

                  <div className="mt-2">
                    <Course i={i} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-5 py-5">
           <div className="text-center">
                <img
                  src={fullman}
                  style={{ maxHeight: "399px", maxWidth: "550px" }}
                  alt=""
                />
                <h5 className="mt-5">Good things come to those who wait</h5>
                <p className="text-secendary mt-3">
                  You assigned courses will appear here <br />{" "}
                </p>
                {/* <small>your documents are verified</small> */}
              </div>
          {/* <img src={fullman} alt="" /> */}
        </div>
      )}

      <div className="boxColor" style={{ height: "40px" }}></div>
    </div>
  );
}

export default SessionDetails;
