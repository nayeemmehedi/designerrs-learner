import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalSections from "../../common/ModalSections";
import { Tag, TagValue } from "../../common/StyleComponents";
import { PortfolioContextMade } from "../PortfolioContext";

function About({ loading, portfolioValue, error }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade);

  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : "p-4"}>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <p className="fs-4 textColor1 weight">About</p>
          <div>
            {PortfolioContext && (
              <div className="d-flex  iconColor cursorValue">
                <div className="d-flex align-items-center" onClick={togglModal}>
                  <small className="fs-6">Edit</small>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <AiOutlineArrowRight></AiOutlineArrowRight>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
        {PortfolioContext ?  <hr  className="margin0"/> : <hr  className="w-50 margin0"/> }

          <div className="row pt-3">
            <div className="col-6 ">
              <div>
                <TagValue font="16px" line="2" weigth="900">
                  {portfolioValue?.about?.heading}
                </TagValue>
                <TagValue font="12px" line="3">
                  {portfolioValue?.about?.body}
                </TagValue>
              </div>
            </div>

            <div className="col-8"></div>
          </div>
        </div>

        {ModalOpen && (
          <ModalSections
            portfolioValue={portfolioValue}
            keyvalue="aboutYou"
            modal={ModalOpen}
            togglModal={togglModal}
          />
        )}
      </div>
    </div>
  );
}

export default About;
