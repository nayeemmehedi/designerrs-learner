import React, { useState, useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import "./CS.css";
import { ContextMade } from "./ContextValue";

function CourseSettings3() {
  const [contextValue, setContextValue] = useContext(ContextMade);

  const chng = (e) => {
    const newall = { ...contextValue };

    newall.billingAddress[e.target.name] = e.target.value;
    setContextValue(newall);
  };

  const shippingAddress = (e) => {
    if (e.target.name === "checkboxValue") {
      const newall = { ...contextValue };

      newall.shippingAddress = newall.billingAddress;
      setContextValue(newall);
    }
  };

  const [toggle, setToggle] = useState(false);

  const chngAdditionalAddresses = (e) => {
    const newall = { ...contextValue };

    newall.additionalAddress[e.target.name] = e.target.value;
    setContextValue(newall);
  };

  return (
    <div className="py-4">
      <h2 className="my-4" style={{ color: "#616161" }}>
        Address
      </h2>
      <p style={{ color: "#616161" }}>Billing Address</p>

      <div style={{ width: "40%" }}>
        <form>
          <div className="my-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              House/Flat Number
            </label>
            <input
              onBlur={chng}
              name="houseNumber"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Street Name
            </label>
            <input
              onBlur={chng}
              name="streetName"
              placeholder="name"
              type="text"
              className="form-control w-40"
              id="exampleInputPassword1"
            />
          </div>
          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Area{" "}
            </label>
            <input
              onBlur={chng}
              name="area"
              placeholder="number"
             
              type="text"
              className="form-control w-40"

              id="exampleInputPassword1"
            />
          </div>

          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Landmark(if any)
            </label>
            <input
              onBlur={chng}
              name="landmark"
              placeholder="number"
             
              type="number"
              className="form-control w-40"

              id="exampleInputPassword1"
            />
          </div>
          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Zip Code{" "}
            </label>
            <input
              onBlur={chng}
              name="zipCode"
              placeholder="number"
              
              type="number"
              className="form-control w-40"

              id="exampleInputPassword1"
            />
          </div>
          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              City{" "}
            </label>
            <input
              onBlur={chng}
              name="city"
              placeholder="number"
             
              type="text"
              className="form-control w-40"
              id="exampleInputPassword1"
            />
          </div>

          <div className="my-4">
            <label htmlFor="exampleInputPassword1" className="form-label">
              State{" "}
            </label>
            <input
              onBlur={chng}
              name="state"
              placeholder="number"
              
              type="text"
              className="form-control w-40"

              id="exampleInputPassword1"
            />
          </div>

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
                  <small
                    className="form-check-label p-2"
                    htmlFor="exampleCheck1"
                  >
                    Same as Billing Address
                  </small>
                </div>
              </div>
            </div>
          </div>
        </form>

        {toggle && (
          <div>
            <h2 className="my-4" style={{ color: "#797679" }}>
              Address
            </h2>
            <p style={{ color: "#797679" }}>Additional Address</p>

            <div>
              <form>
                <div className="my-4">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    House/Flat Number
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="houseNumber"
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Street Name
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="streetName"
                    placeholder="name"
                   
                    type="text"
                    className="form-control w-40"

                    id="exampleInputPassword1"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Area{" "}
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="area"
                    placeholder="number"
                   
                    type="text"
                    className="form-control w-40"

                    id="exampleInputPassword1"
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Landmark(if any)
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="landmark"
                    placeholder="number"
                    type="number"
                    className="form-control w-40"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Zip Code{" "}
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="zipCode"
                    placeholder="number" 
                    type="number"
                    className="form-control w-40"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    City{" "}
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="city"
                    placeholder="number"
                    type="text"
                    className="form-control w-40"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="my-4">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    State{" "}
                  </label>
                  <input
                    onBlur={chngAdditionalAddresses}
                    name="state"
                    placeholder="number"
                    type="text"
                    className="form-control w-40"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
            </div>
          </div>
        )}

        <button
          onClick={() => setToggle(!toggle)}
          style={{ borderRadius: " 0px" }}
          className="btn btn-danger my-2"
          type="submit"
        >
          <IoMdAdd /> Add address
        </button>
      </div>

      <div className="pt-5">
        <hr style={{ width: "70%" }} />
      </div>
    </div>
  );
}

export default CourseSettings3;



