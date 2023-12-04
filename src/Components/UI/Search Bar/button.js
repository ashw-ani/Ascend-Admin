import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as Loader } from "../../../assets/signInButton.svg";

const Button = (props) => {
  const { onClick, text, loading } = props;
  return (
    <div className={styles.submitbtn}>
      <button onClick={onClick} disabled={loading}>
        {!loading ? text : <Loader className={styles.spinner} />}
      </button>
    </div>
  );
};

export default Button;
