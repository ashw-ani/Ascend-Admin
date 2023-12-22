import styles from "./Event.module.css";
import Cards from './Cards'
import { useEffect, useState } from "react";
import GetEvents from "../../../api/GetEvents";

function Event(props) {
  return (
    <div className={styles.eventList}>
      <div className={styles.eventHeader}>{props.title}</div>
      <Cards Event={props.name} />
    </div>
  );
}

export default Event;
