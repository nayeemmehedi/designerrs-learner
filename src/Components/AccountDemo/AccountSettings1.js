import React, { useContext, useState } from "react";
import { BiReset } from "react-icons/bi";
import { ImSwitch } from "react-icons/im";
import "./CS.css";
import { useHistory } from "react-router-dom";
import { ContextMade } from "./ContextValue";
import { useSelector } from "react-redux";

function CourseSettings1() {
  
  let Fullname_regx = /^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$/;

  const [contextValue, setContextValue] = useContext(ContextMade);
  const [nameValid, setnameValid] = useState(false);

  const chng = (e) => {
    const newall = { ...contextValue };

    newall[e.target.name] = e.target.value;
    setContextValue(newall);
  };

  const chngFullname = (e) => {
    if (Fullname_regx.test(e.target.value)) {
      setnameValid(false);
      const newall = { ...contextValue };

      newall[e.target.name] = e.target.value;
      setContextValue(newall);
    } else {
      setnameValid(true);
    }
  };

  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  }

  const value = useSelector(state => state.CounterReducer) 

  return (
    <div>
      <div className="pt-5 ">
        <div className="d-flex justify-content-between">
          <h2 className="fw-bold">Account Settings</h2>
          <div>
            {/* <button className="btn btn-main mx-2"><GrPowerReset color="red"/> Reset Password</button>
             */}
            <button
              style={{ borderRadius: " 0px" }}
              className=" btn btn-outline-danger mx-2 "
            >
              <BiReset className="pb-1" size="24px" /> Reset Password
            </button>

            <button
              style={{ borderRadius: " 0px" }}
              onClick={() => logout()}
              className="btn btn-outline-danger mx-2 "
            >
              {" "}
              <ImSwitch /> LogOut
            </button>
          </div>
        </div>

        <hr />
      </div>

      <h2 style={{ color: "#616161" }}>Personal Information</h2>

      <div className="py-3" style={{ width: "40%" }}>
        <form>
          <div className="my-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full Name
            </label>

            <input
              onBlur={chngFullname}
              type="text"
              name="fullName"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {nameValid && (
              <small style={{ color: "red" }}>Invalid Full Name</small>
            )}
          </div>
          <div className="my-5">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date of Birth
            </label>
            <input
              onBlur={chng}
              name="dateOfBirth"
              placeholder="Date of birth"
              type="date"
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

export default CourseSettings1;
