import React, { useState } from "react";
import { profileImg } from "../../../../../Assets/Images/icons/profileDemo";
import checkMentor from "../../../../../Assets/Images/icons/checkMentor.svg";

const MentorCourseOverview = () => {
  const listMentor = [
    "Devon",
    "Bessie",
    "Albert",
    "Wade",
    "Eleanor",
    "Ronald",
    "Donald",
    "Cameron",
  ];
  const [targetItem, setTargetItem] = useState(null);

  return (
    <div>
      <div>
        <h6>04/12 Submitted</h6>
        <small style={{ color: "#414141" }}>
          Click on a learner to see their profile
        </small>
      </div>

      <div className="row">
        {listMentor.map((item, ind) => (
          <div className="col-md-4 my-2" onClick={() => setTargetItem(ind)}>
            <div
              className="m-2"
              style={
                targetItem == ind
                  ? {
                      border: "1px solid red",
                      paddingLeft: "5px",
                      paddingTop: "3px",
                      position: "relative",
                    }
                  : {}
              }
            >
              <img
                className="rounded-circle border border- cursor"
                src={profileImg}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
                alt="demo"
              />
              <small
                style={
                  targetItem == ind ? { fontWeight: "bold", color: "red" } : {}
                }
              >
                {" "}
                {item.substring(0, 6)}
              </small>
              {targetItem == ind && (
                <img
                  src={checkMentor}
                  alt="x"
                  style={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    right: "10px",
                    bottom: "25px",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorCourseOverview;
