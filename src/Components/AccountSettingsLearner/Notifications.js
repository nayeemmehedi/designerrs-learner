import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
// import { ContextMade } from "./ContextValue";

function Notifications({ contextValue, setContextValue }) {
  const [disableButton, setDisableButton] = useState(false);

  const [btnValue, setButtonValue] = useState([]);

  const [bgcolorSMS, setbgcolorSMS] = useState(true);
  const [bgcolorWEB, setbgcolorWEB] = useState(true);
  const [bgcolorEMAIL, setbgcolorEMAIL] = useState(true);

  const buttonValue = (e) => {
    if (btnValue.length > 0) {
      let value = btnValue.filter((v) => v !== e);
      setButtonValue([...value]);

      if (btnValue.length == value.length) {
        setButtonValue([...value, e]);
      }
    } else {
      setButtonValue([...btnValue, e]);
    }

    if (e === "sms") setbgcolorSMS(!bgcolorSMS);
    if (e === "website") setbgcolorWEB(!bgcolorWEB);
    if (e === "email") setbgcolorEMAIL(!bgcolorEMAIL);
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

  return (
    <div className="my-5 py-4">
      <h2 className=" fw-light" style={{ color: "#616161" }}>
        Notifications Preferances
      </h2>

      <div className="row py-5 px-3">
        <div className="col-sm-12 col-md-12 col-lg-6 mb-3 form-check">
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

        <div className="col-sm-12 col-md-12 col-lg-6 d-flex  flex-sm-row flex-column">
          <div>
            <button
              onClick={() => buttonValue("email")}
              style={{ borderColor: "white" }}
              className={
                bgcolorEMAIL ? "btn btn-danger text-light" : "btn btn-light "
              }
              disabled={disableButton}
              type="button"
            >
              E-mail
            </button>
          </div>
          <div>
            <button
              onClick={() => buttonValue("sms")}
              className={
                !bgcolorSMS ? "btn btn-danger text-light" : "btn btn-light "
              }
              disabled={disableButton}
              type="button"
            >
              Text Message
            </button>
          </div>
          <div>
            <button
              onClick={() => buttonValue("website")}
              className={
                !bgcolorWEB ? "btn btn-danger text-light" : "btn btn-light "
              }
              disabled={disableButton}
              type="button"
            >
              Website notification
            </button>
          </div>
        </div>

        {/* <div className="mt-5">
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
        </div> */}
      </div>
    </div>
  );
}

export default Notifications;
