import React, { useEffect, useState } from "react";
import styles from "./editScreen.module.css";
import ImageUploader from "../imageUploader";
import UpdateTeam from "../../../api/updateTeam";

function EditScreen(props) {
  const [editTeamData,setEditTeamData] = useState({
    _id:props._id,
    name:props.name,
    points:props.points,
    logo:props.logo
  });
 
  const teamChangeHandler = (event)=>{
    setEditTeamData((prevData)=>{
      return {...prevData,[event.target.name]:event.target.value}
    });
  }

  const saveDetailsHandler = async () => {
    const res = await UpdateTeam(editTeamData);
    console.log(res);
    window.location.reload();
  };
  return (
    <div className={styles.editScreenWrapper}>
      <div className={styles.editScreenBlur}>
        <div className={styles.editScreenCard}>
          <div className={styles.editScreenCardHeader}>
            <div className={styles.heading}>Edit Team</div>
            <div className={styles.headingCrossButton}>
              <button onClick={props.crossButtonClickHandler}>X</button>
            </div>
          </div>
          <div className={styles.editScreenCardBody}>
            <div className={styles.fullTeamDetails}>
              <div className={styles.teamDetailsWrapper}>
                <div className={styles.teamImageDivWrapper}>
                  <div className={styles.teamImage}>
                    <img src={props.logo} alt="team logo" />
                  </div>
                </div>
                <div className={styles.teamNameWrapper}>
                  <div className={styles.teamName}>
                    Team Name <input name="name" onChange={teamChangeHandler} value={editTeamData.name} />
                  </div>
                  <div className={styles.teamPoints}>
                    Points <input name="points" onChange={teamChangeHandler} value={editTeamData.points} />
                  </div>
                </div>
              </div>
              <div className={styles.teamMemberDetails}>
                <div className={styles.totalTally}>
                  Total number of members = 56
                  <br />
                  <span>*[ To create, delete, edit users in the team,go</span>
                  <span>to Users and search through team name.]</span>
                </div>
              </div>
            </div>

            <div className={styles.logoChange}>
              <ImageUploader />
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.editbutton}>
              <button
                onClick={props.deleteCourseButtonHandler}
                style={{ backgroundColor: "red" }}
              >
                Delete Team
              </button>
            </div>
            <div className={styles.editbutton}>
              <button onClick={saveDetailsHandler}>Save Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditScreen;
