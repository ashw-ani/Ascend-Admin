import React, { useState } from "react";
import styles from "./EditingCard.module.css";
import DatePicker from "react-datepicker";
import UpdateHabit from "../../../api/UpdateHabit";

function EditHabit(props) {
  const [formData, setFormData] = useState(props.editHabitData);
  const [scheduleTime, setScheduleTime] = useState(
    new Date(formData.displayFrom)
  );

  const scheduleTimeChangeHandler = (date) => {
    setScheduleTime(date);
    setFormData((prevData) => {
      return { ...prevData, displayFrom: scheduleTime.getTime() };
    });
  };
  const onSubmitHandler = async () => {
    await UpdateHabit(formData);
    props.cancelEditHandler();
  };
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

  return (
    <div className={styles.editHabitBody}>
      <div className={styles.habitsCreateTitle}>
        <label>Title : </label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
        ></input>
      </div>
      <div className={styles.habitsCreateTitle}>
        <label>Schedule From : </label>
        <DatePicker
          selected={scheduleTime}
          onChange={scheduleTimeChangeHandler}
          showTimeSelect
          timeFormat="HH:mm"
          //   className={styles.datePickerInput}
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
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
        <button onClick={onSubmitHandler}>Save</button>
      </div>
    </div>
  );
}

export default EditHabit;
