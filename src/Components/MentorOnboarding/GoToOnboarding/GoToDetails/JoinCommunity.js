import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowUpRight } from "react-icons/bs";
import { increment } from "../../../../Store/Authentication/Onboarding/Action";
import { useHistory } from "react-router-dom";
import SackBar from "../../../Common/SackBar";

// import { increment } from "../../../Store/Authentication/Onboarding/Action";

// import "../Onboarding.css";

function JoinCommunity() {
   const history =useHistory()


  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(increment())
  }

  return (
    <div className="p-4 ">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 mt-2">
          <h2>Join Detaux Community</h2>
          <small>
           We'll be using community for communication which makes it easy to communicate with your learners and Designerrs Team.
          </small>
        </div>

        <div className="mt-4">
          <video width="350" height="240" controls="true">
            <source
              src="https://www.youtube.com/watch?v=Cptlr__Fwx4&list=RDMMfKopy74weus&index=23"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>{" "}
          <br />
          <small>Watch this video to know how to jin community</small>
        </div>

        <div className="mt-4">
          <button className="btn btn-danger d-flex justify-content-between joinCom" onClick={()=>history.push('/mentor')}>
            <p className="fs-6"> Join Community</p>
            <p className="">
              <BsArrowUpRight></BsArrowUpRight>
            </p>
          </button>
        </div>

       

        <SackBar history={history} title={"Submit and go to payment"}
        handleSubmit={handleSubmit}
        ></SackBar>
      </div>
    </div>
  );
}

export default JoinCommunity;
