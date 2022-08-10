import React, { useContext, useState } from "react"
import { FiEdit } from "react-icons/fi"
import { AiOutlineShareAlt } from "react-icons/ai"

import { PortfolioContextMade } from "../MiddleSidePortfolio/PortfolioContext"
import ShareModal from "../MiddleSidePortfolio/ModalPortfolio/ShareModal"

function EditOption() {
  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  return (
    <div>
      {ModalOpen && <ShareModal modal={ModalOpen} togglModal={togglModal} />}
      <div className="my-3">
        <span
          className="avatar  d-flex justify-content-center align-items-center bgGray iconColor cursor"
          onClick={() => setPortfolioContex(!PortfolioContext)}
        >
          <FiEdit size="25" />
        </span>
      </div>
      <div className="my-3">
        <span
          className="avatar  d-flex justify-content-center align-items-center bgGray iconColor cursor"
          onClick={() => togglModal()}
        >
          <AiOutlineShareAlt size="25" />
        </span>
      </div>
    </div>
  )
}

export default EditOption
