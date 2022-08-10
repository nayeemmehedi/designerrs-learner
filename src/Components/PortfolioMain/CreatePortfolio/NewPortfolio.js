import React, { useEffect, useState } from "react"
import * as Yup from "yup"

import { Form, Input, Label } from "reactstrap"
import { useFormik } from "formik"
import CustomInputField from "../common/CustomInputField"
import { aboutYou } from "../../../utils/portfolio/createPortfolio"
import { Element } from "react-scroll"
import useDragDrop from "../../../Pages/CourseMaterial/useDragDrop"
import { useDispatch, useSelector } from "react-redux"
import { getGlobalData, postPortfolio } from "../../../Store/Portfolio/Action"
import CustomModal from "../common/CustomModal"
import { GrFormClose } from "react-icons/gr"
import { toCapitalize } from "../../../Helper/Custom/toCapitalize"
import { AiFillCloseCircle } from "react-icons/ai"
import Education from "./Sub/Education"
import Portfolio from "./Sub/Portfolio"
import WorkExperience from "./Sub/WorkExperience"
import { getLocation } from "../../../Store/Location/action"
import SackBar from "../../Common/SackBar"
import axiosApi from "../../../Helper/api"

const createPortfolioSchema = Yup.object().shape({
  // fullName: Yup.string().required("This value is required"),
  // about: Yup.string().required("This value is required"),
  // residence: Yup.string().required("This value is required"),
  secondaryLocation: Yup.string().required("This value is required"),
})

function NewPortfolio() {
  const { user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGlobalData())
    dispatch(getLocation())
  }, [])

  const { location } = useSelector(state => state.Location)

  const initialValues = {
    fullName: user?.fullName,
    about: "",
    expectedCTC: "",
    primaryLocation: "",
    secondaryLocation: "",
  }

  //About

  const {
    getRootProps,
    style,
    getInputProps,
    open,
    files,
    handleRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`, null, null, false)

  const [image1, setImage1] = useState({})
  console.log(files)

  useEffect(() => {
    if (files.length <= 0) return
    setImage1({ link: URL.createObjectURL(files[0]) })
  }, [files])

  const removeImage = value => {
    if (value === 1) return setImage1({})
  }

  // Social Media
  const socialState = [
    { website: "", url: "" },
    { website: "", url: "" },
    { website: "", url: "" },
  ]
  const [socialMedia, setSocialMedia] = useState(socialState)

  const handleSocailWeb = (index, value) => {
    const newSocialMedia = [...socialMedia]
    newSocialMedia[index].website = value
    setSocialMedia(newSocialMedia)
  }
  const handleSocailUrl = (index, value) => {
    const newSocialMedia = [...socialMedia]
    newSocialMedia[index].url = value
    setSocialMedia(newSocialMedia)
  }

  //Skills and Tools

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const [type, setType] = useState(null)

  const { global } = useSelector(state => state.PortfolioReducers)

  const [skills, setSkills] = useState([])
  const [tools, setTools] = useState([])

  //Education
  const educationState = [
    {
      institute: "",
      fieldOfStudy: "",
      domain: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]
  const [education, setEducation] = useState(educationState)

  //Work Experience
  const expState = [
    {
      designation: "",
      companyName: "",
      domain: "",
      annualCTC: "",
      startDate: "",
      endDate: "",
      description: "",
      experience: "",
      currentlyWorking: true,
      skills: [],
      tools: [],
    },
  ]

  const [workExp, setWorkExp] = useState(expState)

  //WOrk Pref

  const [op, setOp] = useState(false)
  const handleChek = e => {
    const { checked } = e.target
    if (checked) {
      setOp(true)
    } else {
      setOp(false)
    }
  }

  const onSubmit = values => {
    const post = {
      ...values,
      about: { body: values.about },
      socialMedia: socialMedia,
      skills,
      tools,
      education,
      workExperience: workExp,
      workPreferences: {
        expectedCTC: values?.expectedCTC,
        openToOpportunities: op,
        primaryLocation: values?.primaryLocation,
        secondaryLocation: values?.secondaryLocation,
      },
    }

    const formData = new FormData()
    formData.append("profilePicture", files[0])
    formData.append("fullName", values.fullName)

    axiosApi
      .patch(`/learners/${user?.uid}`, formData)
      .then(res => {
        dispatch(postPortfolio(user?.uid, post))
      })
      .catch(err => {
        console.log(err)
      })
    console.log(post)
  }

  const postData = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: createPortfolioSchema,
    onSubmit,
  })

  const { portfolioValue } = useSelector(state => state.PortfolioReducers)

  return (
    <div>
      <CustomModal modal={modal} toggle={toggle} size={"md"}>
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">{toCapitalize(type)}</h5>
            <GrFormClose onClick={toggle} className="cursor" size={30} />
          </div>
          <hr></hr>
          <div>
            <Label>Select {toCapitalize(type)}</Label>
            <Input
              type="select"
              onChange={e =>
                type == "skills"
                  ? setSkills([...skills, e.target.value])
                  : setTools([...tools, e.target.value])
              }
            >
              <option defaultValue>Click Here</option>
              {(type == "skills"
                ? global.learneSkills
                : global.learnerTools
              )?.map((i, idx) => (
                <option key={idx} value={i}>
                  {i}
                </option>
              ))}
            </Input>
          </div>
          <div className="my-3">
            {(type == "skills" ? skills : tools)?.map((i, idx) => (
              <p className="border p-1 tag m-1" style={{ float: "left" }}>
                {i}
                <span className="cursor mx-1">
                  <AiFillCloseCircle
                    onClick={() =>
                      type == "skills"
                        ? setSkills(skills.filter((i, indx) => indx != idx))
                        : setTools(tools.filter((i, indx) => indx != idx))
                    }
                  />
                </span>
              </p>
            ))}
          </div>
          <button className="form-control btn btn-main2 my-3" onClick={toggle}>
            Add
          </button>
        </div>
      </CustomModal>

      <Form onSubmit={postData.handleSubmit}>
        <Element id="About You">
          <h3 className="fw-thin txtSecondary">About You</h3>
          <div className="my-3">
            {/* Image */}
            <div className="my-3 col-md-3">
              {portfolioValue?.user?.profilePicture?.link || image1?.link ? (
                <div onClick={open}>
                  <input {...getInputProps()} />
                  <img
                    src={
                      image1?.link
                        ? image1?.link
                        : portfolioValue?.user?.profilePicture?.link
                    }
                    alt="userImage"
                    style={{
                      maxHeight: "450px",
                      maxWidth: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <div>
                  <div className="row image-resize-card ">
                    <div className="mt-3 mb-2">
                      <div
                        className="text-center bgSecondary"
                        style={{ height: "200px" }}
                      >
                        <input {...getInputProps()} />
                        <div
                          onClick={open}
                          className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                        >
                          <small className="text-secondary">
                            <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                          </small>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="border border-danger text-center">
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div onClick={open}>
                          {" "}
                          <p
                            className="my-2 text-danger"
                            style={{ fontSize: "13px" }}
                          >
                            Change Profile Picture
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-md-6">
              {aboutYou.map((i, idx) => (
                <CustomInputField
                  key={idx}
                  name={i?.key}
                  type={i?.type}
                  label={i?.label}
                  placeholder={i?.placeholder}
                  validationType={postData}
                  disabled={i?.disabled}
                />
              ))}
            </div>
          </div>
        </Element>
        <hr></hr>

        <Element id="Social Media Profile">
          <h3 className="fw-thin txtSecondary">Social Media Profile</h3>
          {socialMedia.map((i, idx) => (
            <div className="col-md-6">
              <div className="my-3">
                <Label className="fw-bold">
                  <small>Website</small>
                </Label>
                <Input
                  key={idx}
                  onChange={e => handleSocailWeb(idx, e.target.value)}
                  placeholder="Facebook"
                />
              </div>
              <div className="my-3">
                <Label className="fw-bold">
                  <small>Url</small>
                </Label>
                <Input
                  key={idx}
                  onChange={e => handleSocailUrl(idx, e.target.value)}
                  placeholder="www.facebook.com/user"
                />
              </div>
            </div>
          ))}
          <button
            className="btn btn-main2 my-3"
            onClick={() =>
              setSocialMedia([...socialMedia, { website: "", url: "" }])
            }
          >
            + Add more Social Media Profile
          </button>
        </Element>

        <hr></hr>
        <Element id="Skills and Tools">
          <h3 className="fw-thin txtSecondary">Skills and Tools</h3>

          <div className="my-3 col-md-6">
            <Label className="fw-bold">
              <small>Skills shown in your portfolio</small>
            </Label>
            <div className="form-control bgSecondary">
              {skills.map((i, idx) => (
                <p
                  className="border p-1 m-1 bgRed text-white"
                  style={{ float: "left" }}
                >
                  {i}
                  <span className="cursor m-1">
                    <AiFillCloseCircle
                      onClick={() =>
                        setSkills(skills.filter((i, indx) => indx != idx))
                      }
                    />
                  </span>
                </p>
              ))}
              <button
                className="btn btn-main mt-1"
                onClick={() => {
                  toggle()
                  setType("skills")
                }}
              >
                + Add
              </button>
            </div>
          </div>
          <div className="my-3 col-md-6">
            <Label className="fw-bold">
              <small>Tools shown in your portfolio</small>
            </Label>
            <div className="form-control bgSecondary">
              {tools.map((i, idx) => (
                <p
                  className="border p-1 m-1 bgRed text-white"
                  style={{ float: "left" }}
                >
                  {i}
                  <span className="cursor m-1">
                    <AiFillCloseCircle
                      onClick={() =>
                        setTools(tools.filter((i, indx) => indx != idx))
                      }
                    />
                  </span>
                </p>
              ))}
              <button
                className="btn btn-main mt-1"
                onClick={() => {
                  toggle()
                  setType("tools")
                }}
              >
                + Add
              </button>
            </div>
          </div>
        </Element>
        <hr></hr>
        <Element id="Education">
          <h3 className="fw-thin txtSecondary">Education</h3>
          <Education
            education={education}
            setEducation={setEducation}
            global={global}
          />
          <button
            className="btn btn-main2"
            onClick={() => setEducation([...education, educationState])}
          >
            + Add Educaation
          </button>
        </Element>
        <hr></hr>
        <Element id="Portfolio">
          <h3 className="fw-thin txtSecondary">Portfolio</h3>
          <Portfolio />
        </Element>
        <hr></hr>
        <Element id="Work Experience">
          <h3 className="fw-thin txtSecondary">Work Experience</h3>
          {workExp?.map((i, idx) => (
            <WorkExperience
              i={idx}
              data={i}
              workExp={workExp}
              setWorkExp={setWorkExp}
              global={global}
            />
          ))}
          <button
            className="btn btn-main2"
            onClick={() => setWorkExp([...workExp, ...expState])}
          >
            + Add Educaation
          </button>
        </Element>
        <hr></hr>
        <Element id="Work Preferences">
          <h3 className="fw-thin txtSecondary">Work Preferences</h3>
          <small className="mt-2">
            <div className="mt-2">
              <Input type="checkbox" onChange={e => handleChek(e)} /> I’m Open
              to Opportunities
            </div>
          </small>
          <div className="my-4">
            <CustomInputField
              name={"expectedCTC"}
              type={"number"}
              label={"Expected CTC (In Lakhs)"}
              placeholder={"Ex: 3.5"}
              validationType={postData}
            />
          </div>
          <div className="my-4 col-md-6">
            <CustomInputField
              name={"primaryLocation"}
              type={"select"}
              label={""}
              style={"mb-0"}
              validationType={postData}
            >
              {" "}
              <option defaultValue>Select Primary Preferred Location</option>
              {location?.locations?.map((i, idx) => (
                <option key={idx} value={i._id}>
                  {i?.locationName}
                </option>
              ))}
            </CustomInputField>
            <CustomInputField
              name={"secondaryLocation"}
              type={"select"}
              label={""}
              style={"mb-0 mt-0"}
              validationType={postData}
            >
              {" "}
              <option defaultValue>Select Secondary Preferred Location</option>
              {location?.locations?.map((i, idx) => (
                <option key={idx} value={i._id}>
                  {i?.locationName}
                </option>
              ))}
            </CustomInputField>
          </div>
        </Element>
        <SackBar title="Save" />
      </Form>
    </div>
  )
}

export default NewPortfolio
