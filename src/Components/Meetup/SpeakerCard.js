import React from 'react';
import Style from '../../Style/course.module.scss';
import DefaultImage from "../../Assets/Images/mentors/image1.svg"

const SpeakerCard = ({ value }) => {
    return (
        <div className="col-sm-12 col-md-5 col-lg-5 p-2 mx-3 my-3" style={{ background: "white" }}>
            <div className={`${Style.box_border_two}`}>
                <div className={Style.box_border_one_img}>
                    <img src={value.icons || DefaultImage} alt="" style={{ height: "auto", width: "100%" }} />
                </div>
                <div className='my-3 d-flex justify-content-between align-items-center'>
                    <div>
                        <h6 className="m-0">{value.speakerName || "Sheneille Patil"}</h6>
                        <span style={{ fontSize: 10, margin: 0 }}>{value.position || "Co-founder of Designerrs"}</span>
                    </div>
                    <span>
                        <i className="fab fa-linkedin" style={{ fontSize: 20, color: "#0077B7" }}></i>
                    </span>
                </div>
                <p className='font_12'>{value.about || "Sheneille is an expert in grid systems and visual design and will give you developer hand-off tips."}</p>
            </div>
        </div>
    )
}

export default SpeakerCard