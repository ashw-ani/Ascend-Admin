import styles from "./Sidepanel.module.css";
import SidepanelItem from "./sidepanelitems/Sidepanelitem";
import Sidepanelsubitem from "./sidepanelsubitems/sidepanelsubitem";
import { useState } from "react";
import SidePanelState from "../../Context/SidePanelState";

// import logotext from "../../assets/logo4.png";
// import mainlogo from "../../assets/logo2.png";
import logo from "../../assets/logo.jpeg";

import { MdDashboard, MdLeaderboard } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { useHistory } from "react-router-dom";
import { useMyContext } from "../../Context/PanelContext";
import { FaUsers } from "react-icons/fa";

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

  const onClickDashboard = () => {
    navigation.push("/");
    console.log("return the props", props);
  };
  const onClickSubitem = (event) => {
    // console.log(event.target.getAttribute("name"));
    navigation.push(`/${event.target.getAttribute("name")}`);
  };

  const toggleSideitemHandler = (event) => {
    const key = event.target.getAttribute("name");
    // console.log("Hy from togglesideitemHandler ", sideItemsWithMenu[key]);

    setsideItemsWithMenu({ [key]: !sideItemsWithMenu[key] });
    setsideItemsWithoutMenu({});
    // console.log(sideItemsWithoutMenu);
  };

  const withoutMenuItemsHandler = (event) => {
    const key = event.target.getAttribute("name");
    navigation.push(`/${key}`);
    console.log("Hy from clicking", key, sideItemsWithoutMenu);
    setsideItemsWithMenu({});
    setsideItemsWithoutMenu({ [key]: !sideItemsWithoutMenu[key] });
    // console.log(sideItemsWithoutMenu);
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
        {/* <img src={mainlogo} alt="logo" className={styles.mainlogo} />
        <img src={logotext} alt="logo" className={styles.logotext} /> */}
      </div>
      <div className={styles.sidepanelcontent}>
        <SidepanelItem
          class={sideItemsWithoutMenu.dashboard ? "active" : "inactive"}
          onclick={(event) => {
            onClickDashboard();
            withoutMenuItemsHandler(event);
          }}
          name={"dashboard"}
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
      </div>
    </div>
  );
};
export default Sidepanel;
