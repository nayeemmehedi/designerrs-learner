import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Element, Link } from "react-scroll"
import Style from "../../Style/course.module.scss"
import thumnail from "../../Assets/Images/no_image/thumnail.png"
import ScrollToTop from "../../Helper/Custom/ScrollToTop"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { UncontrolledCarousel } from "reactstrap"
import { useParams } from "react-router-dom"
import HowManyMentors from "../../Components/MentorShipDetails/HowManyMentors"
import MentorWorkingAt from "../../Components/MentorShipDetails/MentorWorkingAt"
import BenefitMentors from "../../Components/MentorShipDetails/BenefitMentors"
import DoingMentors from "../../Components/MentorShipDetails/DoingMentors"
import EligalMentor from "../../Components/MentorShipDetails/EligalMentor"
import MentorLastCoumn from "../../Components/MentorShipDetails/MentorLastCoumn"
import ApplicationForm from "../../Components/MentorShipDetails/ApplicationForm"
import Guest from "../../Components/MentorShipDetails/Guest"

let courses = {
  imageCarousel: [
    {
      caption: "Xd Full Stack",
      image: {
        link: "https://image.shutterstock.com/image-photo/plitvice-lakes-croatia-beautiful-place-260nw-1050138794.jpg",
      },
    },
    {
      caption: "Full Stack2",
      image: {
        link: "https://image.shutterstock.com/image-photo/street-white-houses-colonia-shown-260nw-1035199813.jpg",
      },
    },
  ],
}

const MentorshipProgram = () => {
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
  const dispatch = useDispatch()

  const [paymentModal, setPaymentModal] = useState(false)

  const paymentToggle = () => {
    setPaymentModal(!paymentModal)
  }

  let location = useLocation()
  let sliced = location.pathname.split("/")
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let allCourses = {}
  //   let courses = allCourses?.data || {};

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
    //   }, [courses.imageCarousel]);
  }, [])

  console.log("slider", slider)

  const priceData = JSON.parse(localStorage.getItem("sale"))

  return (
    <React.Fragment>
      <ScrollToTop />
      <div className={`${Style.stoper_head} my-3`}>
        <div className="mx-5">
          <div className="row">
            <div className="col-sm-12 col-md-2 col-lg-2">
              <div className={Style.back_to_course}>
                <NavLink to="/dashboard">
                  <span>
                    <i className="fas fa-arrow-left"></i>
                  </span>
                  Back
                </NavLink>
              </div>
              <div className={Style.page_steps}>
                <Link
                  to="Home"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Home
                </Link>
                <Link
                  to="Perks"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Perks
                </Link>
                <Link
                  to="Criteria"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Criteria
                </Link>
                <Link
                  to="Responsibility"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Responsibility
                </Link>
                <Link
                  to="ApplyForMentorship"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Apply for mentorship
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
              {/* {allCourses !== undefined && ( */}
              <div className={Style.center_items}>
                <Element id="Home">
                  <div className="text-center">
                    <h1 className="fw-1 my-4">
                      Forge the next million designers
                    </h1>
                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-6">
                        <p className="mt-3 mb-5">
                          Give back to the aspiring designers by sharing your
                          real-life experiences, knowledge and career guidances
                        </p>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  </div>

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
                </Element>

                <Element id="Perks">
                  <HowManyMentors></HowManyMentors>
                </Element>

                <Element id="Criteria">
                  <MentorWorkingAt></MentorWorkingAt>
                </Element>

                <Element id="Responsibility">
                  <BenefitMentors></BenefitMentors>
                </Element>
                <Element>
                  <DoingMentors></DoingMentors>
                </Element>
                <Element>
                  <EligalMentor></EligalMentor>
                </Element>
              </div>
              {/* )} */}
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              <MentorLastCoumn></MentorLastCoumn>
              {/* <ApplicationForm></ApplicationForm> */}
              {/* <Guest></Guest> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MentorshipProgram
