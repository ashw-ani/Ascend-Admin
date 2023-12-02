import React, { useEffect, useState } from "react";
import styles from "./CourseList.module.css";
import getCourses from "../../../api/getCourses";

export default function CourseList(props) {
  const [courseData, setCourseData] = useState();
  //   const [page, setPage] = useState(1);

  useEffect(() => {
    const collectCourse = async () => {
      //   console.log(props.filterTier);
      const Data = await getCourses(`${props.filterTier}`);
      //   console.log("incoming data", Data);
      setCourseData(Data);
    };
    collectCourse();
  }, [props.filterTier]);
  return (
    <div className={styles.users}>
      <table className={styles.customers} width="100%">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            {/* <th>Phone</th>
            <th>Joining Date</th> */}
          </tr>
        </thead>
        <tbody>
          {courseData?.map((item) => (
            <tr key={item._id}>
              <td className={styles.tableColumn}>{item.course_id}</td>
              <td className={styles.tableColumn}>{item.name}</td>
              {/* <td className={styles.tableColumn}>{item.phone}</td>
              <td className={styles.tableColumn}>{item.joiningDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
