import React from "react";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

function Dress() {
  return (
    <div>
      {/* <h2 className="my-4" style={{ color: "#797679" }}>
        Order Details
      </h2>
      <p  style={{ color: "#797679" }}>02 Order</p> */}
      <div className="my-5">
        <div className="row m-5 ">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <img
              src="https://www.expressandstar.com/resizer/-ubWj-DtTdPenlEHaXt3UZuTyW0=/1200x0/filters:quality(100)/arc-anglerfish-arc2-prod-expressandstar-mna.s3.amazonaws.com/public/6ZWZ5IGQZ5DFBCC74LC7FW4FCY.jpg"
              alt=""
              style={{ maxHeight: "180px", maxWidth: "180px" }}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5">
            <h5 style={{ color: "#d43a47" }}>Goodies</h5>
            <p style={{ fontSize: "10px" }}>Goodies</p>
            <small style={{ fontSize: "10px" }}>contains</small>

            <ol>
              <li style={{ fontSize: "13px" }}>Ux Journal</li>
              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>

              <li style={{ fontSize: "13px" }}>Ux Journal</li>
            </ol>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 d-flex  flex-sm-row flex-column align-items-center">
            <div>
              <h6 style={{ fontSize: "13px" }}>Quintity</h6>
              01kit
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 p-3" style={{ backgroundColor: "#f5eded" }}>
        <span>
          {" "}
          <AiOutlineDeliveredProcedure className="me-2" /> Processing{" "}
        </span>
      </div>

      <div className="pt-4">
        <hr style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
}

export default Dress;
