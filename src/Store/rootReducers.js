import { combineReducers } from "redux";
import login from "./Authentication/Login/reducer";
import onboarding from "./Authentication/Onboarding/Reducer";
import courseEnrollReducer from "./CourseEnroll/reducer";
import Coupon_reducer from "./CouponCode/Coupon_reducer";
import SingleCourseReducer from "./SingleCourseEnroll/SingleCourseReducer";
import PortfolioReducers from "./Portfolio/PortfolioReducers";
import user from "./user/reducers";
import courseOnBoarding from "./courseOnBoarding/reducers";
import courseMaterials from "./courseMaterial/reducers";
import OnBoardingMentor from "./Mentor/reducers";
import PandingAssignment from "./PandingAssignment/reducer";
import kyc from "./kyc/reducers";
import notify from "./notify/reducers";
import pages from "./pages/reducers";
import courseDetails from "./courseDetails/reducers";
import mentors from "./mantorManagement/reducers";
import jobs from "./jobs/reducers";
import Feedback from "./Feedback/reducers";
import Location from "./Location/reducers"
import detaux from "./Detaux/reducers"

const rootReducers = combineReducers({
  login,
  onboarding,
  courseEnrollReducer,
  Coupon_reducer,
  user,
  SingleCourseReducer,
  PortfolioReducers,
  courseOnBoarding,
  courseMaterials,
  OnBoardingMentor,
  PandingAssignment,
  kyc,
  notify,
  pages,
  courseDetails,
  mentors,
  jobs,
  Feedback,
  Location,
  detaux
});

export default rootReducers;
