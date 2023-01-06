import React, { useState } from "react";
import styles from "./header.module.css";
import useWindowDimensions from "../utilities/WindowDimensions";
import Menu from "./menu";
import Hamburger from "./hamburger";
import MobileMenu from "./mobileMenu";
import Logo from "./logo";

const Header = () => {
  const { width } = useWindowDimensions();
  const [isShown, setIsShown] = useState(false);
  const [animate, setAnimate] = useState(false);

  const slideOut = () => {
    setAnimate(true);
    setTimeout(() => {
      setIsShown(false);
      setAnimate(false);
    }, 500);
  };

  return (
    <header className={styles.header} id='headerID'>
      <div className={styles.container}>
        <Logo />
        {width > 768 ? (
          <Menu />
        ) : (
          <Hamburger
            onClick={() => {
              setIsShown(true);
            }}
          />
        )}
      </div>
      {isShown && <MobileMenu animate={animate} onClick={slideOut} />}
    </header>
  );
};

export default Header;
