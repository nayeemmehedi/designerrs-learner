import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeBoxes } from "../../Store/CourseEnroll/actions";
import "./Common.css";

// import { format } from "date-fns";

import { useParams } from "react-router-dom";
import moment from "moment";

function Batchlocation() {
  const { id } = useParams();

  const [enroll, setEnroll] = useState([]);

  const getCall = async () => {
    try {
      let a = await axios.get(`/learner/courses/${id}/batches`);
      setEnroll(a.data);
    } catch (err) {}
  };

  useEffect(() => {
    getCall();
  }, []);

  console.log(enroll);

  const dispatch = useDispatch();

  const value = useSelector((state) => state.courseEnrollReducer);
  console.log(enroll)
  const data = localStorage.getItem("accessToken");
  useEffect(() => {
    if (data) {
      dispatch(storeBoxes("boxTwo", true, "boxThree", false));
    }
  }, [data]);

  const [batchId, setBatchId] = useState(null);
  const [locationId, setLocationId] = useState(null);
  const handleInputs = (e, v) => {
    // console.log(e, v)
    setBatchId(e);
    setLocationId(v);
  };

  const pay = () => {
    const b = {
      transactionType: "Course",
      batch: batchId,
      amount: "400",
      productId: id,
      paymentMode: "creditCard",
      transactionId: "some transaction id",
    };
  };

  return (
    <div>
      <div>
        <div className="p-4 mt-3" style={{ background: "#F5F5F5" }}>
          <div>
            {value?.completeBox?.boxTwo ? (
              <div>
                <h4 className="d-flex align-items-center">
                  <div className="avatar bg-danger d-flex justify-content-center align-items-center  text-white ">
                    <small style={{ fontSize: "16px" }}> 2 </small>
                  </div>
                  <h6 style={{ marginTop: "9px" }} className="ms-3">
                    Batch Date and location
                  </h6>
                </h4>
              </div>
            ) : (
              <div>
                <h4 className="d-flex align-items-center">
                  <div
                    className="avatar  d-flex justify-content-center align-items-center  text-dark "
                    style={{ background: "#e9eceb" }}
                  >
                    <small style={{ fontSize: "16px" }}> 2 </small>
                  </div>
                  <h6 style={{ marginTop: "9px" }} className="ms-3">
                    Batch Date and location
                  </h6>
                  <img
                    className="ms-3"
                    style={{ height: "17px", width: "17px" }}
                    src={require("../../Assets/Images/icons/correct.png")}
                    alt=""
                  />{" "}
                </h4>
              </div>
            )}
            <hr></hr>
          </div>

          {enroll.length == 0 ? (
            <div className="text-center">
              <box-icon
                name="loader"
                animation="spin"
                size="30px"
                color="#cd2026"
              ></box-icon>
              <p className="font_13" style={{ color: "#cd2026" }}>
                Loading...
              </p>
            </div>
          ) : (
            <div>
              {value?.completeBox?.boxTwo && (
                <div>
                  {enroll?.map((v, idx) => v?.batches && (
                    <div className="mt-5" key={idx}>
                      <div className="d-flex align-items-center">
                        <div className="avatar">
                          <img className="" src={v?.locationImg?.link} alt="" />
                        </div>
                        <h6 className="ms-3 mt-2">{v?.locationName}</h6>
                      </div>
                      <hr></hr>
                      {v?.batches?.map((value) => (
                        <div>
                          <div className="form-check my-3">
                            <input
                              className="form-check-input"
                              name="batch"
                              type="radio"
                              onClick={() => handleInputs(value._id, v.id)}
                            />
                            <div className="d-flex justify-content-between">
                              <label
                                className="form-check-label"
                                for="flexRadioDefault1"
                              >
                                <small className="ms-2">
                                  <span className="fw-bold">
                                    {
                                      moment(value?.startDate)
                                        .format("LL")
                                        ?.split(",")[0]
                                    }
                                  </span>{" "}
                                  | Enroll by{" "}
                                  {
                                    moment(value?.endDate)
                                      .format("LL")
                                      ?.split(",")[0]
                                  }
                                </small>{" "}
                                <br></br>
                                <small style={{ fontSize: "11px" }}>
                                  Conducted on{" "}
                                  {value?.repeatDays.map((rp) => (
                                    <span className="ps-2">
                                      {rp?.substring(0, 3)}
                                    </span>
                                  ))}
                                </small>
                              </label>
                              <label
                                className="form-check-label"
                                for="flexRadioDefault1"
                              >
                                <small>{value?.remainingSeats} seats fills</small>
                              </label>
                            </div>
                            <hr></hr>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}

                  {batchId && locationId && (
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-main2 form-control"
                        onClick={() => {
                          dispatch(
                            storeBoxes("boxThree", true, "boxTwo", false)
                          );
                          dispatch({
                            type: "COURSE_BUY",
                            payload: {
                              batch: batchId,
                              location: locationId
                            },
                          });
                        }}
                      >
                        Proceed
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Batchlocation;
