import React from "react"
import { Form } from "reactstrap"
import { useEffect } from "react"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
// import Loading from "../../../../../Common/Loading";
// import { sendFinances } from "../../Valid/mentorPortfolio";
// import axiosApi, { patch } from "../../../../../../helpers/api";
import axiosApi, { patch } from "../../../Helper/api"

import axios from "axios"
import swal from "sweetalert"

import { useState } from "react"
import CustomInputField from "../../Common/CustomInputField"
import { sendFinances } from "../../../Valid/mentorPortfolio"
import { notifyError, notifyLoading } from "../../../Store/notify/actions"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"

const userId = localStorage.getItem("uid")

const data = [
  {
    _id: "34444444444",
    courseName: "Figma",
  },
  {
    _id: "34444444444",
    courseName: "Figma1",
  },
  {
    _id: "34444444444",
    courseName: "Figma2",
  },
]

const data1 = [
  {
    _id: "34444444444EE1",
    courseName: "Figma33",
  },
  {
    _id: "34444444EE4441",
    courseName: "Figma22",
  },
  {
    _id: "34444444EE4441",
    courseName: "Figma2333",
  },
]
const data2 = [
  {
    _id: "344444EE44444",
    courseName: "Figma54445",
  },
  {
    _id: "344444EE44444",
    courseName: "Figma1343",
  },
  {
    _id: "34444444444",
    courseName: "Figma2452244",
  },
]

const data3 = [
  {
    _id: "344444EE444344",
    courseName: "Figma5444533",
  },
  {
    _id: "344444EE4444433",
    courseName: "Figma134354",
  },
  {
    _id: "3444444444334",
    courseName: "Figma245224456",
  },
]

function Finances({ id }) {
  const dispatch = useDispatch()
  const { mentorData } = useSelector(state => state.OnBoardingMentor)

  //  console.log(mentorData)
  const initialValues = {
    bankName: mentorData?.bankName,
    bankState: mentorData?.bankState,
    bankCity: mentorData?.bankCity,
    bankAddress: mentorData?.bankAddress,
    ifscCode: mentorData?.ifscCode,
    accNo: mentorData?.accNo,
    upiId: mentorData?.upiId,
    panNumber: mentorData?.panNumber,
    aadharNumber: mentorData?.aadharNumber,
  }

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = values => {
    // values["pan[panNo]"] = values["panNo"];
    // delete values["panNo"];
    // values["aadaar[aadaarNo]"] = values["aadaarNo"];
    // delete values["panNo"];

    let formData = new FormData()

    formData.append("bankName", values.bankName)
    formData.append("bankState", values.bankState)
    formData.append("bankCity", values.bankCity)
    formData.append("bankAddress", values.bankAddress)
    formData.append("ifscCode", values.ifscCode)
    formData.append("accNo", values.accNo)
    formData.append("upiId", values.upiId)
    formData.append("panNumber", values.panNumber)
    formData.append("aadharNumber", values.aadharNumber)

    // for (var value of formData.values()) {
    //   console.log("EI ,value);
    // }

    dispatch(updateMentorPortfolio(formData))
  }

  const sendFinancesSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: sendFinances,
    onSubmit,
  })

  // if (loading) return <Loading />;

  return (
    <div className="row">
      <h5 className="mb-3">Bank Account Details</h5>
      <hr />
      <div>
        <Form onSubmit={sendFinancesSchema.handleSubmit}>
          {/* first box  */}

          <div className="col-sm-12 col-md-12 col-lg-6">
            <div>
              <CustomInputField
                name={"bankName"}
                type={"select"}
                placeholder={""}
                validationType={sendFinancesSchema}
              >
                <option defaultValue>Select Bank</option>
                {data?.map((i, idx) => (
                  <option key={idx} value={i.uid}>
                    {i.courseName}
                  </option>
                ))}
              </CustomInputField>
            </div>

            <div>
              <CustomInputField
                name={"bankState"}
                type={"select"}
                placeholder={""}
                validationType={sendFinancesSchema}
              >
                <option defaultValue>Select State</option>
                {data1?.map((i, idx) => (
                  <option key={idx} value={i.uid}>
                    {i.courseName}
                  </option>
                ))}
              </CustomInputField>
            </div>

            <hr />
            <div className="mb-3"></div>

            <div>
              <div className="mb-5">
                <CustomInputField
                  name={"bankCity"}
                  type={"select"}
                  placeholder={""}
                  validationType={sendFinancesSchema}
                >
                  <option defaultValue>Select City</option>
                  {data2?.map((i, idx) => (
                    <option key={idx} value={i.uid}>
                      {i.courseName}
                    </option>
                  ))}
                </CustomInputField>
              </div>
            </div>

            <hr />
            <div className="mb-3"></div>

            <div>
              <div className="mb-5">
                <CustomInputField
                  name={"bankAddress"}
                  type={"select"}
                  placeholder={""}
                  validationType={sendFinancesSchema}
                >
                  <option defaultValue>Select Branch Address</option>
                  {data3?.map((i, idx) => (
                    <option key={idx} value={i.uid}>
                      {i.courseName}
                    </option>
                  ))}
                </CustomInputField>
              </div>
            </div>

            <div>
              <CustomInputField
                name={"ifscCode"}
                type={"text"}
                label={"IFSC Code"}
                placeholder={""}
                validationType={sendFinancesSchema}
              />

              <CustomInputField
                name={"accNo"}
                type={"text"}
                label={"Account Number"}
                placeholder={""}
                validationType={sendFinancesSchema}
              />

              <CustomInputField
                name={"upiId"}
                type={"text"}
                label={"UPI ID"}
                placeholder={"E.g. 8745124538@ybl"}
                validationType={sendFinancesSchema}
              />
            </div>

            <hr></hr>
            <div>
              <p className="text-secondary fw-bold">Goverment Documents</p>

              <CustomInputField
                name={"panNumber"}
                type={"text"}
                label={"PAN Number"}
                placeholder={""}
                validationType={sendFinancesSchema}
              />

              <CustomInputField
                name={"aadharNumber"}
                type={"number"}
                label={"Aadhar Number"}
                placeholder={""}
                validationType={sendFinancesSchema}
              />
            </div>
          </div>

          <div className="d-grid gap-2 w-50">
            <button className="btn btn-main2 " type="submit">
              Submit
            </button>
          </div>
          {success && (
            <h6 className="text-success mt-3">Successfully Done..</h6>
          )}
          {error && <h6 className="text-danger mt-3">Error occures ..</h6>}
        </Form>
      </div>
    </div>
  )
}

export default Finances
