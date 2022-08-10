import React, { useState, useEffect } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';
import { getTranId } from '../../Store/CouponCode/Coupon_action';
import { getMeetup } from '../../Store/Detaux/actions';


const Payment = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { meetup } = useSelector(state => state.detaux);
    console.log(meetup)
    useEffect(() => {
        dispatch(getMeetup(id));
    }, [])
    const history = useHistory();
    const { transactionId } = useSelector(
        (state) => state.Coupon_reducer
    );

    const displayRazorpay = async (amount) => {
        console.log(amount);
        dispatch(
            getTranId({
                transactionType: "Meetup",
                amount: amount,
                productId: meetup.id,
                location: meetup?.location?.id,
            })
        );
    };

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
                        locationId: meetup?.location?.locationName,
                        courseId: meetup?.id,
                        transactionId: transactionId?.transactionId,
                    },
                    handler: function (response) {
                        console.log(response);
                        history.push("/meetup-greetings");
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

    console.log(transactionId);

    return (
        <div className='row' style={{ marginTop: "50px" }}>
            <div className="col-sm-12 col-md-3 d-flex justify-content-center" style={{ color: "red" }}>
                <div className="align-items-center" onClick={() => {
                    history.push("/meetup-reg/" + meetup.id);
                }}
                    style={{ cursor: "pointer" }}
                >
                    <AiOutlineArrowLeft />
                    <span className='ms-2'>Back</span>
                </div>
            </div>
            <div className="col-sm-12 col-md-8">
                <h3 className='mb-5' style={{ marginBottom: "30px" }}>Payment</h3>
                <p className="mb-2">Event Details</p>
                <div className="p-3" style={{ backgroundColor: "white" }}>
                    <p className="mb-2">Event Title</p>
                    <h4 style={{ marginBottom: "20px" }}>{meetup.title}</h4>
                    <div className="row">
                        <div className="col-3 d-flex align-items-center">
                            <div className="col-2 me-3">
                                <GoLocation style={{ color: "red", fontSize: "25px" }} />
                            </div>
                            <div className="col-11">
                                <div>Location</div>
                                <div style={{ fontSize: "18px" }}>{meetup?.location?.locationName || "Online Event"}</div>
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <div className="col-2 me-3">
                                <AiOutlineCalendar style={{ color: "red", fontSize: "25px" }} />
                            </div>
                            <div className="col-11">
                                <div>Date</div>
                                <div style={{ fontSize: "18px" }}>{moment(meetup.startDate).format('DD MMMM, YYYY')}</div>
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <div className="col-2 me-3">
                                <AiOutlineClockCircle style={{ color: "red", fontSize: "25px" }} />
                            </div>
                            <div className="col-11">
                                <div>Time</div>
                                <div style={{ fontSize: "18px" }}>{moment(meetup?.time?.form).format('h:mm a')} - {moment(meetup?.time?.to).format('h:mm a')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className={"btn btn-main2 my-2 form-control"}
                    onClick={() => displayRazorpay(meetup.price + 100)}
                >
                    Pay ₹ {meetup.price}
                </button>
            </div>

        </div>
    )
}

export default Payment