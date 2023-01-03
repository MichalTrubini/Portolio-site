import styles from "./hamburger.module.css";

const Hamburger = (props) => {
  return (
    <div className={styles.container}>
      <h1 className="mainHeader">
        ttd<span className="mainHeader__light">.</span>
      </h1>
      <div className={styles.hamburgerContainer} onClick={props.onClick}>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </div>
    </div>
  );
};

export default Hamburger;
