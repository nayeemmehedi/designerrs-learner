import React from "react"
import { Link } from "react-router-dom"
// import { courses } from '../../Database/course';
import Style from "../../Style/course.module.scss"
import rms from "../../Helper/Custom/removeSpace"
import poster1 from "../../Assets/Images/course/Interactiv.svg"
import poster2 from "../../Assets/Images/course/2.svg"
import poster3 from "../../Assets/Images/course/3.svg"
import poster4 from "../../Assets/Images/course/4.svg"
import thumnail from "../../Assets/Images/no_image/thumnail.png"
import useSWR from "swr"
import { SWRGET } from "../../API/SWR/fetcher"
import Toolip2 from "../../Components/Common/Toolip2"

const Courses = () => {
  const { data: allCourses, error: allCoursesError } = useSWR(
    "/learner/courses",
    SWRGET
  )

  let courses = allCourses?.data || []

  // console.log("courses", courses)

  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h3 className={Style.side_name}>Courses</h3>
            <p className={Style.side_des}>
              Our courses are evolving constantly to provide you the latest
              design methodologies.
            </p>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7">
            {allCourses === undefined && allCoursesError === undefined && (
              <div className="text-center">
                <box-icon
                  name="loader"
                  animation="spin"
                  size="30px"
                  color="#cd2026"
                ></box-icon>
                <p className="font_13" style={{ color: "#cd2026" }}>
                  Loading...
                </p>
              </div>
            )}
            {allCourses?.data?.length <= 0 && (
              <div className="text-center">
                <box-icon name="data" size="30px" color="#cd2026"></box-icon>
                <p className="font_13" style={{ color: "#cd2026" }}>
                  No Data
                </p>
              </div>
            )}
            <div className="row">
              {courses.map((course, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className={Style.course1}>
                    <div className={Style.item} key={course?.id}>
                      <img
                        src={
                          course?.courseThumbnail?.link
                            ? course?.courseThumbnail?.link
                            : thumnail
                        }
                        alt={course.courseName}
                      />
                      <div className={Style.details}>
                        <div className={Style.heights}>
                          <span className={Style.batch_from}>
                            {course?.batch_from}
                          </span>
                          <Link
                            to={`/courses/${rms(course?.courseName)}/${course.id
                              }`}
                          >
                            <h5>{course?.courseName}</h5>
                          </Link>
                          <strong>₹ {course?.basePrice}</strong>
                          <p>{course?.tagline}</p>
                        </div>
                        <div className={Style.heights}>
                          <div className={Style.overview}>
                            <div className={Style.deep}>
                              <span className="px-3 red">
                                <i className="far fa-calendar"></i>
                              </span>
                              <div>
                                <span className={Style.brief}>Duration</span>
                                <br />
                                <strong className={Style.describe}>
                                  {course.courseDuration}
                                </strong>
                              </div>
                            </div>
                            <div className={Style.deep}>
                              <span className="px-3 red">
                                <i className="far fa-calendar-alt"></i>
                              </span>
                              <div>
                                <span className={Style.brief}>
                                  Session Count
                                </span>
                                <br />
                                <strong className={Style.describe}>
                                  {course?.sessionCount}
                                </strong>
                              </div>
                            </div>
                          </div>
                          <div className={Style.overview}>
                            <div className={Style.deep}>
                              <span className="px-3 red">
                                <i className="fas fa-signal"></i>
                              </span>
                              <div>
                                <span className={Style.brief}>Skill Level</span>
                                <br />
                                <strong className={Style.describe}>
                                  {course.skillLevels}
                                </strong>
                              </div>
                            </div>
                            <div className={Style.deep}>
                              <span className="px-3 red">
                                <i className="fas fa-map-marker-alt"></i>
                              </span>
                              <div>
                                <span className={Style.brief}>Mode</span>
                                <br />
                                <strong className={Style.describe}>
                                  <Toolip2
                                    toolip={course?.overviewLocation
                                      ?.map(i => i?.locationName)
                                      .join(", ")}
                                    data={course?.overviewLocation?.[0]?.locationName}
                                  />
                                </strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-100 my-3">
              <div className="row">
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    4+
                    <span className={Style.small}>Courses</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    3+
                    <span className={Style.small}>Tools</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    50+
                    <span className={Style.small}>Method</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    10+
                    <span className={Style.small}>Tools taught</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    1000+
                    <span className={Style.small}>Problem Solved</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    5+
                    <span className={Style.small}>Locations</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    500+
                    <span className={Style.small}>Sessions Conducted</span>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3 my-4">
                  <div className="d-flex flex-column text-center">
                    6000+
                    <span className={Style.small}>Assignments Evaluated</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-100 my-4" style={{ hight: 200 }}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <img
                    src={poster1}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h6 className={Style.info_heading}>Interactive Examples</h6>
                  <p className={Style.info_details}>
                    Study Materials filled with countless interactive
                    experiences help you to learn faster than boring
                    presentations.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-100 my-4" style={{ hight: 200 }}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h6 className={Style.info_heading}>
                    Amusing and delightful learning experience
                  </h6>
                  <p className={Style.info_details}>
                    Our curriculums are curated by industry experts and taught
                    through intricate storytelling methods.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <img
                    src={poster2}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            <div className="w-100 my-4" style={{ hight: 200 }}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <img
                    src={poster3}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h6 className={Style.info_heading}>
                    No more learning outdated methods and skills
                  </h6>
                  <p className={Style.info_details}>
                    We regularly update our courses with industry standard
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-100 my-4" style={{ hight: 200 }}>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <h6 className={Style.info_heading}>
                    Activity Oriented sessions
                  </h6>
                  <p className={Style.info_details}>
                    Every session is jeweled with engaging activities to get
                    your hands dirty on your projects.
                  </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <img
                    src={poster4}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2"></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Courses
