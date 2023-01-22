import styles from "./menu.module.css";
import { Link } from "react-scroll";

const Menu = (props) => {
  const close = () => {
    if (window.innerWidth < 769) {
      props.onClickClose();
    }
  };

  return (
    <nav className={`${styles.nav}`}>
      <ul className={styles.navList}>
        <Link activeClass={styles.active} to="heroID" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={styles.navListItem}
            onClick={() => {
              close();
            }}
          >
            <span className={styles.number}>01</span>home
          </li>
        </Link>
        <Link activeClass={styles.active} to="skillsID" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={styles.navListItem}
            onClick={() => {
              close();
            }}
          >
            <span className={styles.number}>02</span>skills
          </li>
        </Link>
        <Link activeClass={styles.active} to="portfolioID" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={styles.navListItem}
            onClick={() => {
              close();
            }}
          >
            <span className={styles.number}>03</span>portfolio
          </li>
        </Link>
        <Link activeClass={styles.active} to="contactID" spy={true} smooth={true} offset={-100} duration={500}>
          <li
            className={styles.navListItem}
            onClick={() => {
              close();
            }}
          >
            <span className={styles.number}>04</span>contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
