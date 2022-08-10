import React from 'react'
import Style from "../../Style/detaux.module.scss"
import { BsArrowRightShort } from 'react-icons/bs';

const DetauxSubCard = ({ obj: { image, title: heading, description: des, style, linkText, link } }) => {
  return (
    <div className="w-100 my-4" style={{ hight: 200 }}>
      <div className="row d-flex justify-content-center align-items-center">
        {style === 1 ? (
          <>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src={image}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h6 className={Style.info_heading}>
                {heading}
              </h6>
              <p className={Style.info_details}>
                {des}
              </p>
              {linkText && link && <p style={{ color: "red" }}>
                <span>{linkText}</span>
                <BsArrowRightShort style={{ color: "red" }} />
              </p>}
            </div>
          </>) : (
          <>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h6 className={Style.info_heading}>
                {heading}
              </h6>
              <p className={Style.info_details}>
                {des}
              </p>
              {linkText && link && <p style={{ color: "red" }}>
                <span>{linkText}</span>
                <BsArrowRightShort style={{ color: "red" }} />
              </p>}
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <img
                src={image}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DetauxSubCard