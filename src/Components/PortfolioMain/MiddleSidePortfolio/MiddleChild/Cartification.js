import React, { useContext, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ModalSections from "../../common/ModalSections";
import moment from "moment";
import Tooltip from "@mui/material/Tooltip";
import { Tag, TagValue } from "../../common/StyleComponents";
import { PortfolioContextMade } from "../PortfolioContext";
import { IoMdAdd } from "react-icons/io";

function Cartification({ loading, portfolioValue, error }) {
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
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <div>
        <div className="d-flex justify-content-between">
          <p className="fs-4 textColor1 weight ">Certification</p>
          {PortfolioContext && (
            <button
              className="btn btn-danger borderRedius"
              onClick={togglModal}
            >
              <IoMdAdd size={22}></IoMdAdd>
              <p className="d-none d-sm-inline"> Add Certification </p>
            </button>
          )}
        </div>
      </div>

      {PortfolioContext ? (
        <hr className="margin0" />
      ) : (
        <hr className="w-50 margin0" />
      )}

      {/* every box start here */}
      <div>
        <div className="row">
          {portfolioValue?.certification?.map((value, idx) => (
            <div className="col-12" key={idx}>
              <div
                className={PortfolioContext ? "shadow-sm my-2 p-3" : "my-2 p-3"}
              >
                <div className=" border-start  border-danger mx-1 my-3 px-2 ">
                  <div className="d-flex flex-sm-row flex-column justify-content-between">
                    <div className="w-50">
                      <Tooltip title={value?.course} placement="top-start">
                        <TagValue line="1" font="15px" weigth="900">
                          {value?.course}
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
                    <Tooltip title={value?.institute} placement="top-start">
                      <TagValue line="2" font="13px">
                        {value?.fieldOfStudy},{value?.institute}
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

      {ModalOpen && (
        <ModalSections
          keyvalue="certifications"
          modal={ModalOpen}
          togglModal={togglModal}
          portfolioValue={portfolioValue}
        />
      )}

      {ModalOpen1 && (
        <ModalSections
          portfolioValue={portfolioValue}
          keyvalue="certificationsChild"
          id={ModalId}
          modal={ModalOpen1}
          togglModal={togglModal1}
        />
      )}
    </div>
  );
}

export default Cartification;
