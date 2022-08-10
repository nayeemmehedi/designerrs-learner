import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";

import { Form, Label } from "reactstrap";
import CustomInputField from "../Common/CustomInputField";
// import useDragDrop from "../Common/useDragDrop";
import useDragDrop from "../CourseMaterial/Middle/Sub/Assignment/useDragDrop";

import { guestSchema } from "../PortfolioMain/common/YupValidation";
import { DownloadCloud } from "react-feather";

function Guest({ togglModal }) {
  // image

  const {
    getRootProps,
    style,
    getInputProps: PanFrontInput,
    open: PanFontOpen,
    files: PanFont,
    handleRemoveAllFiles: PanFontRemoveAllFiles,
  } = useDragDrop(`.svg,.png,.jpg,.jpeg`);

  const [image1, setImage1] = useState({});

  useEffect(() => {
    if (PanFont.length <= 0) return;
    setImage1({ file: URL.createObjectURL(PanFont[0]) });
  }, [PanFont]);

  const removeImage = (value) => {
    if (value === 1) return setImage1({});
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [imgError, setimgError] = useState(false);

  //image finish

  const initialValues = {
    yourName: "",
    details: "",
  };

  const [initial, setInitial] = useState({});
  const [errorDate, setErrorDate] = useState(false);

  const onSubmit = (values) => {
    console.log("values", values);
  };

  const sendSchema = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: guestSchema,
    onSubmit,
  });

  return (
    <div>
      <div className="p-3">
        <div className="d-flex justify-content-between">
          <h6 className="fw-bold">Guest Speaker Details</h6>{" "}
          <GrFormClose onClick={togglModal} className="cursor" size={30} />
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
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
                      <h6 className="text-black">
                        Upload a nice Portrait of yourself
                      </h6>

                      <small className="text-secondary">
                        Upload PNG, JPEG file
                        <a
                          href="/"
                          onClick={(e) => e.preventDefault()}
                        ></a>{" "}
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
        </div>

        <Form onSubmit={sendSchema.handleSubmit}>
          <div>
            <div>
              <CustomInputField
                name={"yourName"}
                type={"text"}
                label={"Your Name"}
                placeholder={""}
                validationType={sendSchema}
              />
            </div>
            <div>
              <Label>
                Please tell us something about yourself{" "}
                <AiOutlineQuestionCircle></AiOutlineQuestionCircle>
              </Label>
              <CustomInputField
                name={"details"}
                type={"textarea"}
                placeholder={""}
                validationType={sendSchema}
              />
            </div>
          </div>

          <div class="d-grid gap-2">
            <button className="btn btn-main2 " type="submit">
              Submit And Accept Batch Invite
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Guest;
