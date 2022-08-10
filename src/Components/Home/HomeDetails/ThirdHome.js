import React from "react";
import four from "../../../Assets/Home/Four.svg";
import samsung from "../../../Assets/Home/logo/samsung.svg";
import cisco from "../../../Assets/Home/image/cisco.png";
import verizon from "../../../Assets/Home/logo/verizon.svg";
import microsoft from "../../../Assets/Home/logo/microsoft.svg";
import delh from "../../../Assets/Home/logo/delh.svg";
import peo from "../../../Assets/Home/logo/peo.svg";
import adobe from "../../../Assets/Home/logo/adobe.svg";
import by from "../../../Assets/Home/image/by.png";
import { useHistory } from "react-router-dom"

const value = [samsung, cisco, verizon, microsoft, delh, peo, adobe, by];

function ThirdHome() {
  const history = useHistory();
  return (

    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="py-5 container ">
            <div className="row">
              <div className={`col-4`}>
                <div className="my-4">
                  <h1> Learn from leading design practitioners</h1>
                  <p>
                    Know the secrets of great design from skillful mentors and
                    maximize your creative strengths.
                  </p>

                  <button className="btn btn-main2" onClick={() => {
                    history.push("/mentorship")
                  }}>
                    <p className="mx-3 p-0 m-0">See Mentorship Program</p>
                  </button>
                </div>
              </div>
              <div className={`col-5 `}>
                <div className="mx-4 px-4">
                  <img
                    className=""
                    style={{ height: "354px", width: "auto" }}
                    src={four}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="my-4 py-3">
              <p className="text-center fw-bold py-2">Our mentors work at</p>
              <div className="row ">
                {value.map((v) => (
                  <div className="col-3 mt-3">
                    <img src={v} style={{ height: "22px", width: "auto" }} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>

    </div>


  );
}

export default ThirdHome;
