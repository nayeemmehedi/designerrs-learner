import React from "react"
import { useState } from "react"
import { DownloadCloud } from "react-feather"
// import useDragDrop from "../../../../../../hooks/useDragDrop";
import { useEffect } from "react"
// import axiosApi from "../../../../../../helpers/api";
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop"
import axiosApi from "../../../Helper/api"
import { updateMentorPortfolio } from "../../../Store/Mentor/actions"
import { useDispatch, useSelector } from "react-redux"

const Availability = ({ id }) => {
  const dispatch = useDispatch()

  const { mentorData } = useSelector(state => state.OnBoardingMentor)

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [imgError, setimgError] = useState(false)

  const {
    getRootProps,
    style,
    getInputProps: image1Int,
    open: image1Open,
    files: image1,
    handleRemoveAllFiles: image1RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: image2Int,
    open: image2Open,
    files: image2,
    handleRemoveAllFiles: image2RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: image3Int,
    open: image3Open,
    files: image3,
    handleRemoveAllFiles: image3RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const {
    getInputProps: image4Int,
    open: image4Open,
    files: image4,
    handleRemoveAllFiles: image4RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)
  const {
    getInputProps: image5Int,
    open: image5Open,
    files: image5,
    handleRemoveAllFiles: image5RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)
  const {
    getInputProps: image6Int,
    open: image6Open,
    files: image6,
    handleRemoveAllFiles: image6RemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`)

  const [img1, setImg1] = useState({})
  const [img2, setImg2] = useState({})
  const [img3, setImg3] = useState({})
  const [img4, setImg4] = useState({})
  const [img5, setImg5] = useState({})
  const [img6, setImg6] = useState({})

  useEffect(() => {
    setImg1({ link: mentorData?.mentorAgreement?.[0]?.link })
    setImg2({ link: mentorData?.mentorAgreement?.[1]?.link })
    setImg3({ link: mentorData?.mentorAgreement?.[2]?.link })
    setImg4({ link: mentorData?.mentorAgreement?.[3]?.link })
    setImg5({ link: mentorData?.mentorAgreement?.[4]?.link })
    setImg6({ link: mentorData?.mentorAgreement?.[5]?.link })
  }, [mentorData])

  useEffect(() => {
    if (image1.length <= 0) return
    setImg1({ link: URL.createObjectURL(image1[0]) })
  }, [image1])
  useEffect(() => {
    if (image2.length <= 0) return
    setImg2({ link: URL.createObjectURL(image2[0]) })
  }, [image2])

  useEffect(() => {
    if (image3.length <= 0) return
    setImg3({ link: URL.createObjectURL(image3[0]) })
  }, [image3])

  useEffect(() => {
    if (image4.length <= 0) return
    setImg4({ link: URL.createObjectURL(image4[0]) })
  }, [image4])

  useEffect(() => {
    if (image5.length <= 0) return
    setImg5({ link: URL.createObjectURL(image5[0]) })
  }, [image5])

  useEffect(() => {
    if (image6.length <= 0) return
    setImg6({ link: URL.createObjectURL(image6[0]) })
  }, [image6])

  const removeImage = value => {
    if (value === 1) return setImg1({})
    if (value === 2) return setImg2({})
    if (value === 3) return setImg3({})
    if (value === 4) return setImg4({})
    if (value === 5) return setImg5({})
    if (value === 6) return setImg6({})
  }

  // console.log("image3", image1[0])

  const submitValue = () => {
    if (
      image1.length > 0 ||
      image2.length > 0 ||
      image3.length > 0 ||
      image4.length > 0 ||
      image5.length > 0 ||
      image6.length > 0
    ) {
      setimgError(false)

      let allValue = [
        image1[0],
        image2[0],
        image3[0],
        image4[0],
        image5[0],
        image6[0],
      ]

      let formData = new FormData()

      formData.append("mentorAgreement", image1[0])
      formData.append("mentorAgreement", image2[0])
      formData.append("mentorAgreement", image3[0])
      formData.append("mentorAgreement", image4[0])
      formData.append("mentorAgreement", image5[0])
      formData.append("mentorAgreement", image6[0])

      // for (let i = 0; i < allValue.length; i++) {
      //   const element = allValue[i];
      //   console.log("allValue[i]",allValue[i])

      //   formData.append(`mentorAgreement`, element);
      // }

      dispatch(updateMentorPortfolio(formData))
    } else {
      setimgError(true)
    }
  }

  return (
    <div>
      <hr />

      <p className="fw-bold mt-4">Mentor Agreement</p>

      <div className="row w-75">
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img1.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image1Int()} />
                  <div
                    onClick={image1Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image1RemoveAllFiles()
                  removeImage(1)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img1.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img2.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image2Int()} />
                  <div
                    onClick={image2Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image2RemoveAllFiles()
                  removeImage(2)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img2.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img3.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image3Int()} />
                  <div
                    onClick={image3Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image3RemoveAllFiles()
                  removeImage(3)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img3.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img4.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image4Int()} />
                  <div
                    onClick={image4Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image4RemoveAllFiles()
                  removeImage(4)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img4.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img5.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image5Int()} />
                  <div
                    onClick={image5Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image5RemoveAllFiles()
                  removeImage(5)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img5.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          {!img6.link ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...image6Int()} />
                  <div
                    onClick={image6Open}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={e => e.preventDefault()}></a>{" "}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h6
                className="mt-3 cursor"
                onClick={() => {
                  image6RemoveAllFiles()
                  removeImage(6)
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={img6.link} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>
      </div>

      <div class="d-grid gap-2 w-75 mt-3">
        <button className="btn btn-main2" onClick={submitValue}>
          Submit
        </button>
      </div>

      {imgError && <p className="text-danger mt-3">First Fill UP IMAGE</p>}

      {success && <h6 className="text-success">Successfully Done..</h6>}
      {error && <h6 className="text-success">Server Error..</h6>}
    </div>
  )
}

export default Availability
