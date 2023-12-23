import styles from "./Event.module.css";
import Cards from "./Cards";

function Event(props) {
  return (
    <div className={styles.eventList}>
      <div className={styles.eventHeader}>
        <div className={styles.headerTitle}>{props.title}</div>
        <div className={styles.headerAddEvents}>
          <button>Add Event</button>
        </div>
      </div>
      <div className={styles.eventCards}>
        <Cards Event={props.name} />
      </div>
    </div>
  );
}

export default Event;
