import React, { useEffect, useState } from 'react'
import styles from './Events.module.css'
import Event from './Event/Event'
import GetEvents from '../../api/GetEvents';



function Events(props) {
  return (
    <div className={styles.eventsPage}>
      <Event data="ongoing" title="On going Events"/>
      <Event data="upcoming" title="Upcoming Events"/>
      <Event data="upcoming" title="Past Events"/>
    </div>
  )
}

export default Events
