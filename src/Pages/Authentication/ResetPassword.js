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

const ResetPassword = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  let history = useHistory();
  const [value, setValue] = useState({
    email: user?.email,
    password: "",
    confirm_password: "",
    role: "learner",
    oldPassword: "",
  });
  useEffect(() => {
    setValue({ ...value, email: user?.email });
  }, [user]);
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
    console.log(value?.password, value.confirm_password)
    if (value?.password != value.confirm_password)
      return setError("New Password and Confirm Password did not match.");
    try {
      await Auth.currentAuthenticatedUser()
        .then((user) => {
          return Auth.changePassword(
            user,
            value.oldPassword,
            value.confirm_password
          );
        })
        .then((data) => {
          console.log(data);
          setSuccess("Password changed sucessfully.");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          if (
            err == "NotAuthorizedException: Incorrect username or password."
          ) {
            setError("Incorrect username or password.");
          } else {
            setError("Somethig is wrong try again later.");
          }
        });
    } catch (err) {
      console.log(err);
      setError("Somethig is wrong try again later.");
    }
    console.log(proceed);
  };


  return (
    <React.Fragment>
      <div className="container-lg mb-5">
        <div className={Style.left_logo}></div>
        <div className="row d-flex justify-content-center ">
          <div className="col-sm-12 col-md-4 col-lg-4 align-items-center">
            <div className="mt-5">
              <Link to="/login" className="me-5 red font_13">
                <i className="fas fa-arrow-left me-3"></i>
                Back
              </Link>
              <h5 className="text-center mb-4">Reset Password</h5>
            </div>
            <div>
              <form onSubmit={handleSignup}>
                <label htmlFor="" className={Style.label}>
                  E-mail/Phone Number *
                </label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="email"
                  value={value?.email}
                  onChange={handleInputs}
                  disabled
                />

                <React.Fragment>
                  <label htmlFor="" className={Style.label}>
                    Old Password *
                  </label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    name="oldPassword"
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

                {success && (
                  <p
                    className="text-success my-3 mx-0"
                    style={{ fontSize: 13, fontWeight: 500 }}
                  >
                    {success}
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
                  Reset Password
                </button>
              </form>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8 mb-5 pb-5 align-items-center">
            <div className={Style.right_logo}>
              <img src={RightImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
