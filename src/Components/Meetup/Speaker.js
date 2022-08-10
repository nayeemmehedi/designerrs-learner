import React from 'react';
import { FaBullhorn } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import DefaultImage2 from "../../Assets/Images/mentors/image2.svg";
import SpeakerCard from './SpeakerCard';
const Speaker = () => {
    const { meetup } = useSelector(state => state.detaux);
    const { workspace } = meetup;

    return (
        <div className='row' style={{ marginBottom: "100px" }}>
            <h3><FaBullhorn /> About the Speakers</h3>
            <div className="row">
                {workspace?.map((el, index) => (
                    <SpeakerCard value={el} />
                ))}
            </div>
        </div>
    )
}

export default Speaker