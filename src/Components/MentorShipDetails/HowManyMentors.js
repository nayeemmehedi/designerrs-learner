import React from "react";
import { StyleMentor } from "../Common/MentorStyle";
import { mentorImage1, newFuntion, newFuntion2 } from "./jsonValue";

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function HowManyMentors() {
  return (
    <div className="my-5 ">
      <h3 className="text-center">A community of 50 Mentors</h3>

      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="my-5 " style={{ height: "300px" }}>
            <div className="row">
              {mentorImage1.map((v, idx) => (
                <div className="col-1">{newFuntion(idx + 1, v.img)}</div>
              ))}
            </div>
            <div className="row mt-3">
              {mentorImage1.map((v, idx) => (
                <div className="col-1">{newFuntion(idx + 1, v.img)}</div>
              ))}
            </div>

            <div className="row mt-3">
              {value.map((v, idx) => (
                <div className="col-1">{newFuntion2(idx + 1)}</div>
              ))}
            </div>
            <div className="row mt-3">
              {value.map((v, idx) => (
                <div className="col-1">{newFuntion2(idx + 1)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowManyMentors;
