import React, { useEffect } from 'react'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { SiCircle } from 'react-icons/si';

import CommonPage from '../../Components/Common/CommonPage'
import Normal from '../../Components/Meetup/Normal';
import ArrowComp from '../../Components/Meetup/ArrowComp';
import MeetupCard from "../../Components/MeetupCard";
import Speaker from '../../Components/Meetup/Speaker';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { getMeetup } from '../../Store/Detaux/actions';
import Location from '../../Components/Meetup/Location';


const Meetup = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { meetup } = useSelector(state => state.detaux);
    console.log(meetup)
    useEffect(() => {
        dispatch(getMeetup(id));
    }, [])
    const normals = [
        {
            heading: "About event",
            text: meetup?.description
        },
        {
            heading: "Guest Requirements",
            text: meetup?.guestRequirements,
            icon: AiOutlineUnorderedList
        }
    ];

    const pointComs = [
        {
            heading: "Takeaways",
            points: meetup?.takeaways?.points || [],
            icon: SiCircle
        },
        {
            heading: "Case Studies",
            points: meetup?.caseStudies || [],
            icon: AiOutlineBook
        },
        {
            heading: "Who should attend?",
            points: ["Interact with design industry experts from Samsung, Google, Microsoft.", "Interact with design industry experts from Samsung, Google, Microsoft.",
                "Interact with design industry experts from Samsung, Google, Microsoft."],
            icon: MdOutlinePersonOutline
        },
    ];
    // const speaker = 
    const linkArr = [
        {
            to: "about",
            text: "About the event",
            component: <Normal value={normals[0]} />
        },
        {
            to: "takeaways",
            text: "Takeaways",
            component: <ArrowComp value={pointComs[0]} />
        },
        {
            to: "speakers",
            text: "About the speakers",
            component: <Speaker />
        },
        {
            to: "case",
            text: "Case Studies",
            component: <ArrowComp value={pointComs[1]} />
        },
        {
            to: "attend",
            text: "Who Should attend",
            component: <ArrowComp value={pointComs[2]} />
        },

        {
            to: "guest",
            text: "Guest Requirements",
            component: <Normal value={normals[1]} />
        }
        ,
        {
            to: null,
            Text: null,
            component: <Location location={meetup?.location} />
        }
    ]

    const card = <MeetupCard />


    return (
        <div>
            <CommonPage linkArr={linkArr} card={card} />
        </div>
    )
}

export default Meetup