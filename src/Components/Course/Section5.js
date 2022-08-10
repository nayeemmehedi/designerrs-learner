import React from "react";
import Style from "../../Style/course.module.scss";

const CourseSection5 = ({ benefits }) => {
  return (
    <div className="my-5" id="Benefits">
      {!!benefits && (
        <React.Fragment>
          <h4>{benefits?.title}</h4>
          <p className="font_12 m-0 w-75">{benefits?.description}</p>

          <div className="my-4">
            <div className="row">
              {benefits?.cards?.length > 0
                ? benefits?.cards?.map((item, idx) => (
                    <div key={idx} className="col-sm-12 col-md-6 col-lg-6">
                      <div
                        className={`${Style.box_border_one} shadow-sm border_red`}
                      >
                        <div className={Style.box_border_one_img}>
                          <img src={item?.icon?.link} alt="" />
                        </div>
                        <h6>
                          <strong>{item?.heading}</strong>
                        </h6>
                        <p className="font_12">{item?.body}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CourseSection5;
