import React, { useEffect, useState } from "react"
import { GrStatusGood } from "react-icons/gr"
import { BiCoinStack } from "react-icons/bi"
import { IoLocationOutline } from "react-icons/io5"
import { MdSubtitles } from "react-icons/md"
import airbus from "../../../Assets/Images/airbus.svg"
import people from "../../../Assets/Images/people.svg"
import hand from "../../../Assets/Images/hand.svg"
import click from "../../../Assets/Images/click.svg"
import twoProduct from "../../../Assets/Images/twoProduct.svg"

import moment from "moment"
import { useSelector } from "react-redux"
import axiosApi from "../../../Helper/api"

// .//airbus.svg"

function WorkPreferences() {
  const [applied, setapplied] = useState({})
  const [shortlisted, setshortlisted] = useState({})
  const [hired, sethired] = useState({})

  console.log(applied, shortlisted, hired)
  const getAllJobs = async type => {
    axiosApi
      .get(`/learner/jobs?jobs=${type}`)
      .then(res => {
        switch (type) {
          case "applied":
            return setapplied(res.data)
          case "shortlisted":
            return setshortlisted(res.data)
          case "hired":
            return sethired(res.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    getAllJobs("applied")
    getAllJobs("shortlisted")
    getAllJobs("hired")
  }, [])

  const { portfolioValue } = useSelector(state => state.PortfolioReducers)
  console.log(portfolioValue)
  return (
    <div className="my-2">
      <>
        <p className="fs-6 my-4">Work Preferences</p>

        <div className="row">
          <div className="col-sm-10 col-md-12 col-lg-4">
            <div className="color2 p-2">
              <img
                src={click}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />{" "}
              <span className="font13 ms-2">
                Learner is{" "}
                {portfolioValue?.workPreferences?.openToOpportunities
                  ? ""
                  : "not "}{" "}
                open to opportunities
              </span>
            </div>
          </div>
        </div>

        <div className=" my-4">
          <div className="row ">
            <div className="col-sm-12 col-md-12 col-lg-2">
              <div className="d-flex align-items-center">
                {/* <BiCoinStack color="red" size="35"></BiCoinStack> */}
                <img
                  src={twoProduct}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
                <div className="ms-3">
                  <span className="font12 ">Expected CTC</span> <br />
                  <p className="fw-bold">
                    {" "}
                    {portfolioValue?.workPreferences?.expectedCTC} Lakhs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2">
              <div className="d-flex align-items-center">
                <img
                  src={twoProduct}
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />

                <div className="ms-3">
                  <span className="font12 ">Previous CTC</span> <br />
                  <p className="fw-bold"> -- </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="d-flex align-items-center">
                <IoLocationOutline
                  size="20"
                  color="#CD2026"
                ></IoLocationOutline>

                <div className="ms-3">
                  <span className="font12 ">1st Preference Location </span>{" "}
                  <br />
                  <p className="fw-bold">
                    {
                      portfolioValue?.workPreferences?.primaryLocation
                        ?.locationName
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
              <div className="d-flex align-items-center">
                <IoLocationOutline
                  size="20"
                  color="#CD2026"
                ></IoLocationOutline>
                <div className="ms-3">
                  <span className="font12 ">2nd Preference Location </span>{" "}
                  <br />
                  <p className="fw-bold">
                    {
                      portfolioValue?.workPreferences?.secondaryLocation
                        ?.locationName
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>

      <div className="pb-5">
        <p className="fs-6 my-4">Placement Overview</p>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 ">
            <div className="d-flex align-items-center box1 p-2 ">
              <div className="ms-2">
                <img src={airbus} style={{ height: "30px" }} alt="" />
              </div>
              <div>
                <span className="ms-3 fs-6">
                  {" "}
                  {applied?.totalAppliedJobs || "--"}
                </span>{" "}
                <br />
                <span className="ms-3 "> Applied Jobs</span>
              </div>
            </div>

            {applied?.appliedJobs?.map((i, idx) => jobUi(i, idx))}
          </div>

          <div className="col-sm-12 col-md-12 col-lg-4 ">
            <div className="d-flex align-items-center box2 p-2  ">
              <div className="ms-2">
                <img src={people} style={{ height: "30px" }} alt="" />
              </div>
              <div>
                <span className="ms-3 fs-6">
                  {" "}
                  {shortlisted?.totalAppliedJobs || "--"}
                </span>{" "}
                <br />
                <span className="ms-3 "> Shortlisted</span>
              </div>
            </div>

            {shortlisted?.appliedJobs?.map((i, idx) => jobUi(i, idx))}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex align-items-center box3 p-2 ">
              <div className="ms-2">
                <img src={hand} style={{ height: "30px" }} alt="" />
              </div>
              <div>
                <span className="ms-3 fs-6">
                  {" "}
                  {hired?.totalAppliedJobs || "--"}{" "}
                </span>{" "}
                <br />
                <span className="ms-3 "> Hired</span>
              </div>
            </div>

            {hired?.appliedJobs?.map((i, idx) => jobUi(i, idx))}
          </div>
        </div>
      </div>

      <hr />
    </div>
  )
}

const jobUi = (i, idx) => {
  return (
    <div className="bgColor11 px-4 py-3" key={idx}>
      <div className="bgColor22 px-3 py-2 rounded">
        <b className=""> {i?.jobPost?.company?.name}</b>
        <div className="d-flex p-2 flex-sm-row flex-column">
          <div className="color2 px-1 py-1 ms-1 ">
            <span className="font13">{i?.jobPost?.jobType}</span>
          </div>
          <div className="color2 px-1 py-1 ms-1 ">
            <span className="font13">{i?.jobPost?.role}</span>
          </div>
          <div className="color2 px-1 py-1 ms-1 mt-sm-0 mt-1">
            <span className="font13">
              <Toolip2
                toolip={i?.jobPost?.locations
                  ?.map(i => i.locationName)
                  .join(", ")}
                data={<>{i?.jobPost?.locations?.[0]?.locationName}</>}
              />
            </span>
          </div>
        </div>
        <p className="px-2 text-secondary">
          Applied {moment(i?.createdAt).format("LL")}
        </p>
      </div>
    </div>
  )
}

export default WorkPreferences
