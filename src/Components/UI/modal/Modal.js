import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick}></div>
      <div className={styles.modal}>{props.chidren}</div>
    </>
  );
};
export default Modal;
