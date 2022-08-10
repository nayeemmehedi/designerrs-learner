import React, { useEffect, useState } from "react"
import { Input, Label } from "reactstrap"
import axiosApi from "../../../Helper/api"
import moment from "moment"
import { getLocation } from "../../../Store/Location/action"
import { useDispatch, useSelector } from "react-redux"
import { AiFillCloseCircle } from "react-icons/ai"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"
import { toCapitalize } from "../../../Helper/Custom/toCapitalize"

const weeks = [
  { name: "Saturday", value: "saturday" },
  { name: "Sunday", value: "sunday" },
  { name: "Monday", value: "monday" },
  { name: "Tuesday", value: "tuesday" },
  { name: "Wednesday", value: "wednesday" },
  { name: "Thursday", value: "thursday" },
  { name: "Friday", value: "friday" },
]

function DateValue() {
  // const [timeline, setTimeline] = useState()

  const [dayData, setDayData] = useState([])
  useEffect(() => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=allocateBatchesOn`)
      .then(res => {
        console.log(res.data)
        setDayData(res?.data?.allocateBatchesOn)
      })
      .catch(err => {})
  }, [])

  const { mentorData } = useSelector(state => state.OnBoardingMentor)

  console.log("mentorData", mentorData)

  const dispatch = useDispatch()
  //mentor date select
  const [initial, setInitial] = useState("")
  const [locationData, setlocationData] = useState({})

  const { location } = useSelector(state => state.Location)

  //mentor date select

  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  })
  const [btnLoading, setbtnLoading] = useState(false)

  const [week, setWeek] = useState(weeks)
  const [weekValue, setWeekValue] = useState([])

  const handleWeek = data => {
    const value = week.find(i => i == data)

    if (value.selected) {
      const info = week.filter(i => i != data)
      setWeek([...info, { ...data, selected: false }])
    } else {
      const info = week.filter(i => i != data)
      setWeek([...info, { ...data, selected: true }])
    }
  }

  useEffect(() => {
    const value = week.filter(i => i.selected)
    const newValue = value.map(v => v.value)
    setWeekValue(newValue)
  }, [week])

  useEffect(() => {
    dispatch(getLocation())
    setInitial(
      moment(mentorData?.availability?.availableDate).format("YYYY-MM-DD")
    )
    setlocationData(mentorData?.availability?.location)
  }, [mentorData])

  useEffect(() => {
    dispatch(getLocation())
  }, [])

  //submitted value

  const submitValue = () => {
    if (weekValue.length > 0 && initial && locationData) {
      // setbtnLoading(true)
      let formData = new FormData()

      weekValue.map((i, idx) =>
        formData.append(`availability[days][${idx}]`, i)
      )

      formData.append(
        "availability[availableDate]",
        new Date(initial).toISOString()
      )
      formData.append("availability[location]", locationData?._id)

      for (const value of formData.values()) {
        console.log(value)
      }

      dispatch(updateMentorPortfolio(formData))
    }
    // else {
    //   setResponse({
    //     success: false,
    //     error: false,
    //     addFirst: true,
    //   })
    // }
  }

  if (
    response.addFirst ||
    response.success ||
    response.error ||
    response.addFirst
  ) {
    setTimeout(() => {
      setResponse({
        success: false,
        error: false,
        addFirst: false,
      })
    }, 4000)
  }

  return (
    <div className="my-2">
      <hr></hr>
      <p className="text-secondary fw-bold">
        Mentor’s Calendar and Availability
      </p>
      <div className="my-5">
        <div>
          <Label>
            <h5>From when are you available to take a course?</h5>
          </Label>
          <div className="col-md-6">
            <Input
              name={"startDate"}
              type={"date"}
              placeholder={moment(new Date()).format("ll")}
              onChange={e => setInitial(e.target.value)}
              value={initial}
            />
          </div>
        </div>

        <div>
          <div className="my-5">
            <Label>
              <h5>What location are you available for?</h5>
            </Label>
            <div className="col-md-6">
              <Input
                name={"location"}
                type={"select"}
                placeholder={""}
                onChange={e =>
                  setlocationData(
                    location.locations.find(i => i._id == e.target.value)
                  )
                }
                value={locationData?._id}
              >
                <option defaultValue>Select Location</option>
                {location?.locations?.map((i, idx) => (
                  <option key={idx} value={i._id}>
                    {i.locationName}
                  </option>
                ))}
              </Input>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div>
          <h5>What days are you available for?</h5>

          <p className="my-4 text-danger">
            Currently batches are held at <br></br>{" "}
            {dayData?.map(i => toCapitalize(i)).join(", ")}
          </p>
        </div>

        <div className="d-flex">
          {week?.map((i, idx) => (
            <p
              className="border p-2 tag m-1 cursor"
              onClick={() => handleWeek(i)}
              style={{
                backgroundColor: i.selected ? "#cd2026" : "",
                color: i.selected ? "#fff" : "",
              }}
            >
              {i.name}
            </p>
          ))}
        </div>
      </div>

      <div>{/* <TimelineSlider></TimelineSlider> */}</div>

      <button className="btn btn-main2" onClick={submitValue}>
        {btnLoading ? "Submitting..." : "Submit"}
      </button>

      {/* <div>
        {response.addFirst && (
          <p className="text-danger mt-3"> Add Your Skills and Tools First.</p>
        )}

        {response.error && (
          <p className="text-danger mt-3"> Something Error Happens..</p>
        )}

        {response.success && (
          <p className="text-success mt-3"> Successfully Completed..</p>
        )}
      </div> */}
    </div>
  )
}

export default DateValue
