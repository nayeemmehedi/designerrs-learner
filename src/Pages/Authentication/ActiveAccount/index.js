import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { get, post } from "../../../Helper/API/API_Helper";
import Style from "../../../Style/auth.module.scss";
import RightImage from "../../../Assets/Images/frame.svg";

const ActivateAccount = () => {
  let history = useHistory();
  let location = useLocation();
  let parseMail = location?.search?.slice(10);
  const [activity, setActivity] = useState({
    error: false,
    errorMessage: "",
    success: false,
    successMessage: "",
    sendOTP: false,
    email: "",
    strict_mode: false,
    otp: "",
  });

  const handleInputs = (e) => {
    setActivity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const sendOTP = async () => {
  //   setActivity((prev) => ({
  //     ...prev,
  //     error: false,
  //     errorMessage: "",
  //     success: false,
  //     successMessage: "",
  //     sendOTP: false,
  //   }));
  //   try {
  //     let request = await get(
  //       `/otp?username=${activity.email === "" ? parseMail : activity.email}`
  //     );
  //     if (request.message.startsWith("OTP sent to:")) {
  //       setActivity((prev) => ({
  //         ...prev,
  //         error: false,
  //         errorMessage: "",
  //         success: true,
  //         sendOTP: true,
  //         successMessage: request.message,
  //       }));
  //     }
  //   } catch (error) {
  //     setActivity((prev) => ({
  //       ...prev,
  //       error: true,
  //       errorMessage: "OTP Send Failed, Try Again",
  //       success: false,
  //       successMessage: "",
  //       sendOTP: false,
  //     }));
  //   }
  // };

  // const verifyOTP = async () => {
  //   setActivity((prev) => ({
  //     ...prev,
  //     error: false,
  //     errorMessage: "",
  //     success: false,
  //     successMessage: "",
  //   }));
  //   if (activity.otp === "") return;
  //   try {
  //     let body = {
  //       otp: activity.otp,
  //     };
  //     let request = await post("/otp", body);
  //     if (request.message === "OTP Verified Successfully") {
  //       setActivity((prev) => ({
  //         ...prev,
  //         error: false,
  //         errorMessage: "",
  //         success: true,
  //         successMessage: request.message,
  //         sendOTP: true,
  //       }));
  //       setTimeout(() => {
  //         history.push("/");
  //       }, 3000);
  //     }
  //   } catch (error) {
  //     setActivity((prev) => ({
  //       ...prev,
  //       error: true,
  //       errorMessage: "OTP Verification Failed, Try Again",
  //       success: false,
  //       successMessage: "",
  //       sendOTP: false,
  //     }));
  //   }
  // };

  const handleOtp = async () => {
    setActivity((prev) => ({
      ...prev,
      error: false,
      errorMessage: "",
      success: false,
      successMessage: "",
      sendOTP: false,
    }));
    console.log(activity.email === "" ? parseMail : activity.email);
    try {
      let request = await post("/tempotp", {
        username: activity.email === "" ? parseMail : activity.email,
      });
      console.log(request);
      if (request.message) {
        setActivity((prev) => ({
          ...prev,
          error: false,
          errorMessage: "",
          success: true,
          sendOTP: true,
          successMessage: request.message,
        }));
      }
    } catch (error) {
      setActivity((prev) => ({
        ...prev,
        error: true,
        errorMessage: "OTP Send Failed, Try Again",
        success: false,
        successMessage: "",
        sendOTP: false,
      }));
    }
  };
  const verifyOTP = async () => {
    setActivity((prev) => ({
      ...prev,
      error: false,
      errorMessage: "",
      success: false,
      successMessage: "",
    }));
    if (activity.otp === "") return;
    try {
      let request = await post("/tempotpverify", {
        otp: activity.otp,
        username: activity.email === "" ? parseMail : activity.email,
      });
      console.log(request);
      if (request.accessToken) {
        localStorage.setItem("accessToken", request.accessToken);
        localStorage.setItem("identityToken", request.identityToken);
        localStorage.setItem("refreshToken", request.refreshToken);
        localStorage.setItem("role", request.role);
        localStorage.setItem("uid", request.uid);
        history.push("/courses");
        setActivity((prev) => ({
          ...prev,
          error: false,
          errorMessage: "",
          success: true,
          successMessage: request.message,
          sendOTP: true,
        }));
        // setTimeout(() => {
        //   history.push("/");
        // }, 3000);
      }
    } catch (error) {
      setActivity((prev) => ({
        ...prev,
        error: true,
        errorMessage: "OTP Verification Failed, Try Again",
        success: false,
        successMessage: "",
        sendOTP: false,
      }));
    }
  };
  return (
    <React.Fragment>
      <div className="rel">
        <div className="container-lg">
          <div className={Style.left_logo}></div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <p className="font_13">
                Activate your account by verifying your email/phone.
              </p>
              <div>
                {!activity.sendOTP ? (
                  <React.Fragment>
                    {activity.success && (
                      <p style={{ fontSize: 14, color: "green" }}>
                        {activity.successMessage}
                      </p>
                    )}
                    {activity.error && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {activity.errorMessage}
                      </p>
                    )}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleOtp();
                      }}
                    >
                      <label htmlFor="" className={Style.label}>
                        E-mail/Phone Number *
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="email"
                        defaultValue={parseMail || ""}
                        disabled={parseMail ? true : false}
                        onChange={handleInputs}
                      />
                      <button
                        type="submit"
                        className={`btn mt-3 ${Style.button}`}
                      >
                        Send OTP
                      </button>
                    </form>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {activity.success && (
                      <p style={{ fontSize: 14, color: "green" }}>
                        {activity.successMessage}
                      </p>
                    )}
                    {activity.error && (
                      <p style={{ fontSize: 14, color: "red" }}>
                        {activity.errorMessage}
                      </p>
                    )}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        verifyOTP();
                      }}
                    >
                      <label htmlFor="" className={Style.label}>
                        E-mail/Phone Number *
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        name="email"
                        defaultValue={parseMail || activity.email}
                        disabled
                        onChange={handleInputs}
                      />
                      <label htmlFor="" className={Style.label}>
                        Your OTP
                      </label>
                      <input
                        type="number"
                        className="form-control mb-3"
                        name="otp"
                        onChange={handleInputs}
                      />
                      <button
                        type="submit"
                        className={`btn mt-3 ${Style.button}`}
                      >
                        Verify & Activate Account
                      </button>
                    </form>
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className={Style.right_logo}>
                <img src={RightImage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.right_logo_img}></div>
      </div>
    </React.Fragment>
  );
};

export default ActivateAccount;
