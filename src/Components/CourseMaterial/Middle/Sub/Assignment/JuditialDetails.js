import React from "react";

const JuditialDetails = ({ togglModal, ModalOpen }) => {
  return (
    <CustomModal toggle={togglModal} modal={ModalOpen}>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <h5 style={{ color: "#616161" }}>Rework Assignment</h5>
          <FaTimes
            onClick={togglModal}
            style={{ cursor: "pointer", width: "40px" }}
          ></FaTimes>
        </div>
        <hr></hr>
        <div>Approve this assignment?</div>
        <div>Tell Learner to rework?</div>
      </div>
    </CustomModal>
  );
};

export default JuditialDetails;
