import styles from "./Sidepanel.module.css";
import SidepanelItem from "./sidepanelitems/Sidepanelitem";
import { useState } from "react";
import logo from "../../assets/logo.jpeg";
import { MdDashboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { useMyContext } from "../../Context/PanelContext";
import { FaUsers } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { MdEmojiEvents } from "react-icons/md";
import { Si4Chan } from "react-icons/si";


const Sidepanel = (props) => {
  const [sideItemsWithMenu, setsideItemsWithMenu] = useState({});
  const [sideItemsWithoutMenu, setsideItemsWithoutMenu] = useState({});
  //for side panel context
  const { showPaneltouch, updateShowPaneltouch } = useMyContext();

  // const { isVisible } = useMyContext();
  const { toggleVisibility } = useMyContext();

  const navigation = useHistory();

  const onClickHam = () => {
    updateShowPaneltouch((prevState) => !prevState);
    toggleVisibility();
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const onClickDashboard = () => {
    navigation.push("/");
    console.log("return the props", props);
  };

  const withoutMenuItemsHandler = (event) => {
    const key = event.target.getAttribute("name");
    navigation.push(`/${key}`);
    setsideItemsWithMenu({});
    setsideItemsWithoutMenu({ [key]: !sideItemsWithoutMenu[key] });
  };

  return (
    <div
      className={`${styles.sidepanel} ${
        showPaneltouch ? " " : styles.inactive
      }`}
    >
      <div className={styles.hamburger_menu} onClick={onClickHam}>
        <div className={styles.ham}></div>
        <div className={styles.ham}></div>
        <div className={styles.ham}></div>
      </div>
      <div className={styles.sidepanelhead}>
        <img src={logo} alt="logo" className={styles.mainlogo} />
      </div>
      <div className={styles.sidepanelcontent}>
        <SidepanelItem
          class={sideItemsWithoutMenu.dashboard ? "active" : "inactive"}
          onclick={(event) => {
            onClickDashboard();
            withoutMenuItemsHandler(event);
          }}
          name={""}
        >
          <MdDashboard className={styles.sidepanelicons} />
          Dashboard
        </SidepanelItem>
        <SidepanelItem
          class={sideItemsWithMenu.Users ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"users"}
        >
          <FaUsers className={styles.sidepanelicons} name="Users" />
          Users
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithoutMenu.courses ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"courses"}
        >
          <SiBookstack className={styles.sidepanelicons} name={"courses"} />
          Courses
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithoutMenu.Teams ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"Teams"}
        >
          <PiMicrosoftTeamsLogo className={styles.sidepanelicons} name={"Teams"} />
          Teams
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithoutMenu.Events ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"Events"}
        >
          <MdEmojiEvents className={styles.sidepanelicons} name={"Events"} />
          Events
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithoutMenu.Habbits ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
          }}
          name={"Habbits"}
        >
          <Si4Chan className={styles.sidepanelicons} name={"Habits"} />
          Habbits
        </SidepanelItem>

        <SidepanelItem
          class={sideItemsWithoutMenu.logout ? "active" : "inactive"}
          onclick={(event) => {
            withoutMenuItemsHandler(event);
            handleLogout();
          }}
          name={"logout"}
        >
          <IoIosCloseCircle className={styles.sidepanelicons} />
          LogOut
        </SidepanelItem>
      </div>
    </div>
  );
};
export default Sidepanel;
