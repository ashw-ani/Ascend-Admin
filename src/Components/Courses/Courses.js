import SearchBar from "../UI/Search Bar/SearchBar";
import styles from "./Courses.module.css";
import CourseList from "./CourseList/CourseList";
import Button from "../UI/Search Bar/button";
import { useEffect, useState } from "react";

function Courses(props) {
  const [findUser, setFindUser] = useState();
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.userBody}>
        <SearchBar
          setFindUser={setFindUser}
          placeholderText="Search for the course"
        />
        <Button onClick={onSubmitHandler} text="Search" />
      </div>
      <div className={styles.courseList}>
        <CourseList />
      </div>
    </div>
  );
}

export default Courses;
