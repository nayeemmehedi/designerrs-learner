import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Element, Link } from "react-scroll"
import Style from "../../Style/course.module.scss"
import thumnail from "../../Assets/Images/no_image/thumnail.png"

import ScrollToTop from "../../Helper/Custom/ScrollToTop"
import { useLocation } from "react-router-dom"
import useSWR from "swr"
import { SWRGET } from "../../API/SWR/fetcher"
import CourseSection3 from "../../Components/Course/Section3"
import CourseSection2 from "../../Components/Course/Section2"
import CourseSection4 from "../../Components/Course/Section4"
import CourseSection5 from "../../Components/Course/Section5"
import CourseFAQ from "../../Components/Course/FAQ"
import CourseSection6 from "../../Components/Course/Section6"
import CourseSection7 from "../../Components/Course/Section7"
import CourseSection8 from "../../Components/Course/Section8"
import CourseSection9 from "../../Components/Course/Section9"
import CourseSection10 from "../../Components/Course/Section10"
import { useDispatch, useSelector } from "react-redux"
import { coupon_code } from "../../Store/CouponCode/Coupon_action"
import rms from "../../Helper/Custom/removeSpace"
import { UncontrolledCarousel } from "reactstrap"
import ReactPlayer from "react-player"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai"
import CouponCode from "../../Components/Course/Modal/CouponCode"
import CustomModal from "../../Components/PortfolioMain/common/CustomModal"
import PaaymentModal from "../../Components/Course/Modal/PaaymentModal"
import { useParams } from "react-router-dom"

const CourseDetails = () => {
  const { id } = useParams()
  const [coupon, setCoupon] = useState(false)
  const [play, setPlay] = useState(null)
  const [display, setDisplay] = useState(false)
  const [gotCoupon, setGotCoupon] = useState({})
  const [couponCheck, setCouponCheck] = useState(false)
  const [slider, setSlider] = useState([])

  const { data: saleData } = useSelector(state => state.Coupon_reducer)
  const { user } = useSelector(state => state.user)
  const hasEnrolled = user?.courseTransactions?.find(i => i?.product?.id == id)
  console.log(hasEnrolled)
  const dispatch = useDispatch()

  const cuponToggle = () => {
    setCoupon(!coupon)
  }

  const cuponToggle1 = () => {
    setCouponCheck(!couponCheck)
    setGotCoupon({})
    dispatch(coupon_code({}))
    localStorage.removeItem("sale")
    dispatch({ type: "COUPON_CODE", payload: null })
  }

  const [paymentModal, setPaymentModal] = useState(false)

  const paymentToggle = () => {
    setPaymentModal(!paymentModal)
  }

  // submit value

  const submitValue = e => {
    setGotCoupon(e)
    setCouponCheck(!couponCheck)
    setCoupon(!coupon)
    dispatch(coupon_code(e))
  }

  // submit value

  let location = useLocation()
  let sliced = location.pathname.split("/")
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { data: allCourses } = useSWR(`/learner/courses/${sliced[3]}`, SWRGET)

  let courses = allCourses?.data || {}

  console.log("courses vhai", courses)

  useEffect(() => {
    if (courses.imageCarousel) {
      setSlider([])
      courses.imageCarousel.map((item, idx) =>
        setSlider(prev => [
          ...prev,
          {
            caption: item.caption,
            key: idx + 1,
            src: item.image.link,
          },
        ])
      )
    }
  }, [courses.imageCarousel])

  const priceData = JSON.parse(localStorage.getItem("sale"))
  useEffect(() => {
    const has = priceData?.courses?.find(i => i._id == id)
    console.log(has)
    if (has) {
      dispatch({ type: "COUPON_CODE", payload: priceData })
    } else {
      dispatch({ type: "COUPON_CODE", payload: null })
    }
  }, [])

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className={`${Style.stoper_head} my-3`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <div className={Style.back_to_course}>
                <NavLink to="/courses">
                  <span>
                    <i className="fas fa-arrow-left"></i>
                  </span>
                  Back
                </NavLink>
              </div>
              <div className={Style.page_steps}>
                <Link
                  to="Overview"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Overview
                </Link>
                <Link
                  to="Outcomes"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Learning Outcomes
                </Link>
                <Link
                  to="Highlights"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Highlights
                </Link>
                <Link
                  to="Benefits"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Benefits
                </Link>
                <Link
                  to="Plan"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Plan
                </Link>
                <Link
                  to="Modules"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Modules
                </Link>
                <Link
                  to="Eligibility"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Eligibility
                </Link>
                <Link
                  to="Career"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Career Prospects
                </Link>
                <Link
                  to="Mentors"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Mentors
                </Link>
                <Link
                  to="Testimonials"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Testimonials
                </Link>
                <Link
                  to="FAQ"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  FAQ's
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-7 col-lg-7">
              {allCourses === undefined && (
                <div className="mx-auto text-center my-3">
                  <box-icon
                    color="#a11f24"
                    name="color"
                    type="solid"
                    animation="tada"
                  ></box-icon>
                  <br />
                  <p
                    className="m-0"
                    style={{ color: "#a11f24", fontSize: "14px" }}
                  >
                    Loading...
                  </p>
                </div>
              )}
              {allCourses !== undefined && (
                <div className={Style.center_items}>
                  <Element id="Overview">
                    <div className={Style.banners}>
                      {slider.length > 0 && (
                        <UncontrolledCarousel
                          enableTouch
                          controls={false}
                          indicators={false}
                          items={slider}
                        />
                      )}
                    </div>

                    <CourseSection2 courses={courses} />
                  </Element>

                  <Element id="Outcomes">
                    <CourseSection3
                      courseOutcomes={courses?.courseOutcomes || {}}
                    />
                  </Element>

                  <Element id="tsHighligh">
                    <CourseSection4 highlights={courses?.highlights} />
                  </Element>

                  <Element id="Benefits">
                    <CourseSection5 benefits={courses?.benefits} />
                  </Element>

                  <Element id="Plan">
                    <CourseSection6 plans={courses?.plans} />
                  </Element>

                  <Element id="Modules">
                    <CourseSection7 modules={courses?.modules} />
                  </Element>

                  <Element id="Eligibility">
                    <CourseSection8 eligibility={courses?.eligibility} />
                  </Element>

                  <Element id="Career">
                    <CourseSection9 careerPro={courses?.careerPro} />
                  </Element>

                  <Element id="Mentors">
                    <CourseSection10 />
                  </Element>

                  <Element id="Testimonials">
                    <div className="row">
                      {courses.testimonials?.map((item, idx) => (
                        // <div key={idx} className="col-md-4">
                        //   <ReactPlayer
                        //     url={item?.link}
                        //     controls={true}
                        //     width="100%"
                        //     height="400px"

                        //   />
                        // </div>

                        <div className="col-md-4" key={idx}>
                          <div style={{ position: "relative" }}>
                            <ReactPlayer
                              url={item.link}
                              className="react-player mt-2"
                              width="100%"
                              height="100%"
                              playing={idx == play}
                              onMouseOver={() => setDisplay(true)}
                            />
                            {play !== idx ? (
                              <AiOutlinePlayCircle
                                style={{
                                  position: "absolute",
                                  top: "40%",
                                  left: "40%",
                                }}
                                className="text-white cursor"
                                size="50"
                                onClick={() => setPlay(idx)}
                              />
                            ) : (
                              <AiOutlinePauseCircle
                                style={{
                                  position: "absolute",
                                  top: "40%",
                                  left: "40%",
                                }}
                                className="text-white cursor"
                                size="50"
                                onClick={() => setPlay(null)}
                              />
                            )}
                            <>
                              <small
                                style={{
                                  position: "absolute",
                                  bottom: 50,
                                  left: 40,
                                  right: 20,
                                }}
                                className="fw-bold text-white"
                              >
                                {item?.name?.split("course/")[1]}
                              </small>
                            </>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Element>
                  <CourseFAQ courses={courses} />
                </div>
              )}
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className={Style.single_course}>
                <div className={Style.course_image}>
                  <img
                    src={
                      courses.courseThumbnail?.link
                        ? courses?.courseThumbnail?.link
                        : thumnail
                    }
                    alt=""
                  />
                </div>

                <h5 className="mb-2 mt-3">{courses.courseName}</h5>
                {hasEnrolled ? (
                  <div>
                    <button className="btn btn-main2 my-3 form-control">
                      {(hasEnrolled?.status == "successful" &&
                        "Already Enrolled") ||
                        (hasEnrolled?.status == "rpending" &&
                          "Complete Payment in Razor Pay") ||
                        (hasEnrolled?.status == "pending" && "Pending")}
                    </button>
                  </div>
                ) : (
                  <div>
                    <span className="font_12 fw-bold">Total Price</span>
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
                      <CustomModal
                        modal={coupon}
                        toggle={cuponToggle}
                        size="md"
                      >
                        <CouponCode
                          submitValue={submitValue}
                          cuponToggle={cuponToggle}
                          courses={courses}
                        />
                      </CustomModal>

                      <CustomModal
                        modal={paymentModal}
                        toggle={paymentToggle}
                        size="lg"
                      >
                        <PaaymentModal paymentToggle={paymentToggle} />
                      </CustomModal>

                      <div>
                        {!saleData?.netPrice ? (
                          <button
                            onClick={() => cuponToggle()}
                            className="no_button red font_13"
                          >
                            Apply Coupon Code
                            <i className="fas fa-arrow-right ps-2 mb-2"></i>
                          </button>
                        ) : (
                          <button
                            onClick={() => cuponToggle1()}
                            className="no_button red font_13"
                          >
                            Remove Coupon
                            <i className="fas fa-arrow-right ps-2 mb-2"></i>
                          </button>
                        )}
                      </div>
                    </div>
                    <hr></hr>
                    <button
                      className="no_button red font_13"
                      onClick={() => paymentToggle()}
                    >
                      See Payment Options
                      <i className="fas fa-arrow-right ps-2 mt-2"></i>
                    </button>
                    <br />
                    <div className="text-center my-5">
                      {courses?.courseName && (
                        <NavLink
                          to={`/courseEnrollment/${rms(courses?.courseName)}/${
                            courses?.id
                          }`}
                        >
                          <button className={`btn-main2 form-control btn`}>
                            Enroll for this course
                          </button>
                        </NavLink>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CourseDetails
