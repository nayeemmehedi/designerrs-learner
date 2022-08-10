import React from "react"
import { Input, Label } from "reactstrap"

const Education = ({ education, setEducation, global }) => {
  // console.log(education)
  const handler = (e, index, name, state, setState) => {
    const newData = [...state]
    newData[index][name] = e.target.value
    setState(newData)
  }

  // institute: "",
  // fieldOfStudy: "",
  // domain: "",
  // degree: "",
  // startDate: "",
  // endDate: "",

  const handleInstitute = (e, index) =>
    handler(e, index, "institute", education, setEducation)
  const handleFieldOfStudy = (e, index) =>
    handler(e, index, "fieldOfStudy", education, setEducation)
  const handleDomain = (e, index) =>
    handler(e, index, "domain", education, setEducation)
  const handleDegree = (e, index) =>
    handler(e, index, "degree", education, setEducation)
  const handleStartDate = (e, index) =>
    handler(e, index, "startDate", education, setEducation)
  const handleEndDate = (e, index) =>
    handler(e, index, "endDate", education, setEducation)

  return (
    <div>
      {education.map((i, idx) => (
        <div className="my-5">
          <div className="col-md-6">
            <Label className="fw-bold">
              <small>Institute Name</small>
            </Label>
            <Input
              type="text"
              value={i?.institute}
              onChange={e => handleInstitute(e, idx)}
            />
          </div>
          <div className="row my-3">
            <div className="col-md-6">
              <Label className="fw-bold">
                <small>Field of Study</small>
              </Label>
              <Input
                type="text"
                value={i?.fieldOfStudy}
                onChange={e => handleFieldOfStudy(e, idx)}
              />
            </div>
            <div className="col-md-6">
              <Label className="fw-bold mt-3">
                <small></small>
              </Label>
              <Input
                type="select"
                value={i?.domain}
                onChange={e => handleDomain(e, idx)}
              >
                <option defaultValue>Select Domain/Industry</option>
                {global?.industry?.map((i, idx) => (
                  <option key={idx} value={i._id}>
                    {i}
                  </option>
                ))}
              </Input>
            </div>
          </div>
          <div className="col-md-6">
            <Label className="fw-bold">
              <small>Degree</small>
            </Label>
            <Input
              type="text"
              value={i?.degree}
              onChange={e => handleDegree(e, idx)}
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
                onChange={e => handleStartDate(e, idx)}
              />
            </div>
            <div className="col-md-6">
              <Label className="fw-bold">
                <small>End date</small>
              </Label>
              <Input
                type="date"
                value={i?.endDate}
                onChange={e => handleEndDate(e, idx)}
              />
              <small className="mt-2">Or expected</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Education
