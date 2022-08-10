import textValue from "../../../Assets/Images/textValue.svg";
import golbox from "../../../Assets/Images/golbox.svg";
import emoji from "../../../Assets/Images/emoji.svg";
import churi from "../../../Assets/Images/icons/churi.svg";
import manIcon from "../../../Assets/Images/icons/manIcon.svg";
import box from "../../../Assets/Images/icons/box.svg";




import { MdOutlineContactPage } from "react-icons/md";
import { MdAssignmentInd } from "react-icons/md";

export const sessionValue = [
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto", color: "red" }}
        src={textValue}
        alt=""
      />
    ),
    topMessage: "Complete Your onBoarding",

    middleMessage: "Course",

    lastMessage: "UX/UI design from Scratch",


    onclickValue: "/Onboading",
    buttonValue: "Go to Onbording",

    color: "red",
  },
  {
    iconTop: <MdAssignmentInd size={26} color={"#da12fa"}></MdAssignmentInd>,
    topMessage: "24 Submissions to review",
    middleMessage: "from 02 Batches",

    onclickValue: "/MentorPerformance",
    buttonValue: "Review Submissions",
    color: "#da12fa",
  },
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto", color: "#03740e" }}
        src={golbox}
        alt=""
      />

      // <MdOutlineContactPage
      //   size={26}
      //   className="text-danger"
      // ></MdOutlineContactPage>
    ),
    topMessage: "Complete Your Portfolio",

    ArrayValue: [
      "Portfolio Picture",
      "Portfolio",
      "Work Experience",
      "Skills and Tools",
    ],
    onclickValue: "/mentor-portfolio",
    buttonValue: "Complete Now",
    color: "#03740e",
  },
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto", color: "#e4f507" }}
        src={emoji}
        alt=""
      />

      // <MdOutlineContactPage
      //   size={26}
      //   className="text-danger"
      // ></MdOutlineContactPage>
    ),
    topMessage: "Learner are happy with you",
    middleMessage: "See your feedback to improve your munturing skills",
    onclickValue: "/mentorReview",
    buttonValue: "See Feedback",
    color: "#e4f507",
  },
];





// mentorship start

export const mentorshipValue = [
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto" }}
        src={churi}
        alt=""
      />
    ),
    topMessage: "Apply for Mentorship",

    // middleMessage: "Course",

    lastMessage: "We would love to have you as our mentor ",


    onclickValue: "/mentorship",
    buttonValue: "See Program Details",

    color: "white",
    background:"#CD2026"
  },
  {
    iconTop:  <img
    style={{ height: "26px", width: "auto", color: "#03740e" }}
    src={golbox}
    alt=""
  />,
  topMessage: "Complete Your Portfolio",

  ArrayValue: [
    "Portfolio Picture",
    "Portfolio",
    "Work Experience",
    "Skills and Tools",
  ],
  onclickValue: "/mentor-portfolio",
  buttonValue: "Complete Now",
  
  },
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto", color: "#03740e" }}
        src={manIcon}
        alt=""
      />
    ),
    topMessage: "Complete Your Account Information",

    ArrayValue: [
      "Availability",
      "Bank Account Details",
      "Contact Details",
    ],
    onclickValue: "/onboarding",
    buttonValue: "Complete Now",
    color: "#03740e",
  },
  {
    iconTop: (
      <img
        style={{ height: "26px", width: "auto", }}
        src={box}
        alt=""
      />

      // <MdOutlineContactPage
      //   size={26}
      //   className="text-danger"
      // ></MdOutlineContactPage>
    ),
    topMessage: "You're invited to our DETAUX event",
    middleMessage: "Event Name Design Education, UX & AI.",
    lastMessage:"Event Date : Saturday, 21 Aug 2021",
    
    onclickValue: "",
    buttonValue: "Accept Event Invite",
    color: "white",
    background:"#CD2026",
    NoNeed:true
  },
];
