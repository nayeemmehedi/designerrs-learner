import React from "react";
import Review from "./Review";
import { MdOutlineArrowBack } from "react-icons/md";
import { useHistory } from "react-router-dom";

function MentorReview() {
  const history = useHistory();

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-2">
          {" "}
          <div
            className="btn txtColor mt-3"
            onClick={() => history.goBack()}
            style={{ borderRadius: "0" }}
          >
            <MdOutlineArrowBack size="17" /> Back to Dashboard
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          <Review></Review>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2"></div>
      </div>
    </div>
  );
}

export default MentorReview;
