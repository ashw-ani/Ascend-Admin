import SearchBar from "../UI/Search Bar/SearchBar";
import styles from "./Courses.module.css";
import CourseList from "./CourseList/CourseList";
import Button from "../UI/Search Bar/button";
import { useEffect, useState } from "react";
import Actions from "../UI/Actions/Actions";
import ActionButton from "../UI/Actions/ActionButton/ActionButton";

function Courses(props) {
  const [findUser, setFindUser] = useState();
  const [filterTier, setFilerTier] = useState("");
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const filterTierhandler = (event) => {
    setFilerTier(event.target.getAttribute("name"));
    // console.log(filterTier);
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
        <CourseList filterTier={filterTier} />
      </div>
    </div>
  );
}

export default Courses;
