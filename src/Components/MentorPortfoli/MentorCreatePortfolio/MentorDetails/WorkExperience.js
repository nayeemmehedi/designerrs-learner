import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import CustomInputField from "../../../Common/CustomInputField";
import { AiOutlineEye } from "react-icons/ai";
import { Form, Input, Label } from "reactstrap";
import moment from "moment";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { WorkExperienceSchemas } from "../../../../Valid/mentorPortfolio";
import CommonSkillTool from "./CommonSkillTool";
import axiosApi from "../../../../Helper/api";

const sessions = [
  { name: "One Session", value: "1" },
  { name: "Two Sessions", value: "2" },
  { name: "Three Sessions", value: "3" },
  { name: "Four Sessions", value: "4" },
  { name: "Five Sessions", value: "5" },
];

function WorkExperience() {





  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  });

  const [btnLoading, setbtnLoading] = useState(false);
  const [sweet, setSweet] = useState(false);
  const [Skill, setSkill] = useState([]);
  const [Tool, setTool] = useState([]);
  const [dateError, setDateError] = useState(false);
  const [active, setActive] = useState(false);
  const [currentlyWorking, setcurrentlyWorking] = useState(false);

  const { global } = useSelector(state => state.PortfolioReducers)

  const initialValues = {
    experience: "",
    designation: "",
    companyName: "",
    annualCTC: "",
    domain: "",
  };

  const [timeValue, settimeValue] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (active) {
      settimeValue({
        startDate: timeValue.startDate,
        endDate: "",
      });
    }
  }, [active]);

  const onSubmit = (values) => {
    if (Skill.length > 0 && Tool.length > 0 && timeValue.startDate) {
      const mainValue = {
        ...values,
        ...timeValue,
        currentlyWorking,
        Skill,
        Tool,
      };

      let value = { workExperience: [mainValue] };

      console.log("values", value);

      axiosApi
        .post(`learner/portfolio`, value)
        .then((res) => {
          console.log("res", res);
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
    } else {
      setResponse({
        success: false,
        error: false,
        addFirst: true,
      });
    }
  };

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: WorkExperienceSchemas,
    onSubmit,
  });

  if (
    response.addFirst ||
    response.success ||
    response.error ||
    response.addFirst
  ) {
    setTimeout(() => {
      setResponse({
        success: false,
        error: false,
        addFirst: false,
      });
    }, 4000);
  }

  return (
    <div className="my-4 w-75">
      <h3 className="my-3">Work Experience</h3>
      <div className="p-3">
        <div className="d-flex">
          <button
            onClick={() => {
              setcurrentlyWorking(true);
            }}
            className={
              currentlyWorking
                ? "btn btn-main2-hoverless p-2"
                : "btn btn-main-hoverless p-2"
            }
          >
            Working
          </button>
          <button
            onClick={() => {
              setcurrentlyWorking(false);
            }}
            className={
              !currentlyWorking
                ? "btn btn-main2-hoverless p-2"
                : "btn btn-main-hoverless p-2"
            }
          >
            Not Working
          </button>
        </div>
        <Form>
          <div className="mb-3 mt-3 w47">
            <CustomInputField
              name={"experience"}
              type={"text"}
              label={"Design  Experience (In Years)"}
              placeholder={"Ex:2"}
              validationType={sendSchema}
            />
          </div>

          <div className="row">
            <div className="col-6">
              <div className="mb-3 mt-3">
                <CustomInputField
                  name={"companyName"}
                  type={"text"}
                  label={"Current Company Name"}
                  placeholder={""}
                  validationType={sendSchema}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3 mt-4">
                <CustomInputField
                  name={"domain"}
                  type={"select"}
                  label={""}
                  placeholder={""}
                  validationType={sendSchema}
                  // disabled={curriculam?.length == 0}
                >
                  <option defaultValue>Select Domain/Industry</option>
                {global?.industry?.map((i, idx) => (
                  <option key={idx} value={i}>
                    {i}
                  </option>
                ))}
                </CustomInputField>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-3 w47">
            <CustomInputField
              name={"designation"}
              type={"text"}
              label={"Designation"}
              placeholder={""}
              validationType={sendSchema}
            />
          </div>
        </Form>
      </div>

      <div className="ms-2">
        <div className="my-3">
          <p>Skills you acquired</p>
          <CommonSkillTool value={Skill} setValue={setSkill}></CommonSkillTool>
        </div>
        <div className="my-3">
          <p>Tools you learned</p>
          <CommonSkillTool value={Tool} setValue={setTool}></CommonSkillTool>
        </div>
      </div>

      <br />
      <hr />
      <br />

      <div className="mb-5 mt-3">
        <h5 className="text-danger fw-bold">Who can view these Sections </h5>
        <span>
          {" "}
          <AiOutlineEye></AiOutlineEye> <span className="ms-1">You, Admin</span>
        </span>
      </div>

      <div className="mb-3 mt-3 w47">
        <CustomInputField
          name={"annualCTC"}
          type={"text"}
          label={"Annual CTC(In Lakhs)(Optional)"}
          placeholder={""}
          validationType={sendSchema}
        />
      </div>

      <div className="mb-3 mt-4">
        <Label className="text-secondary">
          <small>Select Dates</small>
        </Label>
        <div className="row">
          <div className="col-md-4">
            <Input
              name={"startDate"}
              type={"date"}
              placeholder={moment(new Date()).format("ll")}
              onChange={(e) =>
                settimeValue({ ...timeValue, startDate: e.target.value })
              }
              value={timeValue.startDate}
            />
          </div>
          <div className="col-md-4">
            <Input
              disabled={active}
              name={"endDate"}
              type={"date"}
              placeholder={moment(new Date()).format("ll")}
              onChange={(e) =>
                settimeValue({ ...timeValue, endDate: e.target.value })
              }
              value={timeValue.endDate}
            />
          </div>
          <div className="col-3 mt-2">
            <div class="form-check">
              <input
                class="form-check-input text-danger"
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={(e) => setActive(e.target.checked)}
              />
              <label style={{ fontSize: "12px" }}>
                I'm currently working on here
              </label>
            </div>
          </div>
          {dateError && <p className="text-danger">Date value fullfil first</p>}
        </div>
      </div>

      <div>
        <button
          className="btn btn-main2 "
          type="submit"
          onClick={sendSchema.handleSubmit}
        >
          {btnLoading ? "Submitting..." : "Submit"}
        </button>
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

export default WorkExperience;
