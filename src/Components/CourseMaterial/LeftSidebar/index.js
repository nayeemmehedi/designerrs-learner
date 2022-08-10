import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MdOutlineArrowBack } from "react-icons/md"
import { GiSettingsKnobs } from "react-icons/gi"
import moment from "moment"
import courseBox from "../../../Assets/Images/png/course_box.png"
import flag from "../../../Assets/Images/png/flag.png"
import CourseMaterialFilter from "../Filter"
import { useSelector, useDispatch } from "react-redux"
import { getOneCourseSeason } from "../../../Store/courseMaterial/actions"
import { useParams } from "react-router-dom"
import { Link } from "react-scroll"
import DownArrow from "../../../Assets/Images/downArrow.svg"

const LeftSidebar = ({ sessionInfo, setSessionInfo }) => {
  const { sessions } = useSelector(state => state?.courseMaterials)
  console.log("state", sessions)
  const [sessionId, setSessionId] = useState(null)
  const { courseId } = useParams()

  const dispatch = useDispatch()

  const history = useHistory()

  const [filterOpen, setFilterOpen] = useState(false)
  const toggleFilter = () => setFilterOpen(!filterOpen)

  let parseID = history?.location?.search.split("batch=")[1]

  const role = localStorage.getItem("role")
  const handleClick = id => {
    dispatch(getOneCourseSeason(courseId, parseID, id))
    console.log("sessionId", id)
  }

  useEffect(() => {
    if (role == "learner") {
      dispatch(
        getOneCourseSeason(courseId, parseID, sessions?.sessions?.[1]?._id)
      )
    } else {
      dispatch(
        getOneCourseSeason(courseId, parseID, sessions?.sessions?.[1]?._id)
      )
    }
  }, [courseId, parseID, sessions])

  const handleUrl = () => {
    if (role == "learner") {
      return sessions?.sessions?.slice(1, sessions?.totalSessions)
    } else {
      return sessions?.sessions?.slice(1, sessions?.totalSessions)
    }
  }

  const upcoming = sessions?.sessions?.find?.(i => i.upcoming)

  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          className="btn txtColor"
          onClick={() => history.goBack()}
          style={{ borderRadius: "0" }}
        >
          <MdOutlineArrowBack size="17" /> Back
        </div>
        <div
          style={{ height: "25px", width: "1px", backgroundColor: "#EBEBEB" }}
        ></div>
        <div className="txtColor cursor mx-3" onClick={toggleFilter}>
          <GiSettingsKnobs /> <span className="ms-2">Filter</span>
        </div>
      </div>
      <div className="my-4">
        {handleUrl()?.map?.((i, idx) =>
          i.upcoming ? (
            <div
              className="d-flex justify-content-between align-items-center px-5 py-4"
              style={{ position: "relative", color: "#7d7d7d" }}
            >
              <div>
                <small>{idx}</small>
                <br></br>
                <small className="my-2">{i?.session.sessionName}</small>
                <br></br>
                <small className="my-2 d-flex">
                  <img
                    src={courseBox}
                    style={{ width: "20px" }}
                    alt="courseBoxx"
                  />{" "}
                  <span className="mx-2">
                    {" "}
                    {moment(i?.createdAt).format("ll")}
                  </span>
                </small>
              </div>
              <div>
                <img src={flag} alt="flag" className="w-100" />
              </div>
              <div
                style={{
                  position: "absolute",
                  color: "#007618",
                  bottom: "15px",
                }}
                className="bg-white border border-success p-2 shadow-sm"
              >
                Upcoming Session{" "}
                <img
                  src={DownArrow}
                  alt="downArrow"
                  className="ms-3"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
            </div>
          ) : (
            <>
              <Link
                to="courseMaterial"
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
                spy={true}
              >
                <div
                  className="px-5 py-4 cursor"
                  key={idx}
                  style={
                    sessionInfo?.id == i?.id
                      ? {
                          color: "#007618",
                          fontWeight: "500",
                          backgroundColor: "#fff",
                        }
                      : { color: "#7d7d7d" }
                  }
                  onClick={() => {
                    dispatch({ type: "FLUSH_ASSIGNMENT" })
                    setSessionInfo({ ...i, sessionNumber: idx })
                    localStorage.setItem(
                      "sessionInfo",
                      JSON.stringify({ ...i, sessionNumber: idx })
                    )

                    handleClick(i.id)
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small>{idx}</small>
                      <br></br>
                      <small className="my-2">{i?.session.sessionName}</small>
                      <br></br>
                      <small className="my-2 d-flex">
                        <img
                          src={courseBox}
                          style={{ width: "20px" }}
                          alt="courseBoxx"
                        />{" "}
                        <span className="mx-2">
                          {" "}
                          {moment(i?.createdAt).format("ll")}
                        </span>
                      </small>
                    </div>
                    <div>
                      <img src={flag} alt="flag" className="w-100" />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )
        )}

        {!upcoming?._id && (
          <Link
            to="courseMaterial"
            smooth={true}
            offset={0}
            duration={500}
            delay={100}
            spy={true}
          >
            <div
              className="px-5 py-4 cursor"
              key={"100"}
              style={
                sessionId == 100
                  ? {
                      color: "#007618",
                      fontWeight: "500",
                      backgroundColor: "#fff",
                    }
                  : { color: "#7d7d7d" }
              }
              onClick={() => {
                dispatch({ type: "GET_CARTIFICATE_ID" })
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <small>{sessions?.length}</small>
                  <br></br>
                  <small className="my-2">Certificate</small>
                  <br></br>
                  <small className="my-2 d-flex">
                    <img
                      src={courseBox}
                      style={{ width: "20px" }}
                      alt="courseBoxx"
                    />
                    <span className="mx-2">This Saturday</span>
                  </small>
                </div>
                <div>
                  <img src={flag} alt="flag" className="w-100" />
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
      {filterOpen && <CourseMaterialFilter toggleFilter={toggleFilter} />}
    </div>
  )
}

export default LeftSidebar
