import React from "react";
import { useEffect, useState } from "react";
import styles from "./skills.module.css";

const Skills = () => {
  const [intersection, setIntersection] = useState({
    hmtl: false,
    javascript: false,
    react: false,
    next: false,
    css: false,
    typescript: false,
  });

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

  useEffect(() => {
    //Two observers declared and attached to two arrays which were split based on odd/even indices.
    //Having one observer worked fine if observed elements were underneath each other.
    //If observed elements were besides each other in two columns, then observer was triggerred only for elements in the first column.

    const allWithClass1 = Array.from(document.getElementsByClassName("skill"));

    let even = allWithClass1.filter((v, i) => i % 2);
    let odd = allWithClass1.filter((v, i) => !(i % 2));
    const observer1 = new IntersectionObserver(handleIntersection);
    const observer2 = new IntersectionObserver(handleIntersection);

    function handleIntersection(entries) {
      const entry = entries[0];
      if (intersection[entry.target.getAttribute("data-type")] === false)
        setIntersection((prevData) => ({
          ...prevData,
          [entry.target.getAttribute("data-type")]: entry.isIntersecting,
        }));
    }

    even.forEach((item) => observer1.observe(item));
    odd.forEach((item) => observer2.observe(item));
  }, [intersection]);

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
          <div
            className={
              intersection[item.id] ? `${styles.skillAnimation} ${styles.skill} skill` : `${styles.skill} skill`
            }
            key={item.tech}
            data-type={item.id}
          >
            <p className={styles.skillName}>
              {item.tech} - <span className={styles.percentage}>({item.percentage})</span>
            </p>
            <div className={styles.progressBar}>
              <div
                className={
                  intersection[item.id]
                    ? `${styles.progress} ${styles.progressBarAnimation} ${styles[item.class]}`
                    : `${styles.progress}`
                }
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
