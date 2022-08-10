import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalSections from "../../common/ModalSections";
import moment from "moment";
import { Tooltip } from "@mui/material";
import { TagValue } from "../../common/StyleComponents";
import { PortfolioContextMade } from "../PortfolioContext";
import {IoMdAdd} from "react-icons/io"


function WorkExperience({ loading, portfolioValue, error }) {
  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  const [ModalOpen1, setModalOpen1] = useState(false);
  const [ModalId, setModalId] = useState(null);
  const togglModal1 = (id) => {
    setModalOpen1(!ModalOpen1);
    setModalId(id);
  };

  const [PortfolioContext, setPortfolioContex] =
  useContext(PortfolioContextMade);


  return (
    <div>
      {ModalOpen && (
        <ModalSections
          portfolioValue={portfolioValue}
          keyvalue="workExperience"
          modal={ModalOpen}
          togglModal={togglModal}
        />
      )}
      <div className={PortfolioContext ? "bgGray p-4 shadow-sm " :" p-4"}>
        <div>
          <div className="d-flex justify-content-between">
            <p className="fs-4 textColor1 weight">Work Experience</p>
          { PortfolioContext && <button
              className="btn btn-danger borderRedius"
              onClick={togglModal}
            >
             
            <IoMdAdd size={22}></IoMdAdd><p className="d-none d-sm-inline">  Add Work Experience</p>

            </button>}
          </div>
        </div>

    {PortfolioContext ?  <hr /> : <hr  className="w-50"/> }
       
        {/* every box start here */}
        <div>
          <div className="row">
            {portfolioValue?.workExperience?.map((value, idx) => (
              <div className="col-12" key={idx}>
                <div className={PortfolioContext ?"shadow-sm my-2 p-3":"my-2 p-3"}>
                  <div className=" border-start  border-danger mx-1 my-3 px-2 ">
                    <div className="d-flex flex-sm-row flex-column  justify-content-between">
                      <div className="w-50">
                        <Tooltip
                          title={value.designation}
                          placement="top-start"
                        >
                          <TagValue line="1" font="15px" weigth="900">
                            {value.designation}
                          </TagValue>
                        </Tooltip>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="me-3">
                            {" "}
                            {moment(value?.startDate).format("MMM YYYY")} -{" "}
                            {moment(value?.endDate).format("MMM YYYY")}{" "}
                          </p>
                          <div className="ms-5">
                            {PortfolioContext && (
                              <div
                                className="d-flex iconColor  cursorValue"
                                onClick={() => togglModal1(value._id)}
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
                      </div>
                    </div>

                    <div className="w-50">
                      <Tooltip title={value?.companyName} placement="top-start">
                        <TagValue line="1" font="13px" weigth="300">
                          {value?.companyName}
                        </TagValue>
                      </Tooltip>
                      <Tooltip title={value?.annualCTC} placement="top-start">
                        <TagValue line="2" font="13px">
                          {value?.domain},{value?.annualCTC}
                        </TagValue>
                      </Tooltip>

                      <Tooltip title={value?.description} placement="top-start">
                        <TagValue line="3" font="13px">
                          {value?.description}
                        </TagValue>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* every box end here */}
      </div>
      {ModalOpen1 && (
        <ModalSections
          portfolioValue={portfolioValue}
          keyvalue="workExperienceChild"
          id={ModalId}
          modal={ModalOpen1}
          togglModal={togglModal1}
        />
      )}
    </div>
  );
}

export default WorkExperience;
