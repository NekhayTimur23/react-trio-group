import React, { forwardRef } from "react";
import styles from "./AboutSection.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";

const AboutSection = forwardRef(({ onClickAdd }, ref) => {
  return (
    <div ref={ref} className={styles.aboutSection}>
      <div className={styles.rightAboutSection}>
        <div>
          <img alt="#" src="/about/5000.svg" />
        </div>
        <div className={styles.rightAboutSectionFirst}>
          <div>
            <img alt="#" src="/about/01.svg" />
          </div>
          <div>
            <img alt="#" src="/about/02.svg" />
          </div>
        </div>
      </div>
      <div className={styles.leftAboutSection}>
        <div className={styles.textBlock}>
          <p className={styles.textOne}>
            ПУСТЬ ВАШИ МЕЧТЫ СТАНУТ НАШИМ ПРОЕКТОМ
          </p>
          <h1 className={styles.textTwu}>О КОМПАНИИ</h1>
          <p className={styles.textThree}>
            Мы - надежная строительная компания, специализирующаяся на оказании
            высококачественных услуг для юридических лиц и государственных
            заказчиков. С момента нашего основания мы стремимся к выдающимся
            результатам и создаем ценность для наших клиентов.
          </p>
          <p className={styles.textFour}>Наши преимущества:</p>
          <p className={styles.textFive}>
            Профессионализм: Наш опыт и знания в строительстве гарантируют
            надежность выполнения проектов. Прозрачность: Мы ценим взаимное
            доверие и всегда предоставляем прозрачные условия сотрудничества.
            Гарантия качества: Мы гарантируем качество оказываемых услуг и
            готовы нести ответственность за результаты нашей работы.
          </p>
          <p className={styles.textSix}>
            Выбрав нас, вы выбираете надежного партнера в мире строительства и
            инженерных решений. Мы всегда готовы приступить к работе над вашими
            проектами и обеспечить их успешное завершение.
          </p>
        </div>
        <ButtonComp onClickAdd={onClickAdd} colorText={true} />
      </div>
    </div>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
