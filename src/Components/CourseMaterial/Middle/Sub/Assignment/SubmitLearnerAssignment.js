import React, { useEffect, useState } from "react"
import { AiOutlineCheckCircle, AiOutlineArrowRight } from "react-icons/ai"
import Paginate from "../../../../Common/Paginate"
import Info from "../../../../../Assets/Images/info.svg"
import AssignMentImg from "./assignmentPng"
import FigmaImg from "./figmaImg"
import { useSelector, useDispatch } from "react-redux"
import {
  postAssignment,
  updateAssignment,
} from "../../../../../Store/courseMaterial/actions"
import { useParams } from "react-router-dom"
import Sackbar from "../../../../Common/SackBar"
import { useHistory } from "react-router-dom"

const Assignment = ({
  assignmentIdx,
  submittedAssigments,
  assignmentArray,
}) => {
  const dispatch = useDispatch()
  const { courseId } = useParams()
  const history = useHistory()
  //Pagination

  const sessionData = useSelector(
    state => state.courseMaterials?.sessionDetails
  )
  console.log("sessionArray", sessionData)

  const [assignmentImg, setAssignMentImg] = useState([])
  const [figmaImg, setFigmaImg] = useState([])
  const [activeAssignMent, setActiveAssignment] = useState(true)
  const [activeFigma, setActiveFigma] = useState(true)
  const [viewImg, setViewImg] = useState(false)
  const [viewFigmaImg, setViewFigmaImg] = useState(false)
  const [figmaLink, setFigmaLink] = useState("")

  const handleAssignmentImg = e => {
    setAssignMentImg(e[0])
  }

  const handleFigmaImg = e => {
    setFigmaImg(e[0])
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("canvas", assignmentImg)
    formData.append("figmaActivityFile", figmaImg)
    formData.append("prototypeLink", figmaLink)

    for (const value of formData.values()) {
      console.log(value)
    }

    if (submittedAssigments?.status) {
      dispatch(
        updateAssignment(
          courseId,
          sessionData?._id,
          assignmentArray?.[assignmentIdx]?._id,
          formData
        )
      )
    } else {
      dispatch(
        postAssignment(
          courseId,
          sessionData?._id,
          assignmentArray?.[assignmentIdx]?._id,
          formData
        )
      )
    }

    setFigmaLink("")
    setFigmaImg([])
    setAssignMentImg([])
    // setActiveAssignment(true)
    // setActiveFigma(true)
  }

  return (
    <>
      <div className="my-5">
        <div className="row">
          <div className="col-12 mt-2">
            <div className="d-flex">
              <div>
                <img
                  src={Info}
                  alt="info"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <p className="mb-0">Status</p>

                <h6 className="mb-0">Not Submitted</h6>
              </div>
            </div>
          </div>

          {activeAssignMent && (
            <div className="p-3 collapsSection">
              <div className="accordion" id="accordionExample">
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      style={{ fontWeight: "bold" }}
                    >
                      <span className="collapsBtn">1</span>
                      Upload Assignment Image
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                    style={{
                      width: "100%",
                      height: "50%",
                      backgroundColor: "#EFEFEF",
                    }}
                  >
                    <div className={"accordion-body font_13"}>
                      <AssignMentImg
                        handleAssignmentImg={handleAssignmentImg}
                      ></AssignMentImg>

                      <button
                        className="py-2 px-4"
                        style={{
                          color: "#fff",
                          backgroundColor: "#CD2026",
                          border: "none",
                        }}
                        onClick={() => setActiveAssignment(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!activeAssignMent && (
            <div
              className="col-md-11 mx-auto mt-3 px-4 py-3"
              style={{ backgroundColor: "#F5F5F5", width: "95%" }}
            >
              <div className="figmaImg d-flex justify-content-between">
                <div className="d-flex">
                  <div style={{ marginRight: "10px", fontWeight: "bold" }}>
                    1
                  </div>
                  <h6>Upload Assignment Image</h6>
                  <div style={{ color: "green", margin: "0 20px" }}>
                    <AiOutlineCheckCircle />
                  </div>
                </div>

                <div
                  style={{ color: "#E61E4D", cursor: "pointer" }}
                  className="d-flex"
                >
                  <p className="mb-0" onClick={() => setActiveAssignment(true)}>
                    Replace Image
                  </p>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
              <div className="my-3">
                <p className="mb-0">Image name</p>

                <b className="mb-0">{assignmentImg?.name}</b>
              </div>

              <div style={{ color: "#E61E4D" }} className="d-flex">
                <p className="mb-0" onClick={() => setViewImg(!viewImg)}>
                  {viewImg ? "Close Imgae" : "View Imgame"}
                </p>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </div>
              <div></div>
            </div>
          )}

          {viewImg && (
            <div className="text-center mt-1">
              <img
                src={assignmentImg && URL.createObjectURL(assignmentImg)}
                alt={assignmentImg?.name}
                style={{ width: "400px", height: "300px" }}
              />
            </div>
          )}

          {activeFigma && (
            <div className="p-3 ">
              <div className="accordion" id="accordionExample">
                <div className="accordion-items">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      style={{ fontWeight: "bold" }}
                    >
                      <span className="collapsBtn">2</span>
                      Upload Figma File of Activity
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                    style={{ backgroundColor: "#EFEFEF" }}
                  >
                    <div className={"accordion-body font_13"}>
                      <FigmaImg handleFigmaImg={handleFigmaImg}></FigmaImg>

                      <button
                        className="py-2 px-4"
                        style={{
                          color: "#fff",
                          backgroundColor: "#CD2026",
                          border: "none",
                        }}
                        onClick={() => setActiveFigma(false)}
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!activeFigma && (
            <div
              className="col-md-11 mx-auto mt-3 px-4 py-3"
              style={{ backgroundColor: "#F5F5F5", width: "95%" }}
            >
              <div className="figmaImg d-flex justify-content-between">
                <div className="d-flex">
                  <div style={{ marginRight: "10px", fontWeight: "bold" }}>
                    2
                  </div>
                  <h6>Upload Figma File of Activity</h6>
                  <div style={{ color: "green", margin: "0 20px" }}>
                    <AiOutlineCheckCircle />
                  </div>
                </div>

                <div
                  style={{ color: "#E61E4D", cursor: "pointer" }}
                  className="d-flex"
                >
                  <p className="mb-0" onClick={() => setActiveFigma(true)}>
                    {" "}
                    Replace Image
                  </p>
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </div>
              </div>
              <div className="my-3">
                <p className="mb-0">File name</p>

                <b className="mb-0">{figmaImg?.name}</b>
              </div>
            </div>
          )}

          {viewFigmaImg && (
            <div className="text-center mt-1">
              <img
                src={figmaImg && URL.createObjectURL(figmaImg)}
                alt={figmaImg?.name}
                style={{ width: "400px", height: "300px" }}
              />
            </div>
          )}

          <div className="p-3">
            <div className="accordion" id="accordionExample">
              <div className="accordion-items">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-buttons collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{ fontWeight: "bold" }}
                  >
                    <span className="collapsBtn">3</span> Paste the Prototype
                    Link
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                  style={{ backgroundColor: "#EFEFEF" }}
                >
                  <div className={"accordion-body font_13"}>
                    <div className="my-3">
                      <p className="mb-1">Figma Prototype Link</p>

                      <input
                        type={`text`}
                        className="form-control"
                        value={figmaLink}
                        placeholder="www.figma.com/proto/..."
                        onChange={e => setFigmaLink(e.target.value)}
                      />
                    </div>

                    <Sackbar
                      title={"Submit"}
                      history={history}
                      onSubmit={handleSubmit}
                    ></Sackbar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Assignment
