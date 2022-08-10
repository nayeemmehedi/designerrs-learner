import { useFormik } from "formik"
import React, { useContext, useEffect, useState } from "react"
import { CertificationSchema } from "../../common/YupValidation"
import { GrFormClose } from "react-icons/gr"
import CustomInputField from "../../common/CustomInputField"
import { Form, Input, Label } from "reactstrap"
import moment from "moment"
import PortfolioService from "../../../../services/Portfolio.service"
import swal from "sweetalert"
import { PortfolioContextMade } from "../PortfolioContext"
import { useDispatch, useSelector } from "react-redux"
import { getGlobalData, getPortfolio } from "../../../../Store/Portfolio/Action"
import { useParams } from "react-router-dom"

const sessions = [
  { name: "One Session", value: "1" },
  { name: "Two Sessions", value: "2" },
  { name: "Three Sessions", value: "3" },
  { name: "Four Sessions", value: "4" },
  { name: "Five Sessions", value: "5" },
]

function ModalCertification({ togglModal, portfolioValue }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGlobalData())
  }, [])

  const { global } = useSelector(state => state.PortfolioReducers)

  const [sweet, setSweet] = useState(false)
  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  const [dateError, setDateError] = useState(false)

  const initialValues = {
    institute: "",
    fieldOfStudy: "",
    course: "",
    domain: "",
  }

  const [filter, setFilter] = useState({})

  const { id } = useParams()
  const onSubmit = values => {
    console.log("filer", filter)
    // if (portfolioValue?.certification?.length >= 0) {
    if (Object.keys(filter).length > 1) {
      setDateError(false)

      const mainValue = { ...values, ...filter }

      let value = {
        certification: [mainValue, ...portfolioValue?.certification],
      }

      PortfolioService.portfolioPost(value).then(v =>
        swal("Good job!", "Successfully Done!", "success").then(sv => {
          dispatch(getPortfolio(id))
          togglModal()
        })
      )
    } else {
      setDateError(true)
    }
    // } else {
    // }
  }

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: CertificationSchema,
    onSubmit,
  })

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Adding Certification</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <Form onSubmit={sendSchema.handleSubmit}>
        <div className="mb-3 mt-3 w47">
          <CustomInputField
            name={"institute"}
            type={"text"}
            label={"Institute Name"}
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
                    {`${i}`}
                  </option>
                ))}
              </CustomInputField>
            </div>
          </div>
        </div>

        <div className="mb-3 mt-3 w47">
          <CustomInputField
            name={"course"}
            type={"text"}
            label={"Course Name"}
            placeholder={""}
            validationType={sendSchema}
          />
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col-md-6">
              <Label>
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

        <div class="d-grid gap-2">
          <button className="btn btn-main2  " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default ModalCertification
