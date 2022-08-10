import React, { useContext, useState } from "react"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialInstagram } from "react-icons/ti"
import { AiOutlineArrowRight } from "react-icons/ai"
import be from "../../../Assets/mentorPortfolio//be.svg"
import goal from "../../../Assets/mentorPortfolio/goal.svg"
import goal2 from "../../../Assets/mentorPortfolio/goal-2.svg"

import { height } from "@mui/system"
import { PortfolioContextMade } from "../../PortfolioMain/MiddleSidePortfolio/PortfolioContext"
import ModalSections from "../../PortfolioMain/common/ModalSections"

function SocialMedia({ loading, portfolioValue, error }) {
  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  const handleSocialUi = type => {
    switch (type) {
      case "linkedln":
        return <TiSocialLinkedin size="35" style={{ marginLeft: "10px" }} />
      case "twitter":
        return <TiSocialTwitter size="35" style={{ marginLeft: "10px" }} />
      case "facebook":
        return (
          <TiSocialFacebookCircular size="35" style={{ marginLeft: "10px" }} />
        )
      case "instagram":
        return <TiSocialInstagram size="35" style={{ marginLeft: "10px" }} />
    }
  }

  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <div className="">
        <div>
          <div className=" d-flex justify-content-between">
            <p className="fs-4 textColor1 weight">Social Media</p>
            <div>
              {PortfolioContext && (
                <div
                  className="d-flex mt-3 iconColor  cursorValue"
                  onClick={togglModal}
                >
                  <div className="d-flex align-items-center">
                    <small className="fs-6">Edit</small>
                  </div>
                  <div className="d-flex align-items-center ms-2">
                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </div>
                </div>
              )}
            </div>
          </div>

          {PortfolioContext && <hr />}

          <br />

          <div className="iconColor">
            {portfolioValue?.socialMedia?.map(i => (
              <a className="iconColor" href={i?.url}>
                {handleSocialUi(i?.url?.match(/(?:www\.)?(\w*)\./)[1])}
              </a>
            ))}
          </div>
        </div>

        {ModalOpen && (
          <ModalSections
            portfolioValue={portfolioValue}
            keyvalue="socialMedia"
            modal={ModalOpen}
            togglModal={togglModal}
          />
        )}
      </div>
    </div>
  )
}

export default SocialMedia
