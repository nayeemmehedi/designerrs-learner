import React, { useEffect } from "react"

import Loading from "../../Components/Common/Loading"
import { useDispatch, useSelector } from "react-redux"

import { useHistory } from "react-router-dom"
import { getAllJobs } from "../../Store/jobs/actions"
import SweetAlert from "react-bootstrap-sweetalert"
import Oppurtunities from "../../Components/Jobs/Oppurtunities"
import AppliedJobs from "../../Components/Jobs/AppliedJobs"
import ShortListed from "../../Components/Jobs/ShortListed"
import Hired from "../../Components/Jobs/Hired"

const Jobs = ({ details }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllJobs("opportunities"))
    dispatch(getAllJobs("applied"))
    dispatch(getAllJobs("shortlisted"))
    dispatch(getAllJobs("hired"))
  }, [])

  const { opportunities, applied, shortlisted, hired, loading, filterType } =
    useSelector(state => state.jobs)

  console.log(filterType)

  // const filterJobs = type => {
  //   switch (type) {
  //     case "opportunities":
  //       dispatch(getAllJobs("opportunities"))
  //   }
  // }

  // useEffect(() => {}, [])

  const history = useHistory()

  if (loading) return <Loading />

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div className="p-4">
        <div className="row">
          <div className="col-md-3">
            <Oppurtunities history={history} opportunities={opportunities} />
          </div>
          <div className="col-md-3">
            <AppliedJobs history={history} applied={applied} />
          </div>
          <div className="col-md-3">
            <ShortListed history={history} shortlisted={shortlisted} />
          </div>
          <div className="col-md-3">
            <Hired history={history} hired={hired} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
