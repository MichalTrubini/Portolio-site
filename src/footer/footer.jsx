import styles from "./footer.module.css";
import gitHubDark from "../assets/githubDark.svg";
import gitHubLight from "../assets/githubLight.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <div className={styles.containerOuter}>
            <a href="https://github.com/MichalTrubini" target="_blank" rel="noreferrer">
              <div className={styles.containerInner}>
                <div className={styles.wrapper}>
                  <img src={gitHubDark} alt="github" className={styles.socialIcon} />
                </div>
                <div className={`${styles.wrapper} ${styles.wrapperHovered}`}>
                  <img src={gitHubLight} alt="github" className={styles.socialIcon} />
                </div>
              </div>
            </a>
          </div>
          <div className={styles.containerOuter}>
            <a href="https://www.linkedin.com/in/michal-trub%C3%ADni-970988220/" target="_blank" rel="noreferrer">
              <div className={styles.containerInner}>
                <div className={styles.wrapper}>
                  <div className={styles.linkedIn}>in</div>
                </div>
                <div className={`${styles.wrapper} ${styles.wrapperHovered}`}>
                  <div className={`${styles.linkedIn} ${styles.linkedInHovered}`}>in</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <p className={styles.copyright}>
            &copy; 2022, created with React by <span className={styles.copyright__name}>Michal Trubini</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
