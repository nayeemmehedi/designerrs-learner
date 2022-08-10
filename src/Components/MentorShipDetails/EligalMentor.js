import React, { useState } from "react";
// import covid from "../../Assets/Images/icons/covid.svg";
import covid from "../../Assets/Images/covid.png";

import Guest from "./Guest";
import CustomModal from "../PortfolioMain/common/CustomModal";
import { eligible } from "./jsonValue";

function EligalMentor() {
  // const [ModalOpen, setModalOpen] = useState(false);
  // const togglModal = () => setModalOpen(!ModalOpen);

  return (
    <div className="my-4">
      {/* {ModalOpen && (
        <CustomModal modal={ModalOpen} toggle={togglModal}>
          <Guest togglModal={togglModal}></Guest>
        </CustomModal>
      )} */}
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5">
          <h4>You are eligible for mentorship if...</h4>
          {eligible.map((v) => (
            <div className="d-flex  align-items-center  my-3 ">
              <img
                src={v.image}
                style={{ width: "33.33px", height: "33px" }}
                alt=""
              />{" "}
              <div className="ms-3 mt-3">
                <p>{v.first}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="ps-5">
            <img
              src={covid}
              style={{ maxWidth: "416px", maxHeight: "474px" }}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <button className="btn btn-danger" onClick={togglModal}>
        Guest
      </button> */}
    </div>
  );
}

export default EligalMentor;
