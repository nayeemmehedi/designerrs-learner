import React from "react";
import Style from "../../Style/course.module.scss";

const CourseSection3 = ({ courseOutcomes }) => {
  return (
    <div className="my-5" id="Outcomes">
      {!!courseOutcomes && (
        <React.Fragment>
          <h4>{courseOutcomes?.title}</h4>
          <p className="font_12 m-0 w-75">{courseOutcomes?.description}</p>

          <div className="my-4">
            <div className="row">
              {courseOutcomes?.cards?.length > 0
                ? courseOutcomes?.cards?.map((item, idx) => (
                    <div key={idx} className="col-sm-12 col-md-6 col-lg-6">
                      <div
                        className={`${Style.box_border_one} shadow-sm border_red`}
                      >
                        <div className={Style.box_border_one_img}>
                          {/* <img src={require('../../Assets/Images/icons/fire_on_heart.svg').default} alt="" /> */}
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

export default CourseSection3;
