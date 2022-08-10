import React from "react";
import { FiDownload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../../Store/Authentication/Onboarding/Action";
import { useParams } from "react-router-dom";
import axiosApi from "../../../Helper/api";
import { useHistory } from "react-router-dom";
import useWindowDimensions from "../../../Hooks/useWindowDimensions ";

function DownloadFile() {
  const dispatch = useDispatch();
  const { onBoarding } = useSelector((state) => state.courseOnBoarding);
  console.log(onBoarding?.sessions?.softwaresToInstall);
  const { width } = useWindowDimensions();
  const handleDownload = () => {
    // onBoarding?.XD?.XDDocument.link
    // onBoarding?.figma?.figmaDocument.link
  };
  let { courseId } = useParams();
  const history = useHistory();
  const handleFinish = () => {
    axiosApi
      .patch(`/learner/courses/${courseId}/onboarding`, {
        onboardingCompleted: true,
      })
      .then((res) => {
        console.log(res);
        history.push("/dashboard");
      })
      .catch((err) => {
        dispatch({
          type: "GET_ENROLLED_COURSE_API_ERROR",
          payload: err?.response?.data?.error || "Invalid Operation",
        });
      });
  };
  return (
    <div className="p-4 ">
      <div className="row">
        <div className="col-10 mt-2">
          <h3>Download Activity Files</h3>
          <p className="mt-4">
            Make sure you create an account on each of these tools. The activity
            files will help you perform the course activities
          </p>
        </div>

        <div className="mt-3 bg-white col-10">
          <div className="p-4">
            <h4>Activity Files</h4>
            {onBoarding?.session?.softwaresToInstall?.map((i) => (
              <small className="text-danger my-4 cursor">
                <a href={i?.url} target="_blank">
                  {" "}
                  Download {i?.software} -{">"}
                </a>
              </small>
            ))}

            <div className="text-center">
              <button className="my-3 btn btn-main2 form-control">
                <FiDownload /> Download Activity File
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <video width="576px" height="322px" controls="true">
            <source
              src="https://www.youtube.com/watch?v=Cptlr__Fwx4&list=RDMMfKopy74weus&index=23"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>{" "}
          <br />
          <p className="my-2">Watch this video to know how to join community</p>
        </div>

        <div
          className="topMargin"
          style={{
            position: "fixed",
            bottom: 0,
            width: width <= "767" ? "100%" : "50%",
          }}
        >
          <div className="d-flex justify-content-between  whiteColor downloadmain">
            <div className="p-4">
              <button
                className="whiteColor ontherbtn backbtnDwld"
                onClick={() => dispatch(decrement())}
              >
                back
              </button>
            </div>

            <div className="p-4">
              <button className="p-4 finishBtn" onClick={handleFinish}>
                Finish
              </button>
            </div>
          </div>
        </div>
        <div className="longHeight"></div>
      </div>
    </div>
  );
}

export default DownloadFile;
