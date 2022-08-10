import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import CourseOverview from "../../Components/AcceptBatch/CourseOverview"
import Curriculum from "../../Components/AcceptBatch/Curriculum"
import Learners from "../../Components/AcceptBatch/Learners"
import LearningOutComes from "../../Components/AcceptBatch/LearningOutComes"
import RightCard from "../../Components/AcceptBatch/RightCard"
import CommonPage from "../../Components/Common/CommonPage"
import axiosApi from "../../Helper/api"
import { notifyError } from "../../Store/notify/actions"

const AcceptBatch = () => {
  const { batchId } = useParams()
  const dispatch = useDispatch()

  const [details, setDetails] = useState({})

  useEffect(() => {
    if (batchId) {
      axiosApi
        .get(`/mentor/batch/${batchId}/invitation`)
        .then(res => {
          console.log("Batch Invite Details~", res.data)
          setDetails(res.data)
        })
        .catch(err => {
          dispatch(notifyError("Invalid Operation"))
        })
    }
  }, [batchId])

  const linkArr = [
    {
      to: "course",
      text: "Course Overview",
      component: <CourseOverview details={details} />,
    },
    {
      to: "learners",
      text: "Learners",
      component: <Learners details={details} />,
    },
    {
      to: "outcomes",
      text: "Learning Outcomes",
      component: <LearningOutComes details={details} />,
    },
    {
      to: "curriculum",
      text: "Curriculum",
      component: <Curriculum details={details} />,
    },
  ]

  return (
    <div className="p-2">
      <div className="row">
        <CommonPage linkArr={linkArr} card={<RightCard details={details}/>} />
      </div>
    </div>
  )
}

export default AcceptBatch
