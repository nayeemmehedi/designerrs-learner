import React from 'react'
import LocationImage from "../../Assets/Images/Meetup/location.png"
import { GoLocation } from 'react-icons/go';
const Location = ({ location }) => {
    return (
        <div className='row'>
            <h3>Location</h3>
            <div className="col-sm-12 col-md-6">
                <img src={LocationImage} alt="" style={{ width: "100%", height: "auto" }} />
            </div>
            <div className="col-sm-12 col-md-6">
                <h4 className='mb-3'>{location?.address?.Landmark},{location?.address?.city}</h4>
                <p style={{ marginBottom: "50px" }}>{location?.address?.fullAddress}</p>
                <button style={{
                    border: "none",
                    background: "white",
                    color: "#CD2026",
                    padding: "8px 20px"
                }}><GoLocation /> Go to Location </button>
            </div>

        </div>
    )
}

export default Location