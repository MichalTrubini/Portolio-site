import { useState } from "react";

import styles from "./portfolioItem.module.css";
import codeIcon from "../../assets/sourceCode.png";
import linkIcon from "../../assets/link.png";

const PortfolioItem = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [animate, setAnimate] = useState(false)

  const animateFadeOut = () => {
    setAnimate(true);
    setTimeout(()=>{setIsShown(false);setAnimate(false)},1000);
  }

  return (
    <div className={styles.item} id={props.id}>
      <div className={styles.imageContainer} onMouseEnter={() => setIsShown(true)} onMouseLeave={animateFadeOut}>
        <img src={props.src} alt={props.alt} className={styles.image} />

          {isShown &&
          <div className={!animate ? `${styles.overlay} ${styles.overlayFadeIn}` : `${styles.overlay} ${styles.overlayFadeOut}`}>
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
          </div>}

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
