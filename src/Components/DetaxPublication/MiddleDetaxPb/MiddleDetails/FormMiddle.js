import React, { useEffect, useState } from "react";
import { Form } from "reactstrap";
import CustomInputField from "../../../Common/CustomInputField";
import { PersonalSchema } from "../../../CourseEnrollment/PersonalDetailsSchema";
import { useFormik } from "formik";
import useDragDrop from "../../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
import { RiFileUploadLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { DownloadCloud } from "react-feather";

let value = [
  {
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    type: "text",
    label: "E-mail",
  },
  {
    name: "phoneNo",
    type: "number",
    label: "Phone Number",
  },
];

function FormMiddle() {
  //IMAGE START
  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const {
    getInputProps: docInputProps,
    open: docOpen,
    files: doc,
    handleRemoveAllFiles: docRemoveAllFiles,
  } = useDragDrop(`.pdf,.doc,.docx`);

  const [image1, setImage1] = useState({});
  const [image2, setImage2] = useState({});

  useEffect(() => {
    if (PanFont.length <= 0) return;
    setImage1({ file: URL.createObjectURL(PanFont[0]) });
  }, [PanFont]);

  useEffect(() => {
    if (doc.length <= 0) return;
    setImage2({ file: URL.createObjectURL(doc[0]) });
  }, [doc]);

  const removeImage = (value) => {
    if (value === 1) return setImage1({});
    if (value === 2) return setImage2({});
  };

  //IMAGE FINISH

  const [success, setSuccess] = useState(false);
  const [error, seterror] = useState(false);

  const initialValue = {
    name: "",
    email: "",
    phoneNo: "",
  };

  const onSubmit = (values) => {
    console.log("values", values);
  };

  const personalDetails = useFormik({
    enableReinitialize: true,
    initialValues: initialValue,
    validationSchema: PersonalSchema,
    onSubmit,
  });

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
        <h3>Submit your Article</h3>
        <p>
          Showcase your writing skills by submitting an article. After review,
          we’ll post it on our channels.
        </p>

        <div>
          <Form onSubmit={personalDetails.handleSubmit}>
            <div className="">
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
                        <h6 className="text-black">Add your portrait</h6>
                        <small className="text-secondary">
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

            {value.map((v) => (
              <CustomInputField
                name={v?.name}
                type={v?.type}
                placeholder={""}
                label={v?.label}
                validationType={personalDetails}
              ></CustomInputField>
            ))}

            <div className="my-3 ">
              {!image2.file ? (
                <div className="row image-resize-card ">
                  <div className="my-3">
                    <div
                      {...getRootProps({ style })}
                      className="text-center color1"
                    >
                      <input {...docInputProps()} />
                      <div onClick={doc} className=" border-r text-center">
                        <div className=" mt-2">
                          <RiFileUploadLine className="txtColor" size={40} />{" "}
                          <br />
                          <small className="text-dark mt-2">
                            Upload File
                          </small>{" "}
                          <br />
                          <small className="text-secondary ms-2">
                            Format: .word, .pdf
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

            <button className="btn btn-main2" type="submit">
              Submit
            </button>
          </Form>
        </div>

        <div>
          {success && <p className="text-success">Successfully Done..</p>}
          {error && <p className="text-danger">Error..</p>}
        </div>
      </div>
    </div>
  );
}

export default FormMiddle;
