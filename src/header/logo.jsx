import styles from "./logo.module.css";

const Logo = () => {

  const scrollHandler = (item) => {
    const element = document.getElementById(item);
    const header = document.getElementById("headerID");

    let headerOffset = header.offsetHeight;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    function windowScroll() {
      window.scrollTo({
        top: offsetPosition,
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
