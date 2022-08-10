import goodies6th from "../../Assets/goodies/goodies6th.svg";
import { firstbox, secondbox } from "./GoodiesList";
import { Element, Link } from "react-scroll";
import Style from "../../Style/course.module.scss";

function GoodiesMiddle() {
  return (
    <div>
      <div className={Style.center_items}>
        <div className="row">
          {firstbox.map((v, idx) => (
            <div className={`col-12  mb-5 `}>
              <Element id={v?.element}>
                <div className="row">
                  <div
                    className={`col-4  ${
                      (idx + 2) % 2 == 0
                        ? "order-first "
                        : "order-last mx-5 "
                    } `}
                  >
                    {v?.text1 && <h1 className="pt-5"> {v?.text1}</h1>}
                    {v?.text2 && <p>{v?.text2}</p>}
                    {v?.text1 && (
                      <button className="btn btn-main2">
                        <p className="mx-3 p-0 m-0">Buy Now</p>
                      </button>
                    )}
                  </div>
                  <div
                    className={`col-5   ${
                      (idx + 2) % 2 !== 0
                        ? "order-first "
                        : "order-last mx-5"
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
              </Element>
            </div>
          ))}
        </div>

        <div>
          <img
            src={goodies6th}
            style={{ height: "233px", width: "auto" }}
            alt=""
          />
        </div>

        <div className="row">
          {secondbox.map((v, idx) => (
            <div className={`col-12 `}>
              <Element id={v?.element}>
                <div className="row my-4">
                  <div
                    className={`col-6  ${
                      (idx + 2) % 2 == 0 ? "order-first" : "order-last"
                    } `}
                  >
                    {v?.text1 && <h1 className="pt-5"> {v?.text1}</h1>}
                    {v?.text2 && <p>{v?.text2}</p>}
                    {v?.text1 && (
                      <button className="btn btn-main2">
                        <p className="mx-3 p-0 m-0">Buy Now</p>
                      </button>
                    )}

                    {v?.number1 && (
                      <div>
                        {v?.number1 && (
                          <img
                            src={v?.number1}
                            style={{ height: "40px", width: "auto" }}
                            alt=""
                          />
                        )}
                        {v?.number1stText && <h6>{v?.number1stText}</h6>}
                        {v?.number1stTextSmall && (
                          <p>{v?.number1stTextSmall}</p>
                        )}
                      </div>
                    )}

                    {v?.number2 && (
                      <div className="mt-3">
                        {v?.number2 && (
                          <img
                            src={v?.number2}
                            style={{ height: "40px", width: "auto" }}
                            alt=""
                          />
                        )}
                        {v?.number2ndText && <h6>{v?.number2ndText}</h6>}
                        {v?.number2ndTextSmall && (
                          <p>{v?.number2ndTextSmall}</p>
                        )}
                      </div>
                    )}
                    {v?.number3 && (
                      <div className="mt-3">
                        {v?.number3 && (
                          <img
                            src={v?.number3}
                            style={{ height: "40px", width: "auto" }}
                            alt=""
                          />
                        )}
                        {v?.number3rdText && <h6>{v?.number3rdText}</h6>}
                        {v?.number3rdTextSmall && (
                          <p>{v?.number3rdTextSmall}</p>
                        )}
                      </div>
                    )}
                  </div>

                  <div
                    className={`col-6 ${
                      (idx + 2) % 2 !== 0 ? "order-first" : "order-last"
                    } `}
                  >
                    <div className="ms-4">
                      {v?.image1stText && <h1>{v?.image1stText}</h1>}
                      {v?.image2ndText && (
                        <p className="text-danger py-3">{v?.image2ndText}</p>
                      )}

                      {v?.image && (
                        <div>
                          <img
                            style={{ height: "254px", width: "auto" }}
                            src={v?.image}
                            alt=""
                          />
                        </div>
                      )}

                      {v?.image1 && (
                        <img
                          className="pt-5"
                          style={{ height: "214px", width: "auto" }}
                          src={v?.image1}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </Element>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GoodiesMiddle;
