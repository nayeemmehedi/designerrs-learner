import React from "react";

const value = ["UI Design", "Voice UX", "UX Design", "UI Trends"];
const value1 = ["Case Studies", "Virtual Reality", "Augmented Reality"];

function LeftDetaxPb() {
  return (
    <div className="my-5">
      <div>
        <div className="ms-5 ">
          <h6 className="fw-bold">Tags</h6>

          <p className="fw-bold"># Field</p>
        </div>

        <div className="mx-4 px-3">
          <div className="row">
            {value.map((v) => (
              <div className="col-5 p-2 ms-3 mt-3 border border-secendary ">
                #{v}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ms-5 my-4">
        <p className="fw-bold"># Series</p>

        <div className=" ">
          {value1.map((v) => (
            <div className=" p-2  mt-3 border border-secendary fit">#{v}</div>
          ))}
        </div>
      </div>

      <div className="ms-5 my-4">
        <p className="fw-bold"># Course</p>

        <div className=" ">
          {value1.map((v) => (
            <div className=" p-2  mt-3 border border-secendary fit">#{v}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftDetaxPb;
