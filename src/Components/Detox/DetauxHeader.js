import React from 'react'

import Style from "../../Style/detaux.module.scss";
const DetauxHeader = ({ pageHeading, link }) => {
    const { heading, description, isImage, image, buttonText } = pageHeading;
    return (
        <div className={Style.header}>
            <div className={Style.headerTop}>
                <h1 className={Style.headerHeading}>{heading}</h1>
                <p className={Style.headerDes}>{description} </p>
                <a href={link} target="_blank" className={Style.headerBtn}>{buttonText}
                </a>
            </div>
            {isImage && <div className={Style.headerImg}>
                <img style={{ height: "auto", width: "100%" }} src={image} alt="" srcset="" />
            </div>}
        </div>
    )
}

export default DetauxHeader