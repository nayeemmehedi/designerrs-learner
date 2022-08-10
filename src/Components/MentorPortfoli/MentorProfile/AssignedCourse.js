import React from "react"
import { useState } from "react"
import AssignedCourseChild from "./AssignedCourseChild"
import credit from "../../../Assets/mentorPortfolio/credit.svg"
import bali from "../../../Assets/mentorPortfolio/Bali.svg"

const pages = [
  {
    _id: "hgfr2",
    status: "active",
  },
  {
    _id: "small",
    status: "active",
  },
  {
    _id: "small34",
    status: "inActive",
  },
]
function AssignedCourse() {
  const [DroptDown, setDroptDown] = useState(null)

  return (
    <div className="mb-4">
      <p className="fw-bold">Assigned Course</p>
      <div className=" p-4 bgColor11">
        <span style={{ fontSize: "30px", color: "#d43a47" }}>
          {" "}
          <div className="d-flex">
            <img
              src="https://images.pexels.com/photos/751373/pexels-photo-751373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Avatar"
              className="avatar"
            ></img>

            <div className="ms-3  text-dark">
              <p
                className="fs-6 fw-bold mb-1 p-0 "
                style={{ paddingLeft: "5px" }}
              >
                {" "}
                Ux/Ui design from Scratch
              </p>

              <p style={{ fontSize: "12px" }} className="m-0 p-0">
                date:2 march 2022
              </p>
            </div>
          </div>
        </span>

        <hr />

        <div className="course-table table-responsive my-3 mx-2">
          <p>Payroll Details</p>
          <table className="table table-striped">
            <thead className="thead-custom ">
              <tr
                className="text-secondary border"
                style={{ fontSize: "12px" }}
              >
                <th>Month</th>
                <th>Payment Amount</th>
                <th>Date of Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {pages?.map((i, idx) => (
                <>
                  <tr key={idx} className="align-middle bg-light">
                    <td className="fw-normal">March 2021</td>
                    <td>$ 11,800</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="">05 April 2020</span>
                      </div>
                    </td>
                    <td>
                      {i.status == "active" ? (
                        <div
                          style={{ color: "#007618" }}

                          // i.status == "active" ? "activeBtn" : "inActiveBtn"
                        >
                          {/* {i.status == "active" ? "Active" : "Inactive"} */}
                          <img
                            src={credit}
                            style={{ height: "14px", width: "auto" }}
                            alt=""
                          />{" "}
                          <span className="font13"> Credited</span>
                        </div>
                      ) : (
                        <div
                          className=""

                          // i.status == "active" ? "activeBtn" : "inActiveBtn"
                        >
                          {/* {i.status == "active" ? "Active" : "Inactive"} */}
                          <img
                            src={bali}
                            style={{ height: "14px", width: "auto" }}
                            alt=""
                          />{" "}
                          <span
                            className="font13 ms-2"
                            style={{ color: "#6B3401" }}
                          >
                            {" "}
                            To be Credited
                          </span>
                        </div>
                      )}
                    </td>

                    <td>
                      <p
                        className="DroptDown"
                        onClick={() =>
                          setDroptDown(i?._id == DroptDown ? null : i?._id)
                        }
                      >
                        {DroptDown == i?._id && i.status == "active" ? (
                          <i class="fa-solid fa-angle-up"></i>
                        ) : (
                          <i class="fa-solid fa-angle-down"></i>
                        )}
                      </p>
                    </td>
                  </tr>

                  <tr
                    class="fold"
                    style={{
                      display: DroptDown == i?._id ? "table-row" : "none",
                    }}
                  >
                    {i?.status == "active" && (
                      <td colspan="7">
                        <div class="fold-content">
                          <div style={{ width: "100%", display: "block" }}>
                            <AssignedCourseChild></AssignedCourseChild>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AssignedCourse
