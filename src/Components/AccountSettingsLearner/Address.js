import React from "react";
import { billingAddressSchema } from "./common/AccountSettingsJson";
import CustomInputField from "./common/CustomInputField";

function Address({ sendBenefits, setValue }) {
  const shippingAddress = (e) => {
    if (e.target.name === "checkboxValue") {
      setValue(true);
    }
  };

  return (
    <div>
      <h2 className="my-4  fw-light" style={{ color: "#797679" }}>
        Address
      </h2>

      <p style={{ color: "#616161" }}>Billing Address</p>

      {billingAddressSchema.map((v, idx) => (
        <div className="my-4" key={idx}>
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            {v.title}
          </label>
          <CustomInputField
            type={v.type}
            name={v.name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={""}
            validationType={sendBenefits}
          />
        </div>
      ))}

      <div className="my-4">
        <div className="py-3">
          <small>Shipping Address</small>
        </div>

        <div>
          <div style={{ border: "1px solid #e39ba7", width: "70%" }}>
            <div className="p-3">
              <input
                onChange={shippingAddress}
                name="checkboxValue"
                type="checkbox"
                className="form-check-input bg-danger"
                id="exampleCheck1"
              />
              <small className="form-check-label p-2" htmlFor="exampleCheck1">
                Same as Billing Address
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
