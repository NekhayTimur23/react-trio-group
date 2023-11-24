import React from "react";
import styles from "./Header.module.sass";

export default function Header({ onClickAdd }) {
  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.header}>
      <div>
        <img
          alt="#"
          className={styles.headerLogo}
          src="/headerImg/logo.svg"
        />
      </div>
      <div className={styles.hederStyleAll}>
        <div className={styles.mr20}>
          <img  className={styles.headerWatchImg} alt="#" src="/headerImg/watch.svg" />
        </div>
        <p
          className={
            styles.mr20 +
            " " +
            styles.orangeColor +
            " " +
            styles.fontRobotoBold16
          }
        >
          Работаем ежедневно:
        </p>
        <p className={styles.colorWhite + " " + styles.fontOswaldBold20}>
          с 09:00 до 19:00
        </p>
      </div>
      <div className={styles.hederStyleAll + " " + styles.hederSocNetBlock}>
        <div className={styles.hederStyleAll}>
          <div className={styles.hederSocNet}>
            <a
              className={styles.hederSocNet}
              href={whatsAppChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.borCol}>
                <img alt="#" src="/footer/whatsApp.svg" width={15} height={15} />
              </div>

              <p className={styles.fontRobotoBold16}>WhatsApp</p>
            </a>
          </div>
        </div>
        <div className={styles.hederStyleAll}>
          <div className={styles.hederSocNet}>
            <a className={styles.hederSocNet}
              href={telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.borCol}>
                <img
                  alt="Telegram"
                  src="/headerImg/telegram.svg"
                  width={15}
                  height={15}
                />
              </div>

              <p className={styles.colorWhite + " " + styles.fontRobotoBold16}>
                Telegram
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.hederStyleAll}>
        <div>
          <img
            alt="#"
            className={styles.mr20}
            src="/headerImg/adress.svg"
            width={22}
            height={22}
          />
        </div>
        <p
          className={
            styles.mr20 +
            " " +
            styles.orangeColor +
            " " +
            styles.fontRobotoBold16
          }
        >
          Наш адрес:
        </p>
        <p className={styles.colorWhite + " " + styles.fontOswaldBold20}>
          МО п.Заречье ул. Тихая д.13
        </p>
      </div>
      <div className={styles.hederStyleAll}>
        <div className={styles.hederNomber}>
          <div className={styles.mr20}>
            <p className={styles.colorWhite + " " + styles.fontOswaldBold25}>
              8 800 700-00-00
            </p>
            <p className={styles.colorWhite + " " + styles.fontOswaldBold25}>
              8 800 700-00-00
            </p>
          </div>
        </div>
        <div onClick={onClickAdd} className={styles.bgColorPhone}>
          <img alt="#" src="/headerImg/phone.svg" />
        </div>
      </div>
    </div>
  );
}
