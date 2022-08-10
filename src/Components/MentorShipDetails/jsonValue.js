import { StyleMentor } from "../Common/MentorStyle";
import twoPeople from "../../Assets/Images/icons/twoPeople.svg";
import cup from "../../Assets/Images/icons/cup.svg";
import dettol from "../../Assets/Images/icons/dettol.svg";
import manpeople from "../../Assets/Images/icons/manypeople.svg";
import blander from "../../Assets/Images/icons/blander.svg";
import pata from "../../Assets/Images/icons/pata.svg";

export const mentorImage1 = [
  {
    img: "https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=20&m=523761634&s=612x612&w=0&h=fycQb31QlRoNLdJWWddooJ94a-54YLYQ3ggTLPkhvmk=",
  },
  {
    img: "https://media.istockphoto.com/photos/giant-panda-picture-id1185211680?b=1&k=20&m=1185211680&s=170667a&w=0&h=fO4ILKqMBckrTVVOVi9pMoBhg1P6hRZVyY8OnXrvPDY=",
  },
  {
    img: "https://image.shutterstock.com/image-photo/panda-tree-260nw-369196991.jpg",
  },
  {
    img: "https://image.shutterstock.com/image-photo/playful-happy-panda-china-260nw-1390386575.jpg",
  },
  {
    img: "https://media.istockphoto.com/photos/cute-panda-bear-climbing-in-tree-picture-id523761634?k=20&m=523761634&s=612x612&w=0&h=fycQb31QlRoNLdJWWddooJ94a-54YLYQ3ggTLPkhvmk=",
  },
  {
    img: "https://media.istockphoto.com/photos/giant-panda-picture-id1185211680?b=1&k=20&m=1185211680&s=170667a&w=0&h=fO4ILKqMBckrTVVOVi9pMoBhg1P6hRZVyY8OnXrvPDY=",
  },
  {
    img: "https://image.shutterstock.com/image-photo/panda-tree-260nw-369196991.jpg",
  },
  {
    img: "https://image.shutterstock.com/image-photo/playful-happy-panda-china-260nw-1390386575.jpg",
  },
  {
    img: "https://image.shutterstock.com/image-photo/panda-tree-260nw-369196991.jpg",
  },
  {
    img: "https://image.shutterstock.com/image-photo/playful-happy-panda-china-260nw-1390386575.jpg",
  },
];

export function newFuntion(id, img) {
  let widthValue = "0px";
  let top = "0px";
  let bottom = "0px";

  if (id == 1) {
    widthValue = "20px";
    top = "25px";
  }
  if (id == 2) {
    widthValue = "25px";
    top = "22px";
  }
  if (id == 3) {
    widthValue = "28px";
    top = "19px";
  }
  if (id == 4) {
    widthValue = "32px";
    top = "16px";
  }
  if (id == 5) {
    widthValue = "34px";
    top = "13px";
  }
  if (id == 6) {
    widthValue = "34px";
    top = "13px";
  }
  if (id == 7) {
    widthValue = "32px";
    top = "16px";
  }
  if (id == 8) {
    widthValue = "28px";
    top = "19px";
  }
  if (id == 9) {
    widthValue = "25px";
    top = "22px";
  }

  if (id == 10) {
    widthValue = "20px";
    top = "25px";
  }

  return (
    <StyleMentor
      className="bg-white rounded-circle"
      width={widthValue}
      height={widthValue}
      top={top}
      bottom={bottom}
    >
      <img className="rounded-circle" src={img} alt="user" />
    </StyleMentor>
  );
}

export function newFuntion2(id) {
  let widthValue = "0px";
  let top = "0px";
  let bottom = "0px";

  if (id == 1) {
    widthValue = "20px";
    top = "25px";
  }
  if (id == 2) {
    widthValue = "25px";
    top = "28px";
  }
  if (id == 3) {
    widthValue = "28px";
    top = "31px";
  }
  if (id == 4) {
    widthValue = "32px";
    top = "34px";
  }
  if (id == 5) {
    widthValue = "34px";
    top = "37px";
  }
  if (id == 6) {
    widthValue = "34px";
    top = "37px";
  }
  if (id == 7) {
    widthValue = "32px";
    top = "34px";
  }
  if (id == 8) {
    widthValue = "28px";
    top = "31px";
  }
  if (id == 9) {
    widthValue = "25px";
    top = "28px";
  }

  if (id == 10) {
    widthValue = "20px";
    top = "25px";
  }

  return (
    <StyleMentor
      className="bg-white rounded-circle"
      width={widthValue}
      height={widthValue}
      top={top}
      bottom={bottom}
    >
      <img
        className="rounded-circle"
        src={
          "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        }
        alt="user"
      />
    </StyleMentor>
  );
}

export const Benefits = [
  {
    first: "Improve your Leadership Skills",
    second:
      "Infuence next generation of designers by leading them towards their objective of solving a problem.",
  },
  {
    first: "Cultivate stark articulation skills",
    second:
      "When you explain a concept to  a layman,your mind will strengthen your fundamentals.",
  },
  {
    first: "Become a part of our community",
    second:
      "Our community has seasoned mentors and lively designers where you can obtain countless prespectives.",
  },
  {
    first: "Prepare learners for future of Design",
    second:
      "Shape the future of design by teaching professional ethics and workflows to the upcoming designers.",
  },
];

export const formValue = [
  {
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    name: "contractNo",
    type: "number",
    label: "Contact Number",
  },
  {
    name: "email",
    type: "text",
    label: "Email ID",
  },
  {
    name: "linkdln",
    type: "text",
    label: "LinkedIn Profile Link",
  },
];

export const mentorDoing = [
  {
    image: cup,
    first: "Take live sessions with a group of learners",
  },
  {
    image: twoPeople,
    first:
      "During sessions, help learners clarify their doubts and overcome their challenges",
  },
  {
    image: dettol,
    first: "Review assignments and give open and constructive feedback",
  },
  {
    image: manpeople,
    first: "Stay committed and engaged during the length of the course.",
  },
  {
    image: blander,
    first: "Offering encouragement through genuine positive reinforcement.",
  },
  {
    image: pata,
    first: "Being a positive role model",
  },
  {
    image: cup,
    first:
      "Sharing your experience and professional success during the session",
  },
];

export const eligible = [
  {
    image: cup,
    first: "You have 2+ years of experience",
  },
  {
    image: cup,
    first: "You carry a strong portfolio of diverse projects",
  },
  {
    image: cup,
    first:
      "You have prior experience with conference talks or workshops or mentorship Programs",
  },
  {
    image: twoPeople,
    first: "You have strong communication skills",
  },
];
