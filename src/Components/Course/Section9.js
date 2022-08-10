import React, { useEffect, useState } from "react";
import arrayChunks from "../../Helper/Custom/splitArrayChunk";
import Style from "../../Style/course.module.scss";

const CourseSection9 = ({ careerPro }) => {
  const [chunks, setChunks] = useState();

  useEffect(() => {
    if (careerPro?.cards?.length <= 0) return;
    let arr = careerPro.cards;
    setChunks(arrayChunks(arr, 3));
  }, [careerPro?.cards]);

  useEffect(() => {
    console.log("chunks", chunks);
  }, [chunks]);
  return (
    <div className="my-5">
      {!!careerPro && (
        <React.Fragment>
          <h4>{careerPro?.title}</h4>
          <p className="font_12 m-0 w-75 mb-4">{careerPro?.description}</p>

          <div className="my-4">
            <div
              id="carouselPros"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {chunks?.map((item, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === 0 ? "carousel-item active" : "carousel-item"
                    }
                  >
                    <div key={idx} className="row">
                      {item.map((singleItem, idx) => (
                        <div className="col-sm-12 col-md-4 col-lg-4">
                          <div
                            className={`${Style.box_border_two} border_red_left`}
                          >
                            <div className={Style.box_border_one_img}>
                              <img
                                src={singleItem?.icon?.link}
                                alt="Icons"
                                className={Style.imgs}
                              />
                            </div>
                            <h6 className="my-3">
                              <strong>{singleItem?.heading}</strong>
                            </h6>
                            <p className="font_12">{singleItem?.body}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className="btn btn_red"
            type="button"
            data-bs-target="#carouselPros"
            data-bs-slide="prev"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="btn btn_red"
            type="button"
            data-bs-target="#carouselPros"
            data-bs-slide="next"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default CourseSection9;
