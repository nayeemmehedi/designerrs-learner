import React, { useState } from "react"
import { Input, Label } from "reactstrap"
import { toCapitalize } from "../../../../Helper/Custom/toCapitalize"
import CustomModal from "../../common/CustomModal"
import { GrFormClose } from "react-icons/gr"
import { AiFillCloseCircle, AiOutlineEye, AiFillDelete } from "react-icons/ai"

const WorkExperience = ({ workExp, setWorkExp, global, i, data }) => {
  const handler = (e, index, name, state, setState) => {
    const newData = [...state]
    newData[index][name] = e
    setState(newData)
  }
  const handlerArr = (e, index, name, state, setState) => {
    const newData = [...state]
    newData[index][name] = [e, ...newData[index][name]]
    setState(newData)
  }
  const handlerArrRemv = (index, id, name, state, setState) => {
    const newData = [...state]
    newData[index][name] = newData[index][name].filter((i, td) => td !== id)
    setState(newData)
  }

  const handledesignation = (e, index) =>
    handler(e, index, "designation", workExp, setWorkExp)
  const handlecompanyName = (e, index) =>
    handler(e, index, "companyName", workExp, setWorkExp)
  const handledomain = (e, index) =>
    handler(e, index, "domain", workExp, setWorkExp)
  const handleannualCTC = (e, index) =>
    handler(e, index, "annualCTC", workExp, setWorkExp)
  const handlestartDate = (e, index) =>
    handler(e, index, "startDate", workExp, setWorkExp)
  const handleEndDate = (e, index) =>
    handler(e, index, "endDate", workExp, setWorkExp)
  const handledescription = (e, index) =>
    handler(e, index, "description", workExp, setWorkExp)
  const handleexperience = (e, index) =>
    handler(e, index, "experience", workExp, setWorkExp)
  const handlecurrentlyWorking = (e, index) =>
    handler(e, index, "currentlyWorking", workExp, setWorkExp)
  const handleskills = (e, index) =>
    handlerArr(e, index, "skills", workExp, setWorkExp)
  const handletools = (e, index) =>
    handlerArr(e, index, "tools", workExp, setWorkExp)

  const rmSkills = (index, idx) =>
    handlerArrRemv(index, idx, "skills", workExp, setWorkExp)
  const rmvTools = (index, idx) =>
    handlerArrRemv(index, idx, "tools", workExp, setWorkExp)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [type, setType] = useState(null)

  const [work, setWork] = useState(false)
  const handleWork = value => {
    setWork(value)
  }

  const [working, setWorking] = useState(false)
  const handleChek = e => {
    const { checked } = e.target
    if (checked) {
      setWorking(true)
    } else {
      setWorking(false)
    }
  }

  return (
    <div className="my-5">
      <div onClick={() => setWorkExp(workExp.filter((t, idx) => idx != i))}>
        <AiFillDelete className="bgSecondary txtColor p-2 cursor" size="40" />
      </div>
      <CustomModal modal={modal} toggle={toggle} size={"md"}>
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">{toCapitalize(type)}</h5>
            <GrFormClose onClick={toggle} className="cursor" size={30} />
          </div>
          <hr></hr>
          <div>
            <Label>Select {toCapitalize(type)}</Label>
            <Input
              type="select"
              onChange={e =>
                type == "skills"
                  ? handleskills(e.target.value, i)
                  : handletools(e.target.value, i)
              }
            >
              <option defaultValue>Click Here</option>
              {(type == "skills"
                ? global.learneSkills
                : global.learnerTools
              )?.map((i, idx) => (
                <option key={idx} value={i}>
                  {i}
                </option>
              ))}
            </Input>
          </div>
          <div className="my-3">
            {(type == "skills" ? data?.skills : data?.tools)?.map((t, idx) => (
              <p className="border p-1 tag m-1" style={{ float: "left" }}>
                {t}
                <span className="cursor mx-1">
                  <AiFillCloseCircle
                    onClick={() =>
                      type == "skills" ? rmSkills(i, idx) : rmvTools(i, idx)
                    }
                  />
                </span>
              </p>
            ))}
          </div>
          <button className="form-control btn btn-main2 my-3" onClick={toggle}>
            Add
          </button>
        </div>
      </CustomModal>
      <small className="txtSecondary">Select Working Status</small>
      <div className="d-flex">
        <div
          style={{ width: "130px" }}
          className={
            work
              ? `p-2 text-center cursor bgRed text-white`
              : `p-2 text-center cursor border border-secondary`
          }
          onClick={() => {
            handleWork(true)
            handlecurrentlyWorking(true, i)
          }}
        >
          Working
        </div>
        <div
          style={{ width: "130px" }}
          className={
            !work
              ? `p-2 text-center cursor bgRed text-white`
              : `p-2 text-center cursor border border-secondary`
          }
          onClick={() => {
            handleWork(false)
            handlecurrentlyWorking(false, i)
          }}
        >
          Not Working
        </div>
      </div>
      <div className="col-md-6 my-4">
        <Label className="fw-bold">
          <small>Design Experience (In years)</small>
        </Label>
        <Input
          type="number"
          placeholder="Ex: 2"
          onChange={e => handleexperience(e.target.value, i)}
        />
      </div>
      <div className="row my-3">
        <div className="col-md-6">
          <Label className="fw-bold">
            <small>Current Company Name</small>
          </Label>
          <Input
            type="text"
            onChange={e => handlecompanyName(e.target.value, i)}
          />
        </div>
        <div className="col-md-6">
          <Label className="fw-bold mt-3">
            <small></small>
          </Label>
          <Input type="select" onChange={e => handledomain(e.target.value, i)}>
            <option defaultValue>Select Domain/Industry</option>
            {global?.industry?.map((i, idx) => (
              <option key={idx} value={i._id}>
                {i}
              </option>
            ))}
          </Input>
        </div>
      </div>
      <div className="col-md-6 my-4">
        <Label className="fw-bold">
          <small>Designation</small>
        </Label>
        <Input
          type="text"
          onChange={e => handledesignation(e.target.value, i)}
        />
      </div>
      <div className="my-3 col-md-6">
        <Label className="fw-bold">
          <small>Skills you acquired</small>
        </Label>
        <div className="form-control bgSecondary">
          {data?.skills?.map((td, idx) => (
            <p
              className="border p-1 m-1 bgRed text-white"
              style={{ float: "left" }}
            >
              {td}
              <span className="cursor m-1">
                <AiFillCloseCircle onClick={() => rmSkills(i, idx)} />
              </span>
            </p>
          ))}
          <button
            className="btn btn-main mt-1"
            onClick={() => {
              toggle()
              setType("skills")
            }}
          >
            + Add
          </button>
        </div>
      </div>
      <div className="my-3 col-md-6">
        <Label className="fw-bold">
          <small>Tools you learned</small>
        </Label>
        <div className="form-control bgSecondary">
          {data?.tools?.map((td, idx) => (
            <p
              className="border p-1 m-1 bgRed text-white"
              style={{ float: "left" }}
            >
              {td}
              <span className="cursor m-1">
                <AiFillCloseCircle onClick={() => rmvTools(i, idx)} />
              </span>
            </p>
          ))}
          <button
            className="btn btn-main mt-1"
            onClick={() => {
              toggle()
              setType("tools")
            }}
          >
            + Add
          </button>
        </div>
      </div>
      <div className="py-2"></div>
      <hr></hr>
      <h4 className="txtColor">Who can view these Sections</h4>
      <small className="txtSecondary">
        <AiOutlineEye size="25" /> <span className="ms-2">You, Admin</span>
      </small>
      <div className="col-md-6 my-4">
        <Label className="fw-bold">
          <small>Annual CTC (In Lakhs)</small>
        </Label>
        <Input
          type="number"
          placeholder="Ex: 2"
          onChange={e => handleannualCTC(e.target.value, i)}
        />
      </div>
      <div className="row my-3">
        <div className="col-md-6">
          <Label className="fw-bold">
            <small>Start date</small>
          </Label>
          <Input
            type="date"
            value={i?.startDate}
            onChange={e => handlestartDate(e.target.value, i)}
          />
        </div>
        <div className="col-md-6">
          <Label className="fw-bold">
            <small>End date</small>
          </Label>
          <Input
            type="date"
            value={i?.endDate}
            disabled={working}
            onChange={e => handleEndDate(e.target.value, i)}
          />
          <small className="mt-2">
            <div className="mt-2">
              <Input type="checkbox" onChange={e => handleChek(e)} /> I’m
              currently working here
            </div>
          </small>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
