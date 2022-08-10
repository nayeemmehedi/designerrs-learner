import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Style from "../../Style/course.module.scss";
import thumnail from "../../Assets/Images/no_image/thumnail.png";
import ScrollToTop from "../../Helper/Custom/ScrollToTop";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
import { SWRGET } from "../../API/SWR/fetcher";
import LoginCourseEnroll from "../../Components/CourseEnrollment/LoginCourseEnroll";
import Batchlocation from "../../Components/CourseEnrollment/Batchlocation";
import PersonalDetails from "../../Components/CourseEnrollment/PersonalDetails";

import rms from "../../Helper/Custom/removeSpace";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paymnet from "../../Components/CourseEnrollment/TestPay";

const CourseEnrollment = () => {
  const value = useSelector((state) => state.Coupon_reducer);

  // single value not working now but if we need store image and coursename it needed start
  // const value1 = useSelector((state) => state.SingleCourseReducer);
  // single value not working now but if we need store image and coursename it needed finish
  const { id } = useParams();

  const priceData = JSON.parse(localStorage.getItem("sale"));
  const has = priceData?.courses?.find((i) => i._id == id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (has) {
      dispatch({ type: "COUPON_CODE", payload: priceData });
    } else {
      dispatch({ type: "COUPON_CODE", payload: null });
    }
  }, []);

  const { data: saleData } = useSelector((state) => state.Coupon_reducer);
  console.log(saleData);

  let location = useLocation();
  let sliced = location.pathname.split("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET);

  let courses = allCourses?.data || {};

  return (
    <React.Fragment>
      <ScrollToTop />

      <div className={`${Style.stoper_head} my-3`}>
        <div className="p-2">
          <div className="row">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <div className={Style.back_to_course}>
                <Link
                  to={`/courses/${rms(courses?.courseName)}/${courses?.id}`}
                >
                  <span>
                    <i className="fas fa-arrow-left"></i>
                  </span>
                  Back to Course Details
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              <div className={Style.center_items}>
                <div>
                  <LoginCourseEnroll></LoginCourseEnroll>
                </div>

                <div>
                  <Batchlocation />
                </div>

                <div>
                  <PersonalDetails></PersonalDetails>
                </div>

                <div>
                  <Paymnet></Paymnet>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className={Style.single_course}>
                <React.Fragment key={courses?.id}>
                  <div className={Style.course_image}>
                    <img
                      src={
                        courses?.courseThumbnail?.link
                          ? courses?.courseThumbnail?.link
                          : thumnail
                      }
                      alt=""
                    />
                  </div>
                  <h5 className="mb-2 mt-3">{courses?.courseName}</h5>
                  <span className="font_12">Total Price</span>
                  {/* <p className="mt-0 mb-3">₹ {courses?.basePrice}</p> */}
                  <div className="d-flex">
                    {!saleData?.netPrice ? (
                      <p className="mt-0 mb-3">₹ {courses.basePrice}</p>
                    ) : (
                      <>
                        <h4 className="mt-0 mb-3 fw-bold">
                          ₹ {saleData.netPrice}
                        </h4>
                        <p className="mt-0 mb-3 ms-4">
                          <strike>₹ {courses.basePrice}</strike>
                        </p>
                      </>
                    )}
                  </div>
                </React.Fragment>
                <div>
                  {saleData?.netPrice && (
                    <p>
                      {" "}
                      <img
                        style={{ height: "17px", width: "17px" }}
                        src={require("../../Assets/Images/icons/correct.png")}
                        alt=""
                      />{" "}
                      <small>
                        <span className="fw-bold">Coupon Applied</span> :{" "}
                        {saleData?.name}
                      </small>
                    </p>
                  )}
                </div>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CourseEnrollment;
