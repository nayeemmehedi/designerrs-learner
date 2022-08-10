import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { MdMobileFriendly } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar } from "react-icons/ai"
import { GiTwoCoins } from "react-icons/gi"
import CustomModal from "../../Components/Common/CustomModal"
import { getPortfolio } from "../../Store/Portfolio/Action"
import CreatePortfolio from "../../Components/PortfolioMain/CreatePortfolio/CreatePortfolio"
import MiddleSidePortfolio from "../../Components/PortfolioMain/MiddleSidePortfolio/MiddleSidePortfolio"
import { useHistory } from "react-router-dom"
import axiosApi from "../../Helper/api"
import { Input } from "reactstrap"
import Toolip2 from "../../Components/Common/Toolip2"

const JobMainDetails = ({ details, key }) => {
  console.log(details)
  const icons = [
    {
      icon: <MdMobileFriendly size="25" />,
      name: "Job Type",
      data: details?.jobType,
    },
    {
      icon: <GoLocation size="25" />,
      name: "Location",
      data: (
        <Toolip2
          toolip={details?.locations?.map(i => i.locationName).join(", ")}
          data={<>{details?.locations?.[0]?.locationName}</>}
        />
      ),
    },
    {
      icon: <AiOutlineCalendar size="25" />,
      name: "Work Experience",
      data: details?.workExperience,
    },
    {
      icon: <GiTwoCoins size="25" />,
      name: "Salary Range",
      data: `₹ ${details?.salaryRange?.from / 100000} - ₹ ${
        details?.salaryRange?.to / 100000
      }`,
    },
  ]

  //Apply
  const history = useHistory()
  const dispatch = useDispatch()
  //Portfolio
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  useEffect(() => {
    dispatch(getPortfolio())
  }, [])

  const { loading, portfolioValue, error } = useSelector(
    state => state.PortfolioReducers
  )

  const [id, setId] = useState(null)
  const apply = () => {
    axiosApi
      .post(`/learner/jobs/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {})
  }
  return (
    <div style={{ backgroundColor: "#F5F5F5" }} className="p-4">
      <CustomModal modal={modal} toggle={toggle} size={"lg"}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold">Review Your Portfolio</h5>{" "}
            <h4 onClick={toggle} className="cursor">
              X
            </h4>
          </div>
          <hr></hr>
          {false ? (
            <div>
              <CreatePortfolio></CreatePortfolio>
            </div>
          ) : (
            portfolioValue && (
              <div>
                <MiddleSidePortfolio></MiddleSidePortfolio>
              </div>
            )
          )}
        </div>
        <div>
          <div
            className="form-control shadow-lg border-0"
            style={{
              position: "fixed",
              bottom: 0,
              width: "59%",
            }}
          >
            <div className="m-2 d-flex align-items-center">
              <Input type="checkbox" />{" "}
              <span className="ms-3 mt-1">Dont ask again</span>
            </div>
            <button
              className="btn btn-main2 right form-control"
              type="submit"
              onClick={() => apply()}
            >
              Apply
            </button>
          </div>
        </div>
      </CustomModal>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src={details?.company?.logo?.link}
            alt="company"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <span className="ms-3">
            {details?.company?.name}
            <p>{details?.jobType}</p>
          </span>
        </div>
        <button
          className="btn btn-main2 fw-bold"
          onClick={() => {
            toggle()
            setId(key)
          }}
        >
          Apply
        </button>
      </div>
      <hr></hr>
      <div className="row">
        {icons.map(i => (
          <div className="col-md-3">
            <div className="d-flex">
              <span
                className="bgGray rounded-circle d-flex justify-content-center align-items-center txtColor"
                style={{ height: "50px", width: "50px" }}
              >
                {i.icon}
              </span>
              <div className="mx-2">
                <small>{i?.name}</small>
                <br></br>
                <small className="fw-bold">{i?.data}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr></hr>

      <div className="row">
        <div className="col-md-6">
          <div className="p-3">
            <p className="fw-bold">About the role</p>
            <p
              dangerouslySetInnerHTML={{ __html: details?.jobDescription }}
            ></p>
            {/* <p>{details?.jobDescription}</p> */}
            <p className="fw-bold">Responsibilites</p>
            {/* <p>{details?.jobDescription}</p> */}
          </div>
        </div>
        <div className="col-md-6" style={{ backgroundColor: "#E5E5E5" }}>
          <div className="p-3">
            <p className="fw-bold">Skills Required</p>
            <p
              dangerouslySetInnerHTML={{ __html: details?.skillsRequired }}
            ></p>
            {/* <p>{details?.skillsRequired}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobMainDetails
