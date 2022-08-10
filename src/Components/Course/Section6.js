import React from "react";

const CourseSection6 = ({ plans }) => {
  return (
    <div className="my-5">
      <h4>How is this course conducted?</h4>
      <div className="my-3">
        {!!plans && plans?.length > 0
          ? plans?.map((item, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-start align-items-center my-2"
              >
                <h1 style={{ color: "#d1d1d1" }}>{idx + 1}</h1>
                <span className="ms-4 text-black-50">{item}</span>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default CourseSection6;
