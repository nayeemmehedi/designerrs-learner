import React, { useState } from "react";
import { BsFillCalendarWeekFill, BsPercent } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { SWRGET } from "../../../API/SWR/fetcher";
import { useParams, useHistory } from "react-router-dom";

const Debit = () => {
  const { data: saleData } = useSelector((state) => state.Coupon_reducer);

  let { key, id } = useParams();
  const history = useHistory();

  let location = useLocation();
  let sliced = location.pathname.split("/");
  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);

  let courses = allCourses?.data || {};

  const finalPrice = saleData?.netPrice
    ? saleData?.netPrice
    : Number(courses?.basePrice);
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

  const displayRazorpay = async (amount) => {
    console.log(amount);
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
      amount: amount * 100,
      name: "Designerrs-Learner",
      description: "Thanks for purchasing",
      image: "logo",

      handler: function (response) {
        console.log(response);
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Designerrs-Learner",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      {" "}
      <div>
        <div>
          <small>
            <div className="p-3 bg-white shadow-sm">
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
                className={"btn btn-main my-2"}
                onClick={() =>
                  history.push(`/courseEnrollment/${key}/${id}?pay=card`)
                }
                // onClick={() => displayRazorpay(finalPrice)}
              >
                Choose this payment option and Enroll
              </button>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Debit;
