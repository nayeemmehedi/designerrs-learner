import React, { useState } from "react";
import Debit from "./Debit";
import Emi from "./Emi";
import Neev from "./Neev";

const paymentNav = [
  { name: "Debit/Credit/UPI/Netbanking" },
  { name: "EMI Payment" },
  { name: "NEEV Finance" },
];

const PaaymentModal = ({ paymentToggle }) => {
  const [details, setDetails] = useState("EMI Payment");
  const getUi = (type) => {
    switch (type) {
      case "NEEV Finance":
        return <Neev />;
      case "EMI Payment":
        return <Emi />;
      case "Debit/Credit/UPI/Netbanking":
        return <Debit />;
    }
  };
  return (
    <div>
      <div className="shadow-sm p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5>Payment Options</h5>{" "}
          <h3 onClick={paymentToggle} className="cursor">
            X
          </h3>
        </div>
      </div>

      <div className="row m-0">
        <div className="col-md-4" style={{ backgroundColor: "#F5F5F5" }}>
          <div className="py-3">
            {paymentNav.map((i, idx) => (
              <ul
                key={idx}
                onClick={() => setDetails(i.name)}
                className="text-secondary p-2 cursor px-2"
                style={
                  details === i.name
                    ? {
                        borderLeft: "4px solid red",
                        backgroundColor: "#fff",
                        padding: "10px",
                        color: "#000000",
                      }
                    : {}
                }
              >
                {i.name}
              </ul>
            ))}
          </div>
        </div>
        <div className="col-md-8" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="p-3">
            <div>{getUi(details)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaaymentModal;
