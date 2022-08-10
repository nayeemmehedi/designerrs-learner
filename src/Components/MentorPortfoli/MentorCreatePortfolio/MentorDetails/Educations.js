import { useFormik } from "formik"
import React, { useState, useEffect, useContext } from "react"
import CustomInputField from "../../../Common/CustomInputField"
import { Form, Input, Label } from "reactstrap"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { EducationSchemas } from "../../../../Valid/mentorPortfolio"
import axiosApi from "../../../../Helper/api"

const sessions = [
  { name: "One Session", value: "1" },
  { name: "Two Sessions", value: "2" },
  { name: "Three Sessions", value: "3" },
  { name: "Four Sessions", value: "4" },
  { name: "Five Sessions", value: "5" },
]

function Educations() {
  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  })

  const { global } = useSelector(state => state.PortfolioReducers)

  const [btnLoading, setbtnLoading] = useState(false)

  const [apiGet, setApiGet] = useState({})

  const [sweet, setSweet] = useState(false)

  const [dateError, setDateError] = useState(false)

  const initialValues = {
    institute: "",
    fieldOfStudy: "",
    degree: "",
    domain: "",
  }

  const [filter, setFilter] = useState({})

  const dispatch = useDispatch()

  const onSubmit = values => {
    const mainValue = { ...values, ...filter }

    let value = { education: [mainValue] }

    axiosApi
      .post(`learner/portfolio`, value)
      .then(res => {
        console.log("res", res)
        setbtnLoading(false)

        setResponse({
          success: true,
          error: false,
          addFirst: false,
        })
      })
      .catch(err => {
        setbtnLoading(false)

        setResponse({
          success: false,
          error: true,
          addFirst: false,
        })
      })
  }

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: EducationSchemas,
    onSubmit,
  })

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
      })
    }, 4000)
  }

  return (
    <div className="my-4 w-75">
      <h3>Education</h3>
      <div className="p-3">
        <Form onSubmit={sendSchema.handleSubmit}>
          <div className="mb-3 mt-3 w47 ">
            <CustomInputField
              name={"institute"}
              type={"text"}
              label={"Institude Name"}
              placeholder={""}
              validationType={sendSchema}
            />
          </div>

          <div className="row">
            <div className="col-6">
              <div className="mb-3 mt-3">
                <CustomInputField
                  name={"fieldOfStudy"}
                  type={"text"}
                  label={"Field Of Study"}
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
              name={"degree"}
              type={"text"}
              label={"Degree"}
              placeholder={""}
              validationType={sendSchema}
            />
          </div>

          <div className="mb-3">
            <div className="row">
              <div className="col-md-6">
                <Label>
                  {/* <small>End date</small> */}
                  <b>Start date</b>
                </Label>
                <Input
                  name={"startDate"}
                  type={"date"}
                  placeholder={moment(new Date()).format("ll")}
                  onChange={e =>
                    setFilter({ ...filter, startDate: e.target.value })
                  }
                  value={filter.startDate}
                />
              </div>
              <div className="col-md-6">
                <Label>
                  {/* <small>End date</small> */}
                  <b>End date</b>
                </Label>
                <Input
                  name={"endDate"}
                  type={"date"}
                  placeholder={moment(new Date()).format("ll")}
                  onChange={e =>
                    setFilter({ ...filter, endDate: e.target.value })
                  }
                  value={filter.endDate}
                />
                <small style={{ fontSize: "12px" }}>Or expected</small>
              </div>

              {dateError && (
                <p className="text-danger">Date value fullfil first</p>
              )}
            </div>
          </div>

          <div>
            <button className="btn btn-main2 " type="submit">
              + Add Education
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
  )
}

export default Educations
