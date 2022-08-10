
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import DetauxCardImgOne from "../../Assets/Images/Detox/meetup/meetup1.svg";
import DetauxCardImgTwo from "../../Assets/Images/Detox/meetup/meetup2.svg";
import DetauxCardImgThree from "../../Assets/Images/Detox/meetup/meetup3.svg";
import PersonMain from "../../Assets/Images/Detox/person-card-main.png"
import PersonMainTwo from "../../Assets/Images/Detox/meetup/person-main2.png"

import Style from "../../Style/detaux.module.scss";

import DetauxHeader from '../../Components/Detox/DetauxHeader';
import DetauxSubCard from '../../Components/Detox/DetauxSubCard';
import DetauxPersonCard from '../../Components/Detox/DetauxPersonCard';
import MeetupSmallCard from '../../Components/Detox/MeetupSmallCard';

import { getMeetups } from '../../Store/Detaux/actions';

const DetauxMeetUp = () => {
    const dispatch = useDispatch();
    const { meetups } = useSelector(state => state.detaux);
    const pageHeading = {
        heading: "Detaux Meetups",
        description: "Make your learning curve steeper by engaging to regular DETAUX Meetups. Meetups consists of live events where industry experts share their knowledge and experiences by interacting with other designers.",
        buttonText: "See All Upcoming Events",
        image: null,
        isImage: false
    }
    const subCards = [
        {
            title: "Conversations",
            description: "Expert UX Designers working in apex companies were like you at some time. Learn about their journey filled of challenges.",
            image: DetauxCardImgOne,
            style: 2,
            linkText: "See all Conversations",
            link: "#",
        },
        {
            title: "Ask me Anything",
            description: "Are you someone who have lots of questions but no one to ask them to? Register for our AMA meetups to satisfy your burning desire ",
            image: DetauxCardImgTwo,
            style: 1,
            linkText: "See all AMA’s",
            link: "#",
        },
        {
            title: "Portfolio Review",
            description: "Thirsty for portfolio feedback? Our speakers give expert guidance and inspiration to help you create a great portfolio.",
            image: DetauxCardImgThree,
            style: 2,
            linkText: "See All Portfolio Reviews",
            link: "#",
        },
    ]
    useEffect(() => {
        dispatch(getMeetups())
    }, [])
    console.log(meetups)
    return (
        <>
            <div className='container'>
                <DetauxHeader pageHeading={pageHeading} />
            </div>
            <div className={Style.header}>
                {subCards.map((el, index) => (
                    <DetauxSubCard obj={el} />
                ))}
            </div>

            <div className="container">
                <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
                    <h1>Upcoming Meetups</h1>
                    <p style={{ textAlign: "center" }}>Don’t let these events slip by. They might be your next source of opportunity...</p>
                </div>
            </div>
            <div style={{ width: "83%", margin: "auto" }}>
                {meetups && meetups.upcomingMeetups && meetups?.upcomingMeetups?.map((el, index) => (
                    <>
                        <DetauxPersonCard image={PersonMain} meetup={el} />
                        <br />
                    </>
                ))}
            </div>
            <div className="container">
                <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
                    <h1>Missed out on Past Meetups? </h1>
                    <button style={{ padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none" }} >Click Here</button>
                </div>
            </div>
            <div className={Style.header} style={{
                margin: "30px auto"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2,1fr)",
                    columnGap: "30px",
                    rowGap: "40px"
                }}>
                    {meetups && meetups.postMeetups?.map((el, index) => (
                        <>
                            <MeetupSmallCard img={PersonMain} />
                            <MeetupSmallCard img={PersonMainTwo} />
                        </>
                    ))}

                    {meetups && !meetups.postMeetups && <>
                        <MeetupSmallCard img={PersonMain} />
                        <MeetupSmallCard img={PersonMainTwo} />
                    </>}

                </div>
            </div>
        </>

    )
}

export default DetauxMeetUp