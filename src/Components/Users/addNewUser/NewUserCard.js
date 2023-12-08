import { useState } from "react";
import styles from "./NewUserCard.module.css";
import noimage from "../../../assets/no-image.svg";
import CreateUser from "../../../api/createUser";
import AddCourse from "../../../api/addCourses";
import DeleteCourse from "../../../api/deleteCourse";

export default function NewUserCard(props) {
  const [cardData, setCardData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    email: "",
    phone: "",
    achievementLevel: "",
    teamName: "",
    tier: "",
    imgUrl: "",
    joiningDate: "",
    endDate: "",
    city: "",
    niche: "",
  });
  const [courseData, setCourseData] = useState({
    course_id: "",
    tier: "",
    position: "",
  });
  const formChangeHandler = (event) => {
    setCardData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
    console.log(cardData);
  };
  const closeButtonHandler = () => {
    if (props.type === "deleteCard") {
      props.cancelButtonHandler();
    } else window.location.reload();
  };
  const deleteButtonHandler = async () => {
    await DeleteCourse(props._id);
    props.cancelButtonHandler();
    window.location.reload();
  };
  const profileAddHandler = async () => {
    cardData.fullName = cardData.firstName + " " + cardData.lastName;
    await CreateUser(cardData);
    window.location.reload();
  };
  const courseSubmitHandler = async (event) => {
    event.preventDefault();
    await AddCourse(courseData);
  };
  const formCourseChangeHandler = (event) => {
    setCourseData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  return (
    <div
      className={
        props.type === "deleteCard"
          ? styles.cardWrapper
          : styles.deleteCardWrapper
      }
    >
      <div className={styles.Card}>
        <div className={styles.Header}>
          <h3 className={styles.cardEdit}>{props.title}</h3>
          <button onClick={closeButtonHandler} className={styles.closeButton}>
            X
          </button>
        </div>
        {props.type === "deleteCard" ? (
          <div className={styles.deleteCardWrapper}>
            <div className={styles.deleteCard}>
              Are you Sure you want to delete the Course?
            </div>
            <div className={styles.deleteButtons}>
              <button
                onClick={deleteButtonHandler}
                className={styles.deleteButtonRed}
              >
                Confirm
              </button>
              <button
                onClick={props.cancelButtonHandler}
                className={styles.deleteButtonGrey}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : props.type === "users" ? (
          <div className={styles.cardBody}>
            <div className={styles.cardBodyDiv}>
              <div className={styles.cardDataImage}>
                <img
                  className={styles.cardImage}
                  alt="Profile Pic"
                  src={cardData.imgUrl ? cardData.imgUrl : noimage}
                ></img>
              </div>
              <div className={styles.userDetails}>
                <span>First Name</span>
                <input
                  name="firstName"
                  onChange={formChangeHandler}
                  value={cardData.firstName}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Last Name</span>
                <input
                  name="lastName"
                  onChange={formChangeHandler}
                  value={cardData.lastName}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Full Name</span>
                <input
                  disabled="true"
                  name="fullName"
                  onChange={formChangeHandler}
                  value={cardData.fullName}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Email</span>
                <input
                  name="email"
                  onChange={formChangeHandler}
                  value={cardData.email}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Phone</span>
                <input
                  name="phone"
                  onChange={formChangeHandler}
                  value={cardData.phone}
                ></input>
              </div>
            </div>
            <div className={styles.profileBodyDiv}>
              <div className={styles.userDetails}>
                <span>Achievement Level</span>
                <input
                  name="achievementLevel"
                  onChange={formChangeHandler}
                  value={cardData.achievementLevel}
                ></input>
              </div>

              <div className={styles.userDetails}>
                <span>Team Name</span>
                <input
                  name="teamName"
                  onChange={formChangeHandler}
                  value={cardData.teamName}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Tier</span>
                <input
                  name="tier"
                  onChange={formChangeHandler}
                  value={cardData.tier}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Image URL</span>
                <input
                  name="imgUrl"
                  onChange={formChangeHandler}
                  value={cardData.imgUrl}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Joining Date</span>
                <input
                  name="joiningDate"
                  onChange={formChangeHandler}
                  value={cardData.joiningDate}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>End Date</span>
                <input
                  name="endDate"
                  onChange={formChangeHandler}
                  value={cardData.endDate}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>City</span>
                <input
                  name="city"
                  onChange={formChangeHandler}
                  value={cardData.city}
                ></input>
              </div>
              <div className={styles.userDetails}>
                <span>Niche</span>
                <input
                  name="niche"
                  onChange={formChangeHandler}
                  value={cardData.niche}
                ></input>
              </div>
              <div className={styles.AddButtonDiv}>
                <button
                  onClick={profileAddHandler}
                  className={styles.AddButton}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={courseSubmitHandler} className={styles.courseForm}>
            <div className={styles.courseDiv}>
              <div className={styles.courseAdd}>
                <div className={styles.courseParameter}>
                  <span className={styles.courseParameterElement}>
                    Course Id{" "}
                  </span>
                  <input
                    name="course_id"
                    value={courseData.course_id}
                    onChange={formCourseChangeHandler}
                    required
                  ></input>
                </div>
                <div className={styles.courseParameter}>
                  <span className={styles.courseParameterElement}>
                    Course Tier{" "}
                  </span>
                  <input
                    name="tier"
                    value={courseData.tier}
                    onChange={formCourseChangeHandler}
                    required
                  ></input>
                </div>
                <div className={styles.courseParameter}>
                  <span className={styles.courseParameterElement}>
                    Course Position{" "}
                  </span>
                  <input
                    name="position"
                    value={courseData.position}
                    onChange={formCourseChangeHandler}
                    required
                  ></input>
                </div>
              </div>
              <button className={styles.addButton}>Add</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
