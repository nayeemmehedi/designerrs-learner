import React, { useContext, useState, useEffect } from "react"
import { PortfolioContextMade } from "../PortfolioContext"
import { GrFormClose } from "react-icons/gr"
import CustomModal from "../../common/CustomModal"
import Dribble from "./protfolioChild/Dribble"
import Behance from "./protfolioChild/Behance"
import Medium from "./protfolioChild/Medium"
import { getAllStudies } from "../../../../Store/Portfolio/Action"
import { useDispatch, useSelector } from "react-redux"
import { TagValue } from "../../common/StyleComponents"
import { Tooltip } from "@mui/material"
import { IoMdAdd } from "react-icons/io"

const nav = [{ name: "Behance" }, { name: "Dribble" }, { name: "Medium" }]

function Portfolio({ loading, portfolioValue, error }) {
  const { caseStudies } = useSelector(state => state.PortfolioReducers)
  console.log(caseStudies)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllStudies())
  }, [])

  const [PortfolioContext, setPortfolioContex] =
    useContext(PortfolioContextMade)

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [active, setActive] = useState("Medium")

  const getUi = type => {
    switch (type) {
      case "Dribble":
        return <Dribble toggle={toggle} />
      case "Behance":
        return <Behance toggle={toggle} />
      case "Medium":
        return <Medium toggle={toggle} />
    }
  }

  const { user } = useSelector(state => state.user)
  console.log(user)
  return (
    <div className={PortfolioContext ? "bgGray p-4 shadow-sm " : " p-4"}>
      <CustomModal modal={modal} toggle={toggle} size={"lg"}>
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Add Portfolio</h5>{" "}
            <GrFormClose onClick={toggle} className="cursor" size={30} />
          </div>
          <hr />
          <div className="my-3">
            {nav.map(i => (
              <span
                onClick={() => {
                  setActive(i.name)
                }}
                className="cursor px-3 py-2"
                style={
                  active == i.name
                    ? { borderBottom: "3px solid #cd2026" }
                    : { borderBottom: "" }
                }
              >
                {i.name}
              </span>
            ))}
          </div>
          {getUi(active)}
        </div>
      </CustomModal>

      <div>
        <div className="d-flex justify-content-between">
          <p className="fs-4 textColor1 weight">Portfolio</p>
          {PortfolioContext && (
            <button className="btn btn-danger borderRedius" onClick={toggle}>
              <IoMdAdd size={22}></IoMdAdd>
              <p className="d-none d-sm-inline"> Add Case Study</p>
            </button>
          )}
        </div>
      </div>

      {PortfolioContext ? <hr /> : <hr className="w-50" />}

      <div>
        <div className="row">
          <div className="col-6">
            <div className="px-3 border-start border-danger">
              <p>Type of work</p>
              <div>
                {[1, 2, 3, 4]?.map((v, idx) =>
                  idx == 0 ? (
                    <button className="btn btn-danger m-2 borderRedius1">
                      design {v}
                    </button>
                  ) : (
                    <button className="btn btn-light m-2 borderRedius1">
                      design {v}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="px-3 border-start border-danger">
              <p>Industry</p>
              <div>
                {[1, 2, 3, 4]?.map((v, idx) =>
                  idx == 0 ? (
                    <button className="btn btn-danger m-2 borderRedius1">
                      design {v}
                    </button>
                  ) : (
                    <button className="btn btn-light m-2 borderRedius1">
                      design {v}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          {caseStudies?.map(i => (
            <div className="col-md-6">
              <div className="m-2 mt-3 cursor">
                <div style={{ position: "relative" }}>
                  <img
                    src={i?.thumbnail}
                    alt="img"
                    style={{
                      height: "240px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="mt-4 text-white"
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                    }}
                  >
                    <Tooltip title={i?.tittle} placement="top-start">
                      <TagValue line="3">
                        <small className="fw-bold">
                          <a href={i?.link} target="_blank">
                            {i?.tittle?.substring(0, 50)}...
                          </a>
                        </small>
                      </TagValue>
                    </Tooltip>
                    <small className="fw-bold">
                      <img
                        className="rounded-circle"
                        src={user?.profilePicture?.link}
                        alt="image"
                        style={{
                          height: "30px",
                          width: "30px",
                          objectFit: "cover",
                        }}
                      />{" "}
                      <span className="mx-2">{user?.fullName}</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
