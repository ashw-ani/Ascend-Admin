import React from "react";
import styles from "./Event.module.css";

function Cards(props) {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventImage}>
        <img src={props.Event.image} alt="event img" />
      </div>
      <div className={styles.eventName}>
        <span>{props.Event.name}</span>
      </div>
      <div className={styles.startTime}>
        <span>{props.Event.startTime}</span>
      </div>
      <div className={styles.endTime}>
        <span>{props.Event.endTime}</span>
      </div>
      <div className={styles.description}>
        <span>{props.Event.description}</span>
      </div>
    </div>
  );
}

export default Cards;
