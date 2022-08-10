import React from "react";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { multipleQuesSchema } from "../../../../Valid/mentorPortfolio";
import CustomInput from "./CustomInput";
import TextError from "./TextError";
import axiosApi from "../../../../Helper/api";

function SocialMedia() {
  const [response, setResponse] = useState({
    success: false,
    error: false,
    addFirst: false,
  });
  const [btnLoading, setbtnLoading] = useState(false);

  const initialValues = {
    linkedin: "",
    facebook: "",
    instagram: "",
    opt: [],
  };

  const [listValue] = useState(null);
  const onSubmit = (values, { setSubmitting }) => {
    setbtnLoading(true);

    let totalValue = [
      ...values.opt,
      {
        website: "linkedin",
        url: values.linkedin,
      },
      {
        website: "facebook",
        url: values.facebook,
      },
      {
        website: "instagram",
        url: values.instagram,
      },
    ];

    console.log("totalValue", totalValue);

    let value = {
      socialMedia: totalValue,
    };

    axiosApi
      .post(`learner/portfolio`, value)
      .then((res) => {
        console.log("res", res);
        setbtnLoading(false);

        setResponse({
          success: true,
          error: false,
          addFirst: false,
        });
      })
      .catch((err) => {
        setbtnLoading(false);

        setResponse({
          success: false,
          error: true,
          addFirst: false,
        });
      });
  };

  return (
    <div className="my-4">
      <h3 className="my-5 text-secondary">Social Media Profile</h3>

      <>
        <div>
          <Formik
            initialValues={listValue || initialValues}
            validationSchema={multipleQuesSchema}
            onSubmit={onSubmit}
            enableReinitialize={true}
          >
            {({ values, errors }) => (
              <Form>
                {/* {
                  console.log("values",values)
                } */}

                <div className="row">
                  <div className="col-6">
                    <Field
                      label="LinkedIn Profile Link"
                      name="linkedin"
                      type="text"
                      id={"question"}
                      component={CustomInput}
                      placeholder=""
                    />
                  </div>
                  <div className="col-3">
                    <button className="btn p-2 button-size-control">
                      <a href="https://www.linkedin.com/">Go To LinkedIn</a>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <Field
                      label="Facebook Profile Link"
                      name="facebook"
                      type="text"
                      id={"question"}
                      component={CustomInput}
                      placeholder=""
                    />
                  </div>
                  <div className="col-3">
                    <button className="btn p-2 button-size-control">
                      <a href="https://www.facebook.com/">Go To Facebook</a>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <Field
                      label="Instagram Profile Link"
                      name="instagram"
                      type="text"
                      id={"question"}
                      component={CustomInput}
                      placeholder=""
                    />
                  </div>
                  <div className="col-3">
                    <button className="btn p-2 button-size-control">
                      <a href="https://www.instagram.com/accounts/login/">
                        Go To Instagram
                      </a>
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="mb-3">
                      <FieldArray
                        name="opt"
                        render={(arrayHelpers) => (
                          <>
                            {values?.opt?.map((value, index) => (
                              <div key={index}>
                                <div>
                                  {index >= 0 ? (
                                    <div className="d-flex justify-content-end">
                                      <div
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        <button className="btn btn-main">
                                          X
                                        </button>
                                      </div>
                                    </div>
                                  ) : null}
                                  <Field
                                    name={`opt.${index}.website`}
                                    type={"text"}
                                    id={index}
                                    label={`Website Name ${index + 1}`}
                                    component={CustomInput}
                                    placeholder=""
                                  />

                                  <div className="my-3">
                                    <ErrorMessage
                                      className="my-2"
                                      name={`opt.${index}.website`}
                                      component={TextError}
                                    />
                                  </div>

                                  <Field
                                    name={`opt.${index}.url`}
                                    type={"text"}
                                    id={index}
                                    label={`Website URL ${index + 1}`}
                                    component={CustomInput}
                                    placeholder=""
                                  />

                                  <div className="my-3">
                                    <ErrorMessage
                                      name={`opt.${index}.url`}
                                      component={TextError}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}

                            <Button
                              type="button"
                              // color="primary"
                              className="btn btn-main2"
                              style={{ color: "white !importtant" }}
                              // style={{
                              //   background: "#E5F0FF",
                              //   color: "#485ec4",
                              //   border: "none",
                              //   width: "initial",
                              // }}
                              onClick={() =>
                                arrayHelpers.push({ website: "", url: "" })
                              }
                            >
                              + Add more Social Media Profile
                            </Button>
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <Row className="mb-3 w-75">
                  <Col md="12" className="d-flex justify-content-end">
                    <Button className="btn btn-main2" type="submit">
                      {btnLoading ? "Submitting..." : "Create"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </>

      <div>
        {response.addFirst && (
          <p className="text-danger mt-3"> Add Your Skills and Tools First.</p>
        )}

        {response.error && (
          <p className="text-danger mt-3"> Something Error Happens..</p>
        )}

        {response.success && (
          <p className="text-success mt-3"> Successfully Completed..</p>
        )}
      </div>
    </div>
  );
}

export default SocialMedia;
