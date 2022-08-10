import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import Logo from "../../Assets/Images/Designerrs_Logo.svg"
import Style from "../../Style/navbar.module.scss"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUser } from "../../Store/user/actions"
import SweetAlert from "react-bootstrap-sweetalert"
import { HiOutlineAcademicCap } from "react-icons/hi"
import { FaRegUserCircle } from "react-icons/fa"
import Notifications from "../../Components/Notifications"
import { BsGlobe, BsChevronDown } from "react-icons/bs"
import { toCapitalize } from "../../Helper/Custom/toCapitalize"

import { database } from "../../Database/firebase"
import { getDatabase, ref, child, get } from "firebase/database"
import { getEnrolledCourses } from "../../Store/courseOnBoarding/actions"

const NavBar = () => {
  const dispatch = useDispatch()

  const [newNotifications, setNewNotifications] = useState([])

  //Course
  useEffect(() => {
    dispatch(getEnrolledCourses())
  }, [])

  const { courses } = useSelector(state => state.courseOnBoarding)

  // console.log("courses", courses)

  const uid = localStorage.getItem("uid")
  // console.log(uid)

  const dbRef = ref(getDatabase())
  useEffect(() => {
    get(child(dbRef, `/notifications/${uid}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
          const data = snapshot.val()
          console.log(data, "notification")
          let newNotifications = []
          for (const obj in data) {
            var notification = data[obj]
            notification.id = obj
            newNotifications.push(notification)
            // }
          }
          setNewNotifications(newNotifications)
        } else {
          console.log("No data available")
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [uid])

  let location = useLocation()
  let course = location.pathname === "/courses"

  // console.log(store);

  const accessToken = localStorage.getItem("accessToken")

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser())
    }
  }, [accessToken])

  const { user, error, loading } = useSelector(state => state.user)
  // console.log(user);

  const [showUi, setShowUi] = useState(false)
  const toggle = () => setShowUi(!showUi)

  const role = localStorage.getItem("role")

  const { header, siteInfo } = useSelector(state => state.pages)

  // function getFaviconEl() {
  //   return document.getElementById("favicon");
  // }

  // useEffect(()=>{
  //   let favicon = getFaviconEl();
  //   favicon?.href = "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico";
  // },[siteInfo])

  return (
    <React.Fragment>
      {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() =>
            dispatch({ type: "GET_USER_API_ERROR", payload: "" })
          }
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container-fluid mx-4">
            <Link to="/">
              <img
                src={
                  siteInfo?.websiteLogo?.link
                    ? siteInfo?.websiteLogo?.link
                    : Logo
                }
                alt="Designerrs"
                style={{
                  width: "128px",
                  height: "32px",
                  objectFit: "cover",
                }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item px-2">
                  {store?.keyPrefix && store?.username && (
                    <Link to="/dashboard" className="nav-link text_14">
                      Dashboard
                    </Link>
                  )}
                </li> */}

                {header.map((i, idx) => (
                  <li className="nav-item px-3" key={idx}>
                    {i?.title == "Home" ? (
                      user?.email ? (
                        <Link to={`/dashboard`} className="nav-link text_14">
                          Dashboard
                        </Link>
                      ) : (
                        <Link to={`/`} className="nav-link text_14">
                          Home
                        </Link>
                      )
                    ) : (
                      <Link to={`/${i?.pageUrl}`} className="nav-link text_14">
                        {i.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <span className="d-flex align-items-center">
                {!accessToken ? (
                  <Link to="/login" className={Style.login}>
                    <span>
                      <i className="far fa-user"></i>
                    </span>
                    Login
                  </Link>
                ) : loading ? (
                  <small className={Style.login}>loading...</small>
                ) : (
                  <>
                    <div
                      className={Style.login}
                      style={{ cursor: "pointer" }}
                      onClick={toggle}
                    >
                      <BsGlobe size="20" />
                      <span className="mx-2">
                        {user?.fullName
                          ? user?.fullName?.split(" ")[0]
                          : user?.email?.match(/^.+(?=@)/)[0]}
                      </span>
                      <span className="mx-2">
                        <BsChevronDown size="20" />
                      </span>
                    </div>
                    <span
                      className={Style.bell}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="far fa-bell"></i>
                    </span>
                  </>
                )}
              </span>
            </div>
          </div>
        </nav>
      </div>
      <Notifications newNotifications={newNotifications} courses={courses} />
      {showUi && (
        <div
          className="bg-white p-2 shadow-sm"
          style={{
            position: "absolute",
            right: 0,
            width: "250px",
            float: "right",
            marginRight: "20px",
            zIndex: 1999,
          }}
        >
          <>
            {user?.allowedRoles?.learner && user?.allowedRoles?.mentor && (
              <button
                className="btn btn-main2 mb-2 form-control"
                onClick={() => {
                  localStorage.setItem("role", role == "learner" ? "mentor" : "learner")
                  setShowUi(false)
                  window.location = "/"
                }}
              >
                <HiOutlineAcademicCap className="pb-1" size="24px" />{" "}
                <span className="mx-2">
                  Switch to{" "}
                  {toCapitalize(role == "learner" ? "mentor" : "learner")}
                </span>
              </button>
            )}

            <button
              className="btn btn-main2 mb-2 form-control"
              onClick={() => setShowUi(false)}
            >
              <HiOutlineAcademicCap className="pb-1" size="24px" />{" "}
              <span className="mx-2">Logged In as a {toCapitalize(role)}</span>
            </button>

           
              <Link to={role == "learner" ?  `/${user?.uid}/portfolio` : `/${user?.uid}/mentor-portfolio` }>
                <button
                  className="btn btn-main my-2 form-control"
                  onClick={() => setShowUi(false)}
                >
                  <BsGlobe className="pb-1" size="24px" />
                  <span className="mx-2"> Portfolio</span>
                </button>
              </Link>
        

            <Link to="/account-settings" onClick={() => setShowUi(false)}>
              <button className="btn btn-main  mt-2 form-control">
                <FaRegUserCircle className="pb-1" size="24px" />
                <span className="mx-2">Account Settings</span>
              </button>
            </Link>
          </>
        </div>
      )}
    </React.Fragment>
  )
}

export default NavBar
