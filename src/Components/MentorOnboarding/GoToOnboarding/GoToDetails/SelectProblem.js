import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosApi from "../../../../Helper/api";
import {
  decrement,
  increment,
} from "../../../../Store/Authentication/Onboarding/Action";
// import "../Onboarding.css";
import { useHistory } from "react-router-dom";
import SackBar from "../../../Common/SackBar";

import { useParams } from "react-router-dom";

function SelectProblem() {
  const dispatch = useDispatch();
  const { onBoarding } = useSelector((state) => state.courseOnBoarding);
  console.log(onBoarding);
  const [selected, setSelected] = useState([]);
  const [problemsBriefs, setProblemBriefs] = useState([]);
  const history =useHistory()
  useEffect(() => {
    setProblemBriefs(onBoarding?.problemBriefs);
  }, []);

  const handleSelectionChange = (data) => {
    const check = selected.every((item) => {
      return item._id !== data._id;
    });

   

    const available = selected.find((i) => i._id === data._id);

    if (available) {
      problemsBriefs?.forEach((i) => {
        if (i._id == data._id) {
          i.selected = false;
        }
      });
    }
    if (!check) return setSelected(selected.filter((i) => i._id !== data._id));

    if (selected.length > onBoarding?.problemBriefsNumber)
      return console.log("al added");

    problemsBriefs?.forEach((i) => {
      if (i._id == data._id) {
        i.selected = true;
      }
    });

    setSelected([...selected, data]);
  };
  console.log(selected);

  const {courseId} = useParams()
  const send = () => {
    axiosApi
      .post(`/learner/courses/${courseId}/onboarding`, selected.map(i=> i._id))
      .then((res) => {
        console.log(res);
        dispatch(increment());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    dispatch(increment())
  }

  return (
    <div className="pt-4 ps-4">
      <div className="pb-3">
        <h4>Choose a problem brief</h4>
        <small>Select one of the problem briefs to continue. Learn more</small>
      </div>
      {problemsBriefs?.map((i) => (
        <div
          className="my-5  cursor"
          style={{
            position: "relative",
            backgroundColor: i?.selected ? "#FFF4EA" : "#fff",
            border: i?.selected ? "1px solid red" : "1px solid white",
          }}
          onClick={() => handleSelectionChange(i)}
        >
          <div>
            <img
              src={i?.thumbnail?.link}
              alt="oops"
              style={{ height: "250px", objectFit: "center" }}
            />

            <div className="p-4">
              <p className="text-danger">{i?.title}</p>
            </div>
          </div>
        </div>
      ))}

 

      <SackBar history={history} title={"Submit and go to payment"}
      handleSubmit={handleSubmit}
      ></SackBar>
    </div>
  );
}

export default SelectProblem;


// <div className="bg-white p-4 my-4">
// <div className="d-flex justify-content-between">
//   <button
//     onClick={() => dispatch(decrement())}
//     className="btn btn-outline-danger"
//   >
//     back
//   </button>{" "}
//   <br />
 

 
// </div>
// </div>