import React, { useEffect, useState } from "react"
import { UncontrolledCarousel } from "reactstrap"
import Style from "../../Style/course.module.scss"
import CourseSection2 from "../Course/Section2"

const CourseOverview = ({ details }) => {
  // slider
  const [slider, setSlider] = useState([])
  console.log("details", details)
  useEffect(() => {
    if (details?.course?.imageCarousel) {
      setSlider([])
      details?.course.imageCarousel.map((item, idx) =>
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
  }, [details])

  return (
    <div cal>
      {/* Leanrn */}
      <div className="m-2">
        <div className="row d-flex justify-content-between">
          <div className="col-md-8">
            <h4>What will you learn?</h4>
            <small>
              Lead lerners to follow a user-centered process to create a
              user-friendly application. Ensure that learners learn the latest
              research methods, ideation and visual design skills.
            </small>
          </div>
          <div className="col-md-2">
            <svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.0179 32.3517L62.8543 64.2069L31.3453 32.3517L31.3453 64.2896H62.8543L62.8543 96.0621H63.0179V96.1448H94.3632V128H128L128 0L0 0L0 32.3517L63.0179 32.3517Z"
                fill="#FFB800"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="m-2">
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

        <CourseSection2 courses={details?.course} />
      </div>
     
    </div>
  )
}

export default CourseOverview
