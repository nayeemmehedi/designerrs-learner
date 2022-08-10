import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosApi from "../../../Helper/api";
import {
  decrement,
  increment,
} from "../../../Store/Authentication/Onboarding/Action";
import "../Onboarding.css";
import rightUp from "../../../Assets/Images/rightUp.svg";
import { useParams } from "react-router-dom";
import SackBar from "../../Common/SackBar";
import useWindowDimensions from "../../../Hooks/useWindowDimensions ";

function SelectProblem() {
  const dispatch = useDispatch();
  const { onBoarding } = useSelector((state) => state.courseOnBoarding);
  const [selected, setSelected] = useState([]);
  const [problemsBriefs, setProblemBriefs] = useState([]);
  const { width } = useWindowDimensions();

  //details
  const [detailBrief, setDetailBrief] = useState(null);

  console.log(problemsBriefs);

  useEffect(() => {
    setProblemBriefs(onBoarding?.session?.problemBriefs);
  }, []);

  const handleSelectionChange = (data) => {
    const check = selected.every((item) => {
      return item._id !== data._id;
    });

    const available = selected.find((i) => i._id === data._id);
    setDetailBrief(null);
    if (available) {
      problemsBriefs?.forEach((i) => {
        if (i._id == data._id) {
          i.selected = false;
        }
      });
    }
    if (!check) return setSelected(selected.filter((i) => i._id !== data._id));

    if (selected.length > onBoarding?.session?.problemBriefsNumber)
      return console.log("al added");

    problemsBriefs?.forEach((i) => {
      if (i._id == data._id) {
        i.selected = true;
      }
    });

    setSelected([...selected, data]);
  };
  console.log(selected);

  const { courseId } = useParams();
  const send = () => {
    axiosApi
      .post(
        `/learner/courses/${courseId}/onboarding`,
        selected.map((i) => i._id)
      )
      .then((res) => {
        console.log(res);
        dispatch(increment());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return detailBrief ? (
    <div className="py-4">
      <img
        src={detailBrief?.thumbnail?.link}
        alt="oops"
        style={{ height: "250px", objectFit: "center" }}
      />
      <div className="d-flex justify-content-center">
        <div>
          <h4 className="my-3">{detailBrief?.title}</h4>
          <div className="my-2">
            <small className="fw-bold">Competitors</small>
            <br></br>
            <div className="my-3">
              {detailBrief?.competitors?.map((i) => (
                <span className="border p-2 mx-2 tag cursor">
                  {i}
                  <img
                    src={rightUp}
                    alt="rightUp"
                    style={{ width: "10px", marginLeft: "5px" }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <small className="fw-bold">Statement</small>
        <br></br>
        <small>{detailBrief?.statement}</small>
      </div>

      <div className="my-4">
        <small className="fw-bold">Target Users</small>
        <br></br>
        <small>{detailBrief?.potentialTarget}</small>
      </div>

      <div className="my-4">
        <small className="fw-bold">Features & Functionalities</small>
        <br></br>
        {detailBrief?.feauture?.map((i, idx) => (
          <span className="my-2">
            <span className="fw-bold">
              {idx + 1} {i?.name}
            </span>
            : {i?.useCase}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleSelectionChange(detailBrief)}
        className="btn btn-main2 form-control my-4"
      >
        Select
      </button>
    </div>
  ) : (
    <div className="pt-4 ps-4">
      <div className="pb-3">
        <h4>Choose a problem brief</h4>
        <small>Select one of the problem briefs to continue. Learn more</small>
      </div>
      {problemsBriefs?.map((i) => (
        <div
          className="my-5  cursor"
          onClick={() => setDetailBrief(i)}
          style={{
            position: "relative",
            backgroundColor: i?.selected ? "#FFF4EA" : "#fff",
            border: i?.selected ? "1px solid red" : "1px solid white",
          }}
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

      <div
        className="bg-white"
        style={{
          position: "fixed",
          bottom: 0,
          width: width <= "767" ? "100%" : "50%",
        }}
      >
        <div className="d-flex justify-content-between p-5">
          {/* <button
            className="whiteColor ontherbtn backbtnDwld"
            onClick={() => dispatch(decrement())}
          >
            back
          </button>
          <br />
          <button onClick={() => send()} className="btn btn-main2">
            Submit
          </button> */}
          <span
            className="btn btn-outline-secondary right"
            onClick={() => dispatch(decrement())}
            style={{ borderRadius: "0" }}
          >
            Back
          </span>

          <button
            className="btn btn-main2 right px-5 ms-5"
            type="submit"
            onClick={() => send()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectProblem;
