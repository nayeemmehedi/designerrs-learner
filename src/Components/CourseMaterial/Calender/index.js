import React, { useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createEventId, INITIAL_EVENTS } from "./event-utils";
import { useDispatch, useSelector } from "react-redux";
// import { postCal } from "../../../../../store/calender/actions";
import moment from "moment";
import {BsArrowLeft} from "react-icons/bs";
import {useHistory}  from "react-router-dom"
import CustomModal from "../../PortfolioMain/common/CustomModal";
import { FaTimes } from "react-icons/fa";
import {GiSandsOfTime} from "react-icons/gi"


const demoData = [
  {
    id : 0,
    title : "Timings: 11AM to 2PM"
  },
  {
    id : 1,
    title : "Timings: 2PM to 5PM"
  }
]

let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const DemoApp = ({ calenderData }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const togglModal = () => setModalOpen(!ModalOpen);
  const [cancle,setCancle] = useState(false);
  const [nextBtn,setNextBtn] = useState(false)

  const history = useHistory()
  const dispatch = useDispatch();
  const [calData, setCalData] = useState({
    weekendsVisible: true,
    currentEvents: [],
  });

  const [data, setData] = useState(calenderData?.calendar);

  const [allData, setAllData] = useState([]);

  const handleWeekendsToggle = () => {
    setCalData({ ...calData, weekendsVisible: false });
  };

  function uid(length) {
    var result = "";
    var characters = "1234567890";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleDateSelect = (selectInfo) => {
    // let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (selectInfo) {
      let idx = allData.length;
      calendarApi.addEvent({
        id: idx + 1,
        title: "Batch-01",
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });

      setAllData([
        ...allData,
        {
          id: idx + 1,
          title: "Batch-01",
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
      ]);
    }
  };

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.id);
    console.log(clickInfo)
    togglModal()
    // if (
    //   window.confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
     
    //   clickInfo.event.remove();
    //   console.log(allData.find((i) => i.id == clickInfo.event.id));

    //   setAllData(allData.filter((i) => i.id != clickInfo.event.id));
    // }
  };

  const handleEvents = (events) => {
    setCalData({ ...calData, currentEvents: events });
  };

  // useEffect(() => {
  //   dispatch(postCal(allData));
  // }, [allData]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <br></br>
        <i>{eventInfo.event.title}</i>
        
      </>
    );
  }

  return (
    
    <div className="calenderMain  mb-5">
    <div className="goBackBtn text-center txtColor" style={{fontSize : "18px", cursor: "pointer"}} onClick={()=> history.goBack()}>
    <p><BsArrowLeft></BsArrowLeft>Go Back</p>
    </div>
    <div className="">

    <div className="demo-app shadow-sm bg-white">
    {/* {this.renderSidebar()} */}
    <div className="demo-app-main">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "",
          // "dayGridMonth"
        }}
        initialView="dayGridMonth"
        // editable={true}
        allDaySlot={false}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={calData?.weekendsVisible}
        initialEvents={data} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        // you can update a remote database when these fire:
        // eventAdd={handleEvent}
        // eventChange={function(){}}
        // eventRemove={function(){}}
        // events={data}
      />
    </div>
  </div>
    </div>






  

    <CustomModal toggle={togglModal} modal={ModalOpen} size={nextBtn ? "md" : "lg"}>
    <div className="p-4">
      <div className="d-flex justify-content-between">
        <h6>Request for Cancellation</h6>
        <FaTimes
          onClick={togglModal}
          style={{ cursor: "pointer", width: "40px" }}
        ></FaTimes>
      </div>
      <hr></hr>




      <h5 className={!nextBtn && "txtColor"}>17 April 2021, Sunday</h5>
      <small>Make sure you only cancel sessions on emergencies as </small>
      <br></br>
      <small>it affects your learner’s learning experience.</small>
      <br></br>
      <br></br>
     {!nextBtn && <small style={{ color: "#616161" }}>Sessions on this day</small>}
      {nextBtn && (<b>Please give a reason</b>)}

     {!nextBtn && ( <div>
      <div className="d-flex justify-content-around">


       {demoData.map((el,idx) => { return ( <div style={{ backgroundColor: "#EBEBEB",margin: "0px 4px 0px 0px" }} className="px-2 py-2">
          <p className="txtColor">
            <b>{el.title}</b>
          </p>

          <small>Batch: 0080-onl-fsux-6April21</small>
          <br></br>
          <small>Session 7</small>
          <br></br>
          <b>Information Architecture: Content Strategy</b>
          <p>
            Updated Session Date:<br></br>{" "}
            <span className="txtColor">18 April 2021</span>{" "}
          </p>

          
         {!cancle &&  (<button
            className="px-2 py-2"
            style={{
              border: "none",
              backgroundColor: "#CD2026",
              color: "#fff",
              width: "100%",
            }}
            onClick={()=> setCancle(true)}
          >
          <small>Cancel this Session</small>  
          </button>)  
        }


        { cancle && (el.id == idx) &&  (  <button
          className="px-2 py-2"
          style={{
            border: "none",
            backgroundColor: "#EBEBEB",
            color: "#CD2026",
            width: "100%",
            border: "1px dotted #7D7D7D",
          }}
        >
       <GiSandsOfTime ></GiSandsOfTime> 
       <small>Request for Cancellation Sent</small>
        </button>)}

        </div>)})}


      </div>


      <hr></hr>
      <button
        className="py-2 "
        style={{
          width: "100%",
          border: "1px dotted #7D7D7D",
          color: "#7D7D7D",
        }}
        onClick={()=> setNextBtn(true)}
      >
        Go Next
      </button>
      </div>)}

{nextBtn && ( <>



<div>
   <textarea style={{resize: "none"}} rows="5" cols="50" type="textarea" className="form-control"></textarea>
  
   
   <hr></hr>

   <button className="py-2 " style={{border : "none", backgroundColor : "#CD2026", width : "100%", color : "#fff"}}>Submit</button>
  </div></>)}


    </div>

  </CustomModal>























     
    </div>
  );
};

export default DemoApp;
