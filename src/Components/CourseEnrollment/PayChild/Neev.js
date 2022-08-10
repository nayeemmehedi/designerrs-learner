import React, { useState } from "react";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
// import rupeeCal from "../../../Assets/Images/rupeeCal.svg";
// import interestIcon from "../../../Assets/Images/interest.svg";
import { useSelector, useDispatch } from "react-redux";
import { SWRGET } from "../../../API/SWR/fetcher";
import useSWR from "swr";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { completePayment } from "../../../Store/CouponCode/Coupon_action";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Neev = () => {
  const { data: saleData, transactionId } = useSelector(
    (state) => state.Coupon_reducer
  );

  const history = useHistory();
  const { id } = useParams();
  const value = useSelector((state) => state.courseEnrollReducer);

  let location = useLocation();
  const dispatch = useDispatch();

  let sliced = location.pathname.split("/");
  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);

  let courses = allCourses?.data || {};

  const finalPrice = saleData?.netPrice
    ? saleData?.netPrice
    : Number(courses?.basePrice);

  const [emiInfo, setEmiInfo] = useState({
    payNowPrice: (finalPrice / 3).toFixed(2),
    remainingPrice: finalPrice - (finalPrice / 3).toFixed(2),
    month: 3,
    interest: 0,
  });

  const calculateEmi = (month) => {
    setEmiInfo({
      payNowPrice: (finalPrice / month).toFixed(2),
      remainingPrice: finalPrice - (finalPrice / month).toFixed(2),
      month: month,
      interest: 0,
    });
  };

  const pay = async () => {
    dispatch(
      completePayment(
        {
          transactionType: "Course",
          batch: value?.pay?.batch,
          amount: finalPrice,
          productId: id,
          couponCode: saleData?.couponCode,
          location: value?.pay?.location,
          paymentMode: "neevFinance",
        },
        history
      )
    );
  };
  return (
    <div>
      <div>
        <small>
          <div className="p-3 bg-white shadow-sm">
            <p>
              Pay ₹ 2000 now and ₹ 15000 later in NO Cost EMI Options. Just
              submit required documents and get your loan approved to enroll to
              the course.
            </p>
            <small className="text-danger cursor">
              Terms & conditions -{">"}{" "}
            </small>

            <div className="row my-4">
              <div className="col-md-3">
                <button
                  className={
                    emiInfo.month == 3 ? "btn btn-main2" : "btn btn-main"
                  }
                  onClick={() => calculateEmi(3)}
                >
                  3 Months Emi{" "}
                </button>
              </div>
              <div className="col-md-3">
                <button
                  className={
                    emiInfo.month == 6 ? "btn btn-main2" : "btn btn-main"
                  }
                  onClick={() => calculateEmi(6)}
                >
                  6 Months Emi{" "}
                </button>
              </div>
              <div className="col-md-3">
                <button
                  className={
                    emiInfo.month == 9 ? "btn btn-main2" : "btn btn-main"
                  }
                  onClick={() => calculateEmi(9)}
                >
                  9 Months Emi{" "}
                </button>
              </div>
              {/* <div className="col-md-4"></div> */}
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="d-flex align-items-center">
                  <BsFillCalendarWeekFill size="25" />
                  <p className="ms-2" style={{ fontSize: "13px" }}>
                    Emi <br /> ${emiInfo.payNowPrice}/month
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex  align-items-center">
                  <BsPercent size="25" />
                  <p className="ms-2" style={{ fontSize: "13px" }}>
                    Annual Interest
                    <br /> {emiInfo.interest}% pa
                  </p>
                </div>
              </div>
            </div>

            <hr></hr>
            <div>
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <th>
                      Registration Amount (Paid while enrolling to the course)
                    </th>
                    <td>₹ 2000</td>
                  </tr>
                  <tr>
                    <th>1st Month EMI (Paid after enrollment)</th>
                    <td>+ ₹ {emiInfo?.payNowPrice}</td>
                  </tr>
                  <tr>
                    <th>2nd Month EMI (Paid after enrollment)</th>
                    <td>+ ₹ {emiInfo?.payNowPrice}</td>
                  </tr>
                  <tr>
                    <th>3rd Month EMI (Paid after enrollment)</th>
                    <td>+ ₹ {emiInfo?.payNowPrice}</td>
                  </tr>
                  <tr>
                    <th>Total Payable Amount</th>
                    <td>+ ₹ {Number(finalPrice) + 2000}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              className={"btn btn-main2 my-2 form-control"}
              onClick={() => {
                pay();
                // calculateEmi(2000);
              }}
            >
              Pay ₹ 2000
            </button>
          </div>
        </small>
      </div>
    </div>
  );
};

export default Neev;
