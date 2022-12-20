import styles from './menu.module.css'

const Menu = () => {
    return (
        <nav className={`${styles.nav}`}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <span className={styles.number}>1</span>home
            </li>
            <li className={styles.navListItem}>
              <span className={styles.number}>2</span>about
            </li>
            <li className={styles.navListItem}>
              <span className={styles.number}>3</span>portfolio
            </li>
            <li className={styles.navListItem}>
              <span className={styles.number}>4</span>contact
            </li>
          </ul>
        </nav>
    )
}

export default Menu;