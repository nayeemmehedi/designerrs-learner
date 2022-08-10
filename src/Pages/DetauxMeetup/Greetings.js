import React from 'react'
import MeetupGreeting from '../../Components/Meetup/MeetupGreeting';
import MeetupCard from "../../Components/MeetupCard";

const Greetings = () => {
    return (
        <div className="container">
            <div className='row d-block d-md-flex align-item-md-center ' style={{ marginTop: "50px" }}>
                <div className="col-sm-12 col-md-5 p-3">
                    <MeetupCard meetup={{}} />
                </div>
                <div className="col-sm-12 col-md-5 ms-3">
                    <MeetupGreeting />
                </div>
            </div>
        </div>
    )
}

export default Greetings