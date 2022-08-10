import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import phone from "../.././../Assets/Home/phone.svg";
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="row ">
      <div
        className="col-2 "
        style={{ background: "#E5E5E5" }}
      ></div>
      <div className="col-8" style={{ background: "#FFFFFF" }}>
        <div >
          <Slider {...settings}>
            <div>
              <div className="py-4 px-2" style={{ background: "#FFFFFF" }}>
                <div className="row">
                  <div className="col-6">
                    <img src={phone} alt="" />
                  </div>
                  <div className="col-4 pt-4 mt-5">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias necessitatibus eius in modi enim harum a unde fuga
                      illo animi?
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, eveniet!
                    </p>

                    <button className="btn btn-danger">Click</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="py-4 px-2" style={{ background: "#FFFFFF" }}>
                <div className="row">
                  <div className="col-6">
                    <img src={phone} alt="" />
                  </div>
                  <div className="col-4 pt-4 mt-5">
                    <h5>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias necessitatibus eius in modi enim harum a unde fuga
                      illo animi?
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto, eveniet!
                    </p>

                    <button className="btn btn-danger">Click</button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div
        className="col-2 border "
        style={{ background: "#E5E5E5" }}
      ></div>
    </div>
  );
};

export default ImageSlider;
