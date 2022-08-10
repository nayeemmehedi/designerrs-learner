import React from "react";
import { FaHandshake } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import JobsChild from "./JobChild";
import bird from "../../Assets/Images/bird.svg"
import { useDispatch } from "react-redux";

const Hired = ({ history, hired }) => {
  console.log(hired);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "#DAF4DF", color: "#007618" }}>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex align-items-center"
              style={{ color: "#007618" }}
            >
              <FaHandshake size="40" />
              <div className="mx-3">
                <h5>
                  {" "}
                  {hired?.totalAppliedJobs == 0
                    ? "--"
                    : hired?.totalAppliedJobs}
                </h5>
                <span>Hired</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FAFAFA" }} className="p-2">
        <span className="txtColor cursor py-2">
          <GiSettingsKnobs />{" "}
              <span
            className="ms-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasLeft"
            aria-controls="offcanvasLeft"
            onClick={()=> dispatch({type: 'FILTER_TYPE', payload: "hired"})}
          >
            Filter
          </span>
        </span>

        <hr></hr>

        {hired?.appliedJobs?.map((i) => (
          <div className="p-2 bg-white mt-2 shadow-sm">
            <JobsChild i={i} applied={true}/>
          </div>
        ))}

        {hired?.appliedJobs == 0 && (
          <div>
            <img src={bird} />
            <div className="text-center mt-4">
              <h5 className="txtColor">Even the crow didn’t give up</h5>
              <h6 className="fw-light">
                Don’t give up, Apply to more companies to increase your chances
                of getting hired.
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hired;
