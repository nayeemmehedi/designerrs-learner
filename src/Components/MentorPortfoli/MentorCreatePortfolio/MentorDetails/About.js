import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDragDrop from "../../../CourseMaterial/Middle/Sub/Assignment/useDragDrop";
import CustomInputField from "../../../Common/CustomInputField";
import { useHistory } from "react-router-dom";
import { Form } from "reactstrap";
import { DownloadCloud } from "react-feather";
import { mentorAboutSchema } from "../../../../Valid/mentorPortfolio";
import axiosApi from "../../../../Helper/api";
import { getPortfolio } from "../../../../Store/Portfolio/Action";

const About = ({ portfolioValue }) => {
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

  //  formData.append("panCardFront",PanFont[0]);

  const history = useHistory;

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const initialValues = {
    heading: "",
    body: "",
  };

  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);

    let value = {
      about: values,
    };

    axiosApi
      .post(`learner/portfolio`, value)
      .then((res) => {
        console.log("res", res);

        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setSuccess(false);
      });
  };

  const sendAccountDetails = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: mentorAboutSchema,
    onSubmit,
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //profile picture

  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (PanFont.length > 0) {
      setLoad(true);
      const id = localStorage.getItem("uid");

      const formData = new FormData();

      formData.append("profilePicture", PanFont[0]);

      axiosApi
        .patch(`/learners/${id}`, formData)
        .then((res) => {
          dispatch(getPortfolio());
          setLoad(false);
        })
        .catch((err) => {
          setLoad(false);
        });
    }
  }, [PanFont]);

  return (
    <div className="p-3   account-settings">
      <h3 className="my-3">About You</h3>



      <Form
        className="mt-4"
        onSubmit={sendAccountDetails.handleSubmit}
        // style={{ maxWidth: "400px" }}
      >
        <div className="row">
          <div className="col-2">
            <div className="">
              <div >
                {portfolioValue?.user?.profilePicture?.link ? (
                  <div onClick={PanFontOpen}>
                    <input {...PanFrontInput()} />
                    <img
                      src={portfolioValue?.user?.profilePicture?.link}
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
                          {...getRootProps({ style })}
                          className="text-center bg-white my-2"
                        >
                          <input {...PanFrontInput()} />
                          <div
                            onClick={PanFontOpen}
                            className="d-flex align-items-center justify-content-center flex-column border-r text-center"
                          >
                            <DownloadCloud className="txtColor" size={40} />

                            <small className="text-secondary">
                              <h6 className="text-black">Add Image</h6>
                              <a
                                href="/"
                                onClick={(e) => e.preventDefault()}
                              ></a>{" "}
                            </small>
                            <br />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ width: "180px", height: "auto" }}
                        className="border border-danger ms-2"
                      >
                        <div {...getRootProps()}>
                          <input {...PanFrontInput()} />
                          <div onClick={PanFontOpen}>
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
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="my-5">
              {/* <hr></hr> */}
              {/* <p>Personal information</p> */}
            </div>

            <CustomInputField
              name={"heading"}
              type={"text"}
              label={"Full Name"}
              placeholder={"Jerin Drishan"}
              validationType={sendAccountDetails}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <CustomInputField
              name={"body"}
              type={"textarea"}
              label={"Write something about yourself"}
              placeholder={"Ex: Wireframing"}
              rows="4"
              cols="50"
              validationType={sendAccountDetails}
            />
          </div>
        </div>

        <p className=" mt-5 ">Your current place of residence</p>

        <div className=" w-75 d-flex justify-content-between bg-white pb-4">
          <span
            className="btn btn-outline-secondary   right"
            onClick={() => history.goBack()}
            style={{ borderRadius: "0" }}
          >
            {/* <MdOutlineArrowBack size="17" />  */}Back
          </span>

          <button className="btn btn-main2 right px-5" type="submit">
            {loading ? "Saving" : "Save Changes"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default About;
