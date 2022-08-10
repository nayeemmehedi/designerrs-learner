import React, { useState } from "react"
import MentorAgrement from "../../MentorPortfoli/MentorProfile/MentorAgrement"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { Link } from "react-scroll"
import { Element } from "react-scroll"
import { useHistory, useParams } from "react-router-dom"
import About from "./MentorDetails/About"
import DemoFormik from "./MentorDetails/DemoFormik"
import DemoSkill from "./MentorDetails/DemoSkill"
import SocialMedia from "./MentorDetails/SocialMedia"
import SkillsTools from "./MentorDetails/SkillsTools"
import Educations from "./MentorDetails/Educations"
import WorkExperience from "./MentorDetails/WorkExperience"
import ViewSections from "./MentorDetails/ViewSections"
import WorkPreferances from "./MentorDetails/WorkPreferances"
import Portfolio_value from "./MentorDetails/Portfolio_value"
import ScrollToTop from "../../../Helper/Custom/ScrollToTop"
import Style from "../../../Style/course.module.scss"
import { useSelector } from "react-redux"

const portfolio = [
  { name: "About You", key: "about" },
  { name: "Social Media Profile", key: "SocialMediaProfile" },
  { name: "Skills and Tools", key: "SkillsandTools" },
  { name: "Work Experience", key: "WorkExperience" },
  { name: "Work Preferences", key: "WorkPreferences" },
  { name: "Education", key: "Education" },
  { name: "Portfolio", key: "Portfolio" },
]

function NewPortfolioMentor({ portfolioValue, active, setActive }) {
  const [details, setDetails] = useState("About")

  const history = useHistory()

  const { loading, user, error } = useSelector(state => state.user)

  const mentorDetails = {}

  return (
    <div>
      <ScrollToTop />

      <div className={` my-3`}>
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

            <div className="d-none d-sm-block course-details-nav ">
              <>
                {portfolio?.map((value, idx) => (
                  <ul
                    className={`text-secondary p-2 cursor px-2   `}
                    key={idx}
                    onClick={() => setDetails(value?.name)}
                  >
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
                      {value.name}
                    </Link>
                  </ul>
                ))}
              </>
            </div>
          </div>
          {/* middle section */}
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8 col-xxl-8">
            <h2 className=" mt-4 mb-3 text-danger">
              {!loading && (
                <h4 className="my-4">
                  {user?.fullName?.split(" ")[0] ||
                    user?.email?.match(/^.+(?=@)/)[0] ||
                    "User"}
                </h4>
              )}
            </h2>
            <div>
              <div className="my-4">
                <span
                  onClick={() => {
                    setActive("uploadResume")
                  }}
                  style={
                    active == "uploadResume"
                      ? { borderBottom: "3px solid #cd2026" }
                      : { borderBottom: "3px solid #daf4df" }
                  }
                  className="cursor px-3 py-2"
                >
                  <span className="fs-6">Upload Resume</span>
                </span>{" "}
                <span
                  onClick={() => {
                    setActive("createProfile")
                  }}
                  className="cursor px-3 py-2"
                  style={
                    active == "createProfile"
                      ? { borderBottom: "3px solid #cd2026" }
                      : { borderBottom: "3px solid #daf4df" }
                  }
                >
                  <span className="fs-6">Create Profile</span>
                </span>
              </div>

              <>
                <Element id="about">
                  <About
                    portfolioValue={portfolioValue}
                    loading={loading}
                    error={error}
                  ></About>
                </Element>
                <br />
                <Element id="SocialMediaProfile">
                  <SocialMedia
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  ></SocialMedia>
                </Element>
                <br />

                <Element id="SkillsandTools">
                  <SkillsTools
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  ></SkillsTools>
                </Element>
                <br />

                <Element id="Education">
                  <Educations
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  ></Educations>
                </Element>
                <br />
                <Element id="Portfolio">
                  <Portfolio_value
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  />
                </Element>
                <br />

                <Element id="WorkExperience">
                  <WorkExperience
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  ></WorkExperience>
                </Element>
                <br />

                <Element id="WorkPreferences">
                  <WorkPreferances
                    portfolioValue={mentorDetails?.portfolio}
                    loading={loading}
                    error={error}
                  ></WorkPreferances>
                </Element>
                <br />
              </>
            </div>
          </div>
        </div>
      </div>

      {/* <button className='btn btn-dnger' onClick={()=>setActive("uploadResume") }>active or not </button> */}
    </div>
  )
}

export default NewPortfolioMentor
