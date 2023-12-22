import React from "react";
import styles from "./editScreen.module.css";
import ImageUploader from "../imageUploader";

function EditScreen(props) {
  return (
    <div className={styles.editScreenWrapper}>
      <div className={styles.editScreenBlur}>
        <div className={styles.editScreenCard}>
          <div className={styles.editScreenCardHeader}>Edit Team</div>
          <div className={styles.editScreenCardBody}>
            <div className={styles.teamImage}>
              <img src={props.logo} alt="team logo" />
            </div>
            <div className={styles.teamName}>Team Name <input value={props.name}/></div>
            <div className={styles.points}>Points <input value={props.points}/></div>
            <div className={styles.logoChange}>
              <ImageUploader />
            </div>
          </div>
          <div className={styles.editDetails}>
            <button>Edit Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditScreen;
