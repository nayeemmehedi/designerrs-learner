import React from "react";

import CustomInputField from "../../../../Common/CustomInputField";
import { useFormik } from "formik";
import { Form, Input, Label } from "reactstrap";


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
    toolip: "Empathy",
  },
  {
    name: "visualDesign",
    label: "Visual Design",
    toolip: "Visual Design",
  },
  {
    name: "conceptualization",
    label: "Conceptualization",
    toolip: "Conceptualization",
  },
  {
    name: "observation",
    label: "Observation",
    toolip: "Observation",
  },
  {
    name: "communication",
    label: "Communication",
    toolip: "Communication",
  },
  {
    name: "creativity",
    label: "Creativity",
    toolip: "Creativity",
  },
  {
    name: "curiosity",
    label: "Curiosity",
    toolip: "Curiosity",
  },
  {
    name: "research",
    label: "Research",
    toolip: "Research",
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
     
  );
};

export default MentorAssignment;
