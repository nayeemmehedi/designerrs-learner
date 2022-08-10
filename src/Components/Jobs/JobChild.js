import React from "react"
import moment from "moment"
import Toolip2 from "../Common/Toolip2"

const JobsChild = ({ i, applied }) => {
  console.log(i)
  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center my-1">
            <img
              src={i?.jobPost?.company?.logo?.link}
              style={{
                height: "30px",
                width: "30px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <small
              className="ms-2 fw-bold cursor"
              // onClick={() => history.push(`{/job/${i?.jobPost?.company?.name}/${i?._id}}`)}
            >
              {i?.jobPost?.company?.name}
            </small>
          </div>
        </div>
      </div>
      <div className="d-flex">
        <p className="border p-1 tag m-1 bgSecondary">
          <small>{i?.jobPost?.jobType}</small>
        </p>
        <p className="border p-1 tag m-1 bgSecondary">
          <small>{i?.jobPost?.role}</small>
        </p>
        <p className="border p-1 tag m-1 bgSecondary">
          <small>
            <Toolip2
              toolip={i?.jobPost?.locations
                ?.map(i => i.locationName)
                .join(", ")}
              data={<>{i?.jobPost?.locations[0]?.locationName}</>}
            />
          </small>
        </p>
      </div>
      <small className="my-2 text-secondary">
        {applied ? "Applied" : "Applied by"} {moment(i?.createdAt).format("LL")}
      </small>
    </div>
  )
}

export default JobsChild
