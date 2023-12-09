import styles from "./Body.module.css";
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Courses from "../Courses/Courses";
import Login from "../Login/Login";

import { useMyContext } from "../../Context/PanelContext";
import Users from "../Users/Users";
import Dashboard from "../Dashboard/Dashboard";

const Body = (props) => {
  const { showPaneltouch, updateShowPaneltouch } = useMyContext();

  const { isVisible, toggleVisibility } = useMyContext();

  const hideSidePanelHandler = () => {
    // Call toggleVisibility to toggle the visibility state
    updateShowPaneltouch(false);
    toggleVisibility();
    console.log("isVisible ", isVisible);
  };

  return (
    <div className={styles.body}>
      {showPaneltouch && (
        <div
          onClick={hideSidePanelHandler}
          className={styles.containerWithSidePanel}
        ></div>
      )}
      <Switch>
        <Route path="/" exact>
          <Header>Dashboard</Header>
          <Dashboard />
        </Route>
        {/* <Route path="/dashboard" exact>
          <Header>Dashboard</Header>
          <Dashboard />
        </Route> */}
        <Route path="/users" exact>
          <Header>Users</Header>
          <Users />
        </Route>
        <Route path="/courses" exact>
          <Header>Courses</Header>
          <Courses />
        </Route>
      </Switch>
    </div>
  );
};
export default Body;
