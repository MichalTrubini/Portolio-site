import styles from "./hero.module.css";
import Typewriter from "typewriter-effect";
import heroImage from "../../assets/profil.jpeg";

const Hero = () => {
  return (
    <div className={styles.hero} id="heroID">
      <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <img src={heroImage} alt="hero" className={styles.image} />
        </div>
        <h1 className={styles.heading}>
          <span>Hi, I am</span>
          <span className={styles.heading__special}>
            <Typewriter
              options={{
                strings: ["Michal Trubini", "Frontend Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.listItemContent}>React.js</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemContent}>Next.js</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemContent}>Vue.js</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemContent}>Tailwind</span>
          </li>
          <li className={styles.listItem}>
            <span className={styles.listItemContent}>Typescript</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
