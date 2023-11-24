import React, { useState, useEffect } from "react";
import styles from "./NavBlock.module.sass";

export default function NavBlock({ onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    top: isScrolled ? "0" : "-100%",
  };

  return (
    <div className={styles.nav}>
      <div
        style={navStyle}
        className={
          isScrolled
            ? styles.navFixed + " " + styles.navContainer
            : styles.navContainer
        }
      >
        <div
          onClick={() => {
            onNavigate("section1");
          }}
        >
          <span>ГЛАВНАЯ</span>
        </div>
        <div
          onClick={() => {
            onNavigate("section2");
          }}
        >
          <span>О НАС</span>
        </div>
        <div
          onClick={() => {
            onNavigate("section3");
          }}
        >
          <span>УСЛУГИ</span>
        </div>
        <div
          onClick={() => {
            onNavigate("section5");
          }}
        >
          <span>ГАЛЕРЕЯ</span>
        </div>
        <div
          onClick={() => {
            onNavigate("section4");
          }}
        >
          <span>КОНТАКТЫ</span>
        </div>
      </div>
    </div>
  );
}