import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { multipleQuesSchema } from "../../../../Valid/mentorPortfolio";
import CustomInput from "./CustomInput";
import DemoSkill from "./DemoSkill";
import TextError from "./TextError";
// import { multipleQuesSchema } from '../../Components/Schemas/QuestionSchemas';
// import multipleQuesSchema from "../../../../Assets/mentorPortfolio"
const initialValues = {
  q: "",
  answer: [""],
  opt: ["", ""],
  explanation: "",
};

const DemoFormik = () => {
  const [passValue, setpassValue] = useState([]);
  const [value, setValue] = useState(["value"]);
  const [value1, setValue1] = useState(["value2"]);


  const [listValue] = useState(null);
  const onSubmit = (values, { setSubmitting }) => {
    console.log("values", values);
  };

  return (
    <React.Fragment>
      
      <div className="mx-auto" style={{ width: "600px" }}>
        <Formik
          initialValues={listValue || initialValues}
          validationSchema={multipleQuesSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {({ values, errors }) => (
            <Form>
              {console.log(errors)}
              <Row className="mb-3">
                <Col md="12">
                  <Field
                    label="Question Title"
                    name="q"
                    type="text"
                    id={"question"}
                    component={CustomInput}
                    placeholder="Type paragraph title"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <FieldArray
                  name="opt"
                  render={(arrayHelpers) => (
                    <Row>
                      {values?.opt?.map((value, index) => (
                        <Col md="6" key={index}>
                          <div className="mb-2 position-relative">
                            <Field
                              name={`opt.${index}`}
                              type={"text"}
                              id={index}
                              label={`Option ${index + 1}`}
                              component={CustomInput}
                              placeholder="Type option"
                            />
                            {index > 0 ? (
                              <div
                                className="position-absolute"
                                style={{ top: "0", right: "0" }}
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <Button
                                  className="btn-danger btn-sm "
                                  style={{
                                    background: "black",
                                    border: "red",
                                    fontSize: "18px",
                                  }}
                                >
                                  <i
                                    className="bx bx-trash"
                                    style={{ color: "red" }}
                                  >
                                    x
                                  </i>
                                </Button>
                              </div>
                            ) : null}
                            <ErrorMessage
                              name={`opt.${index}`}
                              component={TextError}
                            />
                          </div>
                        </Col>
                      ))}
                      <Col md="12">
                        <Button
                          type="button"
                          color="primary"
                          className="d-inline-block"
                          style={{
                            background: "#E5F0FF",
                            color: "#485ec4",
                            border: "none",
                            width: "initial",
                          }}
                          onClick={() => arrayHelpers.push("")}
                        >
                          Add more option
                        </Button>
                      </Col>
                    </Row>
                  )}
                />
              </Row>
              <Row className="mb-3">
                <Col md="12">
                  <FieldArray
                    name="answer"
                    render={(arrayHelpers) => (
                      <Row>
                        {values?.answer?.map((value, index) => (
                          <Col md="6" key={index}>
                            <div className="mb-2 position-relative">
                              <Field
                                name={`answer.${index}`}
                                type={"text"}
                                id={index}
                                label={`Right answer ${
                                  index > 0 ? index + 1 : ""
                                }`}
                                component={CustomInput}
                                placeholder="Type Right answer"
                              />
                              {index > 0 ? (
                                <div
                                  className="position-absolute"
                                  style={{ top: "0", right: "0" }}
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  <Button
                                    className="btn-danger btn-sm "
                                    style={{
                                      background: "transparent",
                                      border: "none",
                                      fontSize: "18px",
                                    }}
                                  >
                                    <i
                                      className="bx bx-trash"
                                      style={{ color: "#999" }}
                                    ></i>
                                  </Button>
                                </div>
                              ) : null}
                              <ErrorMessage
                                name={`answer.${index}`}
                                component={TextError}
                              />
                            </div>
                          </Col>
                        ))}
                        <Col md="12">
                          <Button
                            type="button"
                            color="primary"
                            className="d-inline-block"
                            style={{
                              background: "#E5F0FF",
                              color: "#485ec4",
                              border: "none",
                              width: "initial",
                            }}
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add more answer
                          </Button>
                        </Col>
                      </Row>
                    )}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="12">
                  <Field
                    name="explanation"
                    id={"Explanation"}
                    label="Explanation"
                    placeholder="Type explanation"
                    type="textarea"
                    rows={"5"}
                    component={CustomInput}
                    //   disabled={edit}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md="12" className="d-flex justify-content-end">
                  <Button color="primary" type="submit">
                    {"Create "}
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        <DemoSkill  value={value} setValue={setValue}></DemoSkill>
        HH
        <DemoSkill value ={value1} setValue={setValue1}></DemoSkill>
      </div>
    </React.Fragment>
  );
};

export default DemoFormik;
