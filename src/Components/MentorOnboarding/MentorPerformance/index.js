import React from "react";
import Performance from "./Performance";
import { MdOutlineArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";

function MentorPerformance() {
  const history = useHistory();

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-2">
          <div
            className="btn txtColor mt-3"
            onClick={() => history.goBack()}
            style={{ borderRadius: "0" }}
          >
            <MdOutlineArrowBack size="17" /> Back to Dashboard
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <Performance></Performance>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </div>
  );
}

export default MentorPerformance;
