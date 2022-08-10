import React from "react"
import { useState } from "react"
import { DownloadCloud } from "react-feather"
// import useDragDrop from "../../../../../../hooks/useDragDrop";
import { useEffect } from "react"
// import axiosApi from "../../../../../../helpers/api";
import SweetAlert from "react-bootstrap-sweetalert"
import swal from "sweetalert"
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop"
import axiosApi, { patch } from "../../../Helper/api"
import { useDispatch, useSelector } from "react-redux"
import { notifyError, notifyLoading } from "../../../Store/notify/actions"

const Image4 = ({ id }) => {
  const dispatch = useDispatch()
  const { mentorData } = useSelector(state => state.OnBoardingMentor)

  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: PanBackInput,
    open: PanBackOpen,
    files: PanBack,
    handleRemoveAllFiles: PanBackRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: adhrFontInputProps,
    open: adhrFontOpen,
    files: adhrFont,
    handleRemoveAllFiles: adhrFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: adhrBackInputProps,
    open: adhrBackOpen,
    files: adhrBack,
    handleRemoveAllFiles: adhrBackRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const [image1, setImage1] = useState({})
  const [image2, setImage2] = useState({})
  const [image3, setImage3] = useState({})
  const [image4, setImage4] = useState({})

  useEffect(() => {
    setImage1({ link: mentorData?.kyc?.panCard?.front?.link })
    setImage2({ link: mentorData?.kyc?.panCard?.back?.link })
    setImage3({ link: mentorData?.kyc?.aadharCard?.front?.link })
    setImage4({ link: mentorData?.kyc?.aadharCard?.back?.link })
  }, [mentorData])

  useEffect(() => {
    if (PanFont.length <= 0) return
    setImage1({ link: URL.createObjectURL(PanFont[0]) })
  }, [PanFont])

  useEffect(() => {
    if (PanBack.length <= 0) return
    setImage2({ link: URL.createObjectURL(PanBack[0]) })
  }, [PanBack])

  useEffect(() => {
    if (adhrFont.length <= 0) return
    setImage3({ link: URL.createObjectURL(adhrFont[0]) })
  }, [adhrFont])

  useEffect(() => {
    if (adhrBack.length <= 0) return
    setImage4({ link: URL.createObjectURL(adhrBack[0]) })
  }, [adhrBack])

  const removeImage = value => {
    if (value === 1) return setImage1({})
    if (value === 2) return setImage2({})
    if (value === 3) return setImage3({})
    if (value === 4) return setImage4({})
  }

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [imgError, setimgError] = useState(false)

  const submitValue = () => {
    if (
      PanFont.length > 0 &&
      PanBack.length > 0 &&
      adhrFont.length > 0 &&
      adhrBack.length > 0
    ) {
      setimgError(false)

      let formData = new FormData()

      formData.append("panCardFront", PanFont[0])
      formData.append("panCardBack", PanBack[0])
      formData.append("aadhaarCardBack", adhrBack[0])
      formData.append("aadhaarCardFront", adhrFont[0])

      console.log("i o", PanFont[0])
      dispatch(notifyLoading(true))
      axiosApi
        .patch(`/learner/kyc`, formData)
        .then(res => {
          console.log(res)
          dispatch(notifyLoading(false))
        })
        .catch(err => {
          dispatch(notifyLoading(false))
          dispatch(notifyError("Invalid Operation"))
        })
    } else {
      dispatch(notifyError("First Fill UP EVERY IMAGE"))
    }
  }

  return (
    <div className="my-4">
      {/* <p className="text-secondary">Branch Images *</p> */}

      <div className="row w-50">
        <div className="col-sm-12  col-md-12 col-lg-6">
          {!image1.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...PanFrontInput()} />
                  <div
                    onClick={PanFontOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>

                    <small className="text-secondary">
                      Pan Card Front
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  PanFontRemoveAllFiles()
                  removeImage(1)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={image1?.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>

        <div className="col-md-6">
          {!image2.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...PanBackInput()} />
                  <div
                    onClick={PanBackOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Pan Card Back
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  PanBackRemoveAllFiles()
                  removeImage(2)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={image2?.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>

        <div className="col-md-6">
          {!image3.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...adhrFontInputProps()} />
                  <div
                    onClick={adhrFontOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Aadhaar Card Front
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  adhrFontRemoveAllFiles()
                  removeImage(3)
                }}
              >
                X <small>Remove</small>
              </h6>
              <img src={image3?.link} alt="thumbnail" className="w-100" />
            </>
          )}
        </div>
        <div className="col-md-6">
          {!image4.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...adhrBackInputProps()} />
                  <div
                    onClick={adhrBackOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Aadhaar Card Back
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  adhrBackRemoveAllFiles()
                  removeImage(4)
                }}
              >
                X <small>Remove</small>
              </h6>
              <img src={image4?.link} alt="thumbnail" className="w-100" />
            </>
          )}
        </div>
      </div>

      <div class="d-grid gap-2 w-50">
        <button className="btn btn-main2 my-3" onClick={submitValue}>
          Submit
        </button>
      </div>

      {imgError && (
        <p className="text-danger mt-3">First Fill UP EVERY IMAGE</p>
      )}

      {success && <h6 className="text-success">Successfully Done..</h6>}
      {error && <h6 className="text-success">Server Error..</h6>}

      {/* 
      {error ? (
        <SweetAlert
          title={"Something went wrong!"}
          warning
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null} */}

      {/* {success && swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          })}

      {error ? (
        <SweetAlert
          title={"Something went wrong!"}
          warning
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null} */}

      <hr />
    </div>
  )
}

export default Image4
