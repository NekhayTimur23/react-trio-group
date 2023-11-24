import React from "react";
import styles from "./ModalNav.module.sass";

function ModalNav({ onClose, modalNavOn }) {
  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div
      className={
        modalNavOn
          ? styles.modelNav
          : styles.modelNav + " " + styles.modelNavOff
      }
    >
      <div className={styles.modelNavContent}>
        <div>
          <span>ГЛАВНАЯ</span>
        </div>
        <div>
          <span>О НАС</span>
        </div>
        <div>
          <span>УСЛУГИ</span>
        </div>
        <div>
          <span>КОНТАКТЫ</span>
        </div>
        <div>
          <span>ГАЛЕРЕЯ</span>
        </div>
      </div>
      <div className={styles.buttonCall + " " + styles.button}>
        <span>Заказать звонок</span>
      </div>
      <div className={styles.socialNetworkBlock}>
        <a href={whatsAppChannelUrl}>
          <div className={styles.socialNetworkButtom}>
            <img src="/footer/whatsApp.svg" alt="#" />
          </div>
        </a>
        <a href={telegramChannelUrl}>
          <div  className={styles.socialNetworkButtom}>
            <img src="/headerImg/telegram.svg" alt="#" />
          </div>
        </a>
      </div>
      <div
        className={styles.buttonClose + " " + styles.button}
        onClick={onClose}
      >
        <span>ЗАКРЫТЬ</span>
      </div>
    </div>
  );
}

export default ModalNav;
