import React from "react";
import finger from "../../Assets/Images/icons/finger.svg";
import { Benefits } from "./jsonValue";

function BenefitMentors() {
  return (
    <div className="my-4">
      <h4 className="mb-4 mt-5">Benefits of Mentorship</h4>

      <div className="row">
        {Benefits.map((v, idx) => (
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div
              className={
                (idx + 1) % 2 == 0
                  ? "ms-4 my-3 shadow-sm pb-2 "
                  : " my-3 shadow-sm pb-2"
              }
              style={{ borderTop: "3px solid #7128CE", background: "#FFFFFF" }}
            >
              <div className="m-3">
                <img
                  src={finger}
                  style={{ maxHeight: "42px", maxWidth: "28px" }}
                  alt=""
                  className="my-2"
                />
                <h5 className="fw-bolder ">{v.first}</h5>
                <small className="pb-3">{v.second}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitMentors;
