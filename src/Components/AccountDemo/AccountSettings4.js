import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

function CourseSettings4() {
  return (
    <div>
      <div style={{ backgroundColor: "#f7f9f0" }}>
        <h2 className="px-4 pt-4" style={{ color: "#616161" }}>
          Transitions{" "}
        </h2>

        <div className="m-5">
          <div className="d-flex justify-content-between my-5">
            <span style={{ fontSize: "30px", color: "#d43a47" }}>
              {" "}
              <img
                src="https://cdn3.iconfinder.com/data/icons/ui-arrow/512/Artboard_6-512.png"
                alt="Avatar"
                className="avatar"
              ></img>
              Ux/Ui design for Scratch
            </span>

            <div className="p-2">
              <button
                style={{ borderRadius: " 0px" }}
                className="btn btn-danger"
              >
                <FiDownload size="27" className="pe-2" />
                Download Invoice
              </button>
            </div>
          </div>

          <div className="w-50">
            <div>
              <small>Batch Name</small>
              <p>sddssdddddddd</p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <small>Duration</small>
                <p>ddddddddd</p>
              </div>

              <div>
                <small>Location</small>
                <p>ddddddd</p>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div>
                <small>Start Date</small>
                <h6>3dd 33d 3</h6>
              </div>

              <div>
                <small>End Date</small>
                <p>ssdddd</p>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                height: "100px",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div className="row ">
                <div className="col-1 pt-3">
                  <div className="ps-3">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/ui-arrow/512/Artboard_6-512.png"
                      alt="Avatar"
                      className="avatar "
                    ></img>
                  </div>
                </div>

                <div className="col-4 ms-4 mt-2  pt-3">
                  <small>Mentor</small>
                  <p> To be assign shortly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div
              style={{
                height: "100px",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <p className="p-4">
                why i can't sleep i dont know quit job and go to try govt. job
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h6>Payment Details</h6>

            <div
              style={{
                height: "200px",
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="p-4">
                    <small>Amount Paid</small>
                    <h6> $5000 </h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4">
                    <div
                      className=""
                      style={{
                        width: "100%",
                        height: "40px",
                        backgroundColor: "#d8f4e3",
                        color: "#05630e",
                      }}
                    >
                      <div className="p-2">
                        <i style={{ fontSize: "14px" }}>
                          {" "}
                          <MdOutlinePayment size="20" /> Recieved on 21 march
                          2021
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="p-4">
                    <small>Payment Source</small>
                    <h6> dash dash bank </h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-4">
                    <small>Payment Plan</small>
                    <h6> dash dash bank </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <div className="my-5">
        <div className="row m-5 ">
          <div className="col-4">
            <img
              src="https://www.expressandstar.com/resizer/-ubWj-DtTdPenlEHaXt3UZuTyW0=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-expressandstar-mna.s3.amazonaws.com/public/6ZWZ5IGQZ5DFBCC74LC7FW4FCY.jpg"
              alt=""
              style={{ height: "180px", width: "180px" }}
            />
          </div>
          <div className="col-5">
            <h5 style={{ color: "#d43a47" }}>Goodies</h5>
            <p style={{ fontSize: "10px" }}>Goodies</p>
            <small style={{ fontSize: "10px" }}>contains</small>

            <ol>
              <li style={{ fontSize: "13px" }}>Ux Journal</li>
              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>
            </ol>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div>
              <h6 style={{ fontSize: "13px" }}>Quintity</h6>
              01kit
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 p-3" style={{ backgroundColor: "#f5eded" }}>
        <span>
          {" "}
          <AiOutlineDeliveredProcedure className="me-2" /> Processing{" "}
        </span>
      </div>

      <div className="pt-4">
        <hr style={{ width: "100%" }} />
      </div>
    </div>
  );
}

export default CourseSettings4;
