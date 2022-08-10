import React, { useContext, useState } from "react";
import "./CS.css";
import { ContextMade } from "./ContextValue";
import IN_Flag from "../../Assets/Images/flag/india.png";
import Style from "../../Style/auth.module.scss";
import validator from "validator";

function CourseSettings2() {
  const [contextValue, setContextValue] = useContext(ContextMade);
  const [emailValid, setemailValid] = useState(false);

  const chng = (e) => {
    const newall = { ...contextValue };

    newall[e.target.name] = e.target.value;
    setContextValue(newall);
  };

  const chngEmail = (e) => {
    if (validator.isEmail(e.target.value)) {
      setemailValid(false);

      const newall = { ...contextValue };

      newall[e.target.name] = e.target.value;
      setContextValue(newall);
    } else {
      setemailValid(true);
    }
  };

  return (
    <div className="py-1">
      <h2 className="my-5" style={{ color: "#616161" }}>
        Contact Details
      </h2>

      <div style={{ width: "40%" }}>
        <form>
          <div className="my-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email Address
            </label>
            <input
              required
              onBlur={chngEmail}
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {emailValid && (
              <small style={{ color: "red" }}>Invalid email address</small>
            )}
          </div>

          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
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
                required
                onBlur={chng}
                name="phoneNumber"
                placeholder="number"
                type="number"
                className="form-control w-40"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Whatsapp Number
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
                required
                onBlur={chng}
                name="whatsappNumber"
                placeholder="number"
                type="number"
                className="form-control w-40"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Emergency Contact Number
            </label>
            <input
              required
              onBlur={chng}
              name="emergencyContactNumber"
              placeholder="number"
              type="number"
              className="form-control w-40"
              id="exampleInputPassword1"
            />
          </div>
        </form>
      </div>

      <div className="">
        <hr style={{ width: "70%" }} />
      </div>
    </div>
  );
}

export default CourseSettings2;
