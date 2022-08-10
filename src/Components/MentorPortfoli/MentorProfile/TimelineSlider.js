import React, { useEffect, useState } from "react"
import { endOfToday, set } from "date-fns"
import TimeRange from "react-timeline-range-slider"
import axiosApi from "../../../Helper/api"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"

const now = new Date()
const getTodayAtSpecificHour = (hour = 12) =>
  set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })

const selectedStart = getTodayAtSpecificHour()
const selectedEnd = getTodayAtSpecificHour(14)

const startTime = getTodayAtSpecificHour(11)
const endTime = endOfToday()

const disabledIntervals = [
  { start: getTodayAtSpecificHour(16), end: getTodayAtSpecificHour(17) },
  { start: getTodayAtSpecificHour(7), end: getTodayAtSpecificHour(12) },
  { start: getTodayAtSpecificHour(20), end: getTodayAtSpecificHour(24) },
]

const TimelineSlider = () => {
  const [error, setError] = useState(false)
  const [selectedInterval, setSelectedInterval] = useState([
    selectedStart,
    selectedEnd,
  ])

  const errorHandler = error => setError(error)
  console.log(error)

  const onChangeCallback = selectedInterval => {
    setSelectedInterval(selectedInterval)
  }
  console.log(selectedInterval)

  const { mentorData } = useSelector(state => state.OnBoardingMentor)

  useEffect(() => {
    setSelectedInterval([
      new Date(mentorData?.availability?.from),
      new Date(mentorData?.availability?.to),
    ])
  }, [mentorData])

  const submitValue = () => {
    let formData = new FormData()

    formData.append("availabilityTime[from]", selectedInterval?.[0])
    formData.append("availabilityTime[to]", selectedInterval?.[1])

    axiosApi
      .patch(`/mentor/profile`, formData)
      .then(res => {
        console.log("update mentor profile~", res)
      })
      .catch(err => {})
  }

  return (
    <div className="my-5">
      <h5 className="py-3">What time are you available?</h5>
      <p className="text-center text-danger">
        You’re available from {moment(selectedInterval?.[0]).format("HH:mm A")}{" "}
        to {moment(selectedInterval?.[1]).format("HH:mm A")}
        {/* {moment(this?.state?.selectedInterval[0])} */}
      </p>

      <TimeRange
        error={error}
        ticksNumber={36}
        selectedInterval={[selectedStart, selectedEnd]}
        timelineInterval={[startTime, endTime]}
        onUpdateCallback={errorHandler}
        onChangeCallback={onChangeCallback}
        disabledIntervals={disabledIntervals}
      />

      {/* <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <div className="p-3 border-top-0 border-secondary"></div>
            <small className="mt-2 text-center">Usual Timings of 1st batch of the day</small>
          </div>
          <div className="col-3">
          <div className="p-3 " ></div>

            

            {" "}
            <small className="mt-2 p-3">
              Usual Timings of 2nd batch of the day
            </small>{" "}
          </div>
        </div> */}
      <div className=" py-5"></div>

      <button className="btn btn-main2" onClick={submitValue}>
        Submit
      </button>
    </div>
  )
}

export default TimelineSlider
