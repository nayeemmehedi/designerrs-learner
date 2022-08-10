import React, { useEffect, useState } from "react"
import moment from "moment"
import { Label } from "reactstrap"
import axiosApi from "../../../../../Helper/api"
import {
  createCaseStudy,
  getCaseStudy,
  getPortfolio,
} from "../../../../../Store/Portfolio/Action"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import Loading from "../../../../Common/Loading"
import { Tooltip } from "@mui/material"
import { TagValue } from "../../../common/StyleComponents"
import { useParams } from "react-router-dom"

const Medium = ({ toggle }) => {
  const dispatch = useDispatch()
  const { portfolioValue, medium, error } = useSelector(
    state => state.PortfolioReducers
  )
  console.log(portfolioValue, medium)

  const [mediumName, setmediumName] = useState(portfolioValue?.mediumUsername)

  useEffect(() => {
    setmediumName(portfolioValue?.mediumUsername)
  }, [portfolioValue])

  useEffect(() => {
    if (portfolioValue?.mediumUsername) {
      dispatch(getCaseStudy("medium", portfolioValue?.mediumUsername))
    }
  }, [portfolioValue?.mediumUsername])

  const [name, setName] = useState("")
  const [load, setLoad] = useState("")

  const { id } = useParams()
  const addUserName = () => {
    setLoad(true)
    axiosApi
      .post(`/learner/portfolio`, { mediumUsername: name })
      .then(res => {
        dispatch(getCaseStudy("medium", name))
        setmediumName(setmediumName)
        setLoad(false)
      })
      .catch(err => {
        setLoad(false)
      })
  }

  //Modify Array

  useEffect(() => {
    medium?.forEach(i => (i.selected = false))
  }, [medium])
  console.log(medium)

  const [allfiles, setAllfiles] = useState(medium)
  useEffect(() => {
    setAllfiles(medium)
  }, [medium])

  const [selectedFiles, setSelectedFiles] = useState([])

  const handleSelected = data => {
    const check = selectedFiles.every(item => {
      return item.title !== data.title
    })

    const available = selectedFiles.find(i => i.title === data.title)

    if (available) {
      allfiles?.forEach(i => {
        if (i.title == data.title) {
          i.selected = false
        }
      })
    }

    if (!check)
      return setSelectedFiles(selectedFiles.filter(i => i.title !== data.title))

    allfiles.forEach(i => {
      if (i.title == data.title) {
        i.selected = true
      }
    })

    setSelectedFiles([...selectedFiles, data])
  }

  const submit = async () => {
    const data = selectedFiles.filter(i => i.selected)
    await data.map(i => dispatch(createCaseStudy(i)))
    toggle()
  }
  if (load) return <Loading />
  return (
    <div
      style={{ maxHeight: "450px", overflowY: "scroll", overflowX: "hidden" }}
    >
      {!mediumName ? (
        <div className="my-5 col-md-6">
          <h5 className="txtColor">Connect Your Medium</h5>
          <Label>
            <small className="fw-bold">
              To add your case studies, provide your username
            </small>
          </Label>
          <input
            className="form-control"
            type="text"
            placeholder="Medium Username"
            onChange={e => setName(e.target.value)}
          />
          <button
            // className="btn btn-main2 mt-4"
            className={`btn btn-main2 px-3 my-4`}
            onClick={addUserName}
          >
            {load ? "Adding..." : "Add"}
          </button>
        </div>
      ) : (
        <>
          <div className="row my-4">
            {medium.map(i => (
              <div className="col-md-4">
                <div className="p-2 cursor">
                  <div style={{ position: "relative" }}>
                    <img
                      onClick={() => handleSelected(i)}
                      src={i?.thumbnail}
                      alt="img"
                      style={{
                        height: "120px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className="px-2"
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        color: "white",
                        backgroundColor: "#1f1f1fc5",
                      }}
                    >
                      {i.selected ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Tooltip title={i?.title} placement="top-start">
                      <TagValue line="3">
                        <small className="fw-bold">
                          <a href={i?.link} target="_blank">
                            {i?.title?.substring(0, 25)}...
                          </a>
                        </small>
                      </TagValue>
                    </Tooltip>

                    <small className="fw-bold">
                      {moment(i?.pubDate).format("LL")}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`btn btn-main2 px-3 my-4 form-control`}
            onClick={submit}
          >
            Submit and add Case Studies
          </button>
        </>
      )}
    </div>
  )
}

export default Medium
