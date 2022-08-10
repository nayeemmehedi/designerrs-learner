import React, { useEffect, useState } from "react"
import { Link, Element } from "react-scroll"
import Style from "../../Style/course.module.scss"
import ScrollToTop from "../../Helper/Custom/ScrollToTop"
import MiddleSidePortfolio from "./MiddleSidePortfolio/MiddleSidePortfolio"
import LeftSidePortfolio from "./LeftSidePortfolio/LeftSidePortfolio"
import EditOption from "./common/EditOption"
import CreatePortfolio from "./CreatePortfolio/CreatePortfolio"
import { useDispatch, useSelector } from "react-redux"
import { getGlobalData, getPortfolio } from "../../Store/Portfolio/Action"
import Loading from "../../Components/Common/Loading"
import { useParams } from "react-router-dom"

function PortfolioMain() {
  const dispatch = useDispatch()

  const { id } = useParams()
  const uid = localStorage.getItem("uid")
  useEffect(() => {
    if (id) {
      dispatch(getPortfolio(id))
    }
    if (uid) {
      dispatch(getGlobalData())
    }
  }, [id,uid])

  const { loading, portfolioValue, global, error } = useSelector(
    state => state.PortfolioReducers
  )

  console.log("global", global)

  if (loading) return <Loading />
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className={`${Style.stoper_head} my-3`}>
        <div>
          {error ? (
            <div>
              <CreatePortfolio></CreatePortfolio>
            </div>
          ) : (
            portfolioValue && (
              <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2 ps-4">
                  <LeftSidePortfolio></LeftSidePortfolio>
                </div>
                <div className="col-sm-12 col-md-9 col-lg-9">
                  <MiddleSidePortfolio></MiddleSidePortfolio>
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1">
                  <EditOption></EditOption>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default PortfolioMain
