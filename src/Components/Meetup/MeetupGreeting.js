import React from 'react'
import { BiEnvelope } from 'react-icons/bi';
import { MdOutlineMasks } from 'react-icons/md';
import { MdOutlineSocialDistance } from 'react-icons/md';
import { IoMdAlarm } from 'react-icons/io';
import { AiOutlineWifi } from 'react-icons/ai';

const MeetupGreeting = () => {
    return (
        <div className='row' >
            <h3>Congratulations, your payment is done. See you in the event.</h3>
            <div className="row d-flex align-items-center mb-5">
                <div className="col-1 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <BiEnvelope style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
                <div className="col-8">
                    <p style={{ marginBottom: "0px !important" }}>We’ve sent you the confirmation email with the invite link.</p>
                </div>
            </div>
            <h5 className='mb-5'>Things to remember</h5>
            <div className="row d-flex align-items-center">
                <div className="col-1 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <MdOutlineMasks style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
                <div className="col-7">
                    <p>Cover your mouth and nose with a mask.</p>
                </div>
            </div>
            <div className="row d-flex align-items-center ">
                <div className="col-1 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <IoMdAlarm style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
                <div className="col-7">
                    <p>Reach 15 minutes before the event starts.</p>
                </div>
            </div>
            <div className="row d-flex align-items-center ">
                <div className="col-1 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <MdOutlineSocialDistance style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
                <div className="col-7">
                    <p>Stay 2 meters away from each other</p>
                </div>
            </div>
            <div className="row d-flex align-items-center ">
                <div className="col-1 d-flex justify-content-center align-content-center">
                    <div style={{
                        padding: "10px",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        background: "white"
                    }}>
                        <AiOutlineWifi style={{ color: "red", fontSize: "25px" }} />
                    </div>
                </div>
                <div className="col-7">
                    <p>Make sure your internet connection works</p>
                </div>
            </div>
        </div>

    )
}

export default MeetupGreeting