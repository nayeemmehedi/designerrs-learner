import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeBoxes } from "../../Store/CourseEnroll/actions";
import { GoCalendar } from "react-icons/go";

import axios from "axios";
import { post } from "../../Helper/API/API_Helper";

function PaymnetHo() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.courseEnrollReducer);

  console.log(value.pay);
  const pay = async () => {
    const payNow = await axios.post("/learner/transactions", value.pay, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  };

  return (
    <div className="p-4 mt-3" style={{ background: "#F5F5F5" }}>
      {value?.completeBox?.boxFour ? (
        <div>
          <h4 className="d-flex align-items-center">
            <div className="avatar bg-danger d-flex justify-content-center align-items-center  text-white ">
              <small style={{ fontSize: "13px" }}> 4 </small>
            </div>
            <h6 className="ms-2 mt-1">Payment</h6>
          </h4>
        </div>
      ) : (
        <div>
          <h4 className="d-flex align-items-center">
            <div
              className="avatar d-flex justify-content-center align-items-center"
              style={{ background: "#e9eceb" }}
            >
              <small style={{ fontSize: "16px" }}> 4 </small>
            </div>
            <h6 style={{ marginTop: "2px" }} className="ms-3 ">
              Payment
            </h6>
          </h4>
          <hr></hr>
        </div>
      )}
      {value?.completeBox?.boxFour && (
        <div>
          {/* <button className="btn btn-danger form-control" onClick={pay}>
            Pay
          </button> */}
          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              <h5> One shot payment</h5>
            </label>
            <div className="mt-4">
              <h6>Debit / Credit card / Upi / Net Banking </h6>
              <img
                src={require("../../Assets/Images/icons/bank.png")}
                alt="no"
              />{" "}
              <br />
              <button className="btn btn-outline-danger mt-3">Rezer Pay</button>
            </div>
          </div>
          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              <h5> Credit Card EMI payment</h5>

              <div>
                <p> Select Bank</p>

                <select id="cars" style={{ width: "100%", height: "40px" }}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <small className="text-danger pt-3">
                Terms & conditions -{">"}{" "}
              </small>

              <div className="d-flex justify-content-between w-75  pt-4">
                <div className="d-flex me-5">
                  <GoCalendar size="25" className="mt-2" />
                  <p className="ps-2" style={{ fontSize: "13px" }}>
                    Emi <br /> $21,000/month{" "}
                  </p>
                </div>

                <div className="d-flex ms-5">
                  <GoCalendar size="25" className="mt-2" />
                  <p className="ps-2" style={{ fontSize: "13px" }}>
                    Emi <br /> $21,000/month{" "}
                  </p>
                </div>
              </div>
            </label>

            <div>
              <div className="d-flex justify-content-between">
                <p>2nd Month Emi (Paid after CourseEnroll)</p>
                <p>$2000</p>
              </div>

              <div className="d-flex justify-content-between">
                <p>2nd Month Emi (Paid after CourseEnroll)</p>
                <p>$2000</p>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <p>2nd Month Emi (Paid after CourseEnroll)</p>
                <p>$2000</p>
              </div>
            </div>
          </div>
          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              <h5>3rd Party EMI</h5>
            </label>
            <div>
              <div className="p-3 bg-light">
                <p>
                  Pay $2000 now and $63,000 later.Just submit required documents
                  and get your load approved to enroll to the course .
                </p>
                <small className="text-danger">
                  Terms & conditions -{">"}{" "}
                </small>

                <div className="d-flex my-4">
                  <div>
                    <button className="btn btn-danger">3 Months Emi </button>
                  </div>
                  <div className="ms-3">
                    <button
                      className="btn btn-outline-danger "
                      style={{ border: "0px" }}
                    >
                      6 Months Emi{" "}
                    </button>
                  </div>
                  <div className="ms-3">
                    <button
                      className="btn btn-outline-danger"
                      style={{ border: "0px" }}
                    >
                      9 Months Emi{" "}
                    </button>
                  </div>
                </div>

                <div className="d-flex justify-content-between w-75  pt-4">
                  <div className="d-flex">
                    <GoCalendar size="25" className="mt-2" />
                    <p className="ps-2" style={{ fontSize: "13px" }}>
                      Emi <br /> $21,000/month{" "}
                    </p>
                  </div>

                  <div className="d-flex ">
                    <GoCalendar size="25" className="mt-2" />
                    <p className="ps-2" style={{ fontSize: "13px" }}>
                      Emi <br /> $21,000/month{" "}
                    </p>
                  </div>

                  <div className="d-flex ">
                    <GoCalendar size="25" className="mt-2" />
                    <p className="ps-2" style={{ fontSize: "13px" }}>
                      Emi <br /> $21,000/month{" "}
                    </p>
                  </div>
                </div>

                <div>
                  <div className="d-flex justify-content-between">
                    <p>Registration ammount(while enroll to the course)</p>
                    <p>$2000</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p>1st Month Emi (Paid after CourseEnroll)</p>
                    <p>$2000</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>2nd Month Emi (Paid after CourseEnroll)</p>
                    <p>$2000</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>3rd Month Emi (Paid after CourseEnroll)</p>
                    <p>$2000</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p>Total Payable ammount</p>
                    <p>$2000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(storeBoxes("boxFour", false, "boxThree", true))
              }
            >
              {" "}
              Back{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymnetHo;
