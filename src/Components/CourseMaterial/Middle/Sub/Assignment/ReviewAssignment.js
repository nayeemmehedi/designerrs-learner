import React, { useState, useRef, useEffect } from "react"
import Pin from "../../../../../Assets/Images/icons/pin.svg"
import Cross from "../../../../../Assets/Images/icons/cross.svg"
import LeftIcon from "../../../../../Assets/Images/icons/leftIcon.svg"
import rightIcon from "../../../../../Assets/Images/icons/rightIcon.svg"

import { postComment } from "../../../../../Store/courseMaterial/actions"
import { useDispatch, useSelector } from "react-redux"
import ShowNameImage from "../../../../Common/ShowNameImage"

const ReviewAssignment = ({ assignment }) => {
  const dispatch = useDispatch()

  const { comments: fecthComments, commentIdx } = useSelector(
    state => state.courseMaterials
  )

  const [commentToggle, setCommentToggle] = useState(true)
  const [isCommentAdded, setIsCommentAdded] = useState(true)

  const imageRef = useRef()
  const [comments, setComments] = useState(
    fecthComments?.length > 0 ? fecthComments : []
  )

  useEffect(() => {
    setComments(fecthComments?.length > 0 ? fecthComments : [])
  }, [fecthComments])

  const [commentData, setCommentData] = useState("")
  const inputCommentPin = useRef()
  const pointPin = useRef()
  const [position, setPosition] = useState({})
  const [count, setCount] = useState(1)

  /// add comment
  const addComment = (e, id) => {
    if (!commentData) return
    e.preventDefault()
    const { x, y } = position

    if (id) {
      dispatch(
        postComment(assignment.id, {
          coordinates: {
            coordinateValue: Date.now(),
            x: x,
            y: y,
          },
          parentComment: id, // only required when adding a reply
          assignment: assignment?.id,
          text: commentData,
        })
      )
    } else {
      dispatch(
        postComment(assignment.id, {
          coordinates: {
            coordinateValue: Date.now(),
            x: x,
            y: y,
          },
          // parentComment: , // only required when adding a reply
          assignment: assignment?.id,
          text: commentData,
        })
        )
        setCommentToggle(!commentToggle)
        inputCommentPin.current.style.display = "none"
    }
    // if (coordinates?.length > 0) {
    //   setCount(count + (coordinates.length + 1))
    // }

    if (!id) {
      setComments(prev => [
        ...prev,
        {
          id: Date.now(),
          commentValue: commentData,
          x,
          y,
        },
      ])
      setCount(count + 1)
      setIsCommentAdded(true)
    }
    setCommentData("")

  }
  // / click on image
  const imageClick = (event, imageLink) => {
    setCommentToggle(!commentToggle)
    inputCommentPin.current.focus()
    let rect = event.target.getBoundingClientRect()
    let x = event.clientX - rect.left - 8
    let y = event.clientY - rect.top - 20
    inputCommentPin.current.style.display = "block"
    const elementWidth = imageRef.current.offsetWidth
    const elementHeigh = imageRef.current.offsetHeight
    const percentageX = (x / elementWidth) * 100
    const percentageY = (y / elementHeigh) * 100
    setPosition({ x: percentageX, y: percentageY })
    pointPin.current.style.visibility = "unset"
    pointPin.current.style.left = percentageX + "%"
    pointPin.current.style.top = percentageY + "%"
  }

  const commentPinHelper = (data, idx) => {
    return (
      <>
        <div
          key={idx}
          style={{
            position: "absolute",
            top: data?.coordinates?.y + "%",
            left: data?.coordinates?.x + "%",

            display: "flex",
          }}
        >
          <img
            src={Pin}
            onClick={() => dispatch({ type: "CMNT_IDX", payload: idx })}
            alt="pin"
            style={{ width: "20px", height: "25px" }}
          />

          <div
            className="py-1 px-2 bg-white  shadow-sm"
            style={{
              borderTop: "2px solid red",
              width: "350px",
              zIndex: 10000,
              display: commentIdx == idx ? "block" : "none",
            }}
          >
            <div className="d-flex justify-content-between">
              <ShowNameImage
                imageUrl={data?.user?.profilePicture?.link}
                value={data?.user?.fullName}
              />

              <img
                src={Cross}
                alt="cross"
                style={{
                  width: "15px",
                  height: "15px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
                onClick={() => dispatch({ type: "CMNT_IDX", payload: null })}
              />
            </div>

            <hr></hr>
            <p style={{ fontSize: "14px" }} className="px-2">
              {data?.text}
            </p>
            <hr></hr>

            {data?.replies?.map(i => replyUi(i, dispatch))}

            <div className="px-2">
              <input
                type="text"
                ref={inputCommentPin}
                value={commentData}
                style={{ display: "block" }}
                placeholder="Reply"
                onChange={e => {
                  setCommentData(e.target.value)
                }}
                className="form-control pininput my-2"
              />
              <button
                onClick={e => addComment(e, data._id)}
                className="mt-2"
                style={{
                  border: "none",
                  backgroundColor: "#CD2026",
                  padding: "3px 7px",
                  color: "#fff",
                }}
              >
                Submit
              </button>
              <div
                className="d-flex justify-content-between mt-2"
                onClick={() =>
                  dispatch({
                    type: "CMNT_IDX",
                    payload:
                      commentIdx == comments?.length ? idx : commentIdx + 1,
                  })
                }
              >
                <p style={{ color: "#CD2026", cursor: "pointer" }}>
                  <img
                    src={LeftIcon}
                    alt="icom"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                  Previous
                </p>
                <p
                  style={{ color: "#CD2026", cursor: "pointer" }}
                  onClick={() =>
                    dispatch({
                      type: "CMNT_IDX",
                      payload: commentIdx == 0 ? idx : commentIdx - 1,
                    })
                  }
                >
                  Next{" "}
                  <img
                    src={rightIcon}
                    alt="icom"
                    style={{ width: "15px", height: "15px" }}
                  />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="my-5">
      <div style={{ position: "relative" }}>
        <div
          className={!commentToggle ? "notVissbleComment" : "vissbleComment"}
          style={{
            position: "absolute",
            width: "300px",
          }}
          ref={pointPin}
        >
          <img src={Pin} alt="pin" style={{ width: "20px", height: "25px" }} />
          <div
            className="py-1 px-2 bg-white  shadow-sm"
            style={{ borderTop: "2px solid red", zIndex: 10000 }}
          >
            <div className="px-2 p-3">
              <div className="d-flex justify-content-end">
                <img
                  src={Cross}
                  alt="cross"
                  style={{
                    width: "15px",
                    height: "15px",
                    marginTop: "10px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  onClick={() => setCommentToggle(!commentToggle)}
                />
              </div>
              <input
                type="text"
                ref={inputCommentPin}
                value={commentData}
                style={{ display: "block" }}
                placeholder="Comment"
                onChange={e => {
                  setCommentData(e.target.value)
                }}
                className="form-control pininput my-2"
              />
              <button
                onClick={addComment}
                style={{
                  border: "none",
                  backgroundColor: "#CD2026",
                  padding: "5px 10px",
                  color: "#fff",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        {comments?.map((data, idx) => commentPinHelper(data, idx))}

        <img
          style={{ width: "100%", height: "100%" }}
          onClick={event => imageClick(event)}
          ref={imageRef}
          src={assignment?.canvas?.link}
          className="img-fluid"
          alt="assignment"
        />
      </div>
    </div>
  )
}

const replyUi = (data, dispatch) => {
  return (
    <div className="ps-4">
      <ShowNameImage
        imageUrl={data?.user?.profilePicture?.link}
        value={data?.user?.fullName}
      />

      <hr></hr>
      <p style={{ fontSize: "12px" }} className="px-2">
        {data?.text}
      </p>
      <hr></hr>
    </div>
  )
}

export default ReviewAssignment
