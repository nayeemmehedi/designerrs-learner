import React, { useEffect, useRef } from 'react'
import Style from "../../Style/detaux.module.scss"


const DetauxUxCard = ({ image: UxUiImage, publication }) => {
    const imageRef = useRef(null);
    const dataRef = useRef(null);
    // useEffect(() => {
    //     let height = imageRef?.current.clientHeight;
    //     dataRef.current.style.height = height + "px";
    //     window.addEventListener('resize', () => {
    //         let height = imageRef?.current.clientHeight;
    //         dataRef.current.style.height = height + "px";

    //     })
    // }, [])

    return (
        <div className={Style.uxCardContainer} style={{ margin: "20px 0px" }} >

            <>
                <div
                    className="col-sm-12 col-md-12 col-lg-7 col-xl-7"
                >
                    <img
                        src={publication?.blogImage?.link || UxUiImage}
                        alt=""
                        style={{ width: "100%", height: '100%' }}
                        ref={imageRef}
                    />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                    <div

                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignContent: "space-between",
                            padding: "64px 40px",
                            background: "white",

                        }}
                        ref={dataRef}

                    >
                        <div style={{
                            flex: "1"
                        }}>
                            <span >{publication?.tags?.category3[0] || "# Career Switch"}</span>
                            <span >{publication?.tags?.field[0] || "# Career Switch"}</span>
                            <span >{publication?.tags?.series[0] || "# Career Switch"}</span>
                        </div>
                        <div style={{
                            flex: "1"
                        }}>
                            <h3 className={Style.info_heading}>
                                {publication?.blogTitle}
                            </h3>
                            <p className={Style.info_details}>
                                10 traits you should work on to become a better designer in a rapidly growing industry
                            </p>
                        </div>
                        <div style={{
                            flex: "1"
                        }}>
                            <span >24 Jun 2021 </span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </>
        </div>
        // </div>
    )
}

export default DetauxUxCard