import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { mentorshipValue, sessionValue } from "../jsonValue/HeaderJsonValue"
import { BsCheckCircleFill } from "react-icons/bs"
import { AiOutlineCheckCircle } from "react-icons/ai"
import CustomModal from "../../PortfolioMain/common/CustomModal"
import Guest from "../../MentorShipDetails/Guest"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { AiOutlineCompass } from "react-icons/ai"
import { TbTools, TbWorld } from "react-icons/tb"
import { BsBriefcase } from "react-icons/bs"
import { HiOutlineUserCircle } from "react-icons/hi"
import {
  IoIosCheckmarkCircleOutline,
  IoIosCheckmarkCircle,
} from "react-icons/io"
import { getPortfolio } from "../../../Store/Portfolio/Action"
import { getMentorPortfolio } from "../../../Store/Mentor/actions"
// AiOutlineCheckCircle

function HeaderOnboarding() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getMentorPortfolio())
    dispatch(getPortfolio(user?.uid))
  }, [user])

  const { portfolioValue } = useSelector(state => state.PortfolioReducers)

  const [ModalOpen, setModalOpen] = useState(false)
  const togglModal = () => setModalOpen(!ModalOpen)

  const { courses, error, loading } = useSelector(
    state => state.OnBoardingMentor
  )

  //if mentorship true there is no course
  const [mentorship, setMentorship] = useState(
    courses.length > 0 ? false : true
  )

  const dashData = [
    // {
    //   color: "#FFB800",
    //   title: `You spent ${convertMsToH(
    //     allEffortData?.average?.[0]?.avgTime
    //   )}/8hrs this week`,
    //   description: "Just about there, practise 30 mins to achieve your goal.",
    //   icon: <TbTools size={26} style={{ color: "#FFB800" }} />,
    //   btnTxt: "See your progress",
    //   route: "/my-progress",
    // },

    {
      color: "#CD2026",
      title: "Complete your Profile",
      type: "arr",
      description: [
        {
          title: "Profile Picture",
          icon: portfolioValue?.user?.profilePicture?.link,
        },
        {
          title: "Work Experience",
          icon: portfolioValue?.workExperience?.length > 0,
        },
        { title: "Skills and Tools", icon: portfolioValue?.skills?.length > 0 },
        {
          title: "Portfolio",
          icon: portfolioValue?.user?.profilePicture?.link,
        },
      ],
      icon: <TbWorld size={26} style={{ color: "#CD2026" }} />,
      btnTxt: "Complete Now",
      route: `/mentor-portfolio/${user?.uid}`,
    },
    {
      color: "#7128CE",
      title: "Complete your Account Info",
      type: "arr",
      description: [
        { title: "Verify Email", icon: user?.emailVerified },
        { title: "Contact Details", icon: user?.email && user?.phone },
        {
          title: "Address",
          icon:
            user?.additionalAddress?.area &&
            user?.additionalAddress?.city &&
            user?.additionalAddress?.houseNumber &&
            user?.additionalAddress?.landmark &&
            user?.additionalAddress?.state &&
            user?.additionalAddress?.streetName &&
            user?.additionalAddress?.zipCode,
        },
      ],
      icon: <HiOutlineUserCircle size={26} style={{ color: "#7128CE" }} />,
      btnTxt: "Complete Now",
      route: "/account-settings",
    },
  ]

  return (
    <div className="row pb-5" style={{ background: "#FFFFFF" }}>
      {ModalOpen && (
        <CustomModal modal={ModalOpen} toggle={togglModal}>
          <Guest togglModal={togglModal}></Guest>
        </CustomModal>
      )}
      <div className="col-sm-2 col-md-2 col-lg-2"></div>
      <div className="col-sm-11 col-md-11 col-lg-9 ">
        <div className="mb-5 pt-5">
          <h1>Hi {user?.fullName?.split(" ")[0]}! </h1>
          <p>You're just getting Started Keep Learning by doing.</p>
        </div>

        {!mentorship ? (
          <div className="row">
            {dashData.map(i => (
              <div className="col-md-4 col-lg-3">
                <div
                  className="shadow-sm m-3"
                  style={{ borderTop: `2px solid ${i?.color}` }}
                >
                  <div className="p-4">
                    <div className="mb-2"></div>
                    {i?.icon}

                    <h5 className="my-3">{i?.title}</h5>

                    {i?.type == "arr" ? (
                      i?.description.map(t => (
                        <p>
                          {t.icon ? (
                            <IoIosCheckmarkCircle
                              size={23}
                              style={{ color: "#169F32" }}
                            />
                          ) : (
                            <IoIosCheckmarkCircleOutline size={23} />
                          )}
                          <small className="ms-2">{t.title}</small>
                        </p>
                      ))
                    ) : (
                      <p
                        className="pb-5 pt-3"
                        style={{ color: idx == 1 && i?.color }}
                      >
                        {i?.description}
                      </p>
                    )}
                    <p style={{ height: "50px" }}></p>
                    <div class="d-grid gap-2">
                      <button
                        className="btn  border border-dark"
                        style={{ borderRadius: "0px" }}
                        onClick={() => history.push(i.route)}
                      >
                        <small className="text-dark">{i?.btnTxt}</small>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {mentorshipValue?.map(v => (
              <div className="col-sm-12 col-md-4 col-lg-3 ">
                <div
                  className="shadow mx-sm-0 mx-md-2 mx-lg-2 mx-xl-2 mx-xxl-2  d-flex  flex-column mt-3"
                  style={{
                    // borderTop: `2px solid ${v?.color} `,
                    color: v?.color,
                    minHeight: "360px",
                    background: v?.background,
                  }}
                >
                  <div className="p-sm-2 p-md-3 p-lg-3   ">
                    {v.iconTop}
                    <br />

                    {v?.topMessage && <h5 className="mt-3">{v?.topMessage}</h5>}
                    {v?.middleMessage && (
                      <p className={v?.background == "#CD2026" ? "mt-3" : null}>
                        {v?.middleMessage}
                      </p>
                    )}

                    <div className="mt-3">
                      {v?.lastMessage && <small>{v?.lastMessage}</small>}
                    </div>

                    {v?.ArrayValue?.map((i, idx) => (
                      <div className="my-3">
                        {idx == 0 ? (
                          <BsCheckCircleFill
                            style={{ color: idx == 0 && "green" }}
                          ></BsCheckCircleFill>
                        ) : (
                          <AiOutlineCheckCircle className="text-secondary"></AiOutlineCheckCircle>
                        )}{" "}
                        {i}
                      </div>
                    ))}
                  </div>

                  <div class="d-grid gap-2  mt-auto   m-4 ">
                    <button
                      style={{ borderRadius: "0px" }}
                      className={
                        v?.background == "#CD2026"
                          ? "btn btn-danger"
                          : "btn btn-outline-dark "
                      }
                      onClick={() =>
                        v?.NoNeed ? togglModal() : history.push(v.onclickValue)
                      }
                    >
                      <small>{v?.buttonValue}</small>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderOnboarding
