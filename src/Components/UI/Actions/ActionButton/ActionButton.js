import styles from "./ActionButton.module.css";

const ActionButton = (props) => {
  return (
    <div
      className={styles.actionbutton}
      name={props.name}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default ActionButton;
