
import DeleteEvent from "../../../api/DeleteEvent";
import styles from "./Event.module.css";

const EventCard = (props) => {
  const deleteEventHandler = async (_id)=>{
    await DeleteEvent(_id);
    window.location.reload();
  }
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <img src={`${props.image}`} alt="event"/>
      </div>
      <div className={styles.heading}>{props.name}</div>
      <div className={styles.description}>{props.description}</div>

      <div
        className={styles.button}
      >
        <button>Expand</button>
        <button onClick={()=>deleteEventHandler(props._id)}>Delete</button>
      </div>
    </div>
  );
};
export default EventCard;
