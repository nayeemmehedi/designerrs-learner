import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axiosApi from "../../Helper/api"
import { notifyError } from "../../Store/notify/actions"
import { FaCheckCircle, FaArrowRight } from "react-icons/fa"
import CustomInputField from "./common/CustomInputField"

function ContactDetails({
  sendBenefits,
  setAgree,
  setphoneToWhts,
  phoneToWhts,
}) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const [sent, setSent] = useState(false)
  const verifyEmail = () => {
    axiosApi
      .get(`/learners/${user?.uid}/verify`)
      .then(res => {
        console.log(res.data)
        dispatch(notifyError(res.data))
        setSent(true)
      })
      .catch(err => {
        console.log(err)
        dispatch(notifyError(err?.response?.data?.error))
      })
  }
  return (
    <div>
      <h2 className="mt-3 mb-5  fw-light" style={{ color: "#616161" }}>
        Contact Details
      </h2>

      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
              Email Address
            </label>
            <CustomInputField
              type={"text"}
              name={"email"}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={""}
              validationType={sendBenefits}
              disabled={user?.email}
            />
          </div>
        </div>
        {user?.email && (
          <div className="col-sm-12 col-md-12 col-lg-6 d-flex align-items-center">
            <div
              className="bgSecondary cursor text-center p-2"
              style={{ width: "150px" }}
              onClick={() => verifyEmail()}
            >
              {user?.emailVerified ? (
                <span className="text-success">
                  <FaCheckCircle size="20" /> Verified
                </span>
              ) : sent ? (
                <span className="text-danger fw-bold">
                  Send Again <FaArrowRight />
                </span>
              ) : (
                <span className="text-danger fw-bold">
                  Verify <FaArrowRight />
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="my-4">
        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
          Phone Number
        </label>

        {/* <div className={Style.top_signup}> */}
        <div>
          {/* <span>
            <img
              src={IN_Flag}
              style={{ width: "15px", marginRight: 8 }}
              alt=""
            />{" "}
            +91
          </span> */}

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
              {" "}
              <CustomInputField
                type={"number"}
                name={"phoneNumber"}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={""}
                validationType={sendBenefits}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  onChange={e => setAgree(e.target.checked)}
                />
                <label class="form-check-label " for="flexCheckChecked">
                  Show phone number in Portfolio
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4">
        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
          Whatsapp Number
        </label>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5">
            <CustomInputField
              type={"number"}
              name={"whatsappNumber"}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={""}
              validationType={sendBenefits}
              disabled={phoneToWhts}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            {sendBenefits.values.phoneNumber &&
              sendBenefits.values.whatsappNumber && (
                <div class="form-check mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    onChange={e => setphoneToWhts(e.target.checked)}
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Same as Phone Number
                  </label>
                </div>
              )}
          </div>
        </div>
      </div>

      <div className="my-4 width-40">
        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
          Emergency Contact Number
        </label>

        <CustomInputField
          type={"number"}
          name={"emergencyContactNumber"}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={""}
          validationType={sendBenefits}
        />
      </div>
    </div>
  )
}

export default ContactDetails
