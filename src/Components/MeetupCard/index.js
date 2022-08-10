import React from 'react'
import PersonImage from "../../Assets/Images/Detox/person-card-main.png";
import FreeTag from "../../Assets/Images/Detox/free-tag.png";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import ProfilePicOne from "../../Assets/Images/Detox/profile-pics/profile-pic1.png"
import ProfilePicTwo from "../../Assets/Images/Detox/profile-pics/profile-pic2.png"
import ProfilePicThree from "../../Assets/Images/Detox/profile-pics/profile-pic3.png"
import "./meetCard.scss"
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const index = () => {
    const { meetup } = useSelector(state => state.detaux);
    const history = useHistory();
    return (
        <div className='border-left meet-person-card-container'>
            <div className="row">
                <img style={{ height: "auto", width: "100%" }} src={meetup?.thumbnail?.link || PersonImage} alt="" />
            </div>
            <div className="row d-flex justify-content-between mt-2">
                <div className="col-8">
                    <h4>{meetup.title}</h4>
                </div>
                <div className="col-4 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <AiOutlineShareAlt style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
            </div>
            <div className="py-2" style={{ marginBottom: "15px", height: "40px", display: "flex", alignItems: "center" }}>
                <img src={FreeTag} alt="" style={{ width: "20px", height: "20px" }} />
                <span style={{ marginLeft: "10px", fontSize: "18px", fontWeight: "500" }}>{meetup?.price === 0 ? "Free" : meetup?.price}</span>
            </div>
            <div className="date-container-bottom">
                <div className="col-6 d-flex align-items-center">
                    <div className='col-2'>
                        <AiOutlineCalendar style={{ color: "red" }} />
                    </div>
                    <div className="col-10">
                        <p className='date-time-date-header'>Date</p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>{moment(meetup.startDate).format('DD MMMM, YYYY')}</p>
                    </div>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <div className='col-2'>
                        <GoLocation style={{ color: "red" }} />
                    </div>
                    <div className="col-10">
                        <p className='date-time-date-header'>Venue</p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }} >{meetup?.location?.locationName || "Online Event"}</p>
                    </div>
                </div>

            </div>
            <div className="date-container-bottom-two" style={{ marginTop: "20px" }}>
                <div className="date-time-container-two" style={{ width: "100% !important" }}>
                    <div className='meet-icon-container'>
                        <i style={{ color: "red" }} class="fa-regular fa-clock"></i>
                    </div>
                    <div className="date-time-data">
                        <p className='date-time-date-header'>Time</p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>{moment(meetup?.time?.form).format('h:mm a')} - {moment(meetup?.time?.to).format('h:mm a')}</p>
                    </div>
                </div>
            </div>
            <div className="profile-pic-container" style={{ marginBottom: "15px", marginTop: "15px" }}>
                <img src={ProfilePicOne} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%" }} />
                <img src={ProfilePicTwo} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-10px" }} />
                <img src={ProfilePicThree} alt="" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-5px" }} />
                <span className="profile-number" style={{ height: "32px", width: "32px", borderRadius: "50%", marginLeft: "-5px", background: "#80060B", color: "white", fontWeight: "500", padding: "7px", fontSize: '14px' }}>+9</span>
                <span style={{ marginLeft: "12px" }}> 12 People Registered</span>
            </div>
            <button className="btn btn-block w-100  px-4 py-3 mt-3" style={{
                color: "white",
                background: "#CD2026",
                borderRadius: "0px"
            }}
                onClick={() => {
                    history.push("/meetup-payment/" + meetup.id)
                }}
            >
                Register
            </button>
        </div>
    )
}

export default index