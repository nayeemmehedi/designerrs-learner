import React, { useEffect, useState } from "react"
import { BsSignpostSplit } from "react-icons/bs"

import { GiSettingsKnobs } from "react-icons/gi"

import { useDispatch, useSelector } from "react-redux"
import { Input } from "reactstrap"
import { getPortfolio } from "../../Store/Portfolio/Action"
import CustomModal from "../../Components/Common/CustomModal"
import SweetAlert from "react-bootstrap-sweetalert"
import moment from "moment"
import axiosApi from "../../Helper/api"
import CreatePortfolio from "../PortfolioMain/CreatePortfolio/CreatePortfolio"
import MiddleSidePortfolio from "../PortfolioMain/MiddleSidePortfolio/MiddleSidePortfolio"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"

const Oppurtunities = ({ opportunities, view }) => {
  const { key } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  //Portfolio
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const { user } = useSelector(state => state.user)
  useEffect(() => {
    dispatch(getPortfolio(user?.uid))
  }, [])

  console.log("opportunities", opportunities)

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
    <div>
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

      <div style={{ backgroundColor: "#F5EEFF", color: "#570DB4" }}>
        <div className="p-3">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="d-flex align-items-center"
              style={{ color: "#570DB4" }}
            >
              <BsSignpostSplit size="40" />
              <div className="mx-3">
                <h5>
                  {opportunities?.totalOpportunities == 0
                    ? "--"
                    : opportunities?.totalOpportunities}
                </h5>
                <span>Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#FAFAFA" }} className="p-2">
        {!view && (
          <span className="txtColor cursor py-2">
            <GiSettingsKnobs />{" "}
            <span
              className="ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasLeft"
              onClick={() =>
                dispatch({ type: "FILTER_TYPE", payload: "opportunities" })
              }
            >
              Filter
            </span>
          </span>
        )}

        <div className="d-flex justify-content-between align-items-center mt-3">
          <small>Open</small>
          <small>{opportunities?.openJobs?.length}</small>
        </div>
        <hr></hr>

        {opportunities?.openJobs?.map((i, idx) => (
          <div
            className="p-2 bg-white mt-2 shadow-sm"
            style={{
              cursor: view && "pointer",
              borderLeft: key == i?._id && "red",
            }}
            onClick={() => (view ? history.push("/jobs") : null)}
          >
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={i?.company?.logo?.link}
                    style={{
                      height: "30px",
                      width: "30px",
                      objectFit: "cover",
                      borderRadius: "40%",
                    }}
                  />
                  <small
                    className="ms-2 fw-bold cursor"
                    onClick={() => {
                      view
                        ? history.push("/jobs")
                        : history.push(`/job/${i?.company?.name}/${i?._id}`)
                    }}
                  >
                    {i?.company?.name}
                  </small>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <p className="border p-1 tag m-1 bgSecondary">
                <small>{i?.jobType}</small>
              </p>
            </div>
            <small className="my-2 text-secondary">
              Applied by
              {moment(i?.expiryDate).format("LL")}
            </small>

            {!view && (
              <button
                className="btn btn-main border txtColor fw-bold form-control my-1 mt-3"
                onClick={() => {
                  toggle()
                  setId(i?._id)
                }}
              >
                Apply
              </button>
            )}
          </div>
        ))}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <small>Closed</small>
          <small>{opportunities?.closedJobs?.length}</small>
        </div>
        <hr></hr>

        {opportunities?.closedJobs?.map((i, idx) => (
          <div
            className="p-2 mt-2 shadow-sm bgSecondary"
            style={{
              cursor: view && "pointer",
              borderLeft: key == i?._id && "red",
            }}
            onClick={() => (view ? history.push("/jobs") : null)}
          >
            <div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  {/* <img
                    src={i?.company?.logo?.link}
                    style={{
                      height: "30px",
                      width: "30px",
                      objectFit: "cover",
                      borderRadius: "40%",
                    }}
                  /> */}
                  <small
                    className="ms-2 fw-bold cursor"
                    onClick={() => {
                      view
                        ? history.push("/jobs")
                        : history.push(`/job/${i?.company?.name}/${i?._id}`)
                    }}
                  >
                    {i?.company?.name}
                  </small>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <p className="border p-1 tag m-1 bg-white">
                <small>{i?.jobType}</small>
              </p>
            </div>
            {/* <small className="my-2 text-secondary">
              Applied by
              {moment(i?.expiryDate).format("LL")}
            </small> */}

            {/* {!view && (
              <button
                className="btn btn-main border txtColor fw-bold form-control my-1 mt-3"
                onClick={() => {
                  toggle();
                  setId(i?._id);
                }}
              >
                Apply
              </button>
            )} */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Oppurtunities
