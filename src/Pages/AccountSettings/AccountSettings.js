import React, { useEffect, useState } from "react"
import { Link, Element } from "react-scroll"
import Style from "../../Style/course.module.scss"
import ScrollToTop from "../../Helper/Custom/ScrollToTop"
import ResetAndLogOut from "../../Components/AccountSettingsLearner/ResetAndLogOut"
import { useFormik } from "formik"
import {
  initialValues,
  newInitialValues,
} from "../../Components/AccountSettingsLearner/common/AccountSettingsInitialValues"
import { validate } from "../../Components/AccountSettingsLearner/common/AccountSettingsValidation"
import Personalinformation from "../../Components/AccountSettingsLearner/Personalinformation"
import ContactDetails from "../../Components/AccountSettingsLearner/ContactDetails"
import Address from "../../Components/AccountSettingsLearner/Address"
import AdditionalAddress from "../../Components/AccountSettingsLearner/AdditionalAddress"
import Transactions from "../../Components/AccountSettingsLearner/Transactions"
import Notifications from "../../Components/AccountSettingsLearner/Notifications"
import Dress from "../../Components/AccountSettingsLearner/Dress"
import AccountSettingsServices from "../../services/AccountSettings.services"
import { FcMakeDecision } from "react-icons/fc"
import { FcInspection } from "react-icons/fc"
import { FcApproval } from "react-icons/fc"
import axiosApi from "../../Helper/api"
import Loading from "../../Components/Common/Loading"
import contact from "../../Assets/Images/icons/contact.svg"
import swal from "sweetalert"
import SweetAlert from "react-bootstrap-sweetalert"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../Store/user/actions"
import { GET_USER_API_ERROR } from "../../Store/user/actionTypes"
import SackBar from "../../Components/Common/SackBar"
// import axiosAPI from "../../Helper/API/API_Helper";
import { useHistory } from "react-router-dom"

const AccountSettings = () => {
  const accessToken = localStorage.getItem("accessToken")
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (accessToken) {
      dispatch(getUser())
    }
  }, [accessToken])

  const { user, error, loading } = useSelector(state => state.user)
  console.log(user);

  const [resAccount, setresAccount] = useState({})

  useEffect(() => {
    setresAccount(user)
  }, [user])

  // const [loading, setloading] = useState(false);
  const [success, setsuccess] = useState(false)
  // const [error, seterror] = useState(false);

  const [agree, setAgree] = useState(false)
  const [phoneToWhts, setphoneToWhts] = useState(false)

  const [dateOfBirth, setdateOfBirth] = useState()

  useEffect(() => {
    setdateOfBirth(
      resAccount?.dateOfBirth ? new Date(resAccount?.dateOfBirth) : new Date()
    )
  }, [])

  // useEffect(() => {
  //   setloading(true);
  //   AccountSettingsServices.AccountSettingsGet()
  //     .then((val) => {
  //       console.log("vall", val);
  //       setresAccount(val);

  //     })
  //     .catch((err) => {
  //       seterror(true);
  //       setloading(false);
  //       console.log("err");
  //     });

  //   // .then(val=>console.log(val))
  // }, []);
  // console.log("resAccount?.phone",resAccount)
  const initialValues = {
    fullName: resAccount?.fullName || "",

    email: resAccount?.email || "",
    phoneNumber: resAccount?.phone || "",
    whatsappNumber: phoneToWhts
      ? resAccount?.phone
      : resAccount?.whatsappNumber,
    emergencyContactNumber: resAccount?.emergencyContactNumber || "",

    houseNumber: resAccount?.billingAddress?.houseNumber || "",
    streetName: resAccount?.billingAddress?.streetName || "",
    area: resAccount?.billingAddress?.area || "",
    landmark: resAccount?.billingAddress?.landmark || "",
    zipCode: resAccount?.billingAddress?.zipCode || "",
    city: resAccount?.billingAddress?.city || "",
    state: resAccount?.billingAddress?.state || "",

    shippingAddress: {
      houseNumber: "",
      streetName: "",
      area: "",
      landmark: "",
      zipCode: "",
      city: "",
      state: "",
    },
    // additionalAddress: {
    //   houseNumber: resAccount?.additionalAddress?.houseNumber || "hello",
    //   streetName: resAccount?.additionalAddress?.streetName || "hello",
    //   area: resAccount?.additionalAddress?.area || "",
    //   landmark: resAccount?.additionalAddress?.landmark || "",
    //   zipCode: resAccount?.additionalAddress?.zipCode || "",
    //   city: resAccount?.additionalAddress?.city || "",
    //   state: resAccount?.additionalAddress?.state || "",
    // },

    houseNumberAdditionalAddress:
      resAccount?.additionalAddress?.houseNumber || "",
    streetNameAdditionalAddress:
      resAccount?.additionalAddress?.streetName || "",
    areaAdditionalAddress: resAccount?.additionalAddress?.area || "",
    landmarkAdditionalAddress: resAccount?.additionalAddress?.landmark || "",
    zipCodeAdditionalAddress: resAccount?.additionalAddress?.zipCode || "",
    cityAdditionalAddress: resAccount?.additionalAddress?.city || "",
    stateAdditionalAddress: resAccount?.additionalAddress?.state || "",

    notifications: ["email"],
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [value, setValue] = useState(false)
  const [contextValue, setContextValue] = useState([])
  const [badFormat, setbadFormat] = useState(false)

  const [process, setprocess] = useState(false)

  // console.log("user")

  const onSubmit = values => {
    // console.log("value",values)
    setprocess(true)
    let newvalue = newInitialValues

    newvalue.fullName = values.fullName
    newvalue.dateOfBirth = dateOfBirth
    newvalue.email = values.email
    newvalue.phone = values.phoneNumber
    newvalue.whatsappNumber = phoneToWhts
      ? values.phoneNumbe
      : values.whatsappNumber
    newvalue.emergencyContactNumber = values.emergencyContactNumber

    newvalue.billingAddress.houseNumber = values.houseNumber
    newvalue.billingAddress.streetName = values.streetName
    newvalue.billingAddress.area = values.area
    newvalue.phoneOnPortfolio = agree
    newvalue.billingAddress.landmark = values.landmark
    newvalue.billingAddress.zipCode = values.zipCode
    newvalue.billingAddress.city = values.city
    newvalue.billingAddress.state = values.state

    newvalue.additionalAddress.houseNumber = values.houseNumberAdditionalAddress
    newvalue.additionalAddress.streetName = values.streetNameAdditionalAddress
    newvalue.additionalAddress.area = values.areaAdditionalAddress

    newvalue.additionalAddress.landmark = values.landmarkAdditionalAddress
    newvalue.additionalAddress.zipCode = values.zipCodeAdditionalAddress
    newvalue.additionalAddress.city = values.cityAdditionalAddress
    newvalue.additionalAddress.state = values.stateAdditionalAddress

    // if (Object.keys(values.additionalAddress).length > 0) {
    //   newvalue.additionalAddress = values.additionalAddress;
    // }
    if (value) {
      newvalue.shippingAddress = newvalue.billingAddress
    }

    if (contextValue.notifications.length > 0) {
      newvalue.notifications = [...contextValue.notifications]
    }

    setbadFormat(false)
    const newFunc = async value => {
      // console.log("totalvalue", value);
      // try {
      //   let a = await AccountSettingsServices.AccountSettingsPatch(value);
      //   setprocess(false);
      //   swal("Good job!", "Successfully done!", "success");

      // setTimeout(() => {

      //   AccountSettingsServices.AccountSettingsGet().then((v) => {

      //   });
      // }, 4000);
      // } catch (error) {
      //   setbadFormat(true);
      //   setprocess(false);
      //   console.log("c", error);
      // }

      axiosApi
        .patch(`/learners/${localStorage.getItem("uid")}`, value)
        .then(res => {
          setprocess(false)
          swal("Good job!", "Successfully done!", "success")
          setTimeout(() => {
            dispatch(getUser())
          }, 4000)
        })
        .catch(err => {
          setprocess(false)
          setbadFormat(true)
        })
    }

    newFunc(newvalue)
  }

  const sendBenefits = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validate,
    onSubmit,
  })

  // useEffect(() => {

  //   axiosApi.get(
  //     `/learners/${localStorage.getItem("uid")}`)
  //     .then(res=>console.log("res value account",res))
  //     .catch(err=>console.log("err",err))

  // }, [])

  if (loading) return <Loading></Loading>

  return (
    <React.Fragment>
      {error ? (
        <SweetAlert
          title={"Something went wrong!"}
          warning
          onConfirm={() =>
            dispatch({ type: "GET_USER_API_ERROR", payload: "" })
          }
          confirmBtnCssClass="bg-blue-400 px-3 py-2"
          btnSize="lg"
        >
          That thing is still around?
        </SweetAlert>
      ) : null}
      <ScrollToTop />
      <div className={`${Style.stoper_head} my-3`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-2">
              <div className={Style.page_steps}>
                <Link
                  to="Personal_Information"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Personal Information
                </Link>
                <Link
                  to="Contact_Details"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  <div className="d-flex justify-content-between ">
                    <p className="m-0 p-0">Contact Details</p>
                    {!user?.emailVerified && (
                      <img
                        className="mt-1"
                        src={contact}
                        style={{ height: "13px", width: "auto" }}
                        alt=""
                      />
                    )}
                  </div>
                </Link>
                <Link
                  to="Address"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Address
                </Link>
                <Link
                  to="transactions"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Transactions
                </Link>
                {/* <Link
                  to="OrderDetails"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Order Details
                </Link> */}

                <Link
                  to="Notification"
                  activeClass={Style.active_one}
                  smooth={true}
                  offset={0}
                  duration={500}
                  delay={100}
                  spy={true}
                >
                  Notification
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-9 ps-5">
              <div className={Style.center_items}>
                <div>
                  <ResetAndLogOut />

                  <form onSubmit={sendBenefits.handleSubmit}>
                    <div>
                      <div className="py-3 width-40">
                        <Element>
                          <Personalinformation
                            sendBenefits={sendBenefits}
                            account={resAccount}
                            setdateOfBirth={setdateOfBirth}
                            dateOfBirth={dateOfBirth}
                          />
                        </Element>
                      </div>

                      <div className="">
                        <hr />
                      </div>

                      <div className="py-1">
                        <Element id="Contact_Details">
                          <ContactDetails
                            sendBenefits={sendBenefits}
                            account={resAccount}
                            setAgree={setAgree}
                            setphoneToWhts={setphoneToWhts}
                            phoneToWhts={phoneToWhts}
                          />
                        </Element>

                        <div className="">
                          <hr />
                        </div>
                      </div>

                      <div className="width-40">
                        <Element id="Address">
                          <Address
                            account={resAccount}
                            sendBenefits={sendBenefits}
                            setValue={setValue}
                          />
                        </Element>
                      </div>

                      <div className="width-40">
                        <AdditionalAddress
                          sendBenefits={sendBenefits}
                          account={resAccount}
                        />
                      </div>
                    </div>
                    <div>
                      <Element id="transactions">
                        <Transactions account={resAccount} />
                      </Element>
                    </div>
                    <div>
                      <Element>
                        <Dress />
                      </Element>
                    </div>
                    <Element id="Notification">
                      <Notifications
                        contextValue={contextValue}
                        setContextValue={setContextValue}
                      />
                    </Element>
                    <SackBar
                      history={history}
                      title={
                        process ? "Submit form processing..." : "Submit Form"
                      }
                    ></SackBar>
                    <br /> <hr />
                    {badFormat && (
                      <h4 className="text-danger">
                        <br />
                        Bad Formates! ..{" "}
                      </h4>
                    )}
                    {success && (
                      <h4 style={{ color: "green" }}>
                        <br />
                        Congratulations, SuccessFully Done..{" "}
                      </h4>
                    )}
                  </form>
                </div>

                {/* <CourseFAQ /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AccountSettings
