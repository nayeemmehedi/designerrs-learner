import React from "react";
import { BiReset } from "react-icons/bi";
import { ImSwitch } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function ResetAndLogOut() {
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <div className="pt-5 ">
        <div className="d-flex justify-content-between  flex-sm-row flex-column">
          <h2 className="fw-bold">Account Settings</h2>
          <div>
            <Link to="reset-password">
              <button
                style={{ borderRadius: " 0px" }}
                className=" btn btn-outline-danger mx-2 "
              >
                <BiReset className="pb-1" size="24px" /> Reset Password
              </button>
            </Link>

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
    </div>
  );
}

export default ResetAndLogOut;
