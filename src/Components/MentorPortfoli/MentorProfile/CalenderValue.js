import React, { useEffect, useState } from "react"
import FullCalendar, { formatDate } from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useDispatch } from "react-redux"

let todayStr = new Date().toISOString().replace(/T.*$/, "") // YYYY-MM-DD of today

const CalenderValue = ({ calenderData }) => {
  const dispatch = useDispatch()
  const [calData, setCalData] = useState({
    weekendsVisible: true,
    currentEvents: [],
  })

  const [data, setData] = useState(calenderData?.calendar)
  // console.log(calenderData?.calendar)

  const [allData, setAllData] = useState([])

  const handleWeekendsToggle = () => {
    setCalData({ ...calData, weekendsVisible: false })
  }

  const handleDateSelect = selectInfo => {
    return
  }

  const handleEventClick = clickInfo => {
    return
  }

  const handleEvents = events => {
    setCalData({ ...calData, currentEvents: events })
  }

  // useEffect(() => {
  //   dispatch(postCal(allData));
  // }, [allData]);

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>
          <small>{eventInfo.event.title}</small>
        </b>
        <br></br>
        <b>
          <small>{eventInfo.event.extendedProps.status}</small>
        </b>
        <br></br>
        <b>
          <small>{eventInfo.timeText}</small>
        </b>
      </>
    )
  }

  return (
    <>
      <div className="demo-app shadow-sm bg-white">
        {/* {this.renderSidebar()} */}
        <div className="demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              // right: "timeGridWeek,timeGridDay dayGridMonth",
              right: "timeGridWeek",
              // "dayGridMonth"
            }}
            initialView="timeGridWeek"
            editable={false}
            allDaySlot={false}
            // selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={calData?.weekendsVisible}
            // initialEvents={calenderData?.calendar} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            // eventClick={handleEventClick}
            // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            // you can update a remote database when these fire:
            // eventAdd={handleEvent}
            // eventChange={function(){}}
            // eventRemove={function(){}}
            events={calenderData?.calendar}
          />
        </div>
      </div>
    </>
  )
}

export default CalenderValue
