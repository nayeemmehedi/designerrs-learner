import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useSWR from "swr";
// import { SWRGET } from "../../API/SWR/fetcher";
import { SWRGET } from "../../../API/SWR/fetcher";
import ReactPlayer from "react-player";
import "../../../Style/css/SlickSlider.css"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";

function VideoSlider() {
  const [play, setPlay] = useState(null);
  const [display, setDisplay] = useState(false);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
  };

  const { data: allCourses } = useSWR(
    `/learner/courses/622aced66ec329001677d572`,
    SWRGET
  );

  let courses = allCourses?.data || {};
  console.log("courses vhai", courses);

  return (
    <div className=" my-5 py-5 ">
      <Slider {...settings}>
        {courses?.testimonials?.map((item, idx) => (
          <div className="m-3 p-3" key={idx}>
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

        {/* <div className="nayeem p-4 border border-danger">
          <h3>1</h3>
        </div> */}
      </Slider>
    </div>
  );
}

export default VideoSlider;
