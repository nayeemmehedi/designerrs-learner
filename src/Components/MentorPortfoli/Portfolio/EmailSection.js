import React, { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PortfolioContextMade } from "../../PortfolioMain/MiddleSidePortfolio/PortfolioContext";
import Tooltip from "@mui/material/Tooltip";
import { Tag } from "../../PortfolioMain/common/StyleComponents";
import ModalSections from "../../PortfolioMain/common/ModalSections";
function EmailSection({ loading, portfolioValue, mentorValue, error }) {

  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade);


  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <div className="row">
        <div className="col-sm-12	col-md-6	col-lg-4">
        <div className="row ">
            <div className="col-2">
              <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                <IoMdCall size="25" />
              </span>
            </div>
            <div className="col-3">
              <div className="px-3">
                <small>Email</small>
                <br></br>
                <Tooltip
                  title={portfolioValue?.email || "No Email"}
                  placement="top-start"
                >
                  <Tag width="120px" font="13px" weigth="800">
                    {portfolioValue?.email}
                  </Tag>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12	col-md-6	col-lg-4 ">
        <div className="row">
            <div className="col-2">
              <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                <AiOutlineMail size="25" />
              </span>
            </div>
            <div className="col-3">
              <div className="px-3">
                <small>Phone</small>
                <br></br>
                <Tooltip
                  title={portfolioValue?.phone || "No Phone "}
                  placement="top-start"
                >
                  <Tag width="120px" font="13px" weigth="800">
                    {portfolioValue?.phone}
                  </Tag>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12	col-md-6	col-lg-3">
        <div className="row">
            <div className="col-2">
              <span className="avatar  d-flex justify-content-center align-items-center bgGray iconColor">
                <MdOutlineLocationOn size="25" />
              </span>
            </div>
            <div className="col-3">
              <div className="px-3">
                <small>Location</small>
                <br></br>
                <Tooltip
                  title={portfolioValue?.Location || "No Location"}
                  placement="top-start"
                >
                  <Tag width="120px" font="13px" weigth="800">
                    {portfolioValue?.Location}
                  </Tag>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          {PortfolioContext && (
            <div
              className="d-flex mt-3 iconColor  cursorValue"
              onClick={togglModal}
            >
              <div className="d-flex align-items-center">
                <small className="fs-6  cursorValue">Edit</small>
              </div>
              <div className="d-flex align-items-center ms-2">
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
            </div>
          )}
        </div>

      </div>
      {ModalOpen && (
        <ModalSections
          portfolioValue={portfolioValue}
          keyvalue="emailSection"
          modal={ModalOpen}
          togglModal={togglModal}
        />
      )}
    </div>
  );
}

export default EmailSection;
