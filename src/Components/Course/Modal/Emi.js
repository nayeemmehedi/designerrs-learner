import React, { useEffect, useState } from "react";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
import { useSelector,  useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { SWRGET } from "../../../API/SWR/fetcher";
import { useParams, useHistory} from "react-router-dom";
import { getTranId } from "../../../Store/CouponCode/Coupon_action";

const Emi = ({ pay }) => {
  const { data: saleData, transactionId } = useSelector((state) => state.Coupon_reducer);

  let location = useLocation();
  let sliced = location.pathname.split("/");


  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);
  const value = useSelector((state) => state.courseEnrollReducer);

  console.log(transactionId);

  let { key, id } = useParams();
  const history = useHistory()

  let courses = allCourses?.data || {};

  const finalPrice = saleData?.netPrice
    ? saleData?.netPrice
    : Number(courses?.basePrice);

  const [emiInfo, setEmiInfo] = useState({
    payNowPrice: (
      finalPrice / 3 +
      ((finalPrice - finalPrice / 3) * 14) / 100
    ).toFixed(2),
    remainingPrice: (finalPrice - finalPrice / 3).toFixed(2),
    month: 3,
    interest: 14,
    interestAmount: (
      ((finalPrice - (finalPrice / 3).toFixed(2)) * 14) /
      100
    ).toFixed(2),
  });
  const calculateEmi = (month) => {
    setEmiInfo({
      payNowPrice: (
        finalPrice / month +
        Number(
          (((finalPrice - (finalPrice / month).toFixed(2)) * 14) / 100).toFixed(
            2
          )
        )
      ).toFixed(2),
      remainingPrice: finalPrice - (finalPrice / month).toFixed(2),
      month: month,
      interest: 14,
      interestAmount: (
        ((finalPrice - (finalPrice / month).toFixed(2)) * 14) /
        100
      ).toFixed(2),
    });
  };

  // Pay
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  
  const dispatch = useDispatch();
  const displayRazorpay = async (amount) => {
    console.log(amount);
    dispatch(
      getTranId({
        transactionType: "Course",
        batch: value?.pay?.batch,
        amount: amount,
        productId: id,
        couponCode: saleData?.couponCode,
        location: value?.pay?.location,
      })
    );
  };

  useEffect(() => {
    if (transactionId) {
      const payment = async () => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
          alert("You are offline... Failed to load Razorpay SDK");
          return;
        }

        const options = {
          key: process.env.RAZOR_PAY_API || "rzp_test_mdlGhZp3lhJiCr",
          currency: "INR",
          amount: transactionId?.order?.amount,
          name: "Designerrs-Learner",
          description: "Thanks for purchasing",
          order_id: transactionId?.order?.id,
          image: "logo",
          notes: {
            locationId: value?.pay?.location,
            batchId: value?.pay?.batch,
            courseId: id,
            transactionId: transactionId?.transactionId,
          },
          handler: function (response) {
            console.log(response);
            history.push("/dashboard");
          },
          prefill: {
            name: "Designerrs-Learner",
          },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      payment();
    }
  }, [transactionId]);


  return (
    <div>
      {" "}
      <div>
        <div>
          <small>
            <div className="p-3 bg-white shadow-sm">
              <h5>EMI Credit Card</h5>

              <div id="razorpay-affordability-widget"> </div>

              {/* <div className="row my-4">
                <div className="col-md-4">
                  <button
                    className={
                      emiInfo.month == 3 ? "btn btn-main2" : "btn btn-main"
                    }
                    onClick={() => calculateEmi(3)}
                  >
                    3 Months Emi{" "}
                  </button>
                </div>
                <div className="col-md-4">
                  <button
                    className={
                      emiInfo.month == 6 ? "btn btn-main2" : "btn btn-main"
                    }
                    onClick={() => calculateEmi(6)}
                  >
                    6 Months Emi{" "}
                  </button>
                </div>
                <div className="col-md-4">
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
                      <td>+ ₹ {emiInfo?.interestAmount}</td>
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
                      <td>
                        ₹{" "}
                        {finalPrice +
                          Number(
                            (
                              ((finalPrice -
                                (finalPrice / emiInfo.month).toFixed(2)) *
                                14) /
                              100
                            ).toFixed(2)
                          )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className={"btn btn-main2 form-control my-2"}
                onClick={() => displayRazorpay(emiInfo?.payNowPrice)}
              >
                Pay ₹ {emiInfo?.payNowPrice}
              </button> */}
              {pay ? (
                <button
                  className={"btn btn-main2 form-control my-2"}
                  onClick={() => displayRazorpay(finalPrice)}
                >
                  Pay
                </button>
              ) : (
                <button
                  className={"btn btn-main my-2"}
                  onClick={() => history.push(`/courseEnrollment/${key}/${id}?pay=emi`)}
                >
                  Choose this payment option and Enroll
                </button>
              )}
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Emi;
