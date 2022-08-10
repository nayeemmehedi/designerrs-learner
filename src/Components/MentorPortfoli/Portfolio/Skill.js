import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalSections from "../../PortfolioMain/common/ModalSections";
import { PortfolioContextMade } from "../../PortfolioMain/MiddleSidePortfolio/PortfolioContext";

function Skill({ loading, portfolioValue, error }) {

  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const [PortfolioContext, setPortfolioContex] =
  useContext(PortfolioContextMade);

  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " :" p-4"}>
      <div className="d-flex justify-content-between">
        <p className="fs-5 iconColor">Skills</p>
        <div className="d-flex justify-content-between  cursorValue">
          {PortfolioContext &&<div className="d-flex mt-3 iconColor" onClick={togglModal}>
            <div className="d-flex align-items-center">
              <small className="fs-6">Edit</small>
            </div>
            <div className="d-flex align-items-center ms-2">
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </div>
          </div>}
        </div>
      </div>
      <div className="">
      {PortfolioContext && <hr></hr>}
        <div>
          <br />

          <ul className="d-flex justify-content-between ">
            <div className="row">
              {portfolioValue?.skills?.map((value, idx) => (
                <div className="col" key={idx}>
                  <li>{value}</li>
                </div>
              ))}
            </div>
          </ul>
        </div>
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
  );
}

export default Skill;
