import React, { useState } from "react";
import Mentorship from "../../Assets/Images/png/mentorship.png";
import CustomModal from "../PortfolioMain/common/CustomModal";
import ApplicationForm from "./ApplicationForm";

function MentorLastCoumn() {
  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);

  return (
    <div>
      {ModalOpen && (
        <CustomModal modal={ModalOpen} toggle={togglModal}>
          <ApplicationForm togglModal={togglModal}></ApplicationForm>
        </CustomModal>
      )}
      <img
        src={Mentorship}
        style={{ maxHeight: "215px", maxWidth: "auto" }}
        alt=""
      />
      <h2 className="mt-4">Mentorship Program</h2>

      <div>
        <hr />
      </div>

      <div style={{ height: "400px" }}></div>
      <div class="d-grid gap-2">
        <button className="btn btn-main2 p-2" onClick={togglModal}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default MentorLastCoumn;
