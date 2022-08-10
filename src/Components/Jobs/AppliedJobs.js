import React from "react";
import { FiNavigation } from "react-icons/fi";
import { GiSettingsKnobs } from "react-icons/gi";
import moment from "moment";
import JobsFilter from './Filter'
import JobsChild from "./JobChild"
import { useDispatch } from "react-redux";


const AppliedJobs = ({ history, applied }) => {
  console.log(applied);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "#FFE2C8", color: "#FF842B" }}>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex align-items-center"
              style={{ color: "#FF842B" }}
            >
              <FiNavigation size="40" />
              <div className="mx-3">
                <h5>
                  {applied?.totalAppliedJobs == 0
                    ? "--"
                    : applied?.totalAppliedJobs}
                </h5>
                <span>Applied Jobs</span>
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
            onClick={()=> dispatch({type: 'FILTER_TYPE', payload: "applied"})}
          >
            Filter
          </span>
        </span>
        <JobsFilter />
        <hr></hr>

        {applied?.appliedJobs?.map((i) => (
          <div className="p-2 bg-white mt-2 shadow-sm">
               <JobsChild i={i} applied={true}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
