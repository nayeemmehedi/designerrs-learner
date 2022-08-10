import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import "../../Style/account.avator.scss";
import moment from "moment";

function Transactions({ account }) {
  return (
    <div>
      <hr />
      <h2 className="my-4  fw-light" style={{ color: "#797679" }}>
        {/* Course Details */}
        Transactions
      </h2>
      {/* <p style={{ color: "#797679" }}>01 Enrolled Course</p> */}

      {account?.courseTransactions?.map((v, idx) => (
        <div style={{ backgroundColor: "#F5F5F5" }} key={idx}>
          <div className="mx-5 ">
            <div className="d-flex  flex-sm-row flex-column justify-content-between mt-4 pt-5 pb-3">
              <span style={{ fontSize: "30px", color: "#d43a47" }}>
                {" "}
                <div className="d-flex">
                  <img
                    src={v?.product?.courseThumbnail?.link}
                    alt="no"
                    className="avatar"
                    style={{ width: "auto" }}
                  ></img>
                  <p style={{ paddingLeft: "5px" }}>
                    {" "}
                    {v?.product?.courseName}
                  </p>
                </div>
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

            <div className="w-75">
              <div>
                <small>Batch Name</small>
                <p className="fw-bold">{v?.batch?.batchCode}</p>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <small>Duration</small>
                    <p className="fw-bold">ddddddddd</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <small>Location</small>
                    <p className="fw-bold">{v?.location?.locationName}</p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <small>Start Date</small>
                    <h6 className="fw-bold">
                      {" "}
                      {moment(v?.batch?.startDate).format("LL")}
                    </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div>
                    <small>End Date</small>
                    <p className="fw-bold">
                      {moment(v?.batch?.endDate).format("LL")}
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="d-flex justify-content-between">
                               
              </div> */}

              {/* <div className="d-flex justify-content-between">
                 
              </div> */}
            </div>

            <div>
              <div
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <div className="d-flex p-4">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Avatar"
                      className="avatar"
                    ></img>
                  </div>

                  <div style={{ paddingLeft: "5px" }}>
                    <small>Mentor</small>
                    <p> {v?.batch?.primaryMentor?.fullName}</p>
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
                <div className="p-4 ">
                  <p>Sleep monitor for the elderly and young candidate.</p>
                  <small style={{ fontSize: "10px" }}>Productivity</small>
                </div>
              </div>
            </div>

            <div className="my-4">
              <h6>Payment Details</h6>
            </div>

            <div className="mt-4 pb-4 ">
              <div
                style={{
                  width: "100%",
                  backgroundColor: "white",
                }}
              >
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="p-4">
                      <small>Amount Paid</small>
                      <h6>₹ {v.amount} </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="p-4">
                      <div
                        className=""
                        style={{
                          width: "100%",
                          minHeight: "40px",
                          backgroundColor: "#d8f4e3",
                          color: "#05630e",
                        }}
                      >
                        <div className="p-2">
                          <i style={{ fontSize: "14px" }}>
                            {" "}
                            <MdOutlinePayment size="20" /> Recieved on{" "}
                            {moment(v?.createdAt).format("LL") || "no date"}
                          </i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="p-3">
                      <small>Payment Source</small>
                      <h6> {v?.paymentMode} </h6>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="p-3">
                      <small>Payment Plan</small>
                      <h6> dash dash bank </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="pt-4">
        <hr style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}

export default Transactions;
