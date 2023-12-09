import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import DashboardInfo from "../../api/dashboardInfo";
import { ReactComponent as Loader } from "../../assets/signInButton.svg";

function Dashboard() {
  const [dashboard, setDashboard] = useState();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      const dashboardData = await DashboardInfo();
      setDashboard(dashboardData);
      console.log(dashboardData);
      setLoader(false);
    };
    getData();
  }, []);
  if (loader) {
    return (
      <div className={styles.spinnerDiv}>
        <Loader className={styles.spinner} />
      </div>
    );
  }
  return (
    dashboard && (
      <div className={styles.DashboardBody}>
        <div className={styles.leftDiv}>
          <div className={styles.box2}>
            <div className={styles.headings}>Courses</div>
            <div className={styles.box2Body}>
              <div className={styles.box2BodyHeading}>
                <span>Number Of Courses</span>{" "}
                <span>{dashboard?.noOfCourses}</span>
              </div>
              <span className={styles.numberOfCoursesPerTier}>
                Number of Courses per Tier
                <span className={styles.tierCourse}>
                  <span>Silver</span>{" "}
                  <span>{dashboard.noOfCoursesPerTier.Silver}</span>
                </span>
                <span className={styles.tierCourse}>
                  <span>Gold</span>{" "}
                  <span>{dashboard.noOfCoursesPerTier.Gold}</span>
                </span>
                <span className={styles.tierCourse}>
                  <span>Platinum</span>{" "}
                  <span>{dashboard.noOfCoursesPerTier.Platinum}</span>
                </span>
                <span className={styles.tierCourse}>
                  <span>Diamond</span>{" "}
                  <span>{dashboard.noOfCoursesPerTier.Diamond}</span>
                </span>
              </span>
              {/* <span>{dashboard?.noOfUsersPerTeam.map((item)=>{
                    return <span>{item}</span>
                })}</span> */}
            </div>
          </div>
          <div className={styles.box1}>
          <div className={styles.headings}>Teams</div>
           <div className={styles.teamsWrapper}>
 
            <div className={styles.teams}>
                {dashboard.noOfUsersPerTeam.map((item)=>{
                    return <div className={styles.team}>
                        <span className={styles.teamName}>{item.teamName}</span>
                        <img src={item.teamLogo} className={styles.teamLogo}></img>
                    </div>
                })}
            </div>
           </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <div className={styles.box3}>
            <div className={styles.headings}>Users</div>
            <div className={styles.noOfUsersPerTierDiv}>
              <div className={styles.noOfUsersPerTeamHeading}>
                <span>Number Of Users </span>{" "}
                <span>{dashboard?.noOfUsers}</span>{" "}
              </div>
              <span className={styles.noOfUsersPerTier}>
                Number of Users per Tier
                <div className={styles.userPerTier}>
                  <span className={styles.usersPerTierName}>Silver</span>
                  <span className={styles.usersPerTierValue}>
                    {dashboard.noOfUsersPerTier.Silver}
                  </span>
                </div>
                <div className={styles.userPerTier}>
                  <span className={styles.usersPerTierName}>Gold</span>
                  <span className={styles.usersPerTierValue}>
                    {dashboard.noOfUsersPerTier.Gold}
                  </span>
                </div>
                <div className={styles.userPerTier}>
                  <span className={styles.usersPerTierName}>Platinum</span>
                  <span className={styles.usersPerTierValue}>
                    {dashboard.noOfUsersPerTier.Platinum}
                  </span>
                </div>
                <div className={styles.userPerTier}>
                  <span className={styles.usersPerTierName}>Diamond</span>
                  <span className={styles.usersPerTierValue}>
                    {dashboard.noOfUsersPerTier.Diamond}
                  </span>
                </div>
              </span>
              <span className={styles.noOfUsersPerTeam}>
                Number of Users per Team
                <span className={styles.noOfUsers}>
                  {dashboard.noOfUsersPerTeam.map((item) => {
                    return (
                      <div className={styles.usersPerTeam}>
                        <span>{item.teamName}</span>
                        <span>{item.count}</span>
                      </div>
                    );
                  })}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Dashboard;
