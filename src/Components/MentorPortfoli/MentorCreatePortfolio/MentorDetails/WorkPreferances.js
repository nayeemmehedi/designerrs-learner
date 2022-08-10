import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import axiosApi from "../../../../Helper/api";
import { getLocation } from "../../../../Store/Location/action";
import { workPreferenceSchemas } from "../../../../Valid/mentorPortfolio";
import CustomInputField from "../../../Common/CustomInputField";

const durations = [
  { name: "One Week", value: "One Week" },
  { name: "Two Week", value: "Two Week" },
  { name: "Three Week", value: "Three Week" },
  { name: "Four Week", value: "Four Week" },
];

function WorkPreferances() {
  const { location } = useSelector((state) => state.Location);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, []);

  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  });
  const [btnLoading, setbtnLoading] = useState(false);

  const [openToOpportunities, setcurrentlyWorking] = useState(false);

  const initialValues = {
    expectedCTC: "",
    primaryLocation: "",
    secondaryLocation: "",
  };

  const onSubmit = (values) => {
    setbtnLoading(true);

    const mainValue = { ...values, openToOpportunities };

    let value = { workPreferences: mainValue };

    axiosApi
      .post(`learner/portfolio`, value)
      .then((res) => {
        // console.log("res", res);
        setbtnLoading(false);

        setResponse({
          success: true,
          error: false,
          addFirst: false,
        });
      })
      .catch((err) => {
        setbtnLoading(false);

        setResponse({
          success: false,
          error: true,
          addFirst: false,
        });
      });
  };

  const sendBatchDetailsCoordinator = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: workPreferenceSchemas,
    onSubmit,
  });

  return (
    <div className="my-4 w-50">
      <h3 className="my-5">Work Preferences</h3>
      <div className="p-3 shadow-sm" style={{ width: "25%", height: "auto" }}>
        <div class="form-check">
          <input
            class="form-check-input text-danger"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            onChange={(e) => setcurrentlyWorking(e.target.checked)}
          />
          <label style={{ fontSize: "12px" }}>I’m Open to Opportunities</label>
        </div>
      </div>
      <p className="my-4">
        You won't get notifications about job posts if you do not select this
      </p>

      <div>
        <Form onSubmit={sendBatchDetailsCoordinator.handleSubmit}>
          <div>
            <div className="w-75">
              <CustomInputField
                name={"expectedCTC"}
                type={"number"}
                placeholder={"Ex:3.5"}
                validationType={sendBatchDetailsCoordinator}
                label={"Expected CTC (In Lakhs)"}
              ></CustomInputField>
            </div>

            <CustomInputField
              name={"primaryLocation"}
              type={"select"}
              placeholder={""}
              // options={durations}
              validationType={sendBatchDetailsCoordinator}
            >
              <option defaultValue>Select Primary Preferred Location</option>
              {location.locations?.map((i, idx) => (
                <option key={idx} value={i?._id}>
                  {i?.address?.city}
                </option>
              ))}
            </CustomInputField>
            <CustomInputField
              name={"secondaryLocation"}
              type={"select"}
              placeholder={""}
              // options={durations}
              validationType={sendBatchDetailsCoordinator}
            >
              <option defaultValue>Select Secondary Preferred Location</option>
              {location.locations?.map((i, idx) => (
                <option key={idx} value={i?._id}>
                  {i?.address?.city}
                </option>
              ))}
            </CustomInputField>
          </div>

          <div>
            <button className="btn btn-main2 " type="submit">
              {btnLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </Form>
      </div>

      <div>
        {response.addFirst && (
          <p className="text-danger mt-3"> Add Your Item First.</p>
        )}

        {response.error && (
          <p className="text-danger mt-3"> Something Error Happens..</p>
        )}

        {response.success && (
          <p className="text-success mt-3"> Successfully Completed..</p>
        )}
      </div>
    </div>
  );
}

export default WorkPreferances;
