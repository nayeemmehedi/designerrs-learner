import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import LeftSidebar from "../../Components/CourseMaterial/LeftSidebar"
import Middle from "../../Components/CourseMaterial/Middle"
import RightSide from "../../Components/CourseMaterial/RightSide"
import { getAllCourseSeason } from "../../Store/courseMaterial/actions"

import Loading from "../../Components/Common/Loading"
import CourseCompletion from "./CourseCompletion"

const CourseMaterial = () => {
  const history = useHistory()

  let parseID = history?.location?.search.split("batch=")[1]

  const studyMaterial = useSelector(state => state?.courseMaterials)
  const { loading } = useSelector(state => state?.courseMaterials)

  const dispatch = useDispatch()
  const [active, setActive] = useState("StudyMaterial")
  const { courseId } = useParams()
  const [sessionInfo, setSessionInfo] = useState({})
  const local = localStorage.getItem("sessionInfo")

  console.log("studymaterial", studyMaterial)
  const role = localStorage.getItem("role")

  const { sessions } = useSelector(state => state?.courseMaterials)
  useEffect(() => {
    if (local) {
      setSessionInfo(JSON.parse(local))
    } else {
      if (role == "learner") {
        setSessionInfo(sessions?.sessions?.[1])
      } else {
        setSessionInfo(sessions?.sessions?.[1])
      }
    }
  }, [local])



  useEffect(() => {
    dispatch(getAllCourseSeason(courseId, parseID))
  }, [courseId])

  console.log("SessionInfo", sessionInfo)
  if (loading) return <Loading />
  return (
    <div className="p-3">
      <div className="row">
        <div className="col-md-3">
          <LeftSidebar
            sessionInfo={sessionInfo}
            setSessionInfo={setSessionInfo}
          />
        </div>

        {studyMaterial?.cartrificateId == true && <CourseCompletion />}

        {studyMaterial?.cartrificateId == false && (
          <>
            <div className="col-md-6">
              <Middle
                sessionInfo={sessionInfo}
                setActive={setActive}
                active={active}
              />
            </div>
            <div className="col-md-3">
              <RightSide active={active} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CourseMaterial
