import React, { useState } from "react"
import complite from "../../Assets/Images/complite.svg"
import c1 from "../../Assets/Images/c1.svg"
import c2 from "../../Assets/Images/c2.svg"
import c3 from "../../Assets/Images/c3.svg"
import c4 from "../../Assets/Images/c4.svg"
import c5 from "../../Assets/Images/c5.svg"
import cornar from "../../Assets/Images/cornar.svg"
import cornarLogo from "../../Assets/Images/cornarLogo.svg"
import flower from "../../Assets/Images/flower.svg"
import i1 from "../../Assets/Images/i1.svg"
import i2 from "../../Assets/Images/i2.svg"
import i3 from "../../Assets/Images/i3.svg"
import i4 from "../../Assets/Images/i4.svg"
import i5 from "../../Assets/Images/i5.svg"
import i6 from "../../Assets/Images/i6.svg"
import i7 from "../../Assets/Images/i7.svg"
import i8 from "../../Assets/Images/i8.svg"
import share from "../../Assets/Images/share.svg"
import In from "../../Assets/Images/in.svg"
import Ins from "../../Assets/Images/ins.svg"
import Tw from "../../Assets/Images/tw.svg"
import Print from "../../Assets/Images/print.svg"
import Save from "../../Assets/Images/save.svg"
import Copy from "../../Assets/Images/copy.svg"
import Ter from "../../Assets/Images/ter.svg"
import Bad from "../../Assets/Images/bad.svg"
import Okay from "../../Assets/Images/okay.svg"
import Good from "../../Assets/Images/good.svg"
import Great from "../../Assets/Images/Great.svg"
import fed from "../../Assets/Images/fed.svg"
import CartImg from "./CartImg"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { notifyError } from "../../Store/notify/actions"
import axiosApi from "../../Helper/api"

const emoji = [
  {
    name: "Terrible",
    img: Ter,
    rating: 1,
  },
  {
    name: "Bad",
    img: Bad,
    rating: 2,
  },
  {
    name: "Okay",
    img: Okay,
    rating: 3,
  },
  {
    name: "Good",
    img: Good,
    rating: 4,
  },
  {
    name: "Great",
    img: Great,
    rating: 5,
  },
]
const demoData = [
  {
    value: 4.5,
    title: "Empathy",
    des: "Understanding target users.",
    img: i1,
  },

  {
    value: 4.5,
    title: "Visual Design",
    des: "Creating aesthetic interfaces.",
    img: i2,
  },

  {
    value: 3.5,
    title: "Communication",
    des: "Articulating your design decisions and presenting them.",
    img: i3,
  },

  {
    value: 4.0,
    title: "Creativity",
    des: "Thinking out of the box to find solutions.",
    img: i4,
  },

  {
    value: 3.5,
    title: "Conceptualization",
    des: "Translating ideas into right set of elements.",
    img: i5,
  },

  {
    value: 3.0,
    title: "Observation",
    des: "Observing user’s behaviors & finding usability flaws.",
    img: i6,
  },
  {
    value: 3.5,
    title: "Curiosity",
    des: "Striving to find root problems & desire to learn new skills.",
    img: i7,
  },
  {
    value: 3.0,
    title: "Research",
    des: "Analyzing information & synthesizing insights.",
    img: i8,
  },
]

const CourseCompletion = () => {
  const [files, setFiles] = useState(null)
  const handleVideo = e => {
    console.log(e)
    setFiles(e?.[0])
  }

  const history = useHistory()

  const { user } = useSelector(state => state?.user)
  const { courseId } = useParams()

  const [rating, setRating] = useState(null)
  const [feedbackText, setFeedbackText] = useState(null)

  const dispatch = useDispatch()

  const { sessionDetails } = useSelector(state => state?.courseMaterials)
  console.log(sessionDetails)

  const submitFeedBack = () => {
    const data = {
      rating: rating,
      feedback: feedbackText,
      feedbackFor: "course",
    }
    dispatch(notifyError("Submitting feedback..."))
    axiosApi
      .post(`/learner/courses/${courseId}/testimonials`, {
        file: files,
        user: user?.uid,
      })
      .then(res => {
        axiosApi
          .post(`/learner/feedbacks/${sessionDetails?.batch}`, {
            data,
          })
          .then(res => {
            dispatch(notifyError("Submit feedback successfully"))
          })
          .catch(err => {
            dispatch(notifyError(err.response.data.message))
          })
      })
      .catch(err => {
        dispatch(notifyError(err.response.data.message))
      })
  }
  return (
    <div className="col-md-9 py-5">
      <div
        style={{
          width: "100%",
          height: "380px",
          position: "relative",
          paddingTop: "50px",
        }}
      >
        <img src={complite} alt="cart" />
        <div
          style={{
            textAlign: "center",
            color: "#CD2026",
            position: "absolute",
            top: "0",
            right: "220px",
          }}
        >
          <h4>Congratulations on completing your</h4>
          <h4> course at Designerrs</h4>
        </div>
      </div>

      <div className="row">
        <div
          className="col-md-6 p-5"
          style={{ fontSize: "25px", color: "1F1F1F" }}
        >
          <p className="mt-5">
            You <b> spent 3,60,000 seconds </b> cultivating crucial design
            skills
          </p>
        </div>
        <div className="col-md-6 p-5">
          <img src={c1} alt="img1" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 p-5">
          <img src={c2} alt="img1" />
        </div>
        <div className="col-md-6 p-5" style={{ color: "1F1F1F" }}>
          <h6 className="mt-5">Outstanding yield</h6>
          <small>
            You showed great discipline in learning what you love and{" "}
            <b>completed 56 assignments in 03 months.</b>
          </small>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 p-5" style={{ color: "1F1F1F" }}>
          <h6 className="mt-5">You really take your time seriously</h6>
          <small>
            You submitted<b> 50 Assignments</b> on time.
          </small>
        </div>

        <div className="col-md-6 p-5">
          <img src={c3} alt="img1" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 p-5">
          <img src={c4} alt="img1" />
        </div>
        <div className="col-md-6 p-5" style={{ color: "1F1F1F" }}>
          <h6 className="mt-5">Cheetahs would be scared of you</h6>
          <small>Your fastest assignment was: </small>
          <br></br>
          <small>
            <b>Study Navigation Patterns from different apps</b>
          </small>
          <button style={{ border: "none", color: "red", background: "#fff" }}>
            <small>Go to Assignment </small>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 p-5" style={{ color: "1F1F1F" }}>
          <h6 className="mt-5">Profound collaborations with your mentor</h6>
          <small>
            <b> 360 Comments made</b> on your assignments.
          </small>
        </div>

        <div className="col-md-6 p-5">
          <img src={c5} alt="img1" />
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6" style={{ backgroundColor: "#FAFAFA" }}>
              <div style={{ position: "relative" }}>
                <img src={cornar} alt="img1" style={{ width: "250px" }} />
                <div
                  className="d-flex"
                  style={{
                    width: "120px",
                    position: "absolute",
                    top: "20px",
                    left: "40px",
                    zIndex: "999",
                  }}
                >
                  <img src={cornarLogo} alt="img1" />
                  <span style={{ marginLeft: "50px", color: "#00032D" }}>
                    #00032D
                  </span>
                </div>
                <div></div>

                <h5 style={{ fontStyle: "italic", fontWeight: "600" }}>
                  Notch Report
                </h5>
                <small style={{ fontSize: "12px" }}>
                  UX/UI Design from Scratch - 18 October 2021
                </small>

                <div>
                  <p
                    className="display-6 mt-4"
                    style={{
                      fontWeight: "700",
                      fontStyle: "italic",
                      color: "#CD2026",
                    }}
                  >
                    {user?.fullName}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={{ padding: "135px 0px 0px 40px" }}>
                <img src={flower} alt="flwer" style={{ width: "150px" }} />
              </div>
            </div>
          </div>
          <div className="row">
            {demoData.map((item, ind) => {
              return (
                <div className="col-md-3 my-2" style={{ position: "relative" }}>
                  <div
                    style={{
                      backgroundColor: "#FFF",
                      margin: "1px",
                      height: "100px",
                    }}
                  >
                    <div className="p-1">
                      <p style={{ fontWeight: "600", margin: "0px" }}>
                        {item.value}
                      </p>
                      <small style={{ fontSize: "10px", fontWeight: "500" }}>
                        {item.title}
                      </small>
                      <p style={{ fontSize: "8px" }}>{item.des}</p>
                    </div>
                    <img
                      src={item.img}
                      alt="img1"
                      style={{
                        width: "15px",
                        height: "15px",
                        position: "absolute",
                        top: "10px",
                        right: "20px",
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="col-md-6">
          <div>
            <h4
              style={{
                fontWeight: "600",
                fontStyle: "italic",
                color: "#CD2026",
                marginTop: "50px",
              }}
            >
              Congratulations {user?.fullName}!!
            </h4>

            <p className="mt-5">
              Share your certificate among your network to shine through the
              masses and showcase your creative skills.
            </p>

            <p className="mt-5">
              Share your certificate among your network to shine through the
              masses and showcase your creative skills.
            </p>

            <div className="d-flex mt-4">
              <h6>
                Share your story via{"  "}
                <img
                  src={share}
                  alt="share"
                  style={{ width: "13px", height: "15px" }}
                />
              </h6>
              <div className="d-flex justify-content-around mx-3">
                <button
                  className="btn p-0 mx-2"
                  style={{ backgroundColor: "#fff", border: "none" }}
                >
                  <img
                    src={In}
                    alt="in"
                    style={{ width: "25px", height: "25px" }}
                  />
                </button>

                <button
                  className="btn p-0 mx-2"
                  style={{ backgroundColor: "#fff", border: "none" }}
                >
                  <img
                    src={Ins}
                    alt="in"
                    style={{ width: "25px", height: "25px" }}
                  />
                </button>

                <button
                  className="btn p-0 mx-2"
                  style={{ backgroundColor: "#fff", border: "none" }}
                >
                  <img
                    src={Tw}
                    alt="in"
                    style={{ width: "25px", height: "25px" }}
                  />
                </button>
              </div>
            </div>

            <div className="d-flex justify-content-around mt-5 ">
              <button
                className="p-0 d-flex p-2"
                style={{
                  border: "1px solid #CD2026",
                  width: "auto",
                  color: "#Cd2026",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={Print}
                  alt="im1"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "3px",
                  }}
                />{" "}
                <p className="m-0 mx-1">Print</p>
              </button>

              <button
                className="p-0 d-flex p-2"
                style={{
                  border: "1px solid #CD2026",
                  width: "auto",
                  color: "#Cd2026",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={Save}
                  alt="im1"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "3px",
                  }}
                />{" "}
                <p className="m-0 mx-1">Download</p>
              </button>

              <button
                className="p-0 d-flex p-2"
                style={{
                  border: "1px solid #CD2026",
                  width: "auto",
                  color: "#Cd2026",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={Copy}
                  alt="im1"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "3px",
                  }}
                />{" "}
                <p className="m-0 mx-1">Copy Embed Code</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          style={{
            padding: "50px 0px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "500",
            color: "#1F1F1F",
          }}
        >
          <p className="mb-0">How was your experience with </p>
          <p>this course?</p>
        </div>
        <div
          className="d-flex text-center justify-content-around"
          style={{ width: "700px", margin: "auto" }}
        >
          {emoji.map((item, ind) => {
            return (
              <div
                onClick={() => setRating(item?.rating)}
                className="text-center"
                style={{
                  backgroundColor: item?.rating == rating ? "#FFF4EA" : "#fff",
                  padding: "5px 15px",
                  textAlign: "center",
                  cursor: "pointer",
                  border:
                    item?.rating == rating
                      ? "1px solid #F4767B"
                      : "1px solid transparent",
                }}
              >
                <div style={{ width: "40px", height: "40px" }}>
                  <img src={item.img} alt="img"></img>
                </div>
                <p style={{ color: "#7D7D7D" }} className="mb-0 mt-1">
                  <b>{item.name}</b>
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="row">
        <div className="col-8 offset-2">
          <CartImg handleVideo={handleVideo}></CartImg>
        </div>

        <div style={{ width: "600px", margin: "auto" }}>
          <div style={{ width: "150px" }}>
            <img src={fed} alt="img1" />
          </div>
          <div>
            <textarea
              className="form-control"
              placeholder="Write your review here"
              onChange={e => setFeedbackText(e.target.value)}
              style={{
                width: "100%",
                height: "200px",
                padding: "10px",
                resize: "none",
              }}
            ></textarea>
          </div>

          <buton
            className="d-block text-center py-2 my-3 cursor"
            style={{
              backgroundColor: "#CD2026",
              color: "#fff",
              border: "none",
              width: "100%",
            }}
            onClick={() => submitFeedBack()}
          >
            Submit Feedback
          </buton>
        </div>
      </div>

      <div
        className="row my-2"
        style={{ backgroundColor: "#fff", height: "250px" }}
      >
        <div style={{ width: "600px", textAlign: "center", margin: "auto" }}>
          <h5>Job opportunities waiting for you</h5>
          <small>You now have access to our Jobs Portal</small>
          <br></br>
          <div className="mt-3">
            <buton
              className=" text-center p-2 cursor"
              style={{
                backgroundColor: "#CD2026",
                color: "#fff",
                border: "none",
              }}
              onClick={() => history.push("/jobs")}
            >
              See Opportunities
            </buton>
          </div>
        </div>
      </div>

      <div className="row my-2" style={{ height: "250px" }}>
        <div style={{ width: "600px", textAlign: "center", margin: "auto" }}>
          <h5>Upskill yourself with our </h5>
          <h5>Specialization Courses</h5>
          <br></br>
          <div className="mt-3">
            <buton
              className=" text-center p-2 cursor"
              style={{
                backgroundColor: "#CD2026",
                color: "#fff",
                border: "none",
              }}
              onClick={() => history.push("/courses")}
            >
              View all courses
            </buton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCompletion
