import React, { useEffect, useState } from "react";
import styles from "./editScreen.module.css";
import ImageUploader from "../imageUploader";
import UpdateTeam from "../../../api/updateTeam";
import noImage from "../../../assets/no-image.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddEvents from "../../../api/AddEvent";

function EditScreen(props) {
  const [editTeamData, setEditTeamData] = useState({
    _id: props._id,
    name: props.name,
    points: props.points,
    logo: props.logo,
  });
  const [startTime, setSelectedStartDate] = useState(new Date());
  const [endTime, setSelectedEndDate] = useState(new Date());
  const [addEventData, setAddEventData] = useState({});

  // for date and time

  const [isValid, setIsValid] = useState(true);
  const validateDateRange = (start, end) => {
    setIsValid(end > start);
  };
  const startDateChangeHandler = (date) => {
    setSelectedStartDate(date);
    validateDateRange(date, endTime);
  };
  const endDateChangeHandler = (date) => {
    setSelectedEndDate(date);
    validateDateRange(startTime, date);
  };

  const addEventChangeHandler = (event) => {
    setAddEventData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
        startTime,
        endTime,
      };
    });
  };
  const teamChangeHandler = (event) => {
    setEditTeamData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
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
    const logo_val = display_url;
    if (props.title === "Add Events") {
      setEditTeamData((prevData) => {
        return { ...prevData, logo: logo_val };
      });
    } else {
      setAddEventData((prevData) => {
        return { ...prevData, image: logo_val };
      });
    }
  };

  const saveDetailsHandler = async () => {
    await UpdateTeam(editTeamData);

    window.location.reload();
  };
  const saveEventHandler = async () => {
    await AddEvents(addEventData);
    window.location.reload();
  };
  return (
    <div className={styles.editScreenWrapper}>
      <div className={styles.editScreenBlur}>
        <div className={styles.editScreenCard}>
          <div className={styles.editScreenCardHeader}>
            <div className={styles.heading}>{props.title}</div>
            <div className={styles.headingCrossButton}>
              <button
                onClick={
                  props.title === "Add Teams"
                    ? props.crossButtonClickHandler
                    : props.cancelEventHandler
                }
              >
                X
              </button>
            </div>
          </div>
          <div className={styles.editScreenCardBody}>
            <div className={styles.fullTeamDetails}>
              <div className={styles.teamDetailsWrapper}>
                <div className={styles.teamImageDivWrapper}>
                  <div className={styles.teamImage}>
                    <img
                      src={props.logo ? props.logo : noImage}
                      alt="team logo"
                    />
                  </div>
                </div>
                <div className={styles.teamNameWrapper}>
                  <div className={styles.teamName}>
                    {props.nameEditField}{" "}
                    <input
                      name={"name"}
                      onChange={
                        props.title === "Add Teams"
                          ? teamChangeHandler
                          : addEventChangeHandler
                      }
                      value={
                        props.title === "Add Teams"
                          ? editTeamData.name
                          : addEventData.name
                      }
                    />
                  </div>
                  <div className={styles.teamPoints}>
                    {props.secondEditField}{" "}
                    <input
                      name={
                        props.title === "Add Title" ? "points" : "description"
                      }
                      onChange={
                        props.title === "Add Teams"
                          ? teamChangeHandler
                          : addEventChangeHandler
                      }
                      value={
                        props.title === "Add Teams"
                          ? editTeamData.points
                          : addEventData.description
                      }
                    />
                  </div>
                </div>
              </div>
              {props.title === "Add Teams" ? (
                <div className={styles.teamMemberDetails}>
                  <div className={styles.totalTally}>
                    Total number of members = 56
                    <br />
                    <span>*[ To create, delete, edit users in the team,go</span>
                    <span>to Users and search through team name.]</span>
                  </div>
                </div>
              ) : (
                <div className={styles.dateTimeDivWrapper}>
                  <div className={styles.dateTimeDiv}>
                    <label>Start Date:</label>
                    <DatePicker
                      selected={startTime}
                      onChange={startDateChangeHandler}
                      showTimeSelect
                      timeFormat="HH:mm"
                      className={styles.datePickerInput}
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                  <div className={styles.dateTimeDiv}>
                    <label>End Date:</label>
                    <DatePicker
                      className={styles.datePickerInput}
                      selected={endTime}
                      onChange={endDateChangeHandler}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                  <div className={styles.displayDate}>
                    <div>Start Date: {startTime.toDateString()}</div>
                    <div>End Date: {endTime.toDateString()}</div>
                  </div>
                  <div className={styles.displayDate}>
                    <div>Start Time: {startTime.toLocaleTimeString()}</div>
                    <div>End Time: {endTime.toLocaleTimeString()}</div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.logoChange}>
              <ImageUploader
                title={props.title}
                onImageUpload={handleImageUpload}
              />
            </div>
          </div>
          {props.title === "Add Teams" ? (
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
          ) : (
            <>
              <div className={styles.addMeetLink}>
                <label>Redirect Link:</label>
                <div className={styles.linkInput}>
                  <input
                    name="link"
                    value={addEventData.link}
                    onChange={addEventChangeHandler}
                  ></input>
                </div>
              </div>
              <div className={styles.addEventButton}>
                <button onClick={saveEventHandler}>Save Event</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditScreen;
