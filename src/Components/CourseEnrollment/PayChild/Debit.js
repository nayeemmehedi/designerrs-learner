import React, { useEffect, useState } from "react";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { SWRGET } from "../../../API/SWR/fetcher";
import { notifyError } from "../../../Store/notify/actions";

import useSWR from "swr";
import {
  completePayment,
  getTranId,
} from "../../../Store/CouponCode/Coupon_action";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Debit = () => {
  const { data: saleData, transactionId } = useSelector(
    (state) => state.Coupon_reducer
  );

  const history = useHistory()
  let location = useLocation();
  const { id } = useParams();
  let sliced = location.pathname.split("/");
  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);
  const value = useSelector((state) => state.courseEnrollReducer);

  console.log(transactionId);

  let courses = allCourses?.data || {};

  const finalPrice = saleData?.netPrice
    ? saleData?.netPrice
    : courses?.basePrice;

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
            <div className="p-3 bg-white shadow-sm mt-4">
              <h5>One Shot Payment</h5>

              <div>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <th>Total Amount</th>
                      <td>₹ {finalPrice}</td>
                    </tr>
                    <tr>
                      <th>Discount </th>
                      <td>- ₹ 0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table table-responsive">
                  <tbody>
                    <tr>
                      <th>Total Payment</th>
                      <td>₹ {finalPrice}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button
                className={"btn btn-main2 my-2 form-control"}
                onClick={() => displayRazorpay(finalPrice)}
              >
                Pay ₹ {finalPrice}
              </button>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Debit;
