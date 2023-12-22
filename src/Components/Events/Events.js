import React, { useEffect, useState } from 'react'
import styles from './Events.module.css'
import Event from './Event/Event'
import GetEvents from '../../api/GetEvents';



function Events(props) {
  const [allEvents,setAllEvents] = useState();

  useEffect(()=>{
    const getEvents = async ()=>{
      const events = await GetEvents();

      console.log(events);
      setAllEvents(events);
    }
    getEvents();
  },[])
  return (
    <div className={styles.eventsPage}>
      {allEvents!==undefined&&<Event title="On going Events" name = {allEvents.ongoing[0]}/>}
      {/* <Event title="Upcoming Events"/> */}
      {allEvents!==undefined&&<Event title="Past Events" name ={allEvents.upcoming[0]}/>}
    </div>
  )
}

export default Events
