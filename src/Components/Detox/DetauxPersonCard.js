import React from 'react';
import FreeTag from "../../Assets/Images/Detox/free-tag.png";
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import "./card.scss"

import ProfilePicOne from "../../Assets/Images/Detox/profile-pics/profile-pic1.png"
import ProfilePicTwo from "../../Assets/Images/Detox/profile-pics/profile-pic2.png"
import ProfilePicThree from "../../Assets/Images/Detox/profile-pics/profile-pic3.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import moment from 'moment';

const DetauxPersonCard = ({ image, meetup }) => {
    const history = useHistory();

    return (
        <div className='d-block d-xl-flex flex-xl-row person-container'
            style={{
                background: "white",
                cursor: "pointer"
            }}

            onClick={() => {
                history.push("/meetup-reg/" + meetup?.id)
            }}
        >
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                {meetup && meetup.thumbnail && meetup?.thumbnail?.link ? (
                    <img src={meetup?.thumbnail?.link} alt="" srcset="" className='person-card-image' />
                ) : (
                    <img src={image} alt="" srcset="" className='person-card-image' />
                )}
                {/* <img src={image || meetup?.thumbnail?.link} alt="" srcset="" className='person-card-image' /> */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-5 p-3 bg-white">
                <div className="data-container-header">
                    {meetup?.title}
                </div>
                <div className="data-container-free-tag" style={{ marginBottom: "15px", width: "99px", height: "40px", display: "flex", alignItems: "center" }}>
                    <img src={FreeTag} alt="" style={{ width: "20px", height: "20px" }} />
                    <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>{meetup?.price === 0 ? "Free" : meetup?.price}</span>
                </div>
                <p style={{ fontSize: "16px" }} dangerouslySetInnerHTML={{ __html: meetup?.description }}></p>
                <div className="profile-pic-container" style={{ marginBottom: "15px", marginTop: "15px" }}>
                    <img src={ProfilePicOne} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%" }} />
                    <img src={ProfilePicTwo} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-10px" }} />
                    <img src={ProfilePicThree} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-5px" }} />
                    <span className="profile-number" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-5px", background: "#80060B", color: "white", fontWeight: "500", padding: "7px", fontSize: '14px' }}>+9</span>
                    <span style={{ marginLeft: "12px" }}> 12 People Registered</span>
                </div>
                <div className="date-container-bottom">
                    <div className="date-time-container">
                        <div className='icon-container'>
                            <AiOutlineCalendar style={{ color: "red" }} />
                        </div>
                        <div className="date-time-data">
                            <p className='date-time-date-header'>Date</p>
                            <p className="date-time-date">{moment(meetup?.startDate).format('DD MMMM, YYYY')}</p>
                        </div>
                    </div>
                    <div className="date-time-container">
                        <div className='icon-container'>
                            <GoLocation style={{ color: "red" }} />
                        </div>
                        <div className="date-time-data">
                            <p className='date-time-date-header'>Venue</p>
                            <p className="date-time-date">{meetup?.location?.locationName || "Online Event"}</p>
                        </div>
                    </div>

                </div>
                <div className="date-container-bottom-two" style={{ marginTop: "10px" }}>
                    <div className="date-time-container-two" style={{ width: "100% !important" }}>
                        <div className='icon-container'>
                            <i style={{ color: "red" }} class="fa-regular fa-clock"></i>
                        </div>
                        <div className="date-time-data">
                            <p className='date-time-date-header'>Time</p>
                            <p className="date-time-date">{moment(meetup?.time?.form).format('DD MMMM, YYYY')} - {moment(meetup?.time?.to).format('DD MMMM, YYYY')}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetauxPersonCard