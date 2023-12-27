import React, { useState } from "react";
import styles from "./EditingCard.module.css";
import { GiCancel } from "react-icons/gi";
import EditEvent from "./EditEvent";


function EditingCard(props) {
  const cancelEditHandler = () => {
    props.setEditPage(false);
  };

  return (
    <div className={styles.cardBlurWrapper}>
      <div className={styles.editingCard}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderHeading}>{props.heading}</div>
          <div onClick={cancelEditHandler} className={styles.cardHeaderCancel}>
            <GiCancel />
          </div>
        </div>
        <div className={styles.cardBody}>
          {props.heading === "Edit Event" && (
           <EditEvent data = {props.data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EditingCard;
