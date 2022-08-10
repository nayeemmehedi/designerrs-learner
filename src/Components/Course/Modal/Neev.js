import React, { useState } from "react";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
// import rupeeCal from "../../../Assets/Images/rupeeCal.svg";
// import interestIcon from "../../../Assets/Images/interest.svg";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { SWRGET } from "../../../API/SWR/fetcher";
import { useParams,useHistory } from "react-router-dom";

const Neev = () => {
  const { data: saleData } = useSelector((state) => state.Coupon_reducer);


  let { key, id } = useParams();
  const history = useHistory()

  let location = useLocation();
  let sliced = location.pathname.split("/");
  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);

  let courses = allCourses?.data || {};


  const finalPrice = saleData?.netPrice ? saleData?.netPrice : Number(courses?.basePrice)
  // Pay

  const [emiInfo, setEmiInfo] = useState({
    payNowPrice: (finalPrice / 3).toFixed(2),
    remainingPrice: (finalPrice - finalPrice / 3).toFixed(2),
    month: 3,
    interest: 0,
  });
  const calculateEmi = (month) => {
    setEmiInfo({
      payNowPrice: (finalPrice / month).toFixed(2),
      remainingPrice:
        finalPrice - (finalPrice / month).toFixed(2),
      month: month,
      interest: 0,
    });
  };
  return (
    <div>
      <div>
        <small>
          <div className="p-3 bg-white shadow-sm">
            <p>
              Pay ₹ {emiInfo.payNowPrice} now and ₹ {emiInfo.remainingPrice}{" "}
              later in NO Cost EMI Options. Just submit required documents and
              get your loan approved to enroll to the course.
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
                    <th>Price</th>
                    <td>₹ {finalPrice}</td>
                  </tr>
                  <tr>
                    <th>Interest Charged ({emiInfo?.interest}%)</th>
                    <td>₹ {emiInfo?.interest}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <table className="table table-responsive">
                <tbody>
                  <tr>
                    <th>
                      Total Payable Amount ({emiInfo.month} X ₹{" "}
                      {emiInfo.payNowPrice})
                    </th>
                    <td>₹ {finalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className={"btn btn-main my-2"}   onClick={() => history.push(`/courseEnrollment/${key}/${id}?pay=neev`)}>
              Choose this payment option and Enroll
            </button>
          </div>
        </small>
      </div>
    </div>
  );
};

export default Neev;
