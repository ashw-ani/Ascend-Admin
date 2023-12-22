import React, { useEffect, useState } from "react";
import ImageUploader from "./imageUploader";
import styles from "./Teams.module.css";
import { CiEdit } from "react-icons/ci";
import AddTeams from "../../api/addTeams";
import FetchTeams from "../../api/fetchTeams";
import EditScreen from "./EditScreen/editScreen";

function Teams() {
  const [newTeam, setNewTeam] = useState();
  const [teams, setTeams] = useState();
  const [addTeamClicked, setAddTeamClicked] = useState(false);
  const [editTeamData, setEditTeamData] = useState();
  const [editDivWrapper, setEditDivWrapper] = useState(false);

  useEffect(() => {
    const setTeamsFunction = async () => {
      const teamData = await FetchTeams();
      setTeams(teamData.teams);
    };
    setTeamsFunction();
  }, [addTeamClicked]);

  const onChangeTeamHandler = (event) => {
    setNewTeam({ name: event.target.value });
  };
  const imageUploadHandler = async (img) => {
    const formData1 = new FormData();
    formData1.append("image", img);
    // console.log("hello from image handler ,", formData1.get("image"));

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=64e26b821a87b1e73115ba89dac737b1",
      {
        method: "POST",
        body: formData1,
      }
    );
    const result = await response.json();
    const imgData = {
      display_url: result.data.display_url,
      imgUrl: result.data.url,
    };
    return imgData;
  };
  const handleImageUpload = async (acceptedFiles) => {
    const imgData = await imageUploadHandler(acceptedFiles[0]);
    const { display_url } = imgData;
    const logo = display_url;
    setNewTeam({
      ...newTeam,
      logo,
      points: 0,
    });
  };
  const teamAddHandler = async () => {
    console.log(newTeam);
    await AddTeams(newTeam);
    setAddTeamClicked(!addTeamClicked);
  };
  const handleEditClick = async (team) => {
    setEditTeamData({
      name: team.name,
      points: team.points,
      logo: team.logo,
    });
    console.log(editDivWrapper);
    setEditDivWrapper(true);
  };

  return (
    <div className={styles.teamPage}>
     {editDivWrapper && <EditScreen name={editTeamData.name} logo = {editTeamData.logo} points={editTeamData.points} />}
      <div className={styles.teamForm}>
        <div className={styles.teamNameInput}>
          <input
            placeholder="Enter the Team name"
            name="newTeam"
            onChange={onChangeTeamHandler}
          />
        </div>
        <ImageUploader onImageUpload={handleImageUpload} />
        <div className={styles.teamSubmit}>
          <button onClick={teamAddHandler}>Add Team</button>
        </div>
      </div>
      <div className={styles.teamNames}>
        <div className={styles.teamHeader}>
          <div className={styles.teamHeaderName}>Teams</div>
          <div className={styles.otherHeaders}>
            <div className={styles.pointHeader}>Points</div>
            <div className={styles.logoHeader}>logos</div>
            <div className={styles.editHeader}>Edit Teams</div>
          </div>
        </div>
        {teams?.map((team) => {
          return (
            <div className={styles.teamListWrapper}>
  

              <div className={styles.teamList}>
                <div className={styles.teamName}>{team.name}</div>
                <div className={styles.teamDetails}>
                  <div className={styles.pointsDetails}>{team.points}</div>
                  <div className={styles.logoDetails}>
                    <img src={team.logo} alt="team_logo" />
                  </div>
                  <div className={styles.editDetails}>
                    <button onClick={() => handleEditClick(team)}>
                      <CiEdit />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Teams;
