import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OnboardingChildMain from "./GoToDetails/OnboardingChild0";
// import OnboardingChildMain from "./OnboardingChild/OnboardingChildMain";
import OnboardingStepper from "./GoToStepper/OnboardingStepper";
import { useParams } from "react-router-dom";
// import { getCourseOnBoarding } from "../../Store/courseOnBoarding/actions";
// import Loading from "../Common/Loading";
import SweetAlert from "react-bootstrap-sweetalert";
import Loading from "../../Common/Loading";
import { getMentorOnBoarding, getMentorSession } from "../../../Store/Mentor/actions";
import axiosApi from "../../../Helper/api";

function GoToOnboarding() {
  const dispatch = useDispatch();
  const { batchId } = useParams();
  useEffect(() => {
    dispatch(getMentorOnBoarding(batchId));
  }, []);
  const {  onBoarding } = useSelector(
    (state) => state.OnBoardingMentor
  );

  useEffect(() => {
    dispatch(getMentorSession(batchId));
  }, []);

  // const {error, loading,sessions} = useSelector(
  //   (state) => state.OnBoardingMentor
  // );


  // if (loading) return <Loading />;
  return (
    <div>
      {/* {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() =>
            dispatch({ type: "GET_ENROLLED_COURSE_API_ERROR", payload: "" })
          }
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null} */}
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-2 ">
          {" "}
          <OnboardingStepper />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8">
          {" "}
          <OnboardingChildMain />{" "}
        </div>
      </div>
    </div>
  );
}

export default GoToOnboarding;
