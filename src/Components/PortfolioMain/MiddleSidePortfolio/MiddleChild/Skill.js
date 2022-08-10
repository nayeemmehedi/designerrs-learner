import React, { useContext, useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import ModalSections from "../../common/ModalSections"
import { PortfolioContextMade } from "../PortfolioContext"

function Skill({ loading, portfolioValue, error }) {
  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <div className="d-flex justify-content-between">
        <p className="fs-4 textColor1 weight">Skills</p>
        <div className="d-flex justify-content-between  cursorValue">
          {PortfolioContext && (
            <div className="d-flex mt-3 iconColor" onClick={togglModal}>
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

      <div className="w-50">
        <br />

        <ul className="row">
          {portfolioValue?.skills?.map((value, idx) => (
            <div className="col-md-3">
              <li className="font12">{value}</li>
            </div>
          ))}
        </ul>
      </div>
      {ModalOpen && (
        <ModalSections
          portfolioValue={portfolioValue}
          keyvalue="skills"
          modal={ModalOpen}
          togglModal={togglModal}
        />
      )}
    </div>
  )
}

export default Skill
