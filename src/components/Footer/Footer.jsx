import React from "react";
import styles from "./Footer.module.sass";
import ButtonComp from "../ButtonSection/ButtonComp";

export default function Footer({ onClickAdd, onNavigate, onClickModalPolicy }) {
  const telegramChannelUrl = "https://t.me/+79189255217";
  const whatsAppChannelUrl = "https://wa.me/+79189255217";

  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        <img className={styles.imgLine} alt="#" src="/footer/lineFooter.svg" />
        <div className={styles.footerNav}>
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
              onNavigate("section4");
            }}
          >
            <span>КОНТАКТЫ</span>
          </div>
          <div
            onClick={() => {
              onNavigate("section5");
            }}
          >
            <span>ГАЛЕРЕЯ</span>
          </div>
        </div>
        <div className={styles.footerCocialNetwork}>
          <div className={styles.footerCNBlock}>
            {/* вацап */}
            <a
              href={whatsAppChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.footerWhatsApp}>
                <div className={styles.WhatsApp}>
                  <div>
                    <img alt="#" src="/footer/whatsApp.svg" />
                  </div>
                </div>
                <p>WhatsApp</p>
              </div>
            </a>

            {/* телега */}
            <a
              href={telegramChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.footerTelegrem}>
                <div className={styles.Telegram}>
                  <div>
                    <img alt="#" src="/footer/telegram.svg" />
                  </div>
                </div>
                <p>Telegram</p>
              </div>
            </a>
            {/* вконтакте */}
            <a
              href={whatsAppChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.footerVkontakte}>
                <div className={styles.Vkontakte}>
                  <div>
                    <img alt="#" src="/footer/Vkontakte.svg" />
                  </div>
                </div>
                <p>Вконтакте</p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.footerCall}>
          <p>График работы:</p>
          <span>9.00-19.00 ПН-ПТ</span>
          <p>Наши телефоны:</p>
          <div className={styles.call}>
            <span>8 (800) 888-88-88</span>
            <span>8 (800) 888-88-88</span>
          </div>
        </div>
        <div className={styles.footerButton}>
          <div className={styles.footerButtonLogo}>
            <div className={styles.logo}>
              <img alt="#" src="/headerImg/logo.svg" />
            </div>
            <div className={styles.button}>
              <div className={styles.buttonContainer}>
                <ButtonComp onClickAdd={onClickAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Info}>
        <div className={styles.InfoLeft}>
          <p>Copyright © 2023 TrioGroup</p>
          <p>ИНН: 123456789111</p>
          <p>ОГРНИП: 1110987654321</p>
        </div>
        <div className={styles.InfoRight}>
          <p onClick={onClickModalPolicy} className={styles.textPolit}>
            Политика конфедициальности
          </p>
        </div>
      </div>
    </div>
  );
}
