import React, { useState } from "react"
import { Link } from "react-router-dom"
import Style from "../../Style/auth.module.scss"
import RightImage from "../../Assets/Images/frame.svg"
import axios from "axios"
import { post } from "../../Helper/API/API_Helper"
import { useHistory } from "react-router-dom"
import Amplify, { Auth } from "aws-amplify"
import { getUser } from "../../Store/user/actions"
import { useDispatch } from "react-redux"

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_EqYeey1dl",
    userPoolWebClientId: "3vv2ve70kjlougdkl7prshdpkv",
  },
})

const Register = () => {
  let history = useHistory()
  const [value, setValue] = useState({
    email: "",
    password: "",
    role: "learner",
    otp: "",
  })

  const [confirmationStatus, setConfirmationStatus] = useState(false)
  const [otpSignup, setOtpSignup] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [process, setProcess] = useState({
    loading: false,
    error: false,
    errorMsg: "",
    success: false,
    successMsg: "",
  })

  const [otpRecieved, setORecieved] = useState(false)

  const handleInputs = e => {
    setSuccess(false)
    setError(false)
    setValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSignup = async () => {
    if (value.email === "" || value.password === "")
      return setProcess({
        ...process,
        error: true,
        success: false,
        loading: false,
        errorMsg: "Please Enter Valid Email & Password",
      })
    setProcess({ ...process, loading: true, success: false, error: false })
    localStorage.clear()
    try {
      const generateUser = await Auth.signUp(value.email, value.password)
      if (generateUser.userSub || generateUser.userConfirmed) {
        const loginUser = await Auth.signIn(value.email, value.password)
        if (loginUser.signInUserSession || loginUser.keyPrefix) {
          const storeToDB = await axios.post(
            "/newuser",
            {
              username: value.email,
            },
            {
              headers: {
                Authorization: `Bearer ${loginUser.signInUserSession.accessToken.jwtToken}`,
              },
            }
          )
          if (storeToDB?.data?.confirmationStatus !== true)
            return setProcess({
              ...process,
              loading: false,
              success: false,
              error: true,
              errorMsg: "Signup Failed, Try Again with Another Email",
            })
          // setProcess({
          //   ...process,
          //   loading: false,
          //   success: true,
          //   error: false,
          //   successMsg:
          //     "Signup successful, redirecting to home page in a moment",
          // });

          // Auth.currentSession().then((data) => {
          //   // console.log(data);

          //   localStorage.setItem("accessToken", data.accessToken.jwtToken);
          //   localStorage.setItem("refreshToken", data.refreshToken.token);
          // });
          // localStorage.setItem("keyPrefix", loginUser.keyPrefix);
          // localStorage.setItem("username", loginUser.username);

          // localStorage.setItem(
          //   "identityToken",
          //   loginUser.signInUserSession.idToken.jwtToken
          // );
          // // localStorage.setItem(
          // //   "role",
          // //   loginUser.signInUserSession.idToken.payload["cognito:groups"][0]
          // // );
          // console.log(loginUser);
          // localStorage.setItem("email", value.email);
          setProcess({
            ...process,
            loading: false,
            success: true,
            error: false,
            successMsg:
              "Registration successful, redirecting to home page in a moment",
          })
          setTimeout(() => {
            window.location = "/login"
          }, 3000)
        }
      }
    } catch (error) {
      setProcess({
        ...process,
        loading: false,
        success: false,
        error: true,
        errorMsg: error.message,
      })
    }
  }

  const switchToOTP = async () => {
    setSuccess(false)
    setError(false)
    setOtpSignup(!otpSignup)
  }

  const handleOtp = async () => {
    if (value.email === "")
      return setProcess({
        ...process,
        error: true,
        success: false,
        loading: false,
        errorMsg: "Please Enter Valid Email",
      })
    setProcess({ ...process, loading: true, success: false, error: false })
    localStorage.clear()
    try {
      const generateUser = await Auth.signUp(
        value.email,
        `aS^(${Date.now().toString()}`
      )
      if (generateUser.userSub || generateUser.userConfirmed) {
        const loginUser = await Auth.signIn(value.email)
        if (loginUser.signInUserSession || loginUser.keyPrefix) {
          setORecieved(loginUser)
          setProcess({
            ...process,
            loading: false,
            success: true,
            error: false,
            successMsg: "Signup successful, Please provide OTP",
          })
        }
      }
    } catch (error) {
      console.log(error)
      setProcess({
        ...process,
        loading: false,
        success: false,
        error: true,
        errorMsg: `${error}`,
      })
    }
  }

  const verifyOTP = async () => {
    setProcess({
      ...process,
      loading: true,
      success: false,
      error: false,
    })
    try {
      const cognitoUser = await Auth.sendCustomChallengeAnswer(
        otpRecieved,
        value.otp
      )
      console.log(cognitoUser)
      if (cognitoUser.username) {
        const storeToDB = await axios.post(
          "/newuser",
          {
            username: value.email,
          },
          {
            headers: {
              Authorization: `Bearer ${cognitoUser.signInUserSession.accessToken.jwtToken}`,
            },
          }
        )
        console.log(storeToDB?.data?.confirmationStatus)
        if (storeToDB?.data?.confirmationStatus !== true)
          return setProcess({
            ...process,
            loading: false,
            success: false,
            error: true,
            errorMsg: "Signup Failed, Try Again with Another Email",
          })

        localStorage.setItem("keyPrefix", cognitoUser.keyPrefix)
        localStorage.setItem("username", cognitoUser.username)

        localStorage.setItem("uid", cognitoUser.attributes.sub)
        localStorage.setItem(
          "accessToken",
          cognitoUser.signInUserSession.accessToken.jwtToken
        )
        localStorage.setItem(
          "refreshToken",
          cognitoUser.signInUserSession.refreshToken.token
        )
        localStorage.setItem(
          "identityToken",
          cognitoUser.signInUserSession.idToken.jwtToken
        )
        localStorage.setItem("role", "learner")
        localStorage.setItem("email", value.email)

        window.location = "/courses"

        setProcess({
          ...process,
          loading: false,
          success: true,
          error: false,
          successMsg:
            "Registration successful, redirecting to home page in a moment",
        })
        setTimeout(() => {
          window.location = "/courses"
        }, 3000)
      }
      // const storeToDB = await axios.post(
      //   "/newuser",
      //   {
      //     username: value.email,
      //   },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${cognitoUser.signInUserSession.accessToken.jwtToken}`,
      //     },
      //   }
      // );
      // if (storeToDB?.data?.confirmationStatus !== true)
      //   return setProcess({
      //     ...process,
      //     loading: false,
      //     success: false,
      //     error: true,
      //     errorMsg: "Signup Failed, Try Again with Another Email",
      //   });
    } catch (error) {
      setProcess({
        ...process,
        loading: false,
        success: false,
        error: true,
        errorMsg: `${error}`,
      })
    }
  }
  return (
    <React.Fragment>
      <div className="rel">
        <div className="container-lg">
          <div className={Style.left_logo}></div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className={Style.tabs}>
                <Link to="/login">Log In</Link>
                <Link to="/signup" className={Style.active}>
                  Sign Up
                </Link>
              </div>
              <div>
                {!otpSignup ? (
                  <React.Fragment>
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        handleSignup(1)
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
                        type="text"
                        className="form-control mb-3"
                        name="password"
                        onChange={handleInputs}
                      />
                      <p style={{ fontSize: 11, margin: "2px 0" }}>
                        Password Should be atleast 8 characters, 1 Uppercase, 1
                        Lowercase, 1 Number and 1 Special Character
                      </p>
                      {process.success && (
                        <p
                          className="text-success my-3 mx-0"
                          style={{ fontSize: 13, fontWeight: 500 }}
                        >
                          {process.successMsg}
                        </p>
                      )}
                      {process.error && (
                        <p
                          className="text-danger my-3 mx-0"
                          style={{ fontSize: 13, fontWeight: 500 }}
                        >
                          {process.errorMsg}
                        </p>
                      )}
                      <button
                        type="submit"
                        className={`btn mt-3 ${Style.button}`}
                        disabled={process.loading && true}
                      >
                        {process.loading ? "Signing up..." : "Signup"}
                      </button>
                    </form>
                    <button
                      className={`btn mt-3 ${Style.button2}`}
                      onClick={switchToOTP}
                    >
                      Signup using OTP
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {!otpRecieved ? (
                      <>
                        <p style={{ fontSize: 14 }}>
                          Adding your phone number will help you login to your
                          account faster.
                        </p>
                        <form
                          onSubmit={e => {
                            e.preventDefault()
                            handleSignup(1)
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
                          {process?.error && (
                            <p
                              className="text-danger my-3 mx-0"
                              style={{ fontSize: 13, fontWeight: 500 }}
                            >
                              {process?.errorMsg}
                            </p>
                          )}
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
                            {process.loading ? "Sending" : "Send Otp"}
                          </p>
                        </form>
                        <button
                          className={`btn mt-3 ${Style.button2}`}
                          onClick={switchToOTP}
                        >
                          Signup using Email
                        </button>
                      </>
                    ) : (
                      <>
                        <form
                          onSubmit={e => {
                            e.preventDefault()
                            handleSignup(1)
                          }}
                        >
                          <label htmlFor="" className={Style.label}>
                            Your OTP
                          </label>
                          <input
                            type="text"
                            className="form-control mb-3"
                            name="otp"
                            onChange={handleInputs}
                          />
                          {process?.errorMsg && (
                            <p
                              className="text-danger my-3 mx-0"
                              style={{ fontSize: 13, fontWeight: 500 }}
                            >
                              {process?.errorMsg}
                            </p>
                          )}
                          <p
                            onClick={verifyOTP}
                            type="submit"
                            className={`btn mt-3 ${Style.button}`}
                          >
                            {process.loading ? "Verifying" : "Verify OTP"}
                          </p>
                          <button
                            className={`btn mt-3 ${Style.button2}`}
                            onClick={switchToOTP}
                          >
                            Signup using Email
                          </button>
                        </form>
                      </>
                    )}
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
  )
}

export default Register
