import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import { indianStates } from "../../DB/IndianStates";
import { stateTocity } from "../../DB/StateToCity";
import axiosApi from "../../Helper/api";
import { storeBoxes } from "../../Store/CourseEnroll/actions";
import { notifyError, notifyLoading } from "../../Store/notify/actions";
import { updateUser } from "../../Store/user/actions";
import CustomInputField from "../Common/CustomInputField";
import "./Common.css";
import { sendPersonalSchema } from "./PersonalDetailsSchema";

const company = [
  {
    name: "companyName",
    type: "text",
    label: "Company Name",
  },
  {
    name: "gstNumber",
    type: "text",
    label: "GST Number",
  },
];

const cityValue = [
  {
    _id: "dhaka",
    value: "dhaka",
  },
  {
    _id: "sylhet",
    value: "sylhet",
  },
];

const company1 = [
  {
    name: "buildingNumber",
    type: "number",
    label: "Building Number",
  },
  {
    name: "StreetName",
    type: "text",
    label: "Street Name *",
  },
  {
    name: "area",
    type: "text",
    label: "Area",
  },
  {
    name: "zipCode",
    type: "number",
    label: "Zip Code",
  },
];

function PersonalDetails() {
  const { user } = useSelector((state) => state.user);
  const [fullName, setFullName] = useState(null);

  console.log("user value", user);

  // console.log("fullname", fullName);

  const dispatch = useDispatch();

  const value = useSelector((state) => state.courseEnrollReducer);

  const [Agree, setAgree] = useState(false);
  const [Agree2, setAgree2] = useState(false);

  const onSubmit = (values) => {
    console.log("data")
    let shippingAddress = {};
    let newMadeValue = {};

    // if(fullName){
    //   newMadeValue={fullName:fullName}
    // }

    if (Agree) {
      shippingAddress = {
        houseNumber: values.buildingNumber,
        streetName: values.StreetName,
        area: values.area,
        zipCode: values.zipCode,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
      };
    }

    newMadeValue = {
      shippingAddress: { ...shippingAddress },
      gst: { companyName: values.companyName, gstNumber: values.gstNumber },
      billingAddress: {
        houseNumber: values.buildingNumber,
        streetName: values.StreetName,
        area: values.area,
        zipCode: values.zipCode,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
      },
      ...(fullName && { fullName: fullName }),
    };

    //api call
    dispatch(notifyLoading(true));
    axiosApi
      .patch(`/learners/${localStorage.getItem("username")}`, newMadeValue)
      .then((res) => {
        dispatch(notifyLoading(false));
        dispatch(storeBoxes("boxFour", true, "boxThree", false));
      })
      .catch((err) => {
        dispatch(notifyError(err.response.data.message));
      });
  };

  const initialValue = {
    companyName: user?.gst?.companyName,
    gstNumber: user?.gst?.gstNumber,
    buildingNumber: user?.billingAddress?.houseNumber,
    StreetName: user?.billingAddress?.streetName,
    area: user?.billingAddress?.area,
    zipCode: user?.billingAddress?.zipCode,
    city: "",
    state: "",
    landmark: user?.billingAddress?.landmark,
  };

  const personalDetails = useFormik({
    enableReinitialize: true,
    initialValues: initialValue,
    validationSchema: sendPersonalSchema,
    onSubmit,
  });

  const stateInfo = personalDetails?.values["state"];
  console.log("stateInfo", stateInfo);
  const [city, setCity] = useState([]);
  // //City Filter
  useEffect(() => {
    const newCity = stateTocity
      ?.filter((i) => i?.name[stateInfo])
      .map((i) => i?.name)
      .map((i) => i[stateInfo]);
    setCity(newCity[0]);
  }, [stateInfo]);

  const handleFullName = () => {
    // console.log(fullName);
    dispatch(updateUser({ fullName: fullName }, true));
  };

  // console.log(value?.completeBox, user);
  return (
    <div className="px-4 py-4 mt-3" style={{ background: "#F5F5F5" }}>
      {value?.completeBox?.boxThree ? (
        <div>
          <h4 className="d-flex align-items-center">
            <div className="avatar bg-danger d-flex justify-content-center align-items-center  text-white ">
              <small style={{ fontSize: "16px" }}> 3 </small>
            </div>
            <h6 className="ms-3 ">Personal Details</h6>{" "}
          </h4>
        </div>
      ) : (
        <div>
          <h4 className="d-flex align-items-center">
            <div
              style={{ background: "#e9eceb" }}
              className="avatar  d-flex justify-content-center align-items-center"
            >
              <small style={{ fontSize: "16px" }}> 3 </small>{" "}
            </div>
            <h6 style={{ marginTop: "2px" }} className="ms-3  ">
              Personl Details
            </h6>
          </h4>
          <hr></hr>
        </div>
      )}
      {value?.completeBox?.boxThree && (
        <div className="py-4">
          <div class="col-md-6">
            <form>
              <label className="my-2" htmlFor="">
                Your Full Name
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                name="Fullname"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                disabled={user?.fullName ? true : false}
                defaultValue={user?.fullName}
              />
              {/* <div class="d-grid gap-2">
                <p className="btn btn-main2 mt-3" onClick={handleFullName}>
                  Next
                </p>
              </div> */}

              <div class="form-check mt-4 ms-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  onChange={(e) => setAgree2(e.target.checked)}
                />
                <label class="form-check-label " for="flexCheckChecked">
                  Include company and GST details
                </label>
              </div>
            </form>
          </div>

          {Agree2 && (
            <div>
              <h4 className="my-4" style={{ color: "#616161" }}>
                Billing Details
              </h4>
              <div className="my-3">
                <small style={{ color: "#616161" }}>Company details</small>
              </div>

              <div class="col-md-6">
                <Form onSubmit={personalDetails.handleSubmit}>
                  {company?.map((v) => (
                    <CustomInputField
                      name={v?.name}
                      type={v?.type}
                      placeholder={""}
                      label={v?.label}
                      validationType={personalDetails}
                    ></CustomInputField>
                  ))}

                  <p>Address</p>

                  {company1?.map((v) => (
                    <CustomInputField
                      name={v?.name}
                      type={v?.type}
                      placeholder={""}
                      label={v?.label}
                      validationType={personalDetails}
                    ></CustomInputField>
                  ))}

                  <CustomInputField
                    name={"state"}
                    type={"select"}
                    label={"State"}
                    placeholder={""}
                    validationType={personalDetails}
                  >
                    <option defaultValue>Select State</option>
                    {indianStates?.map((i, idx) => (
                      <option key={idx} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                  </CustomInputField>
                  <CustomInputField
                    name={"city"}
                    type={"select"}
                    label={"City"}
                    placeholder={""}
                    validationType={personalDetails}
                  >
                    <option defaultValue>Select City</option>
                    {city?.map((i, idx) => (
                      <option key={idx} value={i._id}>
                        {i}
                      </option>
                    ))}
                  </CustomInputField>

                  <CustomInputField
                    name={"landmark"}
                    type={"number"}
                    placeholder={""}
                    label={"landmark(Optional)"}
                    validationType={personalDetails}
                  ></CustomInputField>

                  <p>Shipping Address</p>
                  <div class="form-check mt-2 ms-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      onChange={(e) => setAgree(e.target.checked)}
                    />
                    <label class="form-check-label " for="flexCheckChecked">
                      Same as Billing Address
                    </label>
                  </div>

                  {/* <button className="btn btn-main2 right  my-5" type="submit">
                    Submit
                  </button> */}
                </Form>
              </div>
            </div>
          )}
          <div>
            <div className="row mt-5">
              <div className="col-md-6">
                <p
                  className="btn btn-main w-100 "
                  onClick={() =>
                    dispatch(storeBoxes("boxTwo", true, "boxThree", false))
                  }
                >
                  Back
                </p>
              </div>
              <div className="col-md-6">
                {Agree2 ? (
                  <button
                    className="btn btn-main2 w-100"
                    type="submit"
                    // onClick={() =>
                    //   dispatch(storeBoxes("boxFour", true, "boxThree", false))
                    // }
                  >
                    Proceed
                  </button>
                ) : (
                  <p
                    className="btn btn-main2 w-100"
                    // type="submit"
                    onClick={() => {
                      handleFullName();
                    }}
                  >
                    Proceed
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalDetails;
