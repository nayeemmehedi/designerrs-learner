import React from "react";
import GoodiesMiddle from "./GoodiesMiddle";
import { NavLink } from "react-router-dom";
import { Element, Link } from "react-scroll";
import Style from "../../Style/course.module.scss";
import ScrollToTop from "../../Helper/Custom/ScrollToTop";
import Right1st from "../../Assets/goodies/Right1st.svg";
import Right2nd from "../../Assets/goodies/Right2nd.svg";

function Main() {
  return (
    <>
      <ScrollToTop />
      <div className={`${Style.stoper_head} my-3`}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-9">
            <div className="row">
              <div className="col-2">
                <div className={Style.back_to_course}>
                  <NavLink to="/courses">
                    <span>
                      <i className="fas fa-arrow-left"></i>
                    </span>
                    Back
                  </NavLink>
                </div>
                <div className={Style.page_steps}>
                  <Link
                    to="Tshirts"
                    activeClass={Style.active_one}
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={100}
                    spy={true}
                  >
                    Tshirts
                  </Link>
                  <Link
                    to="Badges"
                    activeClass={Style.active_one}
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={100}
                    spy={true}
                  >
                    Badges
                  </Link>
                  <Link
                    to="Wireframe-It"
                    activeClass={Style.active_one}
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={100}
                    spy={true}
                  >
                    Wireframe-It
                  </Link>
                  <Link
                    to="UX_Journal"
                    activeClass={Style.active_one}
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={100}
                    spy={true}
                  >
                    UX Journal
                  </Link>
                </div>
              </div>
              <div className="col-8 ps-3">
                <GoodiesMiddle></GoodiesMiddle>
              </div>
              <div className="col-2  ">
                <div>
                  <div className="mt-3">
                    <img
                      src={Right1st}
                      style={{ maxHeight: "414px", width: "auto" }}
                      alt=""
                    />
                  </div>

                  <div style={{ marginTop: "1200px" }}>
                    <img
                      src={Right2nd}
                      style={{ maxHeight: "414px", width: "auto" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}

export default Main;
