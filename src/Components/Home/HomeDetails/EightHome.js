import React from "react";
import { SWRGET } from "../../../API/SWR/fetcher";
import Style from "../../../Style/course.module.scss";
import rms from "../../../Helper/Custom/removeSpace";
import thumnail from "../../../Assets/Images/no_image/thumnail.png";
import { Link, useHistory } from "react-router-dom";

import useSWR from "swr";

function EightHome() {
  const { data: allCourses, error: allCoursesError } = useSWR(
    "/learner/courses",
    SWRGET
  );
  const history = useHistory();

  let courses = allCourses?.data || [];

  console.log("courses VHAI", courses);

  return (
    <div className="my-5 py-5">
      {allCourses && allCoursesError && (
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
        <div className="col-3"></div>
        <div className="col-6">

          <div>
            <div className="text-center my-4">
              <h6 className="my-3">Learn design from our diverse range of courses </h6>
              <button className="btn btn-main2 my-3" onClick={() => {
                history.push("/courses")
              }}>View all courses</button>
            </div>

            <div className="row">
              {courses.slice(0, 4)?.map((course, idx) => (
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
                            to={`/courses/${rms(course?.courseName)}/${course.id}`}
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
                                <span className={Style.brief}>Session Count</span>
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
                                  {"Online"}
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
          </div>



        </div>
        <div className="col-2"></div>
      </div>






    </div>
  );
}

export default EightHome;
