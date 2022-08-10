import moment from "moment"
import React from "react"
import { useState } from "react"
import { Input, Label } from "reactstrap"
import { AiFillCloseCircle } from "react-icons/ai"
import { useEffect } from "react"
// import axiosApi, { post } from "../../../../../../helpers/api";
import { useDispatch, useSelector } from "react-redux"
// import { getCourseDetailsData } from "../../../../../../store/courseDetails/actions";
import axiosApi, { patch } from "../../../Helper/api"

import useSWR from "swr"
import { SWRGET } from "../../../API/SWR/fetcher"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"
// import { SWRGET } from "../../API/SWR/fetcher";

function MentorAgrement({ id }) {
  const [success, setSuccess] = useState(false)
  const [error1, setError1] = useState(false)

  const [initial, setInitial] = useState({
    mouStartDate: "",
    mouEndDate: "",
    remuneration: "",
    // courseEligibilty: [],
  })

  const { mentorData } = useSelector(state => state.OnBoardingMentor)
  useEffect(() => {
    setInitial({
      mouStartDate: mentorData?.mouStartDate,
      mouEndDate: mentorData?.mouEndDate,
      remuneration: mentorData?.remuneration,
    })
  }, [mentorData])

  console.log("remunation", mentorData?.remuneration)

  const dispatch = useDispatch()

  const { data: allCourses, error: allCoursesError } = useSWR(
    "/learner/courses",
    SWRGET
  )

  let courses = allCourses?.data || []

  const [roleData, setRoleData] = useState([])

  //mentor mou

  let [error, setError] = useState({})
  const [isSubmit, setisSubmit] = useState(false)

  const submitValue = () => {
    // setError(validate(initial))
    // setisSubmit(true)
    let formData = new FormData()

    formData.append("mouStartDate", initial.mouStartDate)
    formData.append("mouEndDate", initial.mouEndDate)
    formData.append("remuneration", initial.remuneration)

    // for (let i = 0; i < initial?.courseEligibilty.length; i++) {
    //   const element = initial?.courseEligibilty[i]

    //   formData.append(`courseEligibilty[${i}]`, element)
    // }

    dispatch(updateMentorPortfolio(formData))
  }

  const validate = initial => {
    console.log("ini", initial)
    let errorValue = {}

    if (!initial.mouStartDate) {
      errorValue.mouStartDate = "Start Date Required!"
    }
    if (!initial.mouEndDate) {
      errorValue.mouEndDate = "End Date Required!"
    }
    if (initial.courseEligibilty.length == 0) {
      errorValue.courseEligibilty = "Course Eligibilty Required!"
    }
    if (!initial.remuneration) {
      errorValue.remuneration = "Remuneration Required!"
    }
    return errorValue
  }

  const handleRole = id => {
    const check = roleData?.every(item => {
      return item?._id !== id
    })
    if (!check) return
    const info = courses?.find(i => i._id == id)
    setRoleData([...roleData, info])
    console.log(info)
  }

  const removeRole = id => {
    setRoleData(roleData.filter(i => i._id != id))
  }

  useEffect(() => {
    setInitial({ ...initial, courseEligibilty: roleData.map(i => i._id) })
  }, [roleData])

  useEffect(() => {
    if (isSubmit && Object.keys(error) == 0) {
      let formData = new FormData()

      formData.append("bankName", initial.mouStartDate)
      formData.append("bankState", initial.mouEndDate)
      formData.append("bankCity", initial.remuneration)

      for (let i = 0; i < initial?.courseEligibilty.length; i++) {
        const element = initial?.courseEligibilty[i]

        formData.append(`courseEligibilty[${i}]`, element)
      }

      dispatch(updateMentorPortfolio(formData))
    } else {
      console.log("nothing there")
    }
  }, [error])

  // useEffect(() => {
  //   dispatch(
  //     getCourseDetailsData(
  //       0,
  //       { sessionDuration: "", startPrice: "", endPrice: "", status: "active" },
  //       1000000
  //     )
  //   );
  // }, []);

  return (
    <div className="my-5">
      <div>
        <div className="mb-3">
          <div className="row  w-50">
            <div className="col-md-6">
              <Label className="fw-bold">MOU Start Date</Label>
              <Input
                name={"mouStartDate"}
                type={"date"}
                value={moment(mentorData?.mouStartDate).format("YYYY-MM-DD")}
                placeholder={moment(new Date()).format("ll")}
                onChange={e =>
                  setInitial({ ...initial, mouStartDate: e.target.value })
                }
                // value={initial.mouStartDate}
              />

              {error.mouStartDate && (
                <p style={{ color: "red" }}>{error.mouStartDate}</p>
              )}
            </div>
            <div className="col-md-6">
              <Label className="fw-bold">MOU End Date</Label>
              <Input
                name={"endDate"}
                type={"date"}
                value={moment(mentorData?.mouEndDate).format("YYYY-MM-DD")}
                placeholder={moment(new Date()).format("ll")}
                onBlur={e =>
                  setInitial({ ...initial, mouEndDate: e.target.value })
                }
                // value={initial.mouEndDate}
              />
              {error.mouEndDate && (
                <p style={{ color: "red" }}>{error.mouEndDate}</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-3">
          <p className="fw-bold">Remuneration / session</p>

          <div>
            <div className="form-custom  input-group mb-2 mr-sm-2 border-end-0">
              <div className="input-group-prepend border-end-0">
                <div
                  className="input-group-text border-end-0 "
                  style={{ backgroundColor: "white" }}
                >
                  ₹
                </div>
              </div>
              <input
                className="form-control"
                name={"remuneration"}
                type={"number"}
                placeholder={""}
                value={mentorData?.remuneration}
                onChange={e =>
                  setInitial({
                    ...initial,
                    remuneration: Number(e.target.value),
                  })
                }
                defaultValue={initial.remuneration}
              />
            </div>
          </div>

          {/* <Input
            name={"remuneration"}
            type={"number"}
            placeholder={""}
            onChange={(e) =>
              setInitial({ ...initial, remuneration: Number(e.target.value) })
            }
            // value={initial.remuneration}
          /> */}

          {error.remuneration && (
            <p style={{ color: "red" }}>{error.remuneration}</p>
          )}
        </div>
        {/* 
        <div className="w-50">
          <br />
          <small>Course Eligibility</small>
          <h5 className="pt-3">Which course is the mentor eligible for?</h5>
          <br />
          <small>Selete Course</small> <br />
          <div className="mb-4">
            <Input
              name="courseEligibilty"
              type="select"
              onChange={e => handleRole(e.target.value)}
            >
              <option defaultValue>select course</option>
              {courses?.map((i, idx) => (
                <option key={idx} value={i._id}>
                  {i.courseName}
                </option>
              ))}
            </Input>
          </div>
          <span className="mb-5">
            {roleData?.map((i, idx) => (
              <span className="border p-1 m-1" key={idx}>
                {i.courseName}
                <span className="cursor mx-1" onClick={() => removeRole(i._id)}>
                  <AiFillCloseCircle />
                </span>
              </span>
            ))}
          </span>
          {error.courseEligibilty && (
            <p style={{ color: "red" }}>{error.courseEligibilty}</p>
          )}
        </div> */}

        <div className="d-grid gap-2 w-50">
          <button className="btn btn-main2 mb-4" onClick={submitValue}>
            Submit
          </button>
        </div>

        {success && <h6 className="text-success">Successfully Done..</h6>}
        {error1 && <h6 className="text-danger">Error occures ..</h6>}
      </div>

      <hr />
    </div>
  )
}

export default MentorAgrement
