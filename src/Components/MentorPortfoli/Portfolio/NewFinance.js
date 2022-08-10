import { useFormik } from "formik";
import React, { useState } from "react";
import { Form } from "reactstrap";
import axiosApi from "../../../Helper/api";
// import axiosApi from "../../../Helper/api";
// import axiosApi from "../../../../../../helpers/api";
// import { newFinanceSchema } from "../../../../../../Valid/problemBriefs/problemBriefsSchema";
import { newFinanceSchema } from "../../../Valid/mentorPortfolio";
import CustomInputField from "../../Common/CustomInputField";

const data = [
  {
    
    courseName: "employed",
  },
  {
   
    courseName: "self-employed",
  },
  {
   
    courseName: "unemployed",
  },
];

function NewFinance({ id }) {
  const [success, setSuccess] = useState(false);
  const [error1, setError1] = useState(false);
  const [errorValue, setErrorValue] = useState(null);

  const initialValues = {
    unemployed: "",
    name: "",
    phone: "",
    selfEmployed: "",
  };

  const onSubmit = (values) => {
    console.log("value phone", values);
    let formData = new FormData();
    formData.append("parentDetails[employmentStatus]", values.unemployed);
    formData.append("parentDetails[phone]", values.phone);
    formData.append("parentDetails[name]", values.name);
    formData.append("employmentStatus", values.selfEmployed);

    axiosApi
      .patch(`/learner/kyc`, formData)
      .then((res) => {
        setSuccess(true);
        setError1(false);
        console.log("img", res);
      })
      .catch((err) => {
        setError1(true);
        setSuccess(false);
        console.log("img", err.statusText);
        // setErrorValue(err.data)
      });
  };

  const send1 = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: newFinanceSchema,
    onSubmit,
  });

  return (
    <div className="w35">
      <p className="py-2 font-monospace">Neev Finance Documents</p>

      <h5>Status of employment</h5>
      <Form className="mt-2" onSubmit={send1.handleSubmit}>
        <CustomInputField
          name={"unemployed"}
          type={"select"}
          placeholder={""}
          validationType={send1}
        >
          <option defaultValue>Select </option>
          {data?.map((i, idx) => (
            <option key={idx} value={i.courseName}>
              {i.courseName}
            </option>
          ))}
        </CustomInputField>

        <hr />

        <h5>Parents/Guardian Details</h5>
        <p className="font12">
          This person will be cntacted by Neev Finance team to verify their
          details
        </p>

        <CustomInputField
          name={"name"}
          type={"text"}
          label={"Name"}
          placeholder={""}
          validationType={send1}
        />
        <CustomInputField
          name={"phone"}
          type={"number"}
          label={"Phone Number"}
          placeholder={""}
          validationType={send1}
        />

        <h6>What is their status of employment</h6>

        <CustomInputField
          name={"selfEmployed"}
          type={"select"}
          placeholder={""}
          validationType={send1}
        >
          <option defaultValue>Select </option>
          {data?.map((i, idx) => (
            <option key={idx} value={i.courseName}>
              {i.courseName}
            </option>
          ))}
        </CustomInputField>

        <div class="d-grid gap-2">
          <button type="submit" className="btn btn-main2">
            Submit{" "}
          </button>
        </div>
      </Form>

      {success && <div className="text-success mt-3">Successfully Done</div>}
      {error1 && <div className="text-danger mt-3">Error Occur..</div>}
    </div>
  );
}

export default NewFinance;
