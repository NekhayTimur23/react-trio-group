import React, { useState } from "react";
import styles from "./Phone.module.sass";
import ModalNav from "./modal/ModalNav";
import MainSectionPhone from "./mainSectionPhone/MainSectionPhone";
import AboutSectionPhone from "./aboutSectionPhone/AboutSectionPhone";
import ServicesSectionPhone from "./servicesSectionPhone/ServicesSectionPhone";
import GallerySectionPhone from "./gallerySectionPhone/GallerySectionPhone";

function Phone() {
  const [modalNavOn, setModalNavOn] = useState(false);

  const addModalNav = () => {
    setTimeout(function () {
      setModalNavOn(!modalNavOn);
    }, 300);
  };
  return (
    <div
      className={styles.phone}
      onClick={() => setModalNavOn(false)}
      onScroll={addModalNav}
    >
      <div
        className={styles.phoneContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.phoneContent}>
          <div className={styles.header}>
            <div className={styles.headerBlock}>
              <div className={styles.logo}>
                <img id="logoSvg" src="/headerImg/logo.svg" alt="#" />
              </div>
              <div className={styles.headerButton} onClick={addModalNav}>
                <div className={styles.button}>
                  <div className={styles.buttonBlock}></div>
                  <div
                    className={
                      styles.buttonBlock + " " + styles.buttonBlockCenter
                    }
                  ></div>
                  <div
                    className={
                      styles.buttonBlock + " " + styles.buttonBlockButtom
                    }
                  ></div>
                </div>
              </div>
            </div>
            <ModalNav modalNavOn={modalNavOn} onClose={addModalNav} />
          </div>
          <div className={styles.phoneSections}>
            <MainSectionPhone />
            <AboutSectionPhone />
            <ServicesSectionPhone />
          </div>
          <GallerySectionPhone />
        </div>
      </div>
    </div>
  );
}

export default Phone;
