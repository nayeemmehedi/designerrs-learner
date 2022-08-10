import React from "react";
// import covid from "../../Assets/Images/icons/covid.svg";
import covid from "../../Assets/Images/covid.png";

import { mentorDoing } from "./jsonValue";

function DoingMentors() {
  return (
    <div className="my-5">
      <div className="row">
        <h4>What you'll be doing as a mentor?</h4>
        <div className="col-sm-12 col-md-6 col-lg-6">
          {mentorDoing.map((v) => (
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
    </div>
  );
}

export default DoingMentors;
