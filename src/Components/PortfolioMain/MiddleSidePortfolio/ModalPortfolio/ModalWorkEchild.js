import { useFormik } from "formik"
import React, { useState, useEffect, useContext } from "react"
import { WorkExperienceSchema } from "../../common/YupValidation"
import { GrFormClose } from "react-icons/gr"
import CustomInputField from "../../common/CustomInputField"
import { Form, Input, Label } from "reactstrap"
import moment from "moment"
import PortfolioService from "../../../../services/Portfolio.service"
import swal from "sweetalert"
import { PortfolioContextMade } from "../PortfolioContext"
import { useDispatch, useSelector } from "react-redux"
import { getPortfolio } from "../../../../Store/Portfolio/Action"
import { useParams } from "react-router-dom"

const sessions = [
  { name: "One Session", value: "1" },
  { name: "Two Sessions", value: "2" },
  { name: "Three Sessions", value: "3" },
  { name: "Four Sessions", value: "4" },
  { name: "Five Sessions", value: "5" },
]

function ModalWorkEchild({ togglModal, id: value, portfolioValue }) {
  const valueForForm =
    portfolioValue?.workExperience?.find(v => v._id === value) || {}

  const [currentlyWorking, setcurrentlyWorking] = useState(false)

  const { global } = useSelector(state => state.PortfolioReducers)
  const [dateError, setDateError] = useState(false)

  const initialValues = {
    designation: valueForForm?.designation,
    companyName: valueForForm?.companyName,
    annualCTC: valueForForm?.annualCTC,
    domain: valueForForm?.domain,
  }

  const [filter, setFilter] = useState({})
  useEffect(() => {
    setFilter({
      startDate: moment(valueForForm?.startDate).format("YYYY-MM-DD"),
      endDate: moment(valueForForm?.endDate).format("YYYY-MM-DD"),
    })
  }, [valueForForm])

  const [sweet, setSweet] = useState(false)
  const dispatch = useDispatch()

  const { id } = useParams()
  const onSubmit = values => {
    if (portfolioValue?.workExperience) {
      if (Object.keys(filter).length > 1) {
        setDateError(false)

        const mainValue = { ...values, ...filter, currentlyWorking }

        if (value) {
          let index = portfolioValue?.workExperience?.findIndex(
            v => v._id == value
          )

          portfolioValue?.workExperience?.splice(index, 1, mainValue)

          let valueData = { workExperience: [...portfolioValue?.workExperience] }

          PortfolioService.portfolioPost(valueData).then(v =>
            swal("Good job!", "Successfully Done!", "success").then(sv => {
              dispatch(getPortfolio(id))
              togglModal()
            })
          )
        }
      } else {
        setDateError(true)
      }
    } else {
    }
  }

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: WorkExperienceSchema,
    onSubmit,
  })

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between">
        <h6 className="fw-bold">Edit Work Experience</h6>{" "}
        <GrFormClose onClick={togglModal} className="cursor" size={30} />
      </div>
      <hr />
      <Form onSubmit={sendSchema.handleSubmit}>
        <div className="mb-3 mt-3 w47">
          <CustomInputField
            name={"designation"}
            type={"text"}
            label={"Designation"}
            placeholder={""}
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
            name={"annualCTC"}
            type={"number"}
            label={"Annual CTC(In Lakhs)(Optional)"}
            placeholder={""}
            validationType={sendSchema}
          />
        </div>

        <div className="mb-3 mt-4">
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
                disabled={currentlyWorking}
                value={filter.endDate}
              />
            </div>
            {dateError && (
              <p className="text-danger">Date value fullfil first</p>
            )}
          </div>
          <div className="row mt-3">
            <div className="col-6"></div>
            <div className="col-6">
              <div class="form-check">
                <input
                  class="form-check-input text-danger"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  onChange={e => setcurrentlyWorking(e.target.checked)}
                />
                <label style={{ fontSize: "12px" }}>
                  I'm currently working on here
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button className="btn btn-main2 " type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  )
}

export default ModalWorkEchild
