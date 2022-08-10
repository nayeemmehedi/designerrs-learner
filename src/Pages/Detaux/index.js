import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import axiosApi from "../../Helper/api"

import DetauxHeaderImg from "../../Assets/Images/Detox/detaux-img-1.png";
import DetauxSubImg from "../../Assets/Images/Detox/detaux-img-2.png";
import DetauxCardImgOne from "../../Assets/Images/Detox/detaux-img-3.svg";
import DetauxCardImgTwo from "../../Assets/Images/Detox/detaux-img-4.svg";
import DetauxCardImgThree from "../../Assets/Images/Detox/detaux-img-5.svg";
import DetauxCardImgFour from "../../Assets/Images/Detox/detaux-img-6.svg";
import DetauxCardImgFive from "../../Assets/Images/Detox/detaux-img-7.svg";
import DetauxCardImgSix from "../../Assets/Images/Detox/detaux-img-8.png";
import DetauxCardImgSeven from "../../Assets/Images/Detox/detaux-img-9.png";
import DetauxSmallCardImgOne from "../../Assets/Images/Detox/small-card-img1.png";
import DetauxSmallCardImgTwo from "../../Assets/Images/Detox/small-card-img2.png";
import UxUiImage from "../../Assets/Images/Detox/uxui.svg";
import PersonMain from "../../Assets/Images/Detox/person-card-main.png"

import Style from "../../Style/detaux.module.scss";

import DetauxHeader from '../../Components/Detox/DetauxHeader';
import DetauxSubCard from '../../Components/Detox/DetauxSubCard';
import DetauxPersonCard from '../../Components/Detox/DetauxPersonCard';
import DetauxUxCard from '../../Components/Detox/DetauxUxCard';
import DetauxSmallCard from '../../Components/Detox/DetauxSmallCard';
import { getDetauxHome } from '../../Store/Detaux/actions';


const Detaux = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { home, publications } = useSelector(state => state.detaux);
  const subCards = [
    {
      title: "Enhance Knowledge",
      description: "Learn from peers and working professionals by sharing your thoughts and work.",
      image: DetauxCardImgOne,
      style: 2
    },
    {
      title: "Build Connections",
      description: "Gain confidence from people who can empathize with you during challenges.",
      image: DetauxCardImgTwo,
      style: 1
    },
    {
      title: "Get Empowered",
      description: "Gain confidence from people who can empathize with you during challenges.",
      image: DetauxCardImgThree,
      style: 2
    },
    {
      title: "Get Inspired",
      description: "Motivate yourself to become a better designer by seeing people doing great work.",
      image: DetauxCardImgFour,
      style: 1
    },
  ]
  const discordObj = {
    title: "Topics can end, but conversations don’t",
    description: "From UI UX to Virtual Reality to Work Ethics, connect with people having distinct set of interests.",
    image: DetauxCardImgSix,
    style: 2
  }
  const pageHeading = {
    heading: "Welcome to DETAUX",
    description: "A community that gives you the chance to learn from one another. Expert Designers from the industries talks UX and share their experiences.",
    buttonText: "Join Community Now",
    image: DetauxHeaderImg,
    isImage: true
  }
  useEffect(() => {
    dispatch(getDetauxHome())
  }, [])

  const [discord, setDiscord] = useState(null)
  // console.log(discord)

  useEffect(() => {
    axiosApi
      .get(`/admin/globalsettings/fields?fields=communityLinks`)
      .then(res => {
        console.log(res.data)
        setDiscord(
          res?.data?.communityLinks?.find(
            i => i.communityName == "Discord" || i.communityName == "discord"
          ).communityUrl
        )
      })
      .catch(err => { })
  }, [])
  return (
    <>
      <div className='container'>
        <DetauxHeader pageHeading={pageHeading} link={discord} />
        <div className={Style.header}>
          <img style={{ height: "auto", width: "100%" }} src={DetauxSubImg} alt="" />
        </div>
        <div className={Style.counts} >
          <div className={Style.subCounts}>
            <p style={{ fontSize: "30px" }}>500+</p>
            <p>Mentors</p>
          </div>
          <div className={Style.subCounts}>
            <p style={{ fontSize: "30px" }}>20,000+</p>
            <p>Members</p>
          </div>
          <div className={Style.subCounts}>
            <p style={{ fontSize: "30px" }}>83+</p>
            <p>Countries</p>
          </div>
          <div className={Style.subCounts}>
            <p style={{ fontSize: "30px" }}>05</p>
            <p>Channels</p>
          </div>
        </div>
        <div className={Style.header}>
          {subCards.map((el, index) => (
            <DetauxSubCard obj={el} />
          ))}
        </div>
        <div className={Style.header}>
          <h1 className={Style.headerHeading} style={{ fontSize: "25px", textAlign: "center" }}>Diverse perspectives of people from 80+ countries</h1>
          <p style={{ textAlign: "center", margin: "auto" }}>Challenge your assumptions & learn from diverse mindsets from people across the world.</p>
        </div>
        <div className={Style.header} style={{ marginTop: "60px" }}>
          <div className={Style.headerImg}>
            <img style={{ height: "auto", width: "100%" }} src={DetauxCardImgFive} alt="" srcset="" />
          </div>
        </div>
        <div className={Style.header}>
          <DetauxSubCard obj={discordObj} />
        </div>
        <div className={Style.header} style={{ width: "80%", display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "20%", fontSize: "13px", paddingLeft: "25px" }}>Portfolio Feedback</div>
          <div style={{ width: "20%", fontSize: "13px" }}>Career Guidance</div>
          <div style={{ width: "20%", fontSize: "13px" }}>Usability Testing</div>
          <div style={{ width: "20%", fontSize: "13px" }}>Augmented Reality</div>
          <div style={{ width: "20%", fontSize: "13px", paddingLeft: "20px" }}>Virtual Reality</div>
          <div style={{ width: "20%", fontSize: "13px", paddingLeft: "25px", marginTop: "20px" }}>Voice and Conversation</div>
          <div style={{ width: "20%", fontSize: "13px", marginTop: "20px" }}>Design Tools</div>
          <div style={{ width: "20%", fontSize: "13px", marginTop: "20px" }}>Design Critique</div>
          <div style={{ width: "20%", fontSize: "13px", marginTop: "20px" }}>Design Rants</div>
          <div style={{ width: "20%", fontSize: "13px", marginTop: "20px", paddingLeft: "20px" }}>Design Challenges</div>
        </div>

      </div>
      <div style={{ width: "100vw", margin: "auto", position: "relative", marginTop: "50px" }}>
        <img style={{ height: "auto", width: "100%" }} src={DetauxCardImgSeven} alt="" />
        <div className="text" style={{ position: "absolute", top: "0", bottom: "0", left: "0", right: "0", height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
          <h2 >Don’t miss out on important connections, join now.</h2>
          <a href={discord} target="_blank" style={{ textAlign: "center", color: "white !important", padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none", textDecoration: "none" }}>Join Now</a>
        </div>
      </div>
      <div className="container">
        <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
          <h1>DETAUX Meetups</h1>
          <p style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: home?.meetup?.description }}></p>
          <button style={{ padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none" }} onClick={() => {
            history.push("/detaux-meetup")
          }} >See All Meetups</button>
        </div>
      </div>
      <div style={{ width: "83%", margin: "auto" }}>
        <DetauxPersonCard image={PersonMain} meetup={home?.meetup} />
      </div>
      <div className="container">
        <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
          <h1>DETAUX Publication</h1>
          <p style={{ textAlign: "center" }}>Self-Learn from our evergreen articles</p>
          <button style={{ padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none" }} onClick={() => {
            history.push("/detaux-publication")
          }} >See All Articles</button>
        </div>
      </div>
      <div style={{
        width: "70%", margin: "auto"
      }}>
        {home?.publications && home.publications?.map((el, index) => (
          <DetauxUxCard image={UxUiImage} publication={el} />
        ))}
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
          {home?.publications && home.publications?.map((el, index) => (
            <DetauxSmallCard img={DetauxSmallCardImgOne} publication={el} />
          ))}

          {/* <DetauxSmallCard img={DetauxSmallCardImgTwo} /> */}
        </div>
      </div>
    </>


  )
}

export default Detaux

