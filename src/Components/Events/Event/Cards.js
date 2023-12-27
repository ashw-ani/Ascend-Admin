import DeleteEvent from "../../../api/DeleteEvent";
import styles from "./Event.module.css";

import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import dateFormatter from "../../UI/date";
import { useState } from "react";

const EventCard = (props) => {

  const deleteEventHandler = async (_id) => {
    await DeleteEvent(_id);
    window.location.reload();
  };
  const editEventHandler = async (eachEvent) =>{
    props.setEditPage(eachEvent);
  }

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={`${props.image}`} alt="event" />
      </div>
      <div className={styles.heading}>{props.name}</div>
      <div className={styles.description}>
        {dateFormatter(props.startTime, props.endTime).day}
      </div>
      <div className={styles.description}>
        {dateFormatter(props.startTime, props.endTime).time}
      </div>

      <div className={styles.button}>
        <button onClick={() => editEventHandler(props)}>
          <CiEdit />
        </button>

        <button onClick={() => deleteEventHandler(props._id)}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};
export default EventCard;
