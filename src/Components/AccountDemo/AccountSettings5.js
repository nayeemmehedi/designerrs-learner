import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ContextMade } from "./ContextValue";

function CourseSettings5() {
  const [contextValue, setContextValue] = useContext(ContextMade);

  // const [contextValue, setContextValue] = useState([]);

  const [disableButton, setDisableButton] = useState(false);
  const [btnValue, setButtonValue] = useState([]);
  const [badFormat, setbadFormat] = useState(false);
  const [success, setsuccess] = useState(false);
  const [bgcolorSMS, setbgcolorSMS] = useState(true);
  const [bgcolorWEB, setbgcolorWEB] = useState(true);

  const buttonValue = (e) => {
    if (btnValue.length < 3) {
      setButtonValue([...btnValue, e]);
    }
    if (e === "sms") setbgcolorSMS(!bgcolorSMS);
    if (e === "website") setbgcolorWEB(!bgcolorWEB);
  };

  useEffect(() => {
    const newall = { ...contextValue };
    newall.notifications = btnValue;
    setContextValue(newall);
  }, [btnValue]);

  const chngClick = (e) => {
    if (e.target.checked) {
      setDisableButton(!disableButton);
      const newall = { ...contextValue };
      newall.notifications = ["email", "sms", "website"];
      setContextValue(newall);
    }

    if (!e.target.checked) {
      setDisableButton(!disableButton);
    }
  };

  const SubmitData = (e) => {
    e.preventDefault();

    if (contextValue.fullName.length > 4 && contextValue.email.length > 4) {
      setbadFormat(false);
      const newFunc = async (value) => {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };

        try {
          let a = await axios.patch(
            `/learners/${localStorage.getItem("uid")}`,
            value,
            { headers }
          );
          console.log(a.data);
          setsuccess(true);
        } catch (error) {
          setbadFormat(true);
        }
      };
      newFunc(contextValue);
    } else {
      setbadFormat(true);
    }
  };


  

  return (
    <div className="my-5 py-4">
      <h2 style={{ color: "#616161" }}>Notifications Preferances</h2>

      <div className="row py-5 px-3">
        <div className="col-6 mb-3 form-check">
          <input
            onChange={chngClick}
            name="checkBoxClick"
            type="checkbox"
            className="form-check-input bg-danger"
            id="exampleCheck1"
          />
          <small className="form-check-label" htmlFor="exampleCheck1">
            Send me notification about app
          </small>
        </div>

        <div className="col-6 d-flex">
          <div>
            <button
              onClick={() => buttonValue("email")}
              style={{ borderColor: "white" }}
              className="btn btn-danger "
              disabled={disableButton}
            >
              E-mail
            </button>
          </div>
          <div>
            <button
              onClick={() => buttonValue("sms")}
              className={!bgcolorSMS ? "btn btn-danger" : "btn btn-light "}
              disabled={disableButton}
            >
              Text Message
            </button>
          </div>
          <div>
            <button
              onClick={() => buttonValue("website")}
              className={!bgcolorWEB ? "btn btn-danger" : "btn btn-light "}
              disabled={disableButton}
            >
              Website notification
            </button>
          </div>
        </div>

        <div className="mt-5">
          <form action="" onSubmit={SubmitData}>
            <button className="btn btn-outline-danger ">
              Full Form Data Send{" "}
            </button>

            {badFormat && (
              <h4 className="text-danger">
                <br />
                Bad Formates! Please fill up Every input..{" "}
              </h4>
            )}

            {success && (
              <h4 style={{ color: "green" }}>
                <br />
                SuccessFully Post Data..{" "}
              </h4>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CourseSettings5;
