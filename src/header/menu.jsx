import { useState } from "react";
import styles from "./menu.module.css";

const Menu = (props) => {
 const [selected, setSelected] = useState('home')

  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const header = document.getElementById("headerID");

    let headerOffset = header.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll() {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    if (window.innerWidth < 769) {
      setTimeout(() => {
        windowScroll();
      }, 500);
    } else windowScroll();
  };

  const close = () => {
    if (window.innerWidth < 769) {
      props.onClickClose();
    }
  };

  return (
    <nav className={`${styles.nav}`}>
      <ul className={styles.navList}>
        <li
          className={selected === 'home' ? `${styles.navListItem} ${styles.navListItem__selected}` : styles.navListItem}
          onClick={() => {
            scrollHandler("heroID");
            setSelected('home')
            close();
          }}
        >
          <span className={styles.number}>01</span>home
        </li>
        <li
          className={selected === 'skills' ? `${styles.navListItem} ${styles.navListItem__selected}` : styles.navListItem}
          onClick={() => {
            scrollHandler("skillsID");
            setSelected('skills')
            close();
          }}
        >
          <span className={styles.number}>02</span>skills
        </li>
        <li
          className={selected === 'portfolio' ? `${styles.navListItem} ${styles.navListItem__selected}` : styles.navListItem}
          onClick={() => {
            scrollHandler("portfolioID");
            setSelected('portfolio')
            close();
          }}
        >
          <span className={styles.number}>03</span>portfolio
        </li>
        <li
          className={selected === 'contact' ? `${styles.navListItem} ${styles.navListItem__selected}` : styles.navListItem}
          onClick={() => {
            scrollHandler("contactID");
            setSelected('contact')
            close();
          }}
        >
          <span className={styles.number}>04</span>contact
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
