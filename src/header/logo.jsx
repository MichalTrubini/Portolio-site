import styles from "./logo.module.css";

const Logo = () => {

  const scrollHandler = (item) => {

    function windowScroll() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (window.innerWidth < 769) {
      setTimeout(() => {
        windowScroll();
      }, 500);
    } else windowScroll();
  };

  return (
    <h1 className={styles.mainHeader} onClick={()=>scrollHandler("heroID")}>
      ttd<span className={styles.mainHeader__light}>.</span>
    </h1>
  );
};

export default Logo;
