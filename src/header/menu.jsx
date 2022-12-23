import styles from "./menu.module.css";

const Menu = (props) => {

const scrollHandler = (item) => {
  const element = document.getElementById(item);
  const header = document.getElementById('headerID');

  let headerOffset = header.offsetHeight;
  let elementPosition = element.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth"
  });
}

const close = () => {
  return props.onClick
}

  return (
    <nav className={`${styles.nav}`}>
      <ul className={styles.navList}>
        <li className={styles.navListItem} onClick={() => {scrollHandler('heroID'); close()}}>
          <span className={styles.number}>1</span>home
        </li>
        <li className={styles.navListItem} onClick={() => scrollHandler('aboutID')}>
          <span className={styles.number}>2</span>about
        </li>
        <li className={styles.navListItem} onClick={() => scrollHandler('portfolioID')}>
          <span className={styles.number}>3</span>portfolio
        </li>
        <li className={styles.navListItem} onClick={() => scrollHandler('contactID')}>
          <span className={styles.number}>4</span>contact
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
