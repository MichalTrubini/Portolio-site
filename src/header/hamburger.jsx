import styles from "./hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div className={styles.hamburgerContainer} onClick={props.onClick}>
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
      <div className={styles.hamburger}></div>
    </div>
  );
};

export default Hamburger;
