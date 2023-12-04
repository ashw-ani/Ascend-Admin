import React, { useEffect, useState } from "react";
import styles from "./CourseList.module.css";
import getCourses from "../../../api/getCourses";
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";

export default function CourseList(props) {
  const [courseData, setCourseData] = useState({
    courses: null,
    noData: null,
  });
  const [loader, setLoader] = useState(false);

  //   const [page, setPage] = useState(1);

  useEffect(() => {
    const collectCourse = async () => {
      //   console.log(props.filterTier);
      setLoader(true);
      const Data = await getCourses(
        `${props.filterTier}`,
        `${props.searchText}`
      );
      //   console.log("incoming data", Data);
      setLoader(false);
      setCourseData(Data);
    };
    collectCourse();
  }, [props.filterTier, props.search]);

  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }

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
          {/* {courseData.noData ? <h1>No Data</h1> : ""} */}
          {courseData.courses?.map((item) => (
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
