import React from "react"
import Style from "../../Style/course.module.scss"

const CourseSection2 = ({ courses }) => {
  console.log("🚀 Courses", courses)
  return (
    <div className="my-4 w-100 bg-white shadow-sm rounded p-2" id="Overview">
      <React.Fragment>
        <div className="row d-flex justify-content-between">
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="far fa-calendar px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Duration</span>
                <p className="m-0">
                  <strong>
                    {courses?.courseDuration ? courses?.courseDuration : "-"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center ">
            <div className="d-flex align-items-center">
              <i
                className="far fa-calendar-alt px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Session Count</span>
                <p className="m-0">
                  <strong>
                    {courses?.sessionCount ? courses?.sessionCount : "-"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-user-tie px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Conduct</span>
                <p className="m-0">
                  <strong>
                    {courses?.typeOfConduct ? courses?.typeOfConduct : "-"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-signal px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Skill Level</span>
                <p className="m-0">
                  <strong>
                    {courses?.skillLevels ? courses?.skillLevels : "-"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-snowboarding px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Effort</span>
                <p className="m-0">
                  <strong>
                    {courses?.effortInHours ? courses?.effortInHours : "-"}
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 py-2 d-flex align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-map-marker-alt px-3"
                style={{ color: "#169F32", fontSize: "2rem" }}
              ></i>
              <div className={Style.deep_description}>
                <span>Mode</span>
                <p className="m-0">
                  {courses?.overviewLocation?.length > 0 ? (
                    courses?.overviewLocation?.map((type, idx) => (
                      <strong key={idx}>
                        {type.locationName}{" "}
                        {courses?.overviewLocation?.length - 1 !== idx
                          ? " & "
                          : ""}
                      </strong>
                    ))
                  ) : (
                    <strong>-</strong>
                  )}
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default CourseSection2
