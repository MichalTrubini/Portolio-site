import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about} id="aboutID">
      <h2 className="heading__section">About me</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Education</h3>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2011 - 2012</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Certificate in Business Management</h4>
              <p className={styles.institution}>The Open University (UK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2008 - 2009</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Certificate in Bookkeeping I & II</h4>
              <p className={styles.institution}>Institute of Certified Bookkeepers (UK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2001 - 2006</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Degree in Biology/Physics</h4>
              <p className={styles.institution}>Constantine the Philosopher University (SK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Working experience</h3>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2017 - 2022</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Sales manager</h4>
              <p className={styles.institution}>Self-employed (SK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2014 - 2017</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Business Analyst</h4>
              <p className={styles.institution}>Flextronics (UK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.yearContainer}>
              <p className={styles.year}>2009 - 2014</p>
            </div>
            <div className={styles.description}>
              <h4 className={styles.itemHeading}>Account Manager</h4>
              <p className={styles.institution}>Flextronics (UK)</p>
            </div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
