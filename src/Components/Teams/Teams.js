import React, { useState } from "react";
import ImageUploader from "./imageUploader";
import style from "./Teams.module.css";
import AddTeams from "../../api/addTeams";

function Teams() {
  const [newTeam, setNewTeam] = useState();
  const [addTeamClicked,setAddTeamClicked] = useState(false);
  const onChangeTeamHandler = (event) => {
    setNewTeam({name:event.target.value});
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
    setAddTeamClicked(true);
    const imgData = await imageUploadHandler(acceptedFiles[0]);
    const {display_url} = imgData;
    const logo = display_url;
    setNewTeam({
        ...newTeam,
        logo,
        points:0
    });
    setAddTeamClicked(false);
  };
  const teamAddHandler = async () => {
    console.log(newTeam);
    const res = await AddTeams(newTeam);
    console.log("response from teams",res);
  };

  return (
    <div className={style.teamForm}>
      <div className={style.teamNameInput}>
        <input
          placeholder="Enter the Team name"
          name="newTeam"
          onChange={onChangeTeamHandler}
        />
      </div>
      <ImageUploader onImageUpload={handleImageUpload} />
      <div className={style.teamSubmit}>
        <button onClick={teamAddHandler}>Add Team</button>
      </div>
    </div>
  );
}

export default Teams;
