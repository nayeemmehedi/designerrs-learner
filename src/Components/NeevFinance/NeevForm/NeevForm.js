import React, { useEffect, useState } from "react";
import { Form } from "reactstrap";
import CustomInputField from "../../Common/CustomInputField";
import useDragDrop from "../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
import { sendNeevSchema } from "../Schema/NeevSchema";
import { useFormik } from "formik";
import { RiFileUploadLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { withRouter } from "react-router-dom";
import { DownloadCloud } from "react-feather";
import axiosApi from "../../../Helper/api";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notifyError, notifyLoading } from "../../../Store/notify/actions";
const courses = [
  {
    _id: "Employed",
    value: "Employed",
  },
  {
    _id: "UnEmployed",
    value: "UnEmployed",
  },
];

function NeevForm() {
  const history = useHistory();
  const initialValues = {
    emplyment: "",
    name1: "",
    phone1: "",
    name2: "",
    phone2: "",
  };

  // image/file section start

  //image start here

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
    getInputProps: electricityFrontInputProps,
    open: electricityFrontOpen,
    files: electricityFront,
    handleRemoveAllFiles: electricityFrontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const {
    getInputProps: electricityBackInputProps,
    open: electricityBackOpen,
    files: electricityBack,
    handleRemoveAllFiles: electricityBackRemoveAllFiles,
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
  const [image9, setImage9] = useState({});

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
    if (electricityFront.length <= 0) return;
    setImage5({ file: URL.createObjectURL(electricityFront[0]) });
  }, [electricityFront]);

  useEffect(() => {
    if (electricityBack.length <= 0) return;
    setImage9({ file: URL.createObjectURL(electricityBack[0]) });
  }, [electricityBack]);

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
    if (value === 9) return setImage9({});
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [imgError, setimgError] = useState(false);

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    if (
      PanFont.length > 0 &&
      PanBack.length > 0 &&
      adhrFont.length > 0 &&
      adhrBack.length > 0 &&
      electricityFront.length > 0 &&
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
      formData.append("addressProof", electricityFront[0]);
      formData.append("bankStatement", bank[0]);
      formData.append("payslips", paySlips[0]);
      formData.append("buisnessProof", doc[0]);
      formData.append("ref1_name", values.name1);
      formData.append("ref2_name", values.name2);
      formData.append("ref1_number", values.phone1);
      formData.append("ref2_number", values.phone2);
      formData.append("employmentStatus", values.emplyment);
      formData.append("submitted", true);
      dispatch(notifyLoading(true));
      axiosApi
        .patch(`/learner/kyc`, formData)
        .then((res) => {
          setSuccess(true);
          setError(false);
          setimgError(false);
          dispatch(notifyLoading(true));
          history.push("/dashboard");
        })
        .catch((err) => {
          dispatch(notifyLoading(false));
          dispatch(notifyError("These is an error. Try later."));
          setError(true);
          setSuccess(false);
          setimgError(false);
        });
    } else {
      setimgError(true);
    }
  };

  const sendNeev = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: sendNeevSchema,
    onSubmit,
  });

  return (
    <div>
      <div className="w-50">
        <h3 className="mt-3">Neev Finance KYC</h3>
        <small className="my-3">
          The following documents are required to process and approve your loan.
          Fill out the informantion to get access to your enrolled course.
        </small>
      </div>
      <hr className="w-75" />

      <Form onSubmit={sendNeev.handleSubmit}>
        <div className="my-4 w-50">
          <h6>What is your status of employment?</h6>

          <div className="mb-4">
            <CustomInputField
              name={"emplyment"}
              type={"select"}
              placeholder={""}
              validationType={sendNeev}
            >
              <option defaultValue>Select Status</option>
              {courses?.map((i, idx) => (
                <option key={idx} value={i._id}>
                  {i.value}
                </option>
              ))}
            </CustomInputField>
          </div>
          <hr />

          <div className="my-3">
            <h6>Reference person details 1</h6>
            <small>
              This person will be contacted by Neev Finance team to verify your
              details
            </small>
          </div>

          <div className="my-3">
            <CustomInputField
              name={"name1"}
              type={"text"}
              placeholder={""}
              label={"Name"}
              validationType={sendNeev}
            ></CustomInputField>
            <CustomInputField
              name={"phone1"}
              type={"number"}
              placeholder={""}
              label={"Phone Number"}
              validationType={sendNeev}
            ></CustomInputField>
          </div>
          <hr />
          <div>
            <div className="my-3">
              <h6>Reference person details 2</h6>
              <small>
                This person will be contacted by Neev Finance team to verify
                your details
              </small>
            </div>

            <div className="my-3">
              <CustomInputField
                name={"name2"}
                type={"text"}
                placeholder={""}
                label={"Name"}
                validationType={sendNeev}
              ></CustomInputField>
              <CustomInputField
                name={"phone2"}
                type={"number"}
                placeholder={""}
                label={"Phone Number"}
                validationType={sendNeev}
              ></CustomInputField>
            </div>
          </div>
        </div>

        {/* image start */}

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

        {/* image finish */}

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
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Front Pan Card Image</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center  my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Back Pan Card Image</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Front Aadhaar Card Image</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Back Aadhaar Card Image</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
          <h6>
            Upload image of address proof (Ex-Electricity bill or gas bill)
          </h6>

          <div className="col-md-6">
            {!image5.file ? (
              <div className="row image-resize-card ">
                <div className="my-3">
                  <div
                    {...getRootProps({ style })}
                    className="text-center bg-white"
                  >
                    <input {...electricityFrontInputProps()} />
                    <div
                      onClick={electricityFrontOpen}
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Adress Proof Images</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
                    electricityFrontRemoveAllFiles();
                    removeImage(5);
                  }}
                >
                  X <small>Remove</small>
                </h6>
                <img src={image5.file} alt="thumbnail" className="w-100" />
              </>
            )}
          </div>
          <div className="col-6">
            {!image9.file ? (
              <div className="row image-resize-card ">
                <div className="my-3">
                  <div
                    {...getRootProps({ style })}
                    className="text-center bg-white"
                  >
                    <input {...electricityBackInputProps()} />
                    <div
                      onClick={electricityBackOpen}
                      className="d-flex align-items-center justify-content-center flex-column border-r text-center my-4"
                    >
                      <DownloadCloud className="txtColor" size={40} />
                      <h6 className="text-black">Add Another Images</h6>
                      <small className="text-secondary">
                        .png, .jpeg
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
                    electricityBackRemoveAllFiles();
                    removeImage(9);
                  }}
                >
                  X <small>Remove</small>
                </h6>
                <img src={image9.file} alt="thumbnail" className="w-100" />
              </>
            )}
          </div>
        </div>
        <div class="d-grid gap-2 w-50 py-5">
          <button className="btn btn-main2 right  my-5" type="submit">
            Submit
          </button>
        </div>
      </Form>
      {/* 
      const [success ,setSuccess]=useState(false)
  const [error ,setError]=useState(false)
  const [imgError ,setimgError]=useState(false) */}

      {success && <p className="text-success mt-3">Successfully Done..</p>}
      {error && <p className="text-danger mt-3">Something Error..</p>}
      {imgError && (
        <p className="text-danger mt-3">Fillup Every Image & File First ..</p>
      )}
    </div>
  );
}

export default NeevForm;
