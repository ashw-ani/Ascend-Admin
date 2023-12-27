import React, { useState } from "react";
import styles from "./Events.module.css";
import Event from "./Event/Event";
import EditingCard from "../UI/Editing Page/EditingCard";

function Events(props) {
  const [editPage, setEditPage] = useState(false);
  const [editPageData,setEditPageData] = useState();
  const setEditPageHandler = (eachEvent) => {
    setEditPage(true);
    setEditPageData(eachEvent);
  };
  return (
    <>
      {editPage && <EditingCard setEditPage={setEditPage} heading={'Edit Event'} data={editPageData} />}
      <div className={styles.eventsPage}>
        <Event
          setEditPage={setEditPageHandler}
          data="ongoing"
          title="On going Events"
        />
        <Event
          setEditPage={setEditPageHandler}
          data="upcoming"
          title="Upcoming Events"
        />
        <Event
          setEditPage={setEditPageHandler}
          data="upcoming"
          title="Past Events"
        />
      </div>
    </>
  );
}

export default Events;
