import { useEffect, useState } from "react";
import styles from "./Event.module.css";
import EventCard from "../Event/Cards";
import GetEvents from "../../../api/GetEvents";
import EditScreen from "../../Teams/EditScreen/editScreen";

const Events = (props) => {
  const [events, setEvents] = useState(null);
  const [addEventDivWrapper, setAddEventDivWrapper] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      const renderEvent = props.data;
      const event = await GetEvents();
      // console.log("hello from events js",events);
      setEvents(event[renderEvent]);
      
    };
    fetchEvents();
  }, []);
  const addEventHandler = () => {
    setAddEventDivWrapper(true);
  };
  const cancelEventHandler = () => {

    setAddEventDivWrapper(false);
  };
  return (
    <div className={styles.events}>
     {addEventDivWrapper && (
        <EditScreen
          cancelEventHandler={cancelEventHandler}
          title={"Add Event"}
          nameEditField={"Event Name"}
          secondEditField={"Description"}
        />
      )}
      {events && (
        <div className={styles.groupevents}>
          <div className={styles.eventHeader}>
            <div className={styles.eventheading}>
              <h1>{props.title}</h1>
            </div>
           {props.title==="On going Events" ? <div className={styles.eventAddButtonDiv}>
              <button onClick={addEventHandler}>Add Event</button>
            </div>:""}
          </div>
          <div className={styles.cardWrapper}>
            {events.map((event) => (
              <EventCard
              _id={event._id}
                name={event.name}
                description={event.description}
                joiningLink={event.link}
                image={event.image}
                startTime={event.startTime}
                endTime={event.endTime}
                setExpandEvent={addEventHandler}
                // buttontext={"Join Now"}
              ></EventCard>
            ))}
          </div>
        </div>
      )}
      {/* <div className={styles.groupevents}>
        <h1 className={styles.eventheading}>Upcoming Events</h1>
        <EventCard name={events}></EventCard>
      </div> */}
    </div>
  );
};
export default Events;
