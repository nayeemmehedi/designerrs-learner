import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OnboardingChildMain from "./OnboardingChild/OnboardingChild0";
// import OnboardingChildMain from "./OnboardingChild/OnboardingChildMain";
import OnboardingStepper from "./OnboardingStepper/OnboardingStepper";
import { useParams } from "react-router-dom";
import { getCourseOnBoarding } from "../../Store/courseOnBoarding/actions";
import Loading from "../Common/Loading";
import SweetAlert from "react-bootstrap-sweetalert";

function Onboarding() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    dispatch(getCourseOnBoarding(courseId));
  }, [courseId]);
  const { error, loading, onBoarding } = useSelector(
    (state) => state.courseOnBoarding
  );
  console.log(onBoarding);
  if (loading) return <Loading />;
  return (
    <div>
      {error ? (
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
      ) : null}
      <div className="row">
        <div className="col-3 ">
          {" "}
          <OnboardingStepper />
        </div>
        <div className="col-7" style={{minHeight: "100vh"}}>
          {" "}
          <OnboardingChildMain />{" "}
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
