import React, { useEffect } from "react";
import { FcDoNotMix } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcCableRelease } from "react-icons/fc";
import { TiMessages } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { getFeedBack } from "../../../Store/Feedback/action";
import moment from "moment";


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
];
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
];

const commentData = [
  {
    id: 1,
    name: "Raghav Chhanana",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
    comment:
      "Because of less white space, this region is looking cluttered, also you can try improving the visual hierarchy.",
    createdAt: "Yesterday",
  },
  {
    id: 2,
    name: "Pointer Ghosh",
    img: "https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=",
    comment:
      "I didn’t see any change here, it is necessary for your skills that you work on this.",
    createdAt: "Today",
  },
];

function Performance() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getFeedBack())
  },[])

  const { loading, feedback,error } = useSelector((state) => state.Feedback);


  return (
    <div className="my-3">
      <p className="fs-4 ">Your Performance</p>

      <div className="row">
       
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="perform p-4 orangeColor orangeText bgGray">
            <p className="fs-1 pt-2 ps-2 ">{feedback?.totalLearners<9 && 0}{ feedback?.totalLearners || 0}</p>
            <p className="fs-5 text-dark">Learners Mentored</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="perform p-4 purpleColor purpleText bgGray">
            <p className="fs-1 pt-2 ps-2 ">{feedback?.jobs || 0}/{feedback?.totalLearners || 0}</p>
            <p className="fs-5 text-dark">of your learners got a job</p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <h6>What you are good at?</h6>

        <div className="row py-3">
          {feedback?.goodAt?.map((v,idx) => (
            <div className="col-sm-12 col-md-12 col-lg-4 ">
              <div className="d-flex ps-3 pt-2 bgGray ">
                <p className="me-2">{idx  % 2 == 0 ? <FcDoNotMix></FcDoNotMix> : <FcCableRelease></FcCableRelease>}</p>
                <small>{v}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h6>What you need to improve?</h6>

        <div className="row py-3">
          {feedback?.badAt?.map((v,idx) => (
            <div className="col-sm-12 col-md-12 col-lg-4 ">
              <div className="d-flex ps-3 pt-2 bgGray ">
                <p className="me-2">{idx  % 2 == 0 ? <FcDoNotMix></FcDoNotMix> : <FcCableRelease></FcCableRelease>}</p>
                <small>{v}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />

      <div>
     
      <div className="my-2">

        <dir className="my-2">
        <h3>Learner Reviews</h3>
        <small>{feedback?.totalFeedbacks || 0} reviews</small>
        </dir>
     
        {feedback?.feedbacks?.map((i, idx) => (
          <div key={idx}>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-white rounded-circle">
                  <img
                    className="rounded-circle"
                    src={i?.addedBy?.profilePicture?.link}
                    alt="user"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="mx-3 mt-2">
                  <span className="text-secondary fw-bold">{i?.addedBy?.fullName}</span>
                  <p className="fw-bold"> {moment(i?.createdAt).format("LL")}</p>
                </div>
              </div>
             
            </div>
            <br />
            <p className="text-secondary">{i?.feedback}</p>
            <br></br>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Performance;
