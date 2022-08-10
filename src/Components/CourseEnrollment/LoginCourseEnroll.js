// import React, { useState } from "react";
// import Style from "../../Style/auth.module.scss";
// import { post } from "../../Helper/API/API_Helper";
// import { BsStar } from "react-icons/bs";
// import { MdStreetview } from "react-icons/md";
// import { MdDriveFileMoveOutline } from "react-icons/md";
// import { BsCalendarCheck } from "react-icons/bs";

// function LoginCourseEnroll() {
//   const [value, setValue] = useState({
//     email: "",
//     password: "",
//     role: "learner",
//     otp: "",
//   });

//   const [OTPLogin, setOTPLogin] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const handleInputs = (e) => {
//     setSuccess(false);
//     setError(false);
//     setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleLogin = async (id) => {
//     setSuccess(false);
//     setError(false);
//     if (id === 1) {
//       try {
//         let body = {
//           username: value.email,
//           password: value.password,
//         };
//         let request = await post("/login", body);
//         if (request.code !== "NotAuthorizedException") {
//           setSuccess(true);

//            console.log("role",request.role)
//           if (request.role === "admin")
//             return window.location.replace(
//               `https://designers-admin-eb534.web.app/login/${request.uid}/${request.accessToken}/${request.refreshToken}`
//             );
//           localStorage.setItem("accessToken", request.accessToken);
//           localStorage.setItem("identityToken", request.identityToken);
//           localStorage.setItem("refreshToken", request.refreshToken);
//           localStorage.setItem("role", request.role);
//           localStorage.setItem("uid", request.uid);
//           localStorage.setItem("email", value.email);

//           setTimeout(() => {
//             // history.push("/courses");
//             window.location.reload();
//           }, 1000);
//         } else {
//           setError(true);
//         }
//       } catch (error) {
//         if (error) {
//           setError(true);
//         }
//       }
//     }
//   };

//   const switchToOTP = () => {
//     setSuccess(false);
//     setError(false);
//     setOTPLogin(!OTPLogin);
//   };

//   const [otpRecieved, setOtpRecieved] = useState(null);
//   const handleOtp = async () => {
//     console.log(value);
//     setSuccess(false);
//     setError(false);
//     try {
//       let request = await post("/tempotp", { username: value.email });
//       if (request.code) {
//         setError(true);
//         return;
//       }
//       console.log(request);
//       if (request.message) {
//         setOtpRecieved(value.email);
//       }
//     } catch (error) {
//       setError(true);
//     }
//   };
//   const verifyOTP = async () => {
//     console.log(value);
//     setSuccess(false);
//     setError(false);

//     let request = await post("/tempotpverify", {
//       otp: value.otp,
//       username: value.email,
//     });
//     if (request.uid) {
//       localStorage.setItem("accessToken", request.accessToken);
//       localStorage.setItem("identityToken", request.identityToken);
//       localStorage.setItem("refreshToken", request.refreshToken);
//       localStorage.setItem("role", request.role);
//       localStorage.setItem("uid", request.uid);

//       setSuccess(true);
//       // history.push("/courses");
//       return;
//     }
//   };

//   let checkLogin = localStorage.getItem("accessToken") ? false : true;
//   console.log(localStorage.getItem("email"))

//   return (
//     <div className="p-4 mt-3 " style={{ background: "#F5F5F5" }}>
//       {checkLogin ? (
//         <h4 className="d-flex ">
//           <div className="avatar bg-danger text-center  text-white ">
//             <small style={{ fontSize: "16px" }}> 1 </small>
//           </div>
//           <h6 className="ms-2 mt-1">Login</h6>
//         </h4>
//       ) : (
//         <div>
//           <h4 className="d-flex">
//             <div
//               className="avatar text-center"
//               style={{ background: "#e9eceb" }}
//             >
//               <small style={{ fontSize: "16px" }}> 1 </small>
//             </div>
//             <h6 style={{ marginTop: "2px" }} className="ms-3 ">
//               Login
//             </h6>
//           </h4>
//         </div>
//       )}

//       {!localStorage.getItem("accessToken") ? (
//         <div className="row ">
//           <div className="col-sm-12 col-md-4 col-lg-5">
//             <div className={Style.tabs}></div>
//             <div>
//               {!OTPLogin ? (
//                 <React.Fragment>
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       handleLogin(1);
//                     }}
//                   >
//                     <label htmlFor="" className={Style.label}>
//                       E-mail/Phone Number *
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control mb-3"
//                       name="email"
//                       onChange={handleInputs}
//                     />
//                     <label htmlFor="" className={Style.label}>
//                       Password *
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control mb-3"
//                       name="password"
//                       onChange={handleInputs}
//                     />

//                     {success && (
//                       <p
//                         className="text-success my-3 mx-0"
//                         style={{ fontSize: 13, fontWeight: 500 }}
//                       >
//                         Login successful
//                       </p>
//                     )}
//                     {error && (
//                       <p
//                         className="text-danger my-3 mx-0"
//                         style={{ fontSize: 13, fontWeight: 500 }}
//                       >
//                         Invalid email & password
//                       </p>
//                     )}
//                     <button
//                       type="submit"
//                       className={`btn mt-3 ${Style.button}`}
//                     >
//                       Login
//                     </button>
//                   </form>
//                 </React.Fragment>
//               ) : (
//                 <React.Fragment>
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       handleLogin(2);
//                     }}
//                   >
//                     {!otpRecieved ? (
//                       <>
//                         <label htmlFor="" className={Style.label}>
//                           Give your email
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control mb-3"
//                           name="email"
//                           onChange={handleInputs}
//                         />

//                         {success && (
//                           <p
//                             className="text-success my-3 mx-0"
//                             style={{ fontSize: 13, fontWeight: 500 }}
//                           >
//                             Registration is successful
//                           </p>
//                         )}
//                         {error && (
//                           <p
//                             className="text-danger my-3 mx-0"
//                             style={{ fontSize: 13, fontWeight: 500 }}
//                           >
//                             User already exist
//                           </p>
//                         )}
//                         <p
//                           onClick={handleOtp}
//                           className={`btn mt-3 ${Style.button}`}
//                         >
//                           Send OTP
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         {" "}
//                         <label htmlFor="" className={Style.label}>
//                           Your OTP
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control mb-3"
//                           name="otp"
//                           onChange={handleInputs}
//                         />
//                         {success && (
//                           <p
//                             className="text-success my-3 mx-0"
//                             style={{ fontSize: 13, fontWeight: 500 }}
//                           >
//                             Registration is successful
//                           </p>
//                         )}
//                         {error && (
//                           <p
//                             className="text-danger my-3 mx-0"
//                             style={{ fontSize: 13, fontWeight: 500 }}
//                           >
//                             User already exist
//                           </p>
//                         )}
//                         <p
//                           onClick={verifyOTP}
//                           type="submit"
//                           className={`btn mt-3 ${Style.button}`}
//                         >
//                           Verify OTP
//                         </p>
//                         {/* <button
//                           className={`btn mt-3 ${Style.button2}`}
//                           onClick={switchToOTP}
//                         >
//                           Signup using Email
//                         </button> */}
//                       </>
//                     )}
//                   </form>
//                   <button
//                     className={`btn mt-3 ${Style.button2}`}
//                     onClick={switchToOTP}
//                   >
//                     Login using Email
//                   </button>
//                 </React.Fragment>
//               )}
//             </div>
//           </div>

//           <div className="col-7 ">
//             <div className="ps-5 ms-5">
//               <p style={{ fontSize: "12px" }}>
//                 {" "}
//                 Why Login from Designerrs app{" "}
//               </p>
//               <div className="ps-2">
//                 <div className="d-flex py-1">
//                   <BsStar className="mt-2 text-danger" />{" "}
//                   <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
//                     Build your online presence with Portfolio
//                   </span>
//                 </div>
//                 <div className="d-flex py-1">
//                   <MdStreetview className="mt-2 text-danger" />{" "}
//                   <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
//                     Become a member of Detaux community
//                   </span>
//                 </div>
//                 <div className="d-flex py-1">
//                   <MdDriveFileMoveOutline className="mt-2 text-danger" />{" "}
//                   <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
//                     Get access to 1000+ resources in our app
//                   </span>
//                 </div>
//                 <div className="d-flex py-1">
//                   <BsCalendarCheck className="mt-2 text-danger" />{" "}
//                   <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
//                     Get regular updates on exciting events
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           {" "}
//           <div className="row pt-4">
//             <div className="col-4">
//               <h6> Email </h6>
//              {localStorage.getItem("email") && <p> {localStorage.getItem("email")} </p>}
//             </div>

//             <div className="col-6">
//               <h6>Phone </h6>
//               <p>--</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default LoginCourseEnroll;

import React, { useState } from "react";
import Style from "../../Style/auth.module.scss";
import { post } from "../../Helper/API/API_Helper";
import { BsStar } from "react-icons/bs";
import { MdStreetview } from "react-icons/md";
import { MdDriveFileMoveOutline } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { Link, useHistory } from "react-router-dom";
import RightImage from "../../Assets/Images/Login_Side.svg";
import Amplify, { Auth } from "aws-amplify";
import { getUser } from "../../Store/user/actions";
import { useDispatch } from "react-redux";
import { loadToken } from "../../App";

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_EqYeey1dl",
    userPoolWebClientId: "3vv2ve70kjlougdkl7prshdpkv",
  },
});

const initialValues = {
  email: "",
  password: "",
  otp: "",
};

function LoginCourseEnroll() {
  let history = useHistory();

  const [value, setValue] = useState({
    email: "",
    password: "",
    role: "learner",
    otp: "",
  });

  const [OTPLogin, setOTPLogin] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [process, setProcess] = useState({
    loading: false,
    error: false,
    errorMsg: "",
    success: false,
    successMsg: "",
  });
  const handleInputs = (e) => {
    setSuccess(false);
    setError(false);
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (value.email === "" || value.password === "")
      return setProcess({
        ...process,
        error: true,
        success: false,
        loading: false,
        errorMsg: "Please Enter Valid Email & Password",
      });
    setProcess({ ...process, loading: true, success: false, error: false });

    try {
      const loginUser = await Auth.signIn(value.email, value.password);
      if (loginUser.signInUserSession || loginUser.keyPrefix) {
        localStorage.setItem("keyPrefix", loginUser.keyPrefix);
        localStorage.setItem("username", loginUser.username);

        localStorage.setItem("uid", loginUser.username);
        localStorage.setItem(
          "accessToken",
          loginUser.signInUserSession.accessToken.jwtToken
        );
        localStorage.setItem(
          "refreshToken",
          loginUser.signInUserSession.refreshToken.token
        );
        localStorage.setItem(
          "identityToken",
          loginUser.signInUserSession.idToken.jwtToken
        );
        localStorage.setItem(
          "role",
          loginUser.signInUserSession.idToken.payload["cognito:groups"][0]
        );
        localStorage.setItem("email", value.email);

        setProcess({
          ...process,
          loading: false,
          success: true,
          error: false,
          successMsg: "Login successful, redirecting to home page in a moment",
        });

        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        setProcess({
          ...process,
          loading: false,
          success: false,
          error: true,
          errorMsg: "Login Failed, Please Check your Email and Password",
        });
      }
    } catch (error) {
      setProcess({
        ...process,
        loading: false,
        success: false,
        error: true,
        errorMsg: error.message,
      });
    }
  };

  const switchToOTP = () => {
    setSuccess(false);
    setError(false);
    setOTPLogin(!OTPLogin);
  };

  const [otpRecieved, setOtpRecieved] = useState(null);
  const handleOtp = async () => {
    console.log(value);
    setSuccess(false);
    setError(false);
    try {
      let request = await post("/tempotp", { username: value.email });
      if (request.code) {
        setError(true);
        return;
      }
      console.log(request);
      if (request.message) {
        setOtpRecieved(value.email);
      }
    } catch (error) {
      setError(true);
    }
  };
  const verifyOTP = async () => {
    console.log(value);
    setSuccess(false);
    setError(false);

    let request = await post("/tempotpverify", {
      otp: value.otp,
      username: value.email,
    });
    if (request.uid) {
      localStorage.setItem("accessToken", request.accessToken);
      localStorage.setItem("identityToken", request.identityToken);
      localStorage.setItem("refreshToken", request.refreshToken);
      localStorage.setItem("role", request.role);
      localStorage.setItem("uid", request.uid);
      localStorage.setItem("email", value.email);

      setSuccess(true);
      // history.push("/courses");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    }
  };

  let checkLogin = localStorage.getItem("accessToken") ? false : true;

  return (
    <div className="p-4 mt-3 " style={{ background: "#F5F5F5" }}>
      {checkLogin ? (
        <h4 className="d-flex align-items-center">
          <div className="avatar bg-danger d-flex justify-content-center align-items-center  text-white ">
            <small style={{ fontSize: "16px" }}> 1 </small>
          </div>
          <h6 className="ms-2 mt-1">Login</h6>{" "}
        </h4>
      ) : (
        <div>
          <h4 className="d-flex align-items-center">
            <div
              className="avatar text-center d-flex justify-content-center align-items-center"
              style={{ background: "#e9eceb" }}
            >
              <small style={{ fontSize: "16px" }}> 1 </small>
            </div>
            <div className="d-flex align-items-center">
              <h6 style={{ marginTop: "2px" }} className="ms-3 ">
                Login
              </h6>
              <img
                className="ms-3"
                style={{ height: "17px", width: "17px" }}
                src={require("../../Assets/Images/icons/correct.png")}
                alt=""
              />{" "}
            </div>
          </h4>
          <hr></hr>
        </div>
      )}
      {!localStorage.getItem("accessToken") ? (
        <div className="row ">
          <div className="col-sm-12 col-md-4 col-lg-5">
            <div className={Style.tabs}></div>
            <div>
              {!OTPLogin ? (
                <React.Fragment>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin(1);
                    }}
                  >
                    <label htmlFor="" className={Style.label}>
                      E-mail/Phone Number *
                    </label>
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="email"
                      onChange={handleInputs}
                    />
                    <label htmlFor="" className={Style.label}>
                      Password *
                    </label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      name="password"
                      onChange={handleInputs}
                    />

                    {success && (
                      <p
                        className="text-success my-3 mx-0"
                        style={{ fontSize: 13, fontWeight: 500 }}
                      >
                        Login successful
                      </p>
                    )}
                    {error && (
                      <p
                        className="text-danger my-3 mx-0"
                        style={{ fontSize: 13, fontWeight: 500 }}
                      >
                        Invalid email & password
                      </p>
                    )}
                    <button
                      type="submit"
                      className={`btn mt-3 ${Style.button}`}
                    >
                      Login
                    </button>
                  </form>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleLogin(2);
                    }}
                  >
                    {!otpRecieved ? (
                      <>
                        <label htmlFor="" className={Style.label}>
                          Give your email
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          name="email"
                          onChange={handleInputs}
                        />

                        {success && (
                          <p
                            className="text-success my-3 mx-0"
                            style={{ fontSize: 13, fontWeight: 500 }}
                          >
                            Registration is successful
                          </p>
                        )}
                        {error && (
                          <p
                            className="text-danger my-3 mx-0"
                            style={{ fontSize: 13, fontWeight: 500 }}
                          >
                            User already exist
                          </p>
                        )}
                        <p
                          onClick={handleOtp}
                          className={`btn mt-3 ${Style.button}`}
                        >
                          Send OTP
                        </p>
                      </>
                    ) : (
                      <>
                        {" "}
                        <label htmlFor="" className={Style.label}>
                          Your OTP
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          name="otp"
                          onChange={handleInputs}
                        />
                        {success && (
                          <p
                            className="text-success my-3 mx-0"
                            style={{ fontSize: 13, fontWeight: 500 }}
                          >
                            Registration is successful
                          </p>
                        )}
                        {error && (
                          <p
                            className="text-danger my-3 mx-0"
                            style={{ fontSize: 13, fontWeight: 500 }}
                          >
                            User already exist
                          </p>
                        )}
                        <p
                          onClick={verifyOTP}
                          type="submit"
                          className={`btn mt-3 ${Style.button}`}
                        >
                          Verify OTP
                        </p>
                        {/* <button
                          className={`btn mt-3 ${Style.button2}`}
                          onClick={switchToOTP}
                        >
                          Signup using Email
                        </button> */}
                      </>
                    )}
                  </form>
                  <button
                    className={`btn mt-3 ${Style.button2}`}
                    onClick={switchToOTP}
                  >
                    Login using Email
                  </button>
                </React.Fragment>
              )}
            </div>
          </div>

          <div className="col-7 ">
            <div className="ps-5 ms-5">
              <p style={{ fontSize: "12px" }}>
                {" "}
                Why Login from Designerrs app{" "}
              </p>
              <div className="ps-2">
                <div className="d-flex py-1">
                  <BsStar className="mt-2 text-danger" />{" "}
                  <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
                    Build your online presence with Portfolio
                  </span>
                </div>
                <div className="d-flex py-1">
                  <MdStreetview className="mt-2 text-danger" />{" "}
                  <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
                    Become a member of Detaux community
                  </span>
                </div>
                <div className="d-flex py-1">
                  <MdDriveFileMoveOutline className="mt-2 text-danger" />{" "}
                  <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
                    Get access to 1000+ resources in our app
                  </span>
                </div>
                <div className="d-flex py-1">
                  <BsCalendarCheck className="mt-2 text-danger" />{" "}
                  <span style={{ fontSize: "14px" }} className="ps-2 pt-1">
                    Get regular updates on exciting events
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="row pt-4">
            <div className="col-4">
              <h6> Email </h6>
              {localStorage.getItem("email") && (
                <p> {localStorage.getItem("email")} </p>
              )}
            </div>

            <div className="col-6">
              <h6>Phone </h6>
              <p>--</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginCourseEnroll;
