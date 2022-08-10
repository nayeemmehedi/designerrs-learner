// import firebase from "firebase"
import { isUndefined } from "lodash-es"
import moment from "moment"
import React, { useState, useEffect } from "react"
//i18n
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap"
import SimpleBar from "simplebar-react"
import { AiOutlineClose } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import jobsLogo from "../../Assets/Images/jobs.svg"
import mentorLogo from "../../Assets/Images/mentor.svg"
import mentorYellowLogo from "../../Assets/Images/mentor_yellow.svg"
import announceLogo from "../../Assets/Images/announce.svg"
import { database } from "../../Database/firebase"
import { getDatabase, ref, child, get } from "firebase/database"
import { getEnrolledCourses } from "../../Store/courseOnBoarding/actions"
import CourseUi from "./CourseUi"
import MentorUi from "./MentorUi"

//Import images
const Notifications = ({ newNotifications, courses }) => {
  console.log(newNotifications)
  const [type, setType] = useState(null)
  const mentor = newNotifications.filter(i => i.category === "mentor")
  const course = newNotifications.filter(i => i.category === "course")
  const jobs = newNotifications.filter(i => i.category === "jobs")
  const announcement = newNotifications.filter(i => i.category === "general")

  // useEffect(() => {
  //   var dbRef = database.ref(`/notifications/${uid}`);

  //   dbRef.on(
  //     "value",
  //     (snapshot) => {
  //       const data = snapshot.val();
  //       console.log(data, "notification");
  //       let newNotifications = [];
  //       for (const obj in data) {
  //         var notification = data[obj];
  //         notification.id = obj;
  //         // if (
  //         //   notification.type === "new_mentor" &&
  //         //   // !recievedFiles.loading &&
  //         //   recievedFiles.files.filter(
  //         //     (item) => item._id === notification.receiveFileId
  //         //   ).length === 0
  //         // ) {
  //         //   // {
  //         //   //   continue;
  //         //   // } else if (
  //         //   //   notification.type === "View File" &&
  //         //   //   files.files.filter((item) => item._id === notification.sendFileId)
  //         //   //     .length === 0
  //         //   // )
  //         //   continue;
  //         // } else {
  //         //   // newNotifications.push(notification)
  //           newNotifications.push(notification);
  //         // }
  //       }
  //       setNewNotifications(newNotifications);
  //     },
  //     (err) => console.log(err)
  //   );
  //   setLoading(false);
  // }, []);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-body">
          <div className="p-3" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="m-0 txtColor">
                <span>
                  <i className="far fa-bell"></i>
                </span>{" "}
                <span className="mx-2"> Notifications </span>
              </h6>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>

          <hr></hr>
          <small>
            {/* {newNotifications.length == 0 ? (
              <div className="p-5 text-center text-secondary">
                No Notifications
              </div>
            ) : ( */}
            <div>
              {!type ? (
                <div>
                  {/* Courses */}
                  {courses?.enrolledCourse?.map(i => (
                    <div
                      className="bg-white p-3 fw-bold cursor"
                      onClick={() => setType("Course")}
                    >
                      <div className="d-flex">
                        <img
                          src={i?.course?.courseThumbnail?.link}
                          alt="courseName"
                          className="rounded-circle"
                          style={{
                            height: "50px",
                            width: "50px",
                            objectFit: "cover",
                          }}
                        />{" "}
                        <span className="mx-3">
                          {i?.course?.courseCode}
                          <br></br>
                          <span className="text-secondary">
                            {
                              course?.filter(
                                t =>
                                  t?.course?.courseCode == i?.course?.courseCode
                              ).length
                            }{" "}
                            New Notifications
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                  <hr></hr>
                  {/* Jobs */}
                  <div
                    className="bg-white p-3 fw-bold cursor"
                    onClick={() => setType("Jobs")}
                  >
                    <div className="d-flex">
                      <img
                        src={jobsLogo}
                        alt="Jobs"
                        className="rounded-circle"
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                        }}
                      />{" "}
                      <div className="mx-3">
                        <span> Jobs</span>
                        <br></br>
                        <span className="text-secondary">
                          {jobs.length} New Notifications
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  {/* MentorShip Program */}
                  <div
                    className="bg-white p-3 fw-bold cursor"
                    onClick={() => setType("mentor")}
                  >
                    <div className="d-flex">
                      <img
                        src={mentorLogo}
                        alt="courseName"
                        className="rounded-circle"
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                        }}
                      />{" "}
                      <div className="mx-3">
                        <span> Mentorship Program</span>
                        <br></br>
                        <span className="text-secondary">
                          {mentor.length} New Invite
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  {/* Announcements */}
                  <div
                    className="bg-white p-3 fw-bold cursor"
                    onClick={() => setType("Announcements")}
                  >
                    <div className="d-flex">
                      <img
                        src={announceLogo}
                        alt="courseName"
                        className="rounded-circle"
                        style={{
                          height: "50px",
                          width: "50px",
                          objectFit: "cover",
                        }}
                      />{" "}
                      <div className="mx-3">
                        <span> Announcements</span>
                        <br></br>
                        <span className="text-secondary">
                          {announcement.length} New Notifications
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* End */}
                  {/* Child */}
                </div>
              ) : (
                <div>
                  <div
                    className="cursor p-2 txtColor"
                    style={{ backgroundColor: "#FAFAFA" }}
                  >
                    <span onClick={() => setType(null)}>
                      <BiArrowBack />{" "}
                      {type == "mentor" ? "Mentorship Program" : type}
                    </span>
                  </div>

                  <div className="bg-white p-3 fw-bold cursor">
                    {type == "course" && course.map(i => <CourseUi i={i} />)}
                    {type == "mentor" && mentor.map(i => <MentorUi i={i} />)}
                    {type == "jobs" && jobs.map(i => <MentorUi i={i} />)}
                    {type == "general" &&
                      announcement.map(i => <MentorUi i={i} />)}
                  </div>
                </div>
              )}
            </div>
            {/* )} */}
          </small>
        </div>
      </div>
    </>
  )
}

export default Notifications
