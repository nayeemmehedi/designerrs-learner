import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const JobCard = ({list }) => {
    const history = useHistory()
  return (
    <div className="mb-4">
      <div style={{ backgroundColor: "#FAFAFA" }} className="p-2">
        <span className="txtColor cursor py-2">
          <GiSettingsKnobs /> <span className="ms-2">Filter</span>
        </span>
        {list && (
          <>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <small>Open</small>
              <small>03</small>
            </div>
            <hr></hr>
          </>
        )}
        <div className="p-2 bg-white mt-2 shadow-sm">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src=""
                  style={{
                    height: "30px",
                    width: "30px",
                    objectFit: "cover",
                    borderRadius: "40%",
                  }}
                />
                <small
                  className="ms-2 fw-bold cursor"
                  onClick={() => history.back()}
                >
                  Roy Technologies Private Limited
                </small>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <p className="border p-1 tag m-1 bgSecondary">
              <small>Ux Designer</small>
            </p>
          </div>
          <small className="my-2 text-secondary">
            Applied by 16 March 2021
          </small>
          {list && (
            <>
              <button
                className="btn btn-main border txtColor fw-bold form-control my-1 mt-3"
                // onClick={toggle}
              >
                Apply
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
