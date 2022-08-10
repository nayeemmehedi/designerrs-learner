import React, { useEffect, useState } from "react";
import Style from "../../Style/auth.module.scss";
import RightImage from "../../Assets/Images/Login_Side.svg";
import { post } from "../../Helper/API/API_Helper";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Amplify, { Auth } from "aws-amplify";
import { useSelector } from "react-redux";

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_EqYeey1dl",
    userPoolWebClientId: "3vv2ve70kjlougdkl7prshdpkv",
  },
});

const ForgotPassword = () => {
  let history = useHistory();
  const [value, setValue] = useState({
    email: "",
    password: "",
    confirm_password: "",
    role: "learner",
    otp: "",
  });
  const [proceed, setProceed] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputs = (e) => {
    setSuccess(false);
    setError(false);
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    Auth.forgotPassword(value.email)
      .then((res) => {
        console.log(res);
        setProceed(true);
      })
      .catch((error) => {
        setError(" Attempt limit exceeded, please try after some time.");
      });
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    try {
      console.log(value);
      const reset = await Auth.forgotPasswordSubmit(
        value?.email,
        value?.otp,
        value?.confirm_password
      );
      setTimeout(() => {
        history.push("/login");
      }, 3000);
    } catch (err) {
      console.log(err);
      setError("Something is wrong. Try again.");
    }
  };

  return (
    <React.Fragment>
      <div className="container-lg">
        <div className={Style.left_logo}></div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="mt-5">
              <Link to="/login" className="me-5 red font_13">
                <i className="fas fa-arrow-left me-3"></i>
                Back
              </Link>
              <h5 className="text-center mb-4">Reset Password</h5>
            </div>
            <div>
              <form onSubmit={proceed === false ? handleSignup : handleProceed}>
                <label htmlFor="" className={Style.label}>
                  E-mail/Phone Number *
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="email"
                  onChange={handleInputs}
                  disabled={proceed === true ? true : false}
                />

                {proceed ? (
                  <React.Fragment>
                    <label htmlFor="" className={Style.label}>
                      Otp *
                    </label>
                    <input
                      type="number"
                      className="form-control mb-3"
                      name="otp"
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
                    <label htmlFor="" className={Style.label}>
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      className="form-control mb-3"
                      name="confirm_password"
                      onChange={handleInputs}
                    />
                  </React.Fragment>
                ) : null}

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
                    {error}
                  </p>
                )}
                <button type="submit" className={`btn mt-3 ${Style.button}`}>
                  {proceed ? "Reset Password" : "Next"}
                </button>
              </form>
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
  );
};

export default ForgotPassword;
