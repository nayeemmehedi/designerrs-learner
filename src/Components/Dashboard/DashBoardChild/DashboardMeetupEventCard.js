import React from 'react'
import { BsCalendarEvent } from 'react-icons/bs';
import { FiNavigation } from 'react-icons/fi';
import moment from 'moment';
const DashboardMeetupEventCard = ({ meetup }) => {
    return (
        <div className='row'>
            <div className="col-sm-12 col-md-4 p-3 " style={{
                backgroundColor: "white"
            }}>
                <div className="row mb-3 d-flex align-items-center" style={{ fontSize: "15px", fontWeight: "bold" }}>
                    <div className="col-1">
                        <BsCalendarEvent />
                    </div>
                    <div className=" col-9">Upcoming Event</div>
                </div>
                <div className="row mb-3">
                    <div style={{
                        fontSize: "12px"
                    }}>Address</div>
                    <div>{meetup?.location?.address?.fullAddress}</div>
                </div>
                <div className="row mb-5">
                    <div style={{
                        fontSize: "12px"
                    }}>Event Starts from</div>
                    <div style={{ color: "#169F32" }}>{moment(meetup.startDate).format('DD MMMM, YYYY')}</div>
                </div>
                <button
                    style={{ width: "100%", height: "50px" }}
                    className="btn btn-outline-danger side"
                >
                    <small><FiNavigation style={{ fontSize: "20px" }} /> Navigate</small>
                </button>
            </div>
        </div>
    )
}

export default DashboardMeetupEventCard