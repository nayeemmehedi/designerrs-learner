import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Input, Label } from "reactstrap";
import CustomInputField from "../Common/CustomInputField";
import { mentorshipSchema } from "../PortfolioMain/common/YupValidation";
import { GrFormClose } from "react-icons/gr";
import { formValue } from "./jsonValue";

function ApplicationForm({ togglModal }) {
  const initialValues = {
    name: "",
    contractNo: "",
    email: "",
    linkdln: "",
  };

  const [initial, setInitial] = useState({});
  const [errorDate, setErrorDate] = useState(false);

  const onSubmit = (values) => {
    if (initial.startTime && initial.endTime) {
      setErrorDate(false);
      console.log("allvalues", initial);
      console.log("our values", values);
    } else {
      setErrorDate(true);
    }
  };

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: mentorshipSchema,
    onSubmit,
  });

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Mentorship Application Form</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />

      <Form onSubmit={sendSchema.handleSubmit}>
        <div className="row">
          {formValue?.map((v) => (
            <div className="col-6">
              <CustomInputField
                name={v?.name}
                type={v?.text}
                label={v?.label}
                placeholder={""}
                validationType={sendSchema}
              />
            </div>
          ))}
        </div>
        <h6 className="my-3">Availability with Introductory Call</h6>
        <p className="my-3">
          We would love to interact with you for around 30 minutes to get to
          know you better.
        </p>
        <p className="my-3">When are you available?</p>

        <div className="row my-3">
          <div className="col-md-6">
            <Label htmlFor="">
              <p className="text-secondary">From</p>
            </Label>
            <Input
              name={"startTime"}
              type={"time"}
              placeholder={"Select Time"}
              onChange={(e) =>
                setInitial({ ...initial, startTime: e.target.value })
              }
              value={initial.startTime}
            />
          </div>
          <div className="col-md-6">
            <Label htmlFor="">
              <p className="text-secondary">To</p>
            </Label>
            <Input
              name={"stopTime"}
              type={"time"}
              placeholder={"Select Time"}
              onChange={(e) =>
                setInitial({ ...initial, endTime: e.target.value })
              }
              value={initial.endTime}
            />
          </div>

          {errorDate && <p className="text-danger my-3">Selete your Time</p>}
          
        </div>

        <div class="d-grid gap-2">
          <button className="btn btn-main2 " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ApplicationForm;
