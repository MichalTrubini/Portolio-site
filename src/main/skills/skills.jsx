import React from "react";
import styles from "./skills.module.css";
import { motion } from "framer-motion";

const Skills = () => {

  const animateParent = {
    offscreen: {
      y: 40,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const animateChild = (item) => {

    const animation = {
    offscreen: {
      width: '0%',
    },
    onscreen: {
      width: item,
      transition: {
        duration: 1,
      },
    }
  }

  return animation
  };

  const progressFill = [
    {
      id: "hmtl",
      tech: "HTML",
      percentage: "13%",
      class: "progressBarAnimationHTML",
    },
    {
      id: "css",
      tech: "CSS",
      percentage: "66%",
      class: "progressBarAnimationCSS",
    },
    {
      id: "javascript",
      tech: "Vanilla javascript",
      percentage: "4%",
      class: "progressBarAnimationJavascript",
    },
    {
      id: "react",
      tech: "React JS",
      percentage: "8%",
      class: "progressBarAnimationReact",
    },
    {
      id: "next",
      tech: "Next JS",
      percentage: "9%",
      class: "progressBarAnimationNext",
    },
    {
      id: "typescript",
      tech: "Typescript",
      percentage: "5%",
      class: "progressBarAnimationTypescript",
    }
  ];

  return (
    <div className={styles.skills} id="skillsID">
      <div className="headingContainer">
        <h2 className="headingSection">My Skills</h2>
        <div className="headingUnderline"></div>
        <p className="headingBackground">Skills</p>
        <p className={styles.note}><span className={styles.note__accent}>1 year</span > of coding, <span className={styles.note__accent}>57 500 </span>lines written, of which:</p>
      </div>
      <div className={styles.skillsContainer}>
        {progressFill.map((item) => (
          <motion.div
            className={
              `${styles.skill} skill`
            }
            key={item.tech}
            data-type={item.id}
            initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.1 }} variants={animateParent}
          >
            <p className={styles.skillName}>
              {item.tech} - <span className={styles.percentage}>({item.percentage})</span>
            </p>
            <div className={styles.progressBar}>
              <motion.div
                className={styles.progress}
                initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.1 }} variants={animateChild(item.percentage)}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
