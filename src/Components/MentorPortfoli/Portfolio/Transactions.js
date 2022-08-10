import React from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { useSelector } from "react-redux";

function Transactions() {
  const {user} = useSelector(state => state.user)

  return (
    <div>
    {/* <h2 className="my-4 color1">Course Details</h2>
    <p className="color1">01 Enrolled Course</p> */}
    <hr />
    <p className="mt-3  fs-6 text-secondary">Transactions</p>
    {user?.transactions?.map((i, idx) => (
      <div style={{ backgroundColor: "#F5F5F5" }} key={idx}>
        <div className="mx-4 ">
          <div className=" pt-3">
            <span style={{ fontSize: "30px", color: "#d43a47" }}>
              {" "}
              <div className="d-flex">
                <img
                  src={i?.product?.courseThumbnail?.link}
                  alt=""
                  className="avatar"
                ></img>

                <div className="d-flex align-items-center mt-3">
                  <p className="fs-5 ms-1 " style={{ paddingLeft: "5px" }}>
                    {" "}
                    {i?.product?.courseName}
                  </p>
                </div>
              </div>
            </span>
            <hr />
          </div>

          <div className=" pb-4 ">
            <h6 className="pb-3">Payment Details</h6>

            <div
              style={{
                width: "100%",
                backgroundColor: "white",
              }}
            >
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-3 ">
                  <div className="px-3 pt-3 ">
                    <small>Amount Paid</small>
                    <h6> ${i?.amount} </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-8">
                  <div className="px-3 pt-3">
                    <div className="">
                      <div className="mx-sm-0 mx-md-0 mx-lg-3 p-1">
                        <b className="transaction1 p-2">
                          {" "}
                          <MdOutlinePayment size="20" />{" "}
                          <span style={{ fontSize: "12px" }}>
                            Recieved on {moment(i?.createdAt).format("LL")}
                          </span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <div className="p-3">
                    <small>Payment Source</small>
                    <h6> {i?.paymentMode} </h6>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="p-3">
                    <small>Payment Plan</small>
                    <h6>{i?.paymentMode} </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

    <div className="pt-4"></div>
  </div>
  );
}

export default Transactions;
