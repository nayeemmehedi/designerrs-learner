import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Style from "../../Style/auth.module.scss"
import RightImage from "../../Assets/Images/Login_Side.svg"
import { post } from "../../Helper/API/API_Helper"
import Amplify, { Auth } from "aws-amplify"
import axios from "axios"
import { getUser } from "../../Store/user/actions"
import { useDispatch } from "react-redux"

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_EqYeey1dl",
    userPoolWebClientId: "3vv2ve70kjlougdkl7prshdpkv",
  },
})

const initialValues = {
  email: "",
  password: "",
  otp: "",
}

const Login = () => {
  let history = useHistory()
  const [value, setValue] = useState({
    email: "",
    password: "",
    role: "learner",
    otp: "",
  })
  const [OTPLogin, setOTPLogin] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [process, setProcess] = useState({
    loading: false,
    error: false,
    errorMsg: "",
    success: false,
    successMsg: "",
  })

  const handleInputs = e => {
    setSuccess(false)
    setError(false)
    setValue(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async () => {
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
      const loginUser = await Auth.signIn(value.email, value.password)
      if (loginUser.signInUserSession || loginUser.keyPrefix) {
        localStorage.setItem("keyPrefix", loginUser.keyPrefix)
        localStorage.setItem("username", loginUser.username)

        localStorage.setItem("uid", loginUser.username)
        localStorage.setItem(
          "accessToken",
          loginUser.signInUserSession.accessToken.jwtToken
        )
        localStorage.setItem(
          "refreshToken",
          loginUser.signInUserSession.refreshToken.token
        )
        localStorage.setItem(
          "identityToken",
          loginUser.signInUserSession.idToken.jwtToken
        )
        localStorage.setItem(
          "role",
          loginUser.signInUserSession.idToken.payload["cognito:groups"][0]
        )
        localStorage.setItem("email", value.email)

        setProcess({
          ...process,
          loading: false,
          success: true,
          error: false,
          successMsg: "Login successful, redirecting to home page in a moment",
        })
        
        window.location = "/courses"

      } else {
        setProcess({
          ...process,
          loading: false,
          success: false,
          error: true,
          errorMsg: "Login Failed, Please Check your Email and Password",
        })
      }
    } catch (error) {
      console.log(error)
      setProcess({
        ...process,
        loading: false,
        success: false,
        error: true,
        errorMsg: error.message,
      })
    }
  }

  const switchToOTP = () => {
    setSuccess(false)
    setError(false)
    setOTPLogin(!OTPLogin)
  }

  const dispatch = useDispatch()
  const [otpRecieved, setOtpRecieved] = useState(null)
  const handleOtp = async () => {
    setSuccess(false)
    setError(false)
    setProcess({
      ...process,
      loading: true,
      success: false,
      error: false,
    })

    try {
      const cognitoUser = await Auth.signIn(value.email)
      console.log(cognitoUser)
      if (cognitoUser.username) {
        setOtpRecieved(cognitoUser)
        setProcess({
          ...process,
          loading: false,
          success: false,
          error: false,
        })
      }
    } catch (error) {
      setError(true)
    }
  }

  const verifyOTP = async () => {
    console.log(value)
    setSuccess(false)
    setError(false)

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
      setProcess({
        ...process,
        loading: false,
        success: true,
        error: false,
        successMsg: "Signin successful",
      })


        window.location = "/courses"

    } catch {
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
      <div className="container-lg">
        <div className={Style.left_logo}></div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className={Style.tabs}>
              <Link to="/login" className={Style.active}>
                Log In
              </Link>
              <Link to="/signup">Sign Up</Link>
            </div>
            <div>
              {!OTPLogin ? (
                <React.Fragment>
                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      handleLogin(1)
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
                      autocomplete="off"
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
                    <p style={{ fontSize: 11, margin: "2px 0" }}>
                      Password Should be atleast 8 characters, 1 Uppercase, 1
                      Lowercase, 1 Number and 1 Special Character
                    </p>
                    <Link to="/forgot-password" className={Style.forgot_pass}>
                      Forgot Password
                      <span>
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </Link>
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
                      disabled={process.loading}
                    >
                      {process.loading ? "Login in process..." : "Login"}
                    </button>
                  </form>

                  <button
                    className={`btn mt-3 ${Style.button2}`}
                    onClick={switchToOTP}
                  >
                    Login using OTP
                  </button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <form
                    onSubmit={e => {
                      e.preventDefault()
                      handleLogin(2)
                    }}
                  >
                    {/* <label htmlFor="" className={Style.label}>
                      <strong>Phone Number</strong>
                    </label>
                    <div className={Style.top_signup}>
                      <span>
                        <img
                          src={IN_Flag}
                          style={{ width: "15px", marginRight: 8 }}
                          alt=""
                        />{" "}
                        +91
                      </span>
                      <input
                        type="number"
                        name="phone"
                        onChange={handleInputs}
                      />
                    </div> */}
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
                          {process.loading ? "Sending" : "Send Otp"}
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
                          {process.loading ? "Verifying" : "Verify OTP"}
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
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className={Style.right_logo}>
              <img src={RightImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
