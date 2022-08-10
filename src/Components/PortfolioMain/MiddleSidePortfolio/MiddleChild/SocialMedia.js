import React, { useContext, useState } from "react"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { TiSocialInstagram } from "react-icons/ti"
import { AiOutlineArrowRight } from "react-icons/ai"
import ModalSections from "../../common/ModalSections"
import { PortfolioContextMade } from "../PortfolioContext"
import { CgRing } from "react-icons/cg"

function SocialMedia({ loading, portfolioValue, error }) {
  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

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
          {PortfolioContext ? (
            <hr className="margin0" />
          ) : (
            <hr className="w-50 margin0" />
          )}

          <br />

          <div className="iconColor">
            {portfolioValue?.socialMedia?.[0]?.url && (
              <a
                className="iconColor"
                href={portfolioValue?.socialMedia?.[0]?.url}
              >
                {" "}
                <TiSocialLinkedin
                  size="35"
                  style={{ marginLeft: "10px" }}
                ></TiSocialLinkedin>
              </a>
            )}
            {portfolioValue?.socialMedia?.[1]?.url && (
              <a
                className="iconColor"
                href={portfolioValue?.socialMedia?.[1]?.url}
              >
                <TiSocialTwitter
                  size="35"
                  style={{ marginLeft: "30px" }}
                ></TiSocialTwitter>
              </a>
            )}

            {portfolioValue?.socialMedia?.[2]?.url && (
              <a
                className="iconColor"
                href={portfolioValue?.socialMedia?.[2]?.url}
              >
                <TiSocialFacebookCircular
                  size="35"
                  style={{ marginLeft: "30px" }}
                ></TiSocialFacebookCircular>
              </a>
            )}

            {portfolioValue?.socialMedia?.[3]?.url && (
              <a
                className="iconColor"
                href={portfolioValue?.socialMedia?.[3]?.url}
              >
                <TiSocialInstagram
                  size="35"
                  style={{ marginLeft: "30px" }}
                ></TiSocialInstagram>
              </a>
            )}
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
