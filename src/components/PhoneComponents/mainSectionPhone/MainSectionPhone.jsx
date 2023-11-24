import React from "react";
import styles from "./MainSectionPhone.module.sass";

function MainSectionPhone() {
  return (
    <div className={styles.mainPhone}>
      <div className={styles.mainPhoneContainer}>
        <div className={styles.mainBlock}>
          <div className={styles.mainBlockTop}>
            <p className={styles.mainTextOne}>ПОЛНЫЙ КОМПЛЕКС</p>
            <p className={styles.mainTextTwo}>СТРОИТЕЛЬНЫХ</p>
            <p className={styles.mainTopFree}>УСЛУГ</p>
            <p className={styles.mainTopFour}>С ГАРАНТИЕЙ В МОСКВЕ</p>
          </div>
          <div className={styles.mainBlockBottom}>
            <p>
              Наши преимущества - это профессионализм, опыт, ответственность и
              оперативность. Мы гарантируем качественное выполнение работ,
              соблюдение сроков и учет всех пожеланий заказчика.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSectionPhone;
