import React, { useEffect, useState } from "react";
import styles from "./Habits.module.css";
import AddHabits from "../../api/AddHabits";
import GetHabits from "../../api/GetHabits";

function Habits() {
  const [formData, setFormData] = useState({
    title: "",
    frequency: {
      type: "",
    },
  });
  const [habits, setHabits] = useState();
  const [refresh,setRefresh] = useState(false);
  useEffect(() => {
    const getHabitData = async () => {
      const habitData = await GetHabits();
      setHabits(habitData);
    };
    getHabitData();
  }, [refresh]);

  const handleChange = (event) => {
    if (event.target.name === "freqType") {
      const freq = {
        type: event.target.value,
      };
      setFormData((prevData) => {
        return { ...prevData, frequency: freq };
      });
    } else {
      setFormData((prevData) => {
        return { ...prevData, [event.target.name]: event.target.value };
      });
    }
  };

  const onSubmitHandler = async () => {
    await AddHabits(formData);
    setRefresh(!refresh);
  };
  return (
    <div className={styles.habitsPage}>
      <div className={styles.habitsCreate}>
        <div className={styles.habitCreateHeader}>Add Habit</div>
        <div className={styles.habitsCreateTitle}>
          <label>Title : </label>
          <input name="title" onChange={handleChange}></input>
        </div>
        <div className={styles.dropdown}>
          <label htmlFor="dropdownSelect">Select a Frequency : </label>
          <select
            id="dropdownSelect"
            value={formData.frequency.type}
            name="freqType"
            onChange={handleChange}
          >
            <option value="">Type</option>
            <option value="Daily">Daily</option>
            <option value="WeekDay">WeekDay</option>
            <option value="WeekEnd">WeekEnd</option>
          </select>
        </div>
        <div className={styles.addHabitsButtons}>
          <button onClick={onSubmitHandler}>Add Habit</button>
        </div>
      </div>
      <div className={styles.showHabits}>
        <div className={styles.habitCreateHeader}>Habits</div>
        {habits !== undefined &&
          habits.map((eachHabit) => {
            return <div className={styles.eachHabitDiv}>{eachHabit.title}</div>;
          })}
      </div>
    </div>
  );
}

export default Habits;
