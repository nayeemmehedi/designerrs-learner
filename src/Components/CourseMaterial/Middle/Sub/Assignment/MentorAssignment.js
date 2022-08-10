import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CustomInputField from "../../../../Common/CustomInputField";
import { useFormik } from "formik";
import { Form, Input, Label } from "reactstrap";
import { profileImg } from "../../../../../Assets/Images/icons/profileDemo";
import MentorAssignmentTwo from "./MentorAssignmentTwo";

import * as Yup from "yup";

export const mentorAssignmentSchema = Yup.object().shape({
  empathy: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  visualDesign: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  conceptualization: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  observation: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  communication: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  creativity: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  curiosity: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
  research: Yup.number()
    .max(5, "Rating mustbe 5 or less")
    .min(0, "Rating mustbe 0 or More")
    .required("This value is required"),
});

const formInputLvl = [
  {
    name: "empathy",
    label: "Empathy",
    toolip:
      "How well does the candidate understands it’s users? How courageous is the candidate to deep dive into the user’s emotional depths of their problems? ",
  },
  {
    name: "visualDesign",
    label: "Visual Design",
    toolip:
      "How aesthetic the candidate’s creations are? How much thought has a candidate given to create their experiences to achieve timeless designs?",
  },
  {
    name: "conceptualization",
    label: "Conceptualization",
    toolip:
      "Rate the candidate’s ability to put his ideas into right set of components. Rate how good he/she is in putting their ideas into form. ",
  },
  {
    name: "observation",
    label: "Observation",
    toolip:
      "How patient and observant a candidate is to its user’s behaviors? How deep his/her insights are after user testing? ",
  },
  {
    name: "communication",
    label: "Communication",
    toolip:
      "How clearly can the candidate articulate their design decisions and insights in plain language?",
  },
  {
    name: "creativity",
    label: "Creativity",
    toolip:
      "Rate the quality of ideas that comes out of the candidate’s mind? How does the candidate leverages the constraints to create something out of the box?",
  },
  {
    name: "curiosity",
    label: "Curiosity",
    toolip:
      "Rate the quality of the candidate’s zeal and keeness on learning something new everytime.",
  },
  {
    name: "research",
    label: "Research",
    toolip:
      "How good the candidate is at finding behavioral patterns and then forming clear and consice insights from the information.",
  },
];

const MentorAssignment = () => {
  const initialValues = {
    empathy: "",
    visualDesign: "",
    conceptualization: "",
    observation: "",
    communication: "",
    creativity: "",
    curiosity: "",
    research: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const mentorAssignmentAction = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: mentorAssignmentSchema,
    onSubmit,
  });

  return (
    <div className="my-5">
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-md-4 pt-3 pl-5">
          <div className="d-flex">
            <div className="mx-2">
              <img
                className="rounded-circle border border- cursor"
                src={profileImg}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
                alt="demo"
              />
            </div>
            <div>
              <h6 style={{ color: "#414141" }}>Devon Lee</h6>
              <p
                style={{
                  fontSize: "13px",
                  color: "#CD2026",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                See Performance <AiOutlineArrowRight></AiOutlineArrowRight>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-8 pt-3 pl-3"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div>
            <h6 style={{ color: "#1F1F1F" }}>Jury Evaluation</h6>
            <p
              style={{
                fontSize: "13px",
                color: "#CD2026",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              See Details <AiOutlineArrowRight></AiOutlineArrowRight>
            </p>
          </div>
        </div>

        <div className="col-10 offset-1 my-5">
          <Form
            onSubmit={mentorAssignmentAction.handleSubmit}
            style={{ padding: "0px" }}
          >
            <div className="row">
              {formInputLvl.map((item, index) => (
                <div className="col-md-6">
                  <CustomInputField
                    name={item.name}
                    type={"number"}
                    label={item.label}
                    validationType={mentorAssignmentAction}
                    count={"/5"}
                    toolip={item.toolip}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#CD2026",
                padding: "8px 98px",
                border: "none",
                color: "white",
              }}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>

      <div className="row mt-5" style={{ backgroundColor: "white" }}>
        <div className="col-md-4 pt-3 pl-5">
          <div className="d-flex">
            <div className="mx-2">
              <img
                className="rounded-circle border border- cursor"
                src={profileImg}
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
                alt="demo"
              />
            </div>
            <div>
              <h6 style={{ color: "#414141" }}>Devon Lee</h6>
              <p
                style={{
                  fontSize: "13px",
                  color: "#CD2026",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                See Performance <AiOutlineArrowRight></AiOutlineArrowRight>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-md-8 pt-3 pl-3"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div>
            <h6 style={{ color: "#1F1F1F" }}>Jury Evaluation</h6>
            <p
              style={{
                fontSize: "13px",
                color: "#CD2026",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              See Details <AiOutlineArrowRight></AiOutlineArrowRight>
            </p>
          </div>
        </div>

        <div className="col-10 offset-1 my-5">
          <MentorAssignmentTwo></MentorAssignmentTwo>
        </div>
      </div>
    </div>
  );
};

export default MentorAssignment;
