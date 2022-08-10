import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BsArrowUpRight } from "react-icons/bs"

import { increment } from "../../../Store/Authentication/Onboarding/Action"

import "../Onboarding.css"
import { useHistory } from "react-router-dom"
import SackBar from "../../../Components/Common/SackBar"
import axiosApi from "../../../Helper/api"

function JoinCommunity() {
  const dispatch = useDispatch()

  const [discord, setDiscord] = useState(null)
  console.log(discord)
  useEffect(() => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=communityLinks`)
      .then(res => {
        console.log(res.data)
        setDiscord(
          res?.data?.communityLinks?.find(
            i => i.communityName == "Discord" || i.communityName == "discord"
          ).communityUrl
        )
      })
      .catch(err => {})
  }, [])

  const history = useHistory()
  const handleSubmit = () => {
    dispatch(increment())
  }

  return (
    <div className="p-4">
      <div className="row">
        <div className="col-6 mt-2">
          <h2>Join Detaux Community</h2>
          <small>
            We’ll be using community for communication which makes it easy to
            communicate with your peers and mentors.
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
          <small>Watch this video to know how to join community</small>
        </div>

        <div className="mt-4">
          <a href={discord} target="_blank">
            <button className="btn btn-danger d-flex justify-content-between joinCom">
              <p className="fs-6"> Join Community</p>
              <p className="">
                <BsArrowUpRight></BsArrowUpRight>
              </p>
            </button>
          </a>
        </div>
        <SackBar
          history={history}
          title={"Next"}
          onSubmit={handleSubmit}
        ></SackBar>
      </div>
    </div>
  )
}

export default JoinCommunity
