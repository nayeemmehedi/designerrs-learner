import React from "react";
import Style from "../../Style/course.module.scss";

const CourseSection8 = ({ eligibility }) => {
  let style = { width: "20px" };
  return (
    <div className="my-5" id="Benefits">
      {!!eligibility && (
        <React.Fragment>
          <h4>{eligibility?.title}</h4>
          <p className="font_12 m-0 w-75">{eligibility?.description}</p>

          <div className="my-4">
            <div className="row">
              {eligibility?.cards?.length > 0
                ? eligibility?.cards?.map((item, idx) => (
                    <div key={idx} className="col-sm-12 col-md-6 col-lg-6">
                      <div
                        className={`${Style.box_border_one} shadow-sm border_red`}
                      >
                        <div className={Style.box_border_one_img}>
                          <img src={item?.icon?.link} alt="" style={style} />
                        </div>
                        <h6 className="my-3">
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

export default CourseSection8;
