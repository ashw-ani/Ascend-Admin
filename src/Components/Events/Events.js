import React from 'react'
import styles from './Events.module.css'
import Event from './Event/Event'

function Events() {
  return (
    <div className={styles.eventsPage}>
      <Event title="On going Events" />
      <Event title="Upcoming Events"/>
      <Event title="Past Events"/>
    </div>
  )
}

export default Events
