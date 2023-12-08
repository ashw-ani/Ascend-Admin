import SearchBar from "../UI/Search Bar/SearchBar";
import styles from "./Courses.module.css";
import CourseList from "./CourseList/CourseList";
import Button from "../UI/Search Bar/button";
import { useEffect, useState } from "react";
import Actions from "../UI/Actions/Actions";
import ActionButton from "../UI/Actions/ActionButton/ActionButton";
import Modal from "../UI/modal/Modal";
import NewUserCard from "../Users/addNewUser/NewUserCard";

function Courses(props) {
  const [findCourse, setFindCourse] = useState("");
  const [filterTier, setFilerTier] = useState("");
  const [search, setSearch] = useState(false);
  const [addCourseCard, setAddCourseCard] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSearch((prev) => !prev);
  };

  const filterTierhandler = (event) => {
    setFilerTier(event.target.getAttribute("name"));
    // console.log(filterTier);
  };
  const cancelButtonHandler = () => {
    setAddCourseCard(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.userBody}>
        <SearchBar
          setFindUser={setFindCourse}
          placeholderText="Search for the course"
        />

        <Button onClick={onSubmitHandler} text="Search" />
        <Button
          onClick={() => {
            setAddCourseCard((prev) => !prev);
          }}
          className={styles.addnew}
          text="+"
        />
      </div>
      {addCourseCard && <NewUserCard title="Add Course" type="courses" />}
      <Actions>
        <ActionButton name="Silver" onClick={filterTierhandler}>
          Silver
        </ActionButton>
        <ActionButton name="Gold" onClick={filterTierhandler}>
          Gold
        </ActionButton>
        <ActionButton name="Platinum" onClick={filterTierhandler}>
          Platinum
        </ActionButton>
        <ActionButton name="Diamond" onClick={filterTierhandler}>
          Diamond
        </ActionButton>
        <ActionButton name="" onClick={filterTierhandler}>
          All
        </ActionButton>
      </Actions>
      <div className={styles.courseList}>
        <CourseList
          search={search}
          searchText={findCourse}
          filterTier={filterTier}
        />
      </div>
    </div>
  );
}

export default Courses;
