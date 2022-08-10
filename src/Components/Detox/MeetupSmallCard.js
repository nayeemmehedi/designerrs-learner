import React from 'react';
import "./card.scss"

const MeetupSmallCard = ({ img }) => {
    return (
        <div
            className="meetup-small-card-container"
        >
            <div
                className="meetup-small-card-image-container"
            >
                <img className="meetup-small-card-image"
                    src={img} alt="" style={{ height: "auto", width: "100%" }} />
            </div>
            <p
                className="meetup-small-card-date">Thursday 12, November</p>
            <p className='meet-small-card-des'>Designing Learning Experiences using AI</p>

        </div>
    )
}

export default MeetupSmallCard