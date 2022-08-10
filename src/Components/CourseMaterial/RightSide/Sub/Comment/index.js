import React from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"

const Comment = () => {
  const { comments: fecthComments, commentIdx } = useSelector(
    state => state.courseMaterials
  )
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        {fecthComments.map((i, idx) => (
          <>
            <div
              className="p-2"
              style={{
                backgroundColor: commentIdx === idx ? "#f5f5f5" : "white",
              }}
              onClick={() => dispatch({ type: "CMNT_IDX", payload: idx })}
            >
              <div className="d-flex justify-content-between align-items-center cursor">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="bg-white rounded-circle">
                    {i?.user?.profilePicture?.link ? (
                      <img
                        className="rounded-circle"
                        src={i?.user?.profilePicture?.link}
                        alt="user"
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#C4C4C4",
                          borderRadius: "50%",
                        }}
                      ></div>
                    )}
                  </div>
                  <div className="mx-3 mt-2">
                    <span className="txtColor fw-bold">
                      {i?.user?.fullName}
                    </span>
                    <p className="fw-bold">{moment(i?.createdAt).fromNow()}</p>
                  </div>
                </div>
                <p>{i?.replies?.length}</p>
              </div>
              <p className="text-secondary">{i?.text}</p>
            </div>
            <hr></hr>
          </>
        ))}
      </div>
    </div>
  )
}

export default Comment

//   <span style={{ borderBottom: "3px solid #cd2026" }}>Comments</span>
//   <div className="my-4">
//     <hr></hr>
//   </div>
