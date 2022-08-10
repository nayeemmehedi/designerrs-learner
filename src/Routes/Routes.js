import Register from "../Pages/Authentication/Register"
import Error from "../Pages/Error"
import Login from "../Pages/Authentication/Login"
import Home from "../Pages/Home"
import Courses from "../Pages/Courses"
import CourseDetails from "../Pages/Courses/CourseDetails"
import ResetPassword from "../Pages/Authentication/ResetPassword"
import ActivateAccount from "../Pages/Authentication/ActiveAccount"
import AccountSettings from "../Pages/AccountSettings/AccountSettings"
import DashBoardMain from "../Pages/DashBoard/DashBoardMain"
import OnboadingMain from "../Pages/OnboadingMain/OnboadingMain"
import CourseEnrollment from "../Pages/CourseEnrollment/CourseEnrollment"
import Calender from "../Components/CourseMaterial/Calender"
import PandingAssignment from "../Components/pandingAssignment"

import Mentor from "../Pages/MentorOnboarding"
import CourseMaterial from "../Pages/CourseMaterial"

import Portfolio from "../Pages/Portfolio"
import GoToOnboarding from "../Components/MentorOnboarding/GoToOnboarding/GoToOnboarding"
import MentorPerformance from "../Components/MentorOnboarding/MentorPerformance"
import MentorReview from "../Components/MentorOnboarding/MentorReview"
import ForgotPassword from "../Pages/Authentication/ForgotPassWord"
import NeevFinance from "../Components/NeevFinance"
import MentorshipProgram from "../Pages/MentorshipProgram"
import Redirect from "../Pages/Authentication/Redirect"
import Detaux from "../Pages/Detaux"
import MentorPortfolio from "../Pages/MentorPortfolio"
import MentorPandingAssignment from "../Components/pandingAssignment/Mentor"
import Jobs from "../Pages/Jobs"
import JobDetails from "../Pages/JobDetails"
import Goodies from "../Pages/Goodies"
import DetaxPublication from "../Pages/DetaxPublication"
import CertificateValue from "../Components/CertificateForAdmin/CertificateValue"
import DetauxMeetUp from "../Pages/DetauxMeetup"
import VerifyEmail from "../Pages/Authentication/VerifyEmail"
import AcceptBatch from "../Pages/AcceptBatch"
import Meetup from "../Pages/DetauxMeetup/Meetup"
import Greetings from "../Pages/DetauxMeetup/Greetings"
import Payment from "../Pages/DetauxMeetup/Payment"

export const publicRoutes = [
  { id: 0, path: "/", component: Home },
  { id: 1, path: "/login", component: Login },
  { id: 2, path: "/signup", component: Register },
  { id: 3, path: "/reset-password", component: ResetPassword },
  { id: 3, path: "/forgot-password", component: ForgotPassword },
  { id: 4, path: "/courses", component: Courses },
  { id: 5, path: "/courses/:key/:id", component: CourseDetails },
  { id: 6, path: "/active-account", component: ActivateAccount },
  { id: 7, path: "/courseEnrollment", component: CourseEnrollment },
  { id: 8, path: "/courseEnrollment/:key/:id", component: CourseEnrollment },
  { id: 11, path: "/mentorship", component: MentorshipProgram },
  { id: 11, path: "/mentorship/batch/:batchId/course/:courseId", component: AcceptBatch },
  { id: 12, path: "/:id/portfolio", component: Portfolio },

  {
    id: 11,
    path: "/redirect/:username/:uid/:email/:role/:accessToken/:refreshToken",
    component: Redirect,
  },
  {
    id: 12,
    path: "/mantor-pandingAssignment",
    component: MentorPandingAssignment,
  },
  { id: 13, path: "/goodies", component: Goodies },
  { id: 14, path: "/home", component: Home },
  { id: 15, path: "/detaux-publication", component: DetaxPublication },
  { id: 16, path: "/certificate", component: CertificateValue },
  { id: 17, path: "/verify-email/:string", component: VerifyEmail },


]

export const protectedRoutes = [
  {
    id: 0,
    path: "/courseMaterial/:courseId/:courseName",
    component: CourseMaterial,
  },
  { id: 1, path: "/dashboard", component: DashBoardMain },
  { id: 2, path: "/onboarding/:courseId", component: OnboadingMain },

  // { id: 2, path: "/onboarding", component: OnboadingMain },

  { id: 3, path: "/account-settings", component: AccountSettings },

  { id: 4, path: "/mentor", component: Mentor },
  { id: 4, path: "/mentorOnboading/:batchId", component: GoToOnboarding },
  { id: 5, path: "/mentorPerformance", component: MentorPerformance },
  { id: 6, path: "/mentorReview", component: MentorReview },
  { id: 7, path: "/calender", component: Calender },
  { id: 8, path: "/:id/mentor-portfolio", component: MentorPortfolio },

  { id: 9, path: "/detaux", component: Detaux },
  { id: 9, path: "/detaux-meetup", component: DetauxMeetUp },
  //Job
  { id: 10, path: "/jobs", component: Jobs },
  { id: 11, path: "/job/:name/:key", component: JobDetails },

  { id: 12, path: "/neevFinace", component: NeevFinance },
  { id: 13, path: "/my-progress", component: PandingAssignment },
  { id: 14, path: "/meetup-reg/:id", component: Meetup },
  { id: 15, path: "/meetup-greetings", component: Greetings },
  { id: 16, path: "/meetup-payment/:id", component: Payment },
]
export const errorRoute = [{ id: 0, path: "*", component: Error }]
