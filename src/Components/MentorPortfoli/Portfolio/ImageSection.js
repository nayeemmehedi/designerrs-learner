import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import useDragDrop from "../../../../../hooks/useDragDrop";
import { DownloadCloud } from "react-feather";
import { RiFileUploadLine } from "react-icons/ri";
// import { updateLocations } from "../../../../../store/locations/actions";
import SweetAlert from "react-bootstrap-sweetalert";
import { withRouter } from "react-router-dom";
// import { notifyError } from "../../../../../../store/notify/actions";
// import { updateLocations } from "../../../../../../store/locations/actions";
// import useDragDrop from "../../../../../../hooks/useDragDrop";
// import { notifyError } from "../../../../../store/notify/actions";
// FaFileUpload
import { FaFileUpload } from "react-icons/fa";
import { useEffect } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
import axiosApi from "../../../Helper/api";
import { notifyError, notifyLoading } from "../../../Store/notify/actions";

const ImageSection = ({ id }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [imgError, setimgError] = useState(false);

  const dispatch = useDispatch();

  const [outsideImg, setOutsideImg] = useState([]);
  const [commonAreaImg, setCommonAreaImg] = useState([]);

  const imageData4 = [
    {
      name: "Bank Statement of last 3 month",
      state: outsideImg,
      setState: setOutsideImg,
    },
    {
      name: "Payslips for last 3 months",
      state: commonAreaImg,
      setState: setCommonAreaImg,
    },
    {
      name: "Documents proof of business",
      state: commonAreaImg,
      setState: setCommonAreaImg,
    },
  ];

  //imahe start here

  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const {
    getInputProps: PanBackInput,
    open: PanBackOpen,
    files: PanBack,
    handleRemoveAllFiles: PanBackRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const {
    getInputProps: adhrFontInputProps,
    open: adhrFontOpen,
    files: adhrFont,
    handleRemoveAllFiles: adhrFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const {
    getInputProps: adhrBackInputProps,
    open: adhrBackOpen,
    files: adhrBack,
    handleRemoveAllFiles: adhrBackRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);
  const {
    getInputProps: anyInputProps,
    open: anyOpen,
    files: any,
    handleRemoveAllFiles: anyRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);
  // file
  const {
    getInputProps: bankInputProps,
    open: bankOpen,
    files: bank,
    handleRemoveAllFiles: bankRemoveAllFiles,
  } = useDragDrop(`.pdf,.doc,.docx`);

  const {
    getInputProps: paySlipsInputProps,
    open: paySlipsOpen,
    files: paySlips,
    handleRemoveAllFiles: paySlipsRemoveAllFiles,
  } = useDragDrop(`.pdf,.doc,.docx`);

  const {
    getInputProps: docInputProps,
    open: docOpen,
    files: doc,
    handleRemoveAllFiles: docRemoveAllFiles,
  } = useDragDrop(`.pdf,.doc,.docx`);

  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});
  const [image3, setImage3] = useState({});
  const [image4, setImage4] = useState({});
  const [image5, setImage5] = useState({});
  const [image6, setImage6] = useState({});
  const [image7, setImage7] = useState({});
  const [image8, setImage8] = useState({});

  useEffect(() => {
    if (PanFont.length <= 0) return;
    setImage1({ file: URL.createObjectURL(PanFont[0]) });
  }, [PanFont]);

  useEffect(() => {
    if (PanBack.length <= 0) return;
    setImage2({ file: URL.createObjectURL(PanBack[0]) });
  }, [PanBack]);

  useEffect(() => {
    if (adhrFont.length <= 0) return;
    setImage3({ file: URL.createObjectURL(adhrFont[0]) });
  }, [adhrFont]);

  useEffect(() => {
    if (adhrBack.length <= 0) return;
    setImage4({ file: URL.createObjectURL(adhrBack[0]) });
  }, [adhrBack]);

  useEffect(() => {
    if (any.length <= 0) return;
    setImage5({ file: URL.createObjectURL(any[0]) });
  }, [any]);
  useEffect(() => {
    if (bank.length <= 0) return;
    setImage6({ file: URL.createObjectURL(bank[0]) });
  }, [bank]);
  useEffect(() => {
    if (paySlips.length <= 0) return;
    setImage7({ file: URL.createObjectURL(paySlips[0]) });
  }, [paySlips]);
  useEffect(() => {
    if (doc.length <= 0) return;
    setImage8({ file: URL.createObjectURL(doc[0]) });
  }, [doc]);

  const removeImage = (value) => {
    if (value === 1) return setImage1({});
    if (value === 2) return setImage2({});
    if (value === 3) return setImage3({});
    if (value === 4) return setImage4({});
    if (value === 5) return setImage5({});

    if (value === 6) return setImage6({});
    if (value === 7) return setImage7({});
    if (value === 8) return setImage8({});
  };

  const submitValue = () => {
    // console.log("o hello")

    // console.log("image value",image1,image2,image3,image4,image5)

    if (
      PanFont.length > 0 &&
      PanBack.length > 0 &&
      adhrFont.length > 0 &&
      adhrBack.length > 0 &&
      any.length > 0 &&
      bank.length > 0 &&
      paySlips.length > 0 &&
      doc.length > 0
    ) {
      setimgError(false);
      let formData = new FormData();

      formData.append("panCardFront", PanFont[0]);
      formData.append("panCardBack", PanBack[0]);
      formData.append("aadhaarCardBack", adhrBack[0]);
      formData.append("aadhaarCardFront", adhrFont[0]);
      formData.append("addressProof", any[0]);
      formData.append("bankStatement", bank[0]);
      formData.append("payslips", paySlips[0]);
      formData.append("businessProof", doc[0]);

      console.log("idddddddddd", id);
      dispatch(notifyLoading(true))
      axiosApi
        .patch(`admin/mentors/${id}?section=portfolio`, formData)
        .then((res) => {
          console.log(res);
          dispatch(notifyLoading(false))
          setSuccess(true);
          setError(false);
          setimgError(false);
        })
        .catch((err) => {
          dispatch(notifyLoading(false))
          dispatch(notifyError(err.response.data.message))
          setError(true);
          setSuccess(false);
          setimgError(false);
        });
    } else {
      setimgError(true);
    }
  };

  return (
    <div>
      <div className="my-5">
        <hr className="w-50" />
      </div>

      <div>
        {/* {error ? (
        <SweetAlert
          title={error || "Something went wrong!"}
          warning
          onConfirm={() =>
            dispatch({ type: "GET_LOCATIONS_API_ERROR", payload: "" })
          }
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null} */}
      </div>

      <div className="row image-resize-card ">
        <b className="my-1">Bank statement of last 3 months</b>
        <div className="my-3 w-50">
          {!image6.file ? (
            <div className="row image-resize-card  ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center color1"
                >
                  <input {...bankInputProps()} />
                  <div
                    onClick={bankOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <RiFileUploadLine className="txtColor" size={40} />

                      <small className="text-secondary ms-2">
                        Drog and Drop or Click here
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
                      </small>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bgGray">
              <div className=" d-flex justify-content-center align-items-center p-5">
                <div>
                  <div className="d-flex" style={{ color: "#0077B7" }}>
                    {" "}
                    {/* <img src={image6?.file} alt="thumbnail" className="w-100" /> */}
                    <p>
                      {" "}
                      <RiFileUploadLine size="25" /> {bank[0]?.name}
                    </p>
                    <h6
                      className=" cursor ms-2 text-danger"
                      style={{ marginTop: "3px" }}
                      onClick={() => {
                        bankRemoveAllFiles();
                        removeImage(6);
                      }}
                    >
                      <CgClose size="20"></CgClose>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />

        <b className="my-1">Payslips for last 3 months</b>
        <div className="my-3 w-50">
          {!image7.file ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center color1"
                >
                  <input {...paySlipsInputProps()} />
                  <div
                    onClick={paySlipsOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <RiFileUploadLine className="txtColor" size={40} />

                      <small className="text-secondary ms-2">
                        Drog and Drop or Click here
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
                      </small>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bgGray">
              <div className=" d-flex justify-content-center align-items-center p-5">
                <div>
                  <div className="d-flex" style={{ color: "#0077B7" }}>
                    {" "}
                    {/* <img src={image6?.file} alt="thumbnail" className="w-100" /> */}
                    <p>
                      {" "}
                      <RiFileUploadLine size="25" /> {paySlips[0]?.name}
                    </p>
                    <h6
                      className=" cursor ms-2 text-danger"
                      style={{ marginTop: "3px" }}
                      onClick={() => {
                        paySlipsRemoveAllFiles();
                        removeImage(7);
                      }}
                    >
                      <CgClose size="20"></CgClose>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <hr />

        <b className="my-1">Document proof of business</b>
        <div className="my-3 w-50">
          {!image8.file ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center color1"
                >
                  <input {...docInputProps()} />
                  <div
                    onClick={docOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <RiFileUploadLine className="txtColor" size={40} />

                      <small className="text-secondary ms-2">
                        Drog and Drop or Click here
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
                      </small>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bgGray">
              <div className=" d-flex justify-content-center align-items-center p-5">
                <div>
                  <div className="d-flex" style={{ color: "#0077B7" }}>
                    {" "}
                    {/* <img src={image6?.file} alt="thumbnail" className="w-100" /> */}
                    <p>
                      {" "}
                      <RiFileUploadLine size="25" /> {doc[0]?.name}
                    </p>
                    <h6
                      className=" cursor ms-2 text-danger"
                      style={{ marginTop: "3px" }}
                      onClick={() => {
                        docRemoveAllFiles();
                        removeImage(8);
                      }}
                    >
                      <CgClose size="20"></CgClose>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* image start here */}

      <div className="row w-50">
        <h6>Upload font and back Image in Pan card</h6>
        <div className="col-md-6">
          {!image1.file ? (
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
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                  PanFontRemoveAllFiles();
                  removeImage(1);
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={image1.file} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>

        <div className="col-md-6">
          {!image2.file ? (
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
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                  PanBackRemoveAllFiles();
                  removeImage(2);
                }}
              >
                X <small>Remove</small>
              </h6>
              <div>
                {" "}
                <img src={image2.file} alt="thumbnail" className="w-100" />
              </div>
            </>
          )}
        </div>

        <div className="my-3">
          <hr />
        </div>

        <h6>Upload font and back Image of Aadhaar card</h6>

        <div className="col-md-6">
          {!image3.file ? (
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
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                  adhrFontRemoveAllFiles();
                  removeImage(3);
                }}
              >
                X <small>Remove</small>
              </h6>
              <img src={image3.file} alt="thumbnail" className="w-100" />
            </>
          )}
        </div>
        <div className="col-md-6">
          {!image4.file ? (
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
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                  adhrBackRemoveAllFiles();
                  removeImage(4);
                }}
              >
                X <small>Remove</small>
              </h6>
              <img src={image4.file} alt="thumbnail" className="w-100" />
            </>
          )}
        </div>

        <div className="my-3">
          <hr />
        </div>
        <h6>Upload image of address proof (Ex-Electricity bill or gas bill)</h6>

        <div className="col-md-6">
          {!image5.file ? (
            <div className="row image-resize-card ">
              <div className="my-3">
                <div
                  {...getRootProps({ style })}
                  className="text-center bg-white"
                >
                  <input {...anyInputProps()} />
                  <div
                    onClick={anyOpen}
                    className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                  >
                    <DownloadCloud className="txtColor" size={40} />
                    <h6 className="text-black">Add Image</h6>
                    <small className="text-secondary">
                      Resolution Size 1920 X 1080 Format .jpg, .png, .jpeg
                      <a href="/" onClick={(e) => e.preventDefault()}></a>{" "}
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
                  anyRemoveAllFiles();
                  removeImage(5);
                }}
              >
                X <small>Remove</small>
              </h6>
              <img src={image5.file} alt="thumbnail" className="w-100" />
            </>
          )}
        </div>
      </div>
      <div class="d-grid gap-2 w-50">
        <button onClick={submitValue} className="btn btn-main2 mt-3">
          Submit{" "}
        </button>
      </div>

      {success && <h6 className="text-success my-3">Successfully Done..</h6>}
      {error && <h6 className="text-danger my-3">Error occures ..</h6>}
      {imgError && (
        <h6 className="text-danger my-3">
          First Fill Up Every Images {"&"} File ..
        </h6>
      )}
    </div>
  );
};

export default withRouter(ImageSection);
