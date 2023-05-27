import { useState } from "react";

import styles from "./portfolioItem.module.css";
import codeIcon from "../../assets/sourceCode.png";
import linkIcon from "../../assets/link.png";

const PortfolioItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={isShown ? `${styles.item} ${styles.itemUp}` : `${styles.item} ${styles.itemDown}`} key={props.id} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <div className={styles.imageContainer} >
        <img src={props.src} alt={props.alt} className={styles.image} />

          <div className={isShown ? `${styles.overlay} ${styles.overlayFadeIn}` : `${styles.overlay} ${styles.overlayFadeOut}`}>
            <a href={props.gitLink} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <img src={codeIcon} alt="source code" className={`${styles.iconImageOne} ${styles.iconImage}`} />
              </div>
            </a>
            <a href={props.liveLink} target="_blank" rel="noreferrer">
              <div className={styles.iconContainer}>
                <img src={linkIcon} alt="source code" className={`${styles.iconImageTwo} ${styles.iconImage}`} />
              </div>
            </a>
          </div>

      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>{props.techStack[0]}</li>
        <li className={styles.listItem}>{props.techStack[1]}</li>
      </ul>
    </div>
  );
};

export default PortfolioItem;
