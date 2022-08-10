
import React from "react";
import Slider from "react-slick";

import CustomModal from "../../PortfolioMain/common/CustomModal";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import man from "../../../Assets/Images/icons/man.svg"
import reading from "../../../Assets/Images/png/reading.png"
import combined from "../../../Assets/Images/png/combined.png"
import manArt from "../../../Assets/Images/png/manArt.png"
import readingPeople from "../../../Assets/Images/icons/readingPeople.svg"

import mirror from "../../../Assets/Images/icons/mirror.svg"
import { FiNavigation } from "react-icons/fi";



const array=[
 {  imgValue : readingPeople,
  text :'Focus on given actionable and constructive feedback'},
  {  imgValue : combined,
    text :'Engage learners by asking their opininons on designs'},
    {  imgValue : manArt,
      text :'Keep the session enjoyable and fun '},
      {  imgValue : man,
        text :'Focus on hands on activities'},
        {  imgValue : mirror,
          text :'Rehearse your presentation before the session'},
 
 

]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
};

function NavigationMain({ modal, togglModal }) {
  return (
    <div  >
      <CustomModal  modal={modal} toggle={togglModal}>
        <div className="p-3  bgE5">
          <div className="d-flex justify-content-between">
            <h5 className="fw-bold">Session Reminder</h5>{" "}
            <GrFormClose onClick={togglModal} className="cursor" size={30} />
          </div>
          <hr />

          <div className="bestSlider my-5">
        <Slider {...settings}>
         
            {array &&
              array.map((item) => {
                return (
                  <div className="sliderItem">

                  <div className="row ">
                    <div className="col-3"></div>
                    <div className="col-7 ps-4">
                       <div>
                       <img className="bgColor11" src={item.imgValue} style={{height:'200px',width:'auto'}} alt="" />
                       </div>
                       </div>
                    <div className="col-2"></div>
                    <p className="text-center mt-3" style={{fontSize:'13px'}}>{item.text}</p>

                  </div>
                  </div>
                ); 
              })}
         
        </Slider>
      </div>

         
<div className="my-4">
  
<small>Upcoming Session</small> <br></br>
          <b>Conducting User Research</b>
</div>




          <div className="d-flex justify-content-between boxColor px-3">
            <div className="d-flex  align-items-center">
              {/* <div className="bg-white rounded-circle"> */}
              <AiOutlineCalendar
              color='red'
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "cover",
                }}
              />
              <div className="mx-3 mt-2">
                <small className="text-secondary ">Nayeem</small>
                <p>dhfh4hehe</p>
              </div>
              {/* </div> */}
            </div>

            <div className="mt-3">
              <button className="btn btn-main2 p-2"> <FiNavigation></FiNavigation> Navigation</button>
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
}

export default NavigationMain;
