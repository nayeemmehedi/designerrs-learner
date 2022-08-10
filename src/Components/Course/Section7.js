import React from "react";
import Style from "../../Style/course.module.scss";

const CourseSection7 = ({ modules, title }) => {
  console.log("🚀 Modules", modules);
  let style = { width: "20px" };
  return (
    <div className="my-5">
      <h4>{title ? title : "What's Inside?"}</h4>
      <div className="my-4">
        <div className="row">
          {!!modules &&
            modules?.map((item, idx) => (
              <div className="col-sm-12 col-md-6 col-lg-6" key={idx}>
                <div className={`${Style.box_border_one} border_red`}>
                  <div className={Style.box_border_one_img}>
                    {/* <img src={require('../../Assets/Images/icons/flag.svg').default} alt="" style={style} /> */}
                    <img src={item?.moduleIcon?.link} alt="" style={style} />
                  </div>
                  <div className="my-3 d-flex justify-content-between">
                    <h6>
                      <strong>{item.moduleName}</strong>
                    </h6>{" "}
                    <span className="font_13 text-black-50">
                      {item.sessions} Sessions
                    </span>
                  </div>

                  {item?.topics?.length > 0
                    ? item.topics.map((topic, idx) => (
                        <p key={idx} className="font_12 my-2">
                          <i className="fas fa-check me-2 text-black-50"></i>
                          {topic}
                        </p>
                      ))
                    : ""}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection7;
