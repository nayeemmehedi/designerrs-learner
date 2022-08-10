import React from "react";
import second from "../../../Assets/Home/second.svg";
import third from "../../../Assets/Home/third.svg";

const firstbox = [
  {
    text1: "Solve crucial problems that matter",
    text2: "Channelize your learning to solve problems from startups and NGOs.",
    link: "./boom",
    image: second,
    btnName: "See Problem Briefs",
  },

  {
    text1: "Experience and Learn",
    text2:
      "We make sure you understand every concept through rich examples, and hands-on activities in a flourishing environment.",
    link: "./boom",
    image: third,
    btnName: "See Curriculum",
  },
];

function SecondHome() {
  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="py-2 container">
            <div className="row  ">
              {firstbox.map((v, idx) => (
                <div className={"col-12  py-5 "}>
                  <div className="row">
                    <div
                      className={`col-4  ${(idx + 2) % 2 == 0 ? "order-first " : "order-last mx-5 "
                        } `}
                    >
                      {v?.text1 && <h1 className="pt-5"> {v?.text1}</h1>}
                      {v?.text2 && <p>{v?.text2}</p>}
                      {v?.text1 && (
                        <button className="btn btn-main" style={{
                          background: "white"
                        }}>
                          <p className="mx-3 p-0 m-0">{v?.btnName}</p>
                        </button>
                      )}
                    </div>
                    <div
                      className={`col-5   ${(idx + 2) % 2 !== 0 ? "order-first " : "order-last mx-5"
                        } `}
                    >
                      <div className="mx-4 px-4">
                        <img
                          className=""
                          style={{ height: "354px", width: "auto" }}
                          src={v?.image}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default SecondHome;
