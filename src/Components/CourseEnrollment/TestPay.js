import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeBoxes } from "../../Store/CourseEnroll/actions";
import logo from "../../Assets/logo.svg";
import Cards from "../../Assets/card.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
import { Input, Label } from "reactstrap";
import Neev from "./PayChild/Neev";
import Debit from "./PayChild/Debit";
import Emi from "../Course/Modal/Emi";
import { useHistory } from "react-router-dom";
function Paymnet() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.courseEnrollReducer);
  const history = useHistory();

  // Payment
  const { id } = useParams();

  const priceData = JSON.parse(localStorage.getItem("sale"));
  const has = priceData?.courses?.find((i) => i._id == id);

  useEffect(() => {
    if (has) {
      dispatch({ type: "COUPON_CODE", payload: priceData });
    } else {
      dispatch({ type: "COUPON_CODE", payload: null });
    }
  }, []);

  const [type, setType] = useState(null);
  console.log(type);
  useEffect(() => {
    history?.location?.search &&
      setType(history?.location?.search?.split("?pay=")[1]);
  }, [history]);

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
          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentType"
              onClick={() => setType("card")}
            />
            <label className="form-check-label">
              <h5>Debit / Credit card / UPI / Net Banking </h5>
            </label>
            <img src={Cards} alt="card" className="col-md-6" />
            {type == "card" && <Debit />}
          </div>

          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentType"
              onClick={() => setType("emi")}
            />
            <label className="form-check-label">
              <h5>Credit Card EMI payment</h5>
            </label>
            {type == "emi" && <Emi pay={true} />}
          </div>

          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="radio"
              name="paymentType"
              onClick={() => setType("neev")}
            />
            <label className="form-check-label">
              <h5>3rd Party EMI</h5>
            </label>
            {type == "neev" && <Neev />}
            {!type == "neev" && <p>Through Neev Finance</p>}
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

export default Paymnet;
