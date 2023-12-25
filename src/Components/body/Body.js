import styles from "./Body.module.css";
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Courses from "../Courses/Courses";
import Login from "../Login/Login";
import { useMyContext } from "../../Context/PanelContext";
import Users from "../Users/Users";
import Dashboard from "../Dashboard/Dashboard";
import Teams from "../Teams/Teams";
import Events from "../Events/Events";
import { useEffect, useState } from "react";
import GetEvents from "../../api/GetEvents";
import Habbits from "../Habbits/Habbits";

const Body = (props) => {
  const { showPaneltouch, updateShowPaneltouch } = useMyContext();

  const { isVisible, toggleVisibility } = useMyContext();
  

  const hideSidePanelHandler = () => {
    // Call toggleVisibility to toggle the visibility state
    updateShowPaneltouch(false);
    toggleVisibility();
    console.log("isVisible ", isVisible);
  };
  // const [allEvents,setAllEvents] = useState();
  
  // useEffect(()=>{
  //   const getEvents = async ()=>{
  //     const events = await GetEvents();
  //     console.log(events);
  //     setAllEvents(events);
  //   }
  //   getEvents();
  // },[])
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
        <Route path="/users" exact>
          <Header>Users</Header>
          <Users />
        </Route>
        <Route path="/courses" exact>
          <Header>Courses</Header>
          <Courses />
        </Route>
        <Route path="/teams" exact>
          <Header>Teams</Header>
          <Teams />
        </Route>
        <Route path="/events" exact>
          <Header>Events</Header>
          <Events  />
        </Route>
        <Route path="/habbits" exact>
          <Header>Habbits</Header>
          <Habbits />
        </Route>
      </Switch>
    </div>
  );
};
export default Body;
