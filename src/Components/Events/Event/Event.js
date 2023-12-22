import React from "react";
import styles from "./Event.module.css";

function Event(props) {
  return (
    <div className={styles.eventList}>
      <div className={styles.eventHeader}>{props.title}</div>
      
    </div>
  );
}

export default Event;
