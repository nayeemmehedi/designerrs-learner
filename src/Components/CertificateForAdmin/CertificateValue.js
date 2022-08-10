import React from "react";
import cornar from "../../Assets/Images/cornar.svg";
import cornarLogo from "../../Assets/Images/cornarLogo.svg";
import share from "../../Assets/Images/share.svg";
import In from "../../Assets/Images/in.svg";
import Ins from "../../Assets/Images/ins.svg";
import Tw from "../../Assets/Images/tw.svg";
import flower from "../../Assets/Images/flower.svg";
import i1 from "../../Assets/Images/i1.svg";
import i2 from "../../Assets/Images/i2.svg";
import i3 from "../../Assets/Images/i3.svg";
import i4 from "../../Assets/Images/i4.svg";
import i5 from "../../Assets/Images/i5.svg";
import i6 from "../../Assets/Images/i6.svg";
import i7 from "../../Assets/Images/i7.svg";
import i8 from "../../Assets/Images/i8.svg";
import Print from "../../Assets/Images/print.svg";
import Save from "../../Assets/Images/save.svg";
import Copy from "../../Assets/Images/copy.svg";

const demoData = [
  {
    value: 4.5,
    title: "Empathy",
    des: "Understanding target users.",
    img: i1,
  },

  {
    value: 4.5,
    title: "Visual Design",
    des: "Creating aesthetic interfaces.",
    img: i2,
  },

  {
    value: 3.5,
    title: "Communication",
    des: "Articulating your design decisions and presenting them.",
    img: i3,
  },

  {
    value: 4.0,
    title: "Creativity",
    des: "Thinking out of the box to find solutions.",
    img: i4,
  },

  {
    value: 3.5,
    title: "Conceptualization",
    des: "Translating ideas into right set of elements.",
    img: i5,
  },

  {
    value: 3.0,
    title: "Observation",
    des: "Observing user’s behaviors & finding usability flaws.",
    img: i6,
  },
  {
    value: 3.5,
    title: "Curiosity",
    des: "Striving to find root problems & desire to learn new skills.",
    img: i7,
  },
  {
    value: 3.0,
    title: "Research",
    des: "Analyzing information & synthesizing insights.",
    img: i8,
  },
];
function CertificateValue() {
  return (
    <div className="container">
      <div className="">
        <div className="row">
          <div className="col-md-6" style={{ backgroundColor: "#FAFAFA" }}>
            <div style={{ position: "relative" }}>
              <img src={cornar} alt="img1" style={{ width: "250px" }} />
              <div
                className="d-flex"
                style={{
                  width: "120px",
                  position: "absolute",
                  top: "20px",
                  left: "40px",
                  zIndex: "999",
                }}
              >
                <img src={cornarLogo} alt="img1" />
                <span style={{ marginLeft: "50px", color: "#00032D" }}>
                  #00032D
                </span>
              </div>
              <div></div>

              <h5 style={{ fontStyle: "italic", fontWeight: "600" }}>
                Notch Report
              </h5>
              <small style={{ fontSize: "12px" }}>
                UX/UI Design from Scratch - 18 October 2021
              </small>

              <div>
                <p
                  className="display-6 mt-4"
                  style={{
                    fontWeight: "700",
                    fontStyle: "italic",
                    color: "#CD2026",
                  }}
                >
                  Prethe Pratibhan
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div style={{ padding: "50px 0px 0px 40px" }}>
              <img src={flower} alt="flwer" style={{ width: "350px" }} />
            </div>
          </div>
        </div>
        <div className="row">
          {demoData.map((item, ind) => {
            return (
              <div className="col-md-3 my-2" style={{ position: "relative" }}>
                <div
                  style={{
                    backgroundColor: "#FFF",
                    margin: "1px",
                    height: "100px",
                  }}
                >
                  <div className="p-1">
                    <p style={{ fontWeight: "600", margin: "0px" }}>
                      {item.value}
                    </p>
                    <small style={{ fontSize: "10px", fontWeight: "500" }}>
                      {item.title}
                    </small>
                    <p style={{ fontSize: "8px" }}>{item.des}</p>
                  </div>
                  <img
                    src={item.img}
                    alt="img1"
                    style={{
                      width: "15px",
                      height: "15px",
                      position: "absolute",
                      top: "10px",
                      right: "20px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CertificateValue;
