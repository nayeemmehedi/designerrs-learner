import React, { useState, useEffect } from "react";
import mobile from "../../../Assets/Home/mobile.svg";
import five from "../../../Assets/Home/five.svg";
import detox from "../../../Assets/Home/detox.svg";
import axiosApi from "../../../Helper/api"

const firstbox = [
  {
    text1: "Solve crucial problems that matter",
    text2: "Channelize your learning to solve problems from startups and NGOs.",
    link: "./boom",
    image: mobile,
    btnName: "See Problem Briefs",
    image1: detox,
  },

  {
    text1: "Small Batches at convenient locations",
    text2:
      "We have small batches to make sure you get individual attention from your mentor, available at your nearest city and online.",
    link: "./boom",
    image: five,
    btnName: "See our Portfolio",
  },
];

function FourHome() {

  const [discord, setDiscord] = useState(null)
  // console.log(discord)

  useEffect(() => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=communityLinks`)
      .then(res => {
        console.log(res.data)
        setDiscord(
          res?.data?.communityLinks?.find(
            i => i.communityName == "Discord" || i.communityName == "discord"
          ).communityUrl
        )
      })
      .catch(err => { })
  }, [])
  return (
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-6">
          <div className="py-5">
            <div className="row">
              {firstbox.map((v, idx) => (
                <div className={`col-12  mb-5 `}>
                  <div className="row">
                    <div
                      className={`col-4  ${(idx + 2) % 2 == 0 ? "order-last " : "order-first mx-5 "
                        } `}
                    >
                      {v?.image1 && (
                        <img
                          className=""
                          src={v?.image1}
                          style={{ height: "45px", width: "auto" }}
                          alt=""
                        />
                      )}
                      {v?.text1 && <h1 className="pt-3"> {v?.text1}</h1>}
                      {v?.text2 && <p>{v?.text2}</p>}
                      {v?.text1 && (
                        <a
                          href={discord} target="_blank"
                          className={
                            v?.image1 ? "btn btn-main2" : "btn btn-main"
                          }
                        >
                          <p className="mx-3 p-0 m-0">{v?.btnName}</p>
                        </a>
                      )}
                    </div>
                    <div
                      className={`col-4   ${(idx + 2) % 2 !== 0 ? "order-last " : "order-first mx-5"
                        } `}
                    >
                      <div className="ms-4 ps-4 mt-4">
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

export default FourHome;
