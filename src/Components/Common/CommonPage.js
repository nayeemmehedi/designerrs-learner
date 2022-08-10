
import React from "react"
import { Element, Link } from "react-scroll";
import Style from "../../Style/course.module.scss";

const CommonPage = (props) => {
    const { linkArr, card } = props;
    return (
        <div className={`${Style.stoper_head} my-3`}>
            {/* <div className="container"> */}
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <div className={Style.page_steps}>
                        {linkArr.map((el, index) => (
                            <>
                                {el.to && <Link
                                    className="ms-4"
                                    to={el.to}
                                    activeClass={Style.active_one}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    delay={100}
                                    spy={true}
                                >
                                    {el.text}
                                </Link>}
                            </>
                        ))}
                    </div>
                </div>
                <div className="col-sm-12 col-md-7 col-lg-7">
                    {
                        linkArr.map((el, index) => (
                            <Element id={el.to}>
                                {el.component}
                            </Element>
                        ))
                    }
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    {card}
                </div>
            </div>
        </div>
        // </div>
    )
}

export default CommonPage