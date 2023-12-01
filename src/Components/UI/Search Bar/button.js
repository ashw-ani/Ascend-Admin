import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";

const Button = ({ text, loading }) => {
  return (
    <div className={styles.submitbtn}>
    <button  disabled={loading}>
      {!loading ? text : <Loader className={styles.spinner} />}
    </button>
    </div>
  );
};

export default Button;
