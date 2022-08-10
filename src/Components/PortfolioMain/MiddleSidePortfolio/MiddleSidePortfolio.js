import React, { useContext, useEffect } from "react"
import "../portfolio.css"
import About from "./MiddleChild/About"
import Cartification from "./MiddleChild/Cartification"
import Educations from "./MiddleChild/Educations"
import EmailSection from "./MiddleChild/EmailSection"
import Portfolio from "./MiddleChild/Portfolio"
import Skill from "./MiddleChild/Skill"
import SocialMedia from "./MiddleChild/SocialMedia"
import Tools from "./MiddleChild/Tools"
import WorkExperience from "./MiddleChild/WorkExperience"
import { Element } from "react-scroll"
import Style from "../../../Style/course.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { getPortfolio } from "../../../Store/Portfolio/Action"
import { PortfolioContextMade } from "./PortfolioContext"

function MiddleSidePortfolio() {
  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)
  const dispatch = useDispatch()

  const { loading, portfolioValue, error } = useSelector(
    state => state.PortfolioReducers
  )

  if (loading)
    return (
      <div className="text-center">
        <box-icon
          name="loader"
          animation="spin"
          size="30px"
          color="#cd2026"
        ></box-icon>
        <p className="font_13" style={{ color: "#cd2026" }}>
          Loading...
        </p>
      </div>
    )

  return (
    <div>
      <div className={Style.center_items}>
        <EmailSection
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
      </div>
    </div>
  )
}

export default MiddleSidePortfolio
