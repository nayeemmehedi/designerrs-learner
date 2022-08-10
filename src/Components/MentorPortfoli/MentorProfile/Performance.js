import React, { useEffect } from "react"
import { useState } from "react"
import { FcDoNotMix } from "react-icons/fc"
import { FcAssistant } from "react-icons/fc"
import { FcCableRelease } from "react-icons/fc"
import { TiMessages } from "react-icons/ti"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axiosApi from "../../../Helper/api"
import { toCapitalize } from "../../../Helper/Custom/toCapitalize"
import { notifyError } from "../../../Store/notify/actions"
import CustomModal from "../../PortfolioMain/common/CustomModal"
// import CustomModal from "../../../../../Common/CustomModal";
// import ModalPost from "./Modal/ModalPost";
// import ModalReview from "./Modal/ModalReview";

const mentorGood = [
  {
    icon: <FcDoNotMix></FcDoNotMix>,
    name: "Hands-on Guidance",
  },
  {
    icon: <FcAssistant></FcAssistant>,
    name: "Engoing with Participants",
  },
  {
    icon: <FcCableRelease></FcCableRelease>,
    name: "Story telling",
  },
]
const mentorImprove = [
  {
    icon: <FcDoNotMix></FcDoNotMix>,
    name: "Peace of Session",
  },
  {
    icon: <FcAssistant></FcAssistant>,
    name: "Good Examples",
  },
  {
    icon: <FcCableRelease></FcCableRelease>,
    name: "Energy during session",
  },
]



export default function Performance() {
  const dispatch = useDispatch()
  const [feedbackData, setFeedBackData] = useState({ feedbacks: [] })
  const callFeedback = () => {
    axiosApi
      .get(`/mentor/feedbacks`)
      .then(res => {
        setFeedBackData(res.data)
        console.log("feedback" , res)
      })
      .catch(err => dispatch(notifyError("Invalid Operation")))
  }
  useEffect(() => {
    callFeedback()
  }, [])

  const [toggle1, setToggle1] = useState(true)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  const { mentorData } = useSelector(state => state.OnBoardingMentor)
  console.log("mentorData", mentorData)
  return (
    <div className="">
      {/* <CustomModal modal={modal} toggle={toggle} >
         <ModalReview toggle={toggle} mentorReview={mentorReview}></ModalReview>
      </CustomModal> */}

      <p className="fs-6 iconColor1">Performance</p>

      <div className="row w60">
        <div className="col-md-6">
          <div className="perform px-4 pt-3  orangeColor orangeText bgGray">
            <p className="fs-1 pt-4 ps-2 ">
              {mentorData?.performance?.learnersMentored}
            </p>
            <h6 className="fw-bolder text-dark ps-2 pt-2">Learner Mentored</h6>
          </div>
        </div>
        <div className="col-md-6 mt-4 mt-sm-0">
          <div className="perform px-4 pt-3 purpleColor purpleText bgGray">
            <p className="fs-1 pt-4 ps-2 ">
              {mentorData?.performance?.hired}/
              {mentorData?.performance?.learnersMentored}
            </p>
            <h6 className="fw-bolder text-dark ps-2 pt-2">
              of Learner got a job
            </h6>
          </div>
        </div>
      </div>

      <div className="my-5">
        <p className="fs-6 text-secondary">What the mentor good at?</p>

        <div className="d-flex ">
          {mentorGood?.map(v => (
            <div className=" mt-2 mt-sm-0 mx-3">
              <div className="fit d-flex bgGray p-2 ">
                <small className="">{v?.icon}</small>
                <small className="ps-2">{v?.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="fs-6 text-secondary">What the mentor needs to improve?</p>

        {/* <div className="row ">
          {mentorImprove?.map((v) => (
            <div className="col-sm-12 col-md-12  col-lg-3  mt-2 mt-sm-0 ">
              <div className="fit d-flex p-2 bgGray ">
                <small>{v?.icon}</small>
                <small className="ps-2">{v?.name}</small>
              </div>
            </div>
          ))}
        </div> */}

        <div className="d-flex">
          {mentorImprove?.map(v => (
            <div className=" mt-2 mt-sm-0  mx-3 ">
              <div className="fit d-flex p-2 bgGray ">
                <small>{v?.icon}</small>
                <small className="ps-2">{v?.name}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />

      {/* review start */}

      <div className="pb-3 pt-5 " onClick={toggle}>
        <div className="d-flex justify-content-between">
          <p className="fs-6 text-secondary">   {feedbackData?.totalFeedbacks} Reviews</p>

          {/* <button className="btn btn-danger">
            <TiMessages></TiMessages> Post Feedback
          </button> */}
        </div>
      </div>

      <div className="mt-3 mb-5">
        {toggle1 ? (
          <div>
            {feedbackData?.feedbacks?.slice(0, 2)?.map(v => (
              <div className="py-3">
                <div className="d-flex ">
                  <div className="avatar">
                    <img
                      className="iconSize avatar"
                      src={v?.addedBy?.profilePicture?.link}
                      alt=""
                    />
                  </div>

                  <div className="ps-3 mt-2">
                    <small className="fw-bold">{v?.addedBy?.fullName}</small>
                    <p>{toCapitalize(v?.addedBy?.role)}</p>
                  </div>
                </div>
                <p>{v?.feedback}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {feedbackData?.feedbacks?.map(v => (
              <div className="py-3">
                <div className="d-flex ">
                  <div className="avatar">
                    <img
                      className="iconSize avatar"
                      src={v?.addedBy?.profilePicture?.link}
                      alt=""
                    />
                  </div>

                  <div className="ps-3 mt-2">
                    <small className="fw-bold">{v?.addedBy?.fullName}</small>
                    <p>{toCapitalize(v?.addedBy?.role)}</p>
                  </div>
                </div>
                <p>{v?.feedback}</p>
              </div>
            ))}
          </div>
        )}

        <div className="p-2">
          <button
            className="btn btn-light border border-dark" style={{borderRadius: 0}}
            onClick={() => setToggle1(!toggle1)}
          >
            See all Reviews
          </button>
        </div>
      </div>

      <div></div>
    </div>
  )
}
