import React from 'react';
import Thumbnail from "../../../Assets/Images/Meetup/Thumbnail.png"
import { GoLocation } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import moment from 'moment';
import DashboardMeetupEventCard from './DashboardMeetupEventCard';
const DashBoardMeetup = ({ meetup }) => {
    console.log(meetup)
    return (
        <div className="row">
            <div className='row align-items-center' style={{
                borderBottom: "1px solid #EBEBEB",
                paddingBottom: "20px"
            }}>
                <div className="col-sm-12 col-md-5 d-flex align-items-center">
                    <img src={meetup?.thumbnail?.link} alt="" className="rounded-circle" style={{ height: "72px", width: "72px" }} />
                    <div style={{
                        fontSize: "24px",
                        fontWeight: "500",
                        marginLeft: "15px"
                    }}>{meetup?.title || "Design Education, UX & AI"}</div>
                </div>
                <div className="col-md-3 d-flex align-content-center">
                    <div
                        className="col-4"
                    >
                        {meetup?.workspace && meetup.workspace.map((el, index) => (
                            <img src={el.icons.link} alt="" className="rounded-circle" style={{ height: "48px", width: "48px" }} />
                        ))}
                    </div>
                    <div className="col-9">
                        <div>Speakers</div>
                        <div style={{ fontSize: "16px", fontWeight: "600" }}>{meetup?.workspace[0]?.speakerName + "1"}</div>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <div className='col-2'
                        style={{
                            padding: "10px",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            background: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            marginRight: "10px"
                        }}>
                        <AiOutlineCalendar style={{ color: "red", fontSize: "25px" }} />
                    </div>
                    <div className="col-10">
                        <div>Date</div>
                        <div style={{ fontSize: "16px", fontWeight: "500" }}>{moment(meetup?.startDate).format('DD MMMM, YYYY') || "16 aug 2021"}</div>
                    </div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                    <div className='col-2'
                        style={{
                            padding: "10px",
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                            background: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            marginRight: "10px"
                        }}>
                        <GoLocation style={{ color: "red", fontSize: "25px" }} />
                    </div>
                    <div className="col-10">
                        <div>Venue</div>
                        <div style={{ fontSize: "16px", fontWeight: "500" }} >{meetup?.location?.locationName || "Online Event"}</div>
                    </div>
                </div>
            </div>

            <div className="mt-2">
                <DashboardMeetupEventCard meetup={meetup} />
            </div>
        </div>
    )
}

export default DashBoardMeetup