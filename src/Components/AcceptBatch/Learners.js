import React from "react"
import Map from "./Map.svg"
import { FiNavigation } from "react-icons/fi"

const Learners = ({ details }) => {
  const laern = [
    {
      fullName: "John Data",
      profilePicture: {},
    },
  ]
  return (
    <div className="my-2">
      <div className="bg-white p-5">
        <h4 className="fw-bold txtColor">You’ll be mentoring</h4>
        <p>12 Learners in total</p>
        <div className="row d-flex my-4">
          {laern?.map(i => (
            <div className="col-md-2 text-center" key={i?._id}>
              {i?.profilePicture?.link ? (
                <img
                  src={i?.profilePicture?.link}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "#C4C4C4",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                ></div>
              )}
              <br></br>
              <small>{i?.fullName?.split(" ")[0]}</small>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={Map} />
        <div
          className="p-2 bg-danger text-white"
          style={{ position: "absolute", top: "20px", left: "20px" }}
        >
          <p className="my-2">Namma Bengaluru Office</p>
          <p className="py-2 px-3 m-0 my-3" style={{ backgroundColor: "brown" }}>
            <FiNavigation size="20" />{" "}
            <span className="ms-2">55 minutes from your location</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Learners
