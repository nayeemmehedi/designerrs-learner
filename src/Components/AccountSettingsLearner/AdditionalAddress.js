import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import CustomInputField from "./common/CustomInputField";
import { additionalAddressSchema } from "./common/AccountSettingsJson";

function AdditionalAddress({ sendBenefits, account }) {
  const [toggle, setToggle] = useState(false);

  // console.log("sendBenefits",sendBenefits)

  return (
    <div>
      {toggle && (
        <div>
          {/* <h2 className="my-4" style={{ color: "#797679" }}>
            Address
          </h2> */}
          <p style={{ color: "#797679" }}>Additional Address</p>

          <div>
            {additionalAddressSchema?.map((v, idx) => (
              <div className="my-4" key={idx}>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label fw-bold"
                >
                  {v?.title}
                </label>
                <CustomInputField
                  type={v?.type}
                  name={v?.name1}
                  validationType={sendBenefits}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-main2 my-2"
        type="button"
      >
        <IoMdAdd /> Add address
      </button>
    </div>
  );
}

export default AdditionalAddress;
