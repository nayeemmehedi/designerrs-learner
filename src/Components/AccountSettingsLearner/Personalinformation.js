import React, { useState } from "react"
import { value01 } from "./common/AccountSettingsJson"
import CustomInputField from "./common/CustomInputField"
import CustomModal from "../PortfolioMain/common/CustomModal"
import MiniCalender from "../PortfolioMain/common/MiniCalender"
import { Input, Label } from "reactstrap"
import { BsFillCalendarFill } from "react-icons/bs"
import moment from "moment"
import { useSelector } from "react-redux"

function Personalinformation({
  sendBenefits,
  account,
  dateOfBirth,
  setdateOfBirth,
}) {
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const { user } = useSelector(state => state.user)

  return (
    <div>
      <CustomModal modal={modal} toggle={toggle} size={"sm"}>
        <MiniCalender
          value={dateOfBirth}
          onChange={setdateOfBirth}
          toggle={toggle}
        />
      </CustomModal>

      <div>
        <h2 className="fw-light" style={{ color: "#616161" }}>
          Personal Information
        </h2>

        {value01?.map((v, idx) => (
          <div className="my-4" key={idx}>
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
              {v?.title}
            </label>

            <CustomInputField
              type={v?.type}
              name={v?.name}
              validationType={sendBenefits}
            />
          </div>
        ))}

        {/* first box  */}
        <div className="mt-5">
          <div className="form-custom mb-4">
            <Label>
              <small className="fw-bold">Date of Birth</small>
            </Label>
            <Input
              name={"startDate"}
              type={"text"}
              placeholder={""}
              value={moment(dateOfBirth).format("LL")}
              onClick={() => setModal(true)}
            />
            <div className="word-icon">
              <BsFillCalendarFill size="15" color="red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personalinformation
