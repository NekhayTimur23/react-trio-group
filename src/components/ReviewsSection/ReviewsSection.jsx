import React from "react";
import styles from "./ReviewsSection.module.sass";

export default function ReviewsSection() {
  return (
    <div className={styles.reviewsSection}>
      <h1>ОТЗЫВЫ</h1>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsRightBlock}>
          <img alt="#" src="./reviews/25.svg" />
        </div>
        <div className={styles.reviewsLeftBlock}>
          <div className={styles.reviewsCard}>
            <div className={styles.cardPhoto}>
              <img alt="#" src="/reviews/team4.png" />
            </div>
            <div className={styles.cardTextBlock}>
              <p>
                Сайт просто супер. Ребята молодцы, делают свою работу на высоком
                уровне. Товары всегда новые, цены вполне доступные. Часто
                проводятся скидки, акции, что особо радует :) Буду рекомендовать
                всем друзьям и близким.
              </p>
              <div className={styles.cardTextBottom}>
                <p className={styles.cardNameClient}>ЯКОВЛЕВ ВЛАДИМИР</p>
                <p className={styles.cardCompanyName}>{"ООО КОМПАНИЯ"}</p>
                <div className={styles.cardComma}>
                  <img alt="#" src="./reviews/comma.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reviewsCard}>
            <div className={styles.cardPhoto}>
              <img alt="#" src="/reviews/team4.png" />
            </div>
            <div className={styles.cardTextBlock}>
              <p>
                Сайт просто супер. Ребята молодцы, делают свою работу на высоком
                уровне. Товары всегда новые, цены вполне доступные. Часто
                проводятся скидки, акции, что особо радует :) Буду рекомендовать
                всем друзьям и близким.
              </p>
              <div className={styles.cardTextBottom}>
                <p className={styles.cardNameClient}>ЯКОВЛЕВ ВЛАДИМИР</p>
                <p className={styles.cardCompanyName}>{"ООО КОМПАНИЯ"}</p>
                <div className={styles.cardComma}>
                  <img
                    alt="#"
                    src="./reviews/comma.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
