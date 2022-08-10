import React from "react";
import EightHome from "./HomeDetails/EightHome";
import FirstHome from "./HomeDetails/FirstHome";
import FiveVideoHome from "./HomeDetails/FiveVideoHome";
import FourHome from "./HomeDetails/FourHome";
import HomeFAQ from "./HomeDetails/HomeFAQ";
import ImageSlider from "./HomeDetails/ImageSlider";
import NineHome from "./HomeDetails/NineHome";
import SecondHome from "./HomeDetails/SecondHome";
import SixHome from "./HomeDetails/SixHome";
import ThirdHome from "./HomeDetails/ThirdHome";
import DetauxSubCard from '../../Components/Detox/DetauxSubCard';
import DetauxPersonCard from '../../Components/Detox/DetauxPersonCard';
import DetauxUxCard from '../../Components/Detox/DetauxUxCard';
import DetauxSmallCard from '../../Components/Detox/DetauxSmallCard';

import { useHistory } from "react-router-dom"

import Style from "../../Style/detaux.module.scss";

import DetauxSmallCardImgOne from "../../Assets/Images/Detox/small-card-img1.png";
import DetauxSmallCardImgTwo from "../../Assets/Images/Detox/small-card-img2.png";
import UxUiImage from "../../Assets/Images/Detox/uxui.svg";
import PersonMain from "../../Assets/Images/Detox/person-card-main.png"

function Homes() {
  const history = useHistory();
  return (
    <div>
      <FirstHome></FirstHome>

      <div>
        <div className="bgE5">
          <SecondHome></SecondHome>
        </div>
        <div className="bgGray">
          <ThirdHome></ThirdHome>
        </div>

        <div className="bgE5">
          <div>
            <FourHome></FourHome>
          </div>
          <div>
            <ImageSlider></ImageSlider>
          </div>

          <div>
            <SixHome></SixHome>
          </div>

          <div>
            <FiveVideoHome></FiveVideoHome>
          </div>
          <div>
            <EightHome></EightHome>
          </div>
          <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
            <h1>Upcoming Meetups</h1>

            <button style={{ padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none" }} onClick={() => {
              history.push("/detaux-meetup")
            }} >See All Events</button>
          </div>
          <div style={{ width: "83%", margin: "auto" }}>
            <DetauxPersonCard image={PersonMain} />
          </div>
          <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column", alignItems: "center", padding: "60px 0px" }}>
            <h1>Timeless articles for timely reading</h1>

            <button style={{ padding: "10px 20px", width: "245px", backgroundColor: "#CD2026", color: "white", border: "none" }} onClick={() => {
              history.push("/detaux-publication")
            }} >See All Blogs</button>
          </div>
          <div className={Style.header}>
            <DetauxUxCard image={UxUiImage} />
          </div>
          <div className={Style.header} style={{
            margin: "30px auto"
          }}>
            <div style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "64px",
              margin: "auto"
            }}>
              <DetauxSmallCard img={DetauxSmallCardImgOne} />
              <DetauxSmallCard img={DetauxSmallCardImgTwo} />
            </div>
          </div>
          <div>
            <NineHome></NineHome>
          </div>
          <div>
            <HomeFAQ></HomeFAQ>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes
