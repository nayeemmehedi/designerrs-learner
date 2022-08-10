import React from "react"
import { useContext, useEffect } from "react"
import { Element } from "react-scroll"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { Link } from "react-scroll"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useHistory, useParams } from "react-router-dom"

import EmailSection from "../../Components/MentorPortfoli/Portfolio/EmailSection"
import SocialMedia from "../../Components/MentorPortfoli/Portfolio/SocialMedia"
import About from "../../Components/MentorPortfoli/Portfolio/About"
import Skill from "../../Components/MentorPortfoli/Portfolio/Skill"
import Tools from "../../Components/MentorPortfoli/Portfolio/Tools"
import Educations from "../../Components/MentorPortfoli/Portfolio/Educations"
import Cartification from "../../Components/MentorPortfoli/Portfolio/Cartification"
import WorkExperience from "../../Components/MentorPortfoli/Portfolio/WorkExperience"
import Portfolio from "../../Components/MentorPortfoli/Portfolio/Portfolio"
import Transactions from "../../Components/MentorPortfoli/Portfolio/Transactions"
import WorkPreferences from "../../Components/MentorPortfoli/Portfolio/WorkPreferences"
//mentor profile
import Expericence from "../../Components/MentorPortfoli/MentorProfile/Expericence"
import Performance from "../../Components/MentorPortfoli/MentorProfile/Performance"
import Finances from "../../Components/MentorPortfoli/MentorProfile/Finances"
import CalenderValue from "../../Components/MentorPortfoli/MentorProfile/CalenderValue"
import Image4 from "../../Components/MentorPortfoli/MentorProfile/Image4"
import AssignedCourse from "../../Components/MentorPortfoli/MentorProfile/AssignedCourse"
import Availability from "../../Components/MentorPortfoli/MentorProfile/Availability"
import MentorAgrement from "../../Components/MentorPortfoli/MentorProfile/MentorAgrement"
import Batches from "../../Components/MentorPortfoli/MentorProfile/Batches"
import Loading from "../../Components/Common/Loading"
import DateValue from "../../Components/MentorPortfoli/MentorProfile/DateValue"
import EditOption from "../../Components/PortfolioMain/common/EditOption"
import CreatePortfolioMentor from "../../Components/MentorPortfoli/MentorCreatePortfolio/CreatePortfolioMentor"
import TimelineSlider from "../../Components/MentorPortfoli/MentorProfile/TimelineSlider"
import axiosApi from "../../Helper/api"
import useDragDrop from "../CourseMaterial/useDragDrop"
import { getGlobalData, getPortfolio } from "../../Store/Portfolio/Action"
import { getLocation } from "../../Store/Location/action"
import { getMentorPortfolio } from "../../Store/Mentor/actions"

const portfolio = [
  { name: "About", key: "about" },
  { name: "Skills", key: "skills" },
  { name: "Education", key: "education" },
  { name: "Experience", key: "experience" },
  { name: "Portfolio", key: "portfolio" },
  // { name: "Transactions", key: "transactions" },
  // { name: "Work Preferences", key: "workPreferences" },
  // { name: "Neev Finance Documents", key: "neevFinanceDocuments" },
]
const mentorProfile = [
  { name: "Experience", key: "experience" },
  { name: "Performance", key: "performance" },
  { name: "Finances", key: "finances" },
  { name: "Availability", key: "availability" },
  { name: "Batches", key: "batches" },
]

function MentorPortfolio() {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()

  const [active, setActive] = useState("portfolio")
  const [details, setDetails] = useState("About")

  // const { mentorDetails } = useSelector((state) => state.mentors);
  // const { location } = useSelector((state) => state.Location);

  // console.log("location",location)

  const uid = localStorage.getItem("uid")

  useEffect(() => {
    dispatch(getMentorPortfolio())
  }, [uid])

  useEffect(() => {
    if (id) {
      dispatch(getPortfolio(id))
    }
    if (uid) {
      dispatch(getGlobalData())
    }
  }, [id, uid])

  const { loading, portfolioValue, error } = useSelector(
    state => state.PortfolioReducers
  )

  //portfolio pic add and api intregation

  const { user } = useSelector(state => state.user)

  const { getInputProps, open, files, handleRemoveAllFiles } = useDragDrop(
    "image/*",
    false,
    false
  )

  const onSubmit = async () => {}
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (files.length > 0) {
      setLoad(true)
      const id = localStorage.getItem("uid")

      const formData = new FormData()

      formData.append("profilePicture", files[0])

      axiosApi
        .patch(`/learners/${id}`, formData)
        .then(res => {
          dispatch(getPortfolio())
          setLoad(false)
        })
        .catch(err => {
          setLoad(false)
        })
    }
  }, [files])

  // console.log("portfolioValue re vhai", user);

  if (loading) return <Loading />

  return (
    <div className="bgWhite p-3">
      {error ? (
        <CreatePortfolioMentor
          user={user}
          portfolioValue={portfolioValue}
        ></CreatePortfolioMentor>
      ) : (
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3  col-xl-3  col-xxl-2">
            <div className="my-4">
              <button
                className="btn btn-outline-danger border-0"
                onClick={() => history.goBack()}
              >
                <AiOutlineArrowLeft></AiOutlineArrowLeft> Back
              </button>
            </div>
            <div>
              <div className="ps-2">
                <div>
                  <div className="my-5">
                    {portfolioValue?.user?.profilePicture?.link ? (
                      <div onClick={open}>
                        <input {...getInputProps()} />
                        <img
                          src={portfolioValue?.user?.profilePicture?.link}
                          alt="userImage"
                          style={{
                            maxHeight: "250px",
                            maxWidth: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ) : (
                      <div>
                        <div
                          className="py-3 border border-danger fw-bolder justify-content-center d-flex align-items-end"
                          onClick={open}
                          style={{ width: "200px", height: "200px" }}
                        >
                          <div className="text-center">
                            {load ? "Uploading" : "Change Profile Picture"}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {!loading && (
                  <h4 className="my-4">
                    {user?.fullName?.split(" ")[0] ||
                      user?.email?.match(/^.+(?=@)/)[0] ||
                      "User"}
                  </h4>
                )}
              </div>
            </div>
            <div className="d-none d-sm-block course-details-nav ">
              {active == "portfolio" ? (
                <>
                  {portfolio?.map((value, idx) => (
                    <Link
                      to={value.key}
                      style={{ paddingRight: "100px" }}
                      activeClass="activePromotion"
                      smooth={true}
                      offset={0}
                      duration={500}
                      delay={100}
                      spy={true}
                      className="linkCplor"
                    >
                      <ul
                        className="text-secondary cursor mb-0 ps-2"
                        key={idx}
                        onClick={() => setDetails(value?.name)}
                        style={
                          details === value.name
                            ? {
                                borderLeft: "4px solid red",
                                backgroundColor: "#fff",
                                color: "red",
                                padding: "10px",
                              }
                            : {}
                        }
                      >
                        {value.name}
                      </ul>
                    </Link>
                  ))}
                </>
              ) : (
                <>
                  {" "}
                  {mentorProfile?.map((value, idx) => (
                    <Link
                      style={{ paddingRight: " 100px" }}
                      to={value.key}
                      activeClass="activePromotion"
                      smooth={true}
                      offset={0}
                      duration={500}
                      delay={100}
                      spy={true}
                      className="linkCplor"
                    >
                      <ul
                        className="text-secondary cursor mb-0 ps-2"
                        key={idx}
                        onClick={() => setDetails(value?.name)}
                        style={
                          details === value.name
                            ? {
                                borderLeft: "4px solid red",
                                backgroundColor: "#fff",
                                color: "red",
                                padding: "10px",
                              }
                            : {}
                        }
                      >
                        {value.name}
                      </ul>
                    </Link>
                  ))}{" "}
                </>
              )}
            </div>
          </div>
          {/* middle section */}
          <div className="col-md-8">
            <h2 className=" mt-4 mb-3 text-danger">
              {user?.fullName || "No Name"}
            </h2>
            <div>
              <EmailSection
                // mentorValue={mentorDetails?.mentor}
                portfolioValue={portfolioValue}
                loading={loading}
                error={error}
              ></EmailSection>
              <br />
              <SocialMedia
                portfolioValue={portfolioValue}
                loading={loading}
                error={error}
              ></SocialMedia>
              <br />
              <div className="my-4">
                <span
                  onClick={() => {
                    setActive("portfolio")
                  }}
                  style={
                    active == "portfolio"
                      ? { borderBottom: "3px solid #cd2026" }
                      : { borderBottom: "3px solid #daf4df" }
                  }
                  className="cursor px-3 py-2"
                >
                  <span className="fs-6">Portfolio</span>
                </span>{" "}
                <span
                  onClick={() => {
                    setActive("mentorProfile")
                  }}
                  className="cursor px-3 py-2"
                  style={
                    active == "mentorProfile"
                      ? { borderBottom: "3px solid #cd2026" }
                      : { borderBottom: "3px solid #daf4df" }
                  }
                >
                  <span className="fs-6">Mentor Profile</span>
                </span>
              </div>

              {active == "portfolio" ? (
                <>
                  <Element id="about">
                    <About
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></About>
                  </Element>
                  <br />
                  <Element id="skills">
                    <Skill
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></Skill>
                  </Element>
                  <br />
                  <Tools
                    portfolioValue={portfolioValue}
                    loading={loading}
                    error={error}
                  ></Tools>
                  <br />
                  <Element id="education">
                    <Educations
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></Educations>
                  </Element>
                  <br />
                  <Element id="experience">
                    <Cartification
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></Cartification>
                  </Element>
                  <br />
                  <WorkExperience
                    portfolioValue={portfolioValue}
                    loading={loading}
                    error={error}
                  ></WorkExperience>
                  <br />
                  <Element id="portfolio">
                    <Portfolio
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></Portfolio>
                  </Element>

                  {/* <Element id="certificate">
                  <Certificate
                    portfolioValue={portfolioValue}
                    loading={loading}
                    error={error}
                  ></Certificate>
                </Element> */}

                  {/* <Element id="transactions">
                    <Transactions
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></Transactions>
                  </Element> */}

                  {/* <Element id="workPreferences">
                    <WorkPreferences
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></WorkPreferences>
                  </Element> */}
                  {/* <Element id="neevFinanceDocuments">
                    <NewFinance
                      id={id}
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></NewFinance>
                  </Element>

                  <Element id="">
                    <ImageSection
                      id={id}
                      portfolioValue={portfolioValue}
                      loading={loading}
                      error={error}
                    ></ImageSection>
                  </Element> */}
                </>
              ) : (
                <div>
                  {/* mentorDetails?.invitationStatus === 'invited'  */}

                  {true ? (
                    <div>
                      <Element id="experience">
                        <Expericence
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Expericence>
                      </Element>
                      <Element id="performance">
                        <Performance
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Performance>
                      </Element>
                      <Element id="finances">
                        <Finances
                          id={id}
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Finances>
                      </Element>

                      <Element>
                        <DateValue
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></DateValue>
                      </Element>

                      <Element>
                        <TimelineSlider
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></TimelineSlider>
                      </Element>

                      <Element id="Calender">
                        <CalenderValue
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></CalenderValue>
                      </Element>

                      <Element id="">
                        <Image4
                          id={id}
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Image4>
                      </Element>

                      <Element id="">
                        <AssignedCourse
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></AssignedCourse>
                      </Element>

                      <Element id="availability">
                        <Availability
                          id={id}
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Availability>
                      </Element>

                      <Element>
                        <MentorAgrement
                          id={id}
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></MentorAgrement>
                      </Element>
{/* 
                      <Element id="batches">
                        <Batches
                          portfolioValue={portfolioValue}
                          loading={loading}
                          error={error}
                        ></Batches>
                      </Element> */}
                    </div>
                  ) : (
                    <div className="text-danger">
                      {" "}
                      Oops..!! First invite him/her ....
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1 col-xxl-1">
            <EditOption></EditOption>
          </div>
        </div>
      )}
    </div>
  )
}

export default MentorPortfolio
