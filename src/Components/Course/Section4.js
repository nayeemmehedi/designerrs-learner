import React from "react";

const CourseSection4 = ({ highlights }) => {
  let style = { fontWeight: 300 };
  return (
    <div
      className="d-flex justify-content-between align-items-center flex-wrap text-center"
      id="Highlights"
    >
      {!!highlights &&
        highlights?.map((hLights) => (
          <div key={hLights._id}>
            <h2 style={style}>{hLights?.metricNumber}+</h2>
            <p className="font_13">{hLights?.metricLabel}</p>
          </div>
        ))}
    </div>
  );
};

export default CourseSection4;
