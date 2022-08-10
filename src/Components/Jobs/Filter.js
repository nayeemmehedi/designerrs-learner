import React, { useEffect, useState } from "react"
import { Input } from "reactstrap"
import { GrFormClose } from "react-icons/gr"
import { useDispatch, useSelector } from "react-redux"

// import { getLocations } from "../../store/locations/actions";
import "react-calendar/dist/Calendar.css"
import { toCapitalize } from "../../Helper/Custom/toCapitalize"
import axiosApi from "../../Helper/api"
import { getAllJobs } from "../../Store/jobs/actions"

const filterStatus = ["active", "closed", "expired"]
const filterExp = ["0-1", "2-5", "5-10"]

const JobsFilter = () => {
  const dispatch = useDispatch()

  const [location, setLocation] = useState([])
  const [settings, setSettings] = useState([])

  useEffect(() => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=jobTitle,jobType`)
      .then(res => {
        setSettings(res?.data)
      })
      .catch(err => {})
    axiosApi
      .get(`/admin/location/filters?page=1&limit=10000000000&status=active`)
      .then(res => {
        setLocation(res?.data)
      })
      .catch(err => {})
  }, [])

  const initialValues = {
    status: [],
    workExperience: [],
    role: [],
    locations: [],
    jobType: [],
  }

  const [filter, setFilter] = useState(initialValues)
  // console.log(filter?.workExperience?.map(i=> i?.replace('-', ",")).join(","));
  //  console.log(filter);

  const { filterType } = useSelector(state => state.jobs)

  const onSubmit = () => {
    dispatch(
      getAllJobs(filterType, {
        status: filter?.status?.map(i => i).join(","),
        workExperience: filter?.workExperience
          ?.map(i => i?.replace("-", ","))
          .join(","),
        role: filter?.role?.map(i => i).join(","),
        locations: filter?.locations?.map(i => i).join(","),
        jobType: filter?.jobType?.map(i => i).join(","),
      })
    )
  }

  const clearFilter = () => {
    setFilter(initialValues)

    // dispatch(
    //   getAllJobs(0, 10, {
    //     status: {},
    //     workExperience: {},
    //     role: {},
    //     locations: {},
    //     jobType: {},
    //   })
    // )
  }

  const handleFilter = (e, type) => {
    console.log(filter[type])
    if (filter[type].includes(e)) {
      setFilter({ ...filter, [type]: filter[type].filter(i => i != e) })
    } else {
      setFilter({ ...filter, [type]: [...filter[type], e] })
    }
  }

  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasLeft"
      aria-labelledby="offcanvasLeftLabel"
      style={{ backgroundColor: "#E5E5E5" }}
    >
      <div className="offcanvas-body p-3">
        <div>
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Filter</h5>{" "}
            <GrFormClose
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasLeft"
              aria-controls="offcanvasLeft"
              className="cursor"
              size={30}
            />
          </div>

          <hr></hr>
          <small className="text-secondary">By Role</small>

          <div className="mb-5">
            {settings?.jobTitle?.map(i => (
              <div className="mt-3">
                <Input
                  type="checkbox"
                  value={i}
                  checked={filter?.role?.includes(i)}
                  onChange={e => handleFilter(i, "role")}
                />
                <span className="ms-1">{toCapitalize(i)}</span>
              </div>
            ))}
          </div>

          <hr></hr>
          <small className="text-secondary">By Location</small>

          <div className="mb-5">
            {location?.locations?.map(i => (
              <div className="mt-3">
                <Input
                  type="checkbox"
                  value={i._id}
                  checked={filter?.locations?.includes(i._id)}
                  onChange={e => handleFilter(i._id, "locations")}
                />
                <span className="ms-1">{i?.locationName}</span>
              </div>
            ))}
          </div>

          <hr></hr>
          <small className="text-secondary">By Job-Type</small>

          <div className="mb-5">
            {settings?.jobType?.map(i => (
              <div className="mt-3">
                <Input
                  type="checkbox"
                  value={i}
                  checked={filter?.jobType?.includes(i)}
                  onChange={e => handleFilter(i, "jobType")}
                />
                <span className="ms-1">{toCapitalize(i)}</span>
              </div>
            ))}
          </div>

          <hr></hr>
          <small className="text-secondary">By Experience</small>

          <div className="mb-5">
            {filterExp.map(i => (
              <div className="mt-3">
                <Input
                  type="checkbox"
                  value={i}
                  checked={filter?.workExperience?.includes(i)}
                  onChange={e => handleFilter(i, "workExperience")}
                />
                <span className="ms-1">{toCapitalize(i)} Years</span>
              </div>
            ))}
          </div>

          <hr></hr>
          <small className="text-secondary">By Status</small>

          <div className="mb-5">
            {filterStatus.map(i => (
              <div className="mt-3">
                <Input
                  type="checkbox"
                  value={i}
                  checked={filter?.status?.includes(i)}
                  onChange={e => handleFilter(i, "status")}
                />
                <span className="ms-1">{toCapitalize(i)}</span>
              </div>
            ))}
          </div>

          <p className="btn btn-main2 right form-control" onClick={onSubmit}>
            Apply Filter
          </p>
          <br></br>
          <button
            className="btn btn-main right form-control"
            onClick={clearFilter}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobsFilter
