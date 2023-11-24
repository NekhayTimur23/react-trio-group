import Header from "./headerBlock/Header";
import NavBlock from "./navBlock/NavBlock";
import styles from "./MainSection.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";
import React, { forwardRef } from "react";

const MainSection = forwardRef(({ onClickAdd, onNavigate }, ref) => {





  return (
    <div ref={ref} className={styles.mainSection}>
      <Header onClickAdd={onClickAdd}/>
      <NavBlock onNavigate={onNavigate} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <div className={styles.pozitionBox}>
              <p className={styles.textOne}>ПОЛНЫЙ КОМПЛЕКС</p>
              <p className={styles.textTwo}>СТРОИТЕЛЬНЫХ</p>
              <p className={styles.textThree}>УСЛУГ</p>
              <p className={styles.textFour}>С ГАРАНТИЕЙ В МОСКВЕ</p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.rightBlockText}>
              <p>
                Наши преимущества - это профессионализм, опыт, ответственность и
                оперативность. Мы гарантируем качественное выполнение работ,
                соблюдение сроков и учет всех пожеланий заказчика.
              </p>
            </div>
            <ButtonComp onClickAdd={onClickAdd} />
          </div>
        </div>
      </div>
    </div>
  );
});


MainSection.displayName = 'MainSection';

export default MainSection;
