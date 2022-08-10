import React, { useState, useEffect } from "react"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { AiOutlineCompass } from "react-icons/ai"
import { TbTools, TbWorld } from "react-icons/tb"
import { BsBriefcase } from "react-icons/bs"
import { HiOutlineUserCircle } from "react-icons/hi"
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import dashboardNoCourse from "../../../Assets/Images/dashboard.png"
import {
  getEffortData,
  getWeekData,
} from "../../../Store/PandingAssignment/action"
import moment from "moment"
import { convertMsToH } from "../../pandingAssignment"
import { getAllJobs } from "../../../Store/jobs/actions"
import { getPortfolio } from "../../../Store/Portfolio/Action"

function DashBoardComplete() {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getAllJobs("opportunities"))
    dispatch(getAllJobs("shortlisted"))
    dispatch(getPortfolio(user?.uid))
  }, [])

  const { portfolioValue } = useSelector(state => state.PortfolioReducers)

  const { shortlisted, opportunities } = useSelector(state => state.jobs)
  const allEffortData = useSelector(state => state?.PandingAssignment?.Effort)

  const dashData = [
    {
      color: "#FFB800",
      title: `You spent ${convertMsToH(
        allEffortData?.average?.[0]?.avgTime
      )}/8hrs this week`,
      description: "Just about there, practise 30 mins to achieve your goal.",
      icon: <TbTools size={26} style={{ color: "#FFB800" }} />,
      btnTxt: "See your progress",
      route: "/my-progress",
    },
    {
      color: "#169F32",
      title: `You got shortlisted on ${shortlisted?.appliedJobs?.length}/${shortlisted?.totalAppliedJobs} Jobs`,
      description: `• ${opportunities?.totalOpportunities} New Opportunities`,
      icon: <BsBriefcase size={26} style={{ color: "#169F32" }} />,
      btnTxt: "Go to Jobs Board",
      route: "/jobs",
    },
    {
      color: "#CD2026",
      title: "Complete your Profile",
      type: "arr",
      description: [
        {
          title: "Profile Picture",
          icon: portfolioValue?.user?.profilePicture?.link,
        },
        {
          title: "Work Experience",
          icon: portfolioValue?.workExperience?.length > 0,
        },
        { title: "Skills and Tools", icon: portfolioValue?.skills?.length > 0 },
        {
          title: "Portfolio",
          icon: portfolioValue?.user?.profilePicture?.link,
        },
      ],
      icon: <TbWorld size={26} style={{ color: "#CD2026" }} />,
      route: `/${user?.uid}/portfolio`,
      btnTxt: "Complete Now",
    },
    {
      color: "#7128CE",
      title: "Complete your Account Info",
      type: "arr",
      description: [
        { title: "Verify Email", icon: user?.emailVerified },
        { title: "Contact Details", icon: user?.email && user?.phone },
        {
          title: "Address",
          icon:
          user?.additionalAddress?.area &&
          user?.additionalAddress?.city &&
          user?.additionalAddress?.houseNumber &&
          user?.additionalAddress?.landmark &&
          user?.additionalAddress?.state &&
          user?.additionalAddress?.streetName &&
          user?.additionalAddress?.zipCode,
        },
      ],
      icon: <HiOutlineUserCircle size={26} style={{ color: "#7128CE" }} />,
      btnTxt: "Complete Now",
      route: "/account-settings",
    },
  ]

  console.log("portfolioValue", portfolioValue)

  const { courses } = useSelector(state => state.courseOnBoarding)

  const history = useHistory()

  const [kyc, setKyc] = useState(false)

  useEffect(() => {
    setKyc(courses?.lockedCourse?.length == 0 ? true : false)
  }, [courses])

  useEffect(() => {
    let startOfWeek = moment().startOf("week").toDate().toISOString()
    let endOfWeek = moment().endOf("week").toDate().toISOString()
    dispatch(getEffortData(startOfWeek, endOfWeek))
  }, [])

  return (
    <div className="pb-5" style={{ background: "#FFFFFF" }}>
      {courses?.enrolledCourse?.length > 0 ||
      courses?.lockedCourse?.length > 0 ? (
        <div className="row">
          <div className="col-2"></div>
          <div className="col-9">
            <div>
              <div className="mb-5 pt-5">
                <h1>
                  Hi{" "}
                  {user?.fullName
                    ? user?.fullName?.split(" ")[0]
                    : user?.email?.match(/^.+(?=@)/)[0]}
                  !
                </h1>
                <p>You're just getting Started Keep Learning by doing...</p>
              </div>
              {/* <hr style={{width:"250px" ,height:"2px",color:"green"}}  /> */}

              <div className="row">
                {kyc ? (
                  dashData.map((i, idx) => (
                    <div className="col-md-4 col-lg-3">
                      <div
                        className="shadow-sm m-3"
                        style={{ borderTop: `2px solid ${i?.color}` }}
                      >
                        <div className="p-4">
                          <div className="mb-2"></div>
                          {i?.icon}

                          <h5 className="my-3">{i?.title}</h5>

                          {i?.type == "arr" ? (
                            i?.description.map(t => (
                              <p>
                                {t.icon ? (
                                  <IoIosCheckmarkCircle
                                    size={23}
                                    style={{ color: "#169F32" }}
                                  />
                                ) : (
                                  <IoIosCheckmarkCircleOutline size={23} />
                                )}
                                <small className="ms-2">{t.title}</small>
                              </p>
                            ))
                          ) : (
                            <p
                              className="pb-5 pt-3"
                              style={{ color: idx == 1 && i?.color }}
                            >
                              {i?.description}
                            </p>
                          )}
                          <p style={{ height: "50px" }}></p>
                          <div class="d-grid gap-2">
                            <button
                              className="btn  border border-dark"
                              style={{ borderRadius: "0px" }}
                              onClick={() => history.push(i.route)}
                            >
                              <small className="text-dark">{i?.btnTxt}</small>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-md-4 col-lg-3">
                    <div
                      className="shadow-sm m-3"
                      style={{ borderTop: `2px solid red` }}
                    >
                      <div className="p-4">
                        <MdOutlineNotificationsActive
                          size={26}
                          className="text-danger"
                        ></MdOutlineNotificationsActive>

                        <h5 className="my-3">
                          Complete your KYC to get your Loan approved{" "}
                        </h5>

                        <p className="pb-5 pt-3">
                          You will get access to your courses after your
                          documents are verified..
                        </p>
                        <p style={{ height: "50px" }}></p>
                        <div class="d-grid gap-2">
                          <button
                            className="btn  border border-dark"
                            style={{ borderRadius: "0px" }}
                            onClick={() => history.push("/neevFinace")}
                          >
                            <small className="text-dark">Go to KYC Form</small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <div className="col-3"></div> */}
        </div>
      ) : (
        <div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-9">
              <div>
                <div className="mb-5 pt-5">
                  <h1>
                    Hi{" "}
                    {user?.fullName
                      ? user?.fullName?.split(" ")[0]
                      : user?.email?.match(/^.+(?=@)/)[0]}
                    !
                  </h1>
                  {/* <p>You're just getting Started Keep Learning by doing.</p> */}
                </div>
                {/* <hr style={{width:"250px" ,height:"2px",color:"green"}}  /> */}

                <div className="row">
                  <div className=" col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3">
                    {" "}
                    <div
                      className="shadow"
                      style={{ borderTop: "2px solid red" }}
                    >
                      <div className="p-3">
                        <div className="mb-2"></div>

                        <div>
                          <AiOutlineCompass
                            size={26}
                            className="text-danger"
                          ></AiOutlineCompass>

                          <h5 className="my-3">Explore our Courses </h5>
                          {/* <p ></p> */}
                          <p style={{ color: "#a09d9d" }} className="pb-5">
                            Enroll in one of our courses to get started .
                          </p>
                        </div>
                        <div className="mb-5"></div>

                        <div class="d-grid gap-2">
                          <button
                            className="btn btn-main2"
                            onClick={() => history.push("/courses")}
                          >
                            <small>Explore Courses </small>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            {/* <div className="col-3"></div> */}
          </div>

          <div className="row my-5">
            <div className="col-2"></div>
            <div className="col-7">
              <div className="py-4">
                <hr></hr>
              </div>
              <img src={dashboardNoCourse} alt="course" />
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashBoardComplete
