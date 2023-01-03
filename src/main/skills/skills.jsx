import React from "react";
import { useEffect, useState } from "react";
import styles from "./skills.module.css";

const Skills = () => {
  const [intersection, setIntersection] = useState({
    hmtl: false,
    javascript: false,
    react: false,
    next: false,
    mongo: false,
    typescript: false,
  });

  const progressFill = [
    {
      id: "hmtl",
      tech: "HTML & CSS",
      percentage: "90%",
      class: 'progressBarAnimationHTML'
    },
    {
      id: "javascript",
      tech: "Javascript",
      percentage: "75%",
      class: 'progressBarAnimationJavascript'
    },
    {
      id: "react",
      tech: "React JS",
      percentage: "50%",
      class: 'progressBarAnimationReact'
    },
    {
      id: "next",
      tech: "Next JS",
      percentage: "50%",
      class: 'progressBarAnimationNext'
    },
    {
      id: "mongo",
      tech: "MongoDB",
      percentage: "50%",
      class: 'progressBarAnimationMongo'
    },
    {
      id: "typescript",
      tech: "Typescript",
      percentage: "50%",
      class: 'progressBarAnimationTypescript'
    },
  ];

  useEffect(() => {

    //Two observers declared and attached to two arrays which were split based on odd/even indices.
    //Having one observer worked fine if observed elements were underneath each other. 
    //If observed elements were besides each other in two columns, then observer was triggerred only for elements in the first column.

    const allWithClass1 = Array.from(document.getElementsByClassName("skill"));

    let even = allWithClass1.filter((v, i) => i % 2);
    let odd = allWithClass1.filter((v, i) => !(i % 2));

    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersection((prevData) => ({
        ...prevData,
        [entry.target.getAttribute("data-type")]: entry.isIntersecting,
      }));
    });

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersection((prevData) => ({
        ...prevData,
        [entry.target.getAttribute("data-type")]: entry.isIntersecting,
      }));
    });

    even.forEach((item) => observer1.observe(item));
    odd.forEach((item) => observer2.observe(item));

  }, []);

  return (
    <div className={styles.skills} id="skillsID">
      <div className="headingContainer">
        <h2 className="headingSection">My Skills</h2>
        <div className="headingUnderline"></div>
        <p className="headingBackground">Skills</p>
      </div>
      <div className={styles.skillsContainer}>
        {progressFill.map((item, i) => (
          <div
            className={intersection[item.id] ? `${styles.skillAnimation} ${styles.skill} skill` : "skill"}
            key={item.tech}
            data-type={item.id}
          >
            <p className={styles.skillName}>
              {item.tech} - <span className={styles.percentage}>({item.percentage})</span>
            </p>
            <div className={styles.progressBar}>
              <div className={intersection[item.id] ? `${styles.progress} ${styles.progressBarAnimation} ${styles[item.class]}` : `${styles.progress}` }></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
