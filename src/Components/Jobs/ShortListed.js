import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiSettingsKnobs } from "react-icons/gi";
import JobsChild from "./JobChild"
import { useDispatch } from "react-redux";

const ShortListed = ({ history, shortlisted }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ backgroundColor: "#F9E7D7", color: "#8A4B12" }}>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex align-items-center"
              style={{ color: "#8A4B12" }}
            >
              <HiOutlineUserGroup size="40" />
              <div className="mx-3">
                <h5>{shortlisted?.totalAppliedJobs == 0 ?  "--" : shortlisted?.totalAppliedJobs }</h5>
                <span>Short Listed</span>
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
            onClick={()=> dispatch({type: 'FILTER_TYPE', payload: "shortlisted"})}
          >
            Filter
          </span>
        </span>

        <hr></hr>
        {shortlisted?.appliedJobs?.map((i) => (
          <div className="p-2 bg-white mt-2 shadow-sm">
            <JobsChild i={i} applied={true}/>
            {/* {list && (
            <>
              <button
                className="btn btn-main border txtColor fw-bold form-control my-1 mt-3"
                onClick={toggle}
              >
                Apply
              </button>
            </>
          )} */}
          </div>
        ))}

        {/* {title == "Hired" && (
          <div>
            <img src={bird} />
            <div className="text-center mt-4">
              <h5 className="txtColor">Even the crow didn’t give up</h5>
              <h6 className="fw-light">
                Don’t give up, Apply to more companies to increase your
                chances of getting hired.
              </h6>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ShortListed;
