import styles from "./ServicesSectionPhone.module.sass";
import React, { useState, useRef } from "react";


function ServicesSectionPhone() {
  const [listServices, setListServices] = useState(0);

  const serRef = useRef();

  const addClick = (event) => {
    setListServices(parseInt(event.currentTarget.id));
    console.log(listServices);
  };

  return (
    <div className={styles.servicesSection}>
      <h1>Наши услуги</h1>
      <div ref={serRef} className={styles.servicesContant}>
        <div className={styles.servicesListOne}>
          <div
            id={1}
            onClick={addClick}
            className={styles.servicesListTitle}
          >
            <h1>Строительно-монтажные работы</h1>
          </div>
          <div className={listServices == 1 ? styles.servicesListText + ' ' +  styles.active : styles.servicesListText} >
            <h3>Описание услуги</h3>
            <p>
              Строительно-монтажные работы включают возведение зданий и
              сооружений, используя строительные и монтажные процессы, включая
              готовые детали и различные материалы.
            </p>
            <h3>Виды работ</h3>
            <p>1. Земляные работы</p>
            <p>2. Каменные работы</p>
            <p>3. Бетонные работы</p>
            <p>4. Свайные работы</p>
            <p>5. Штукатурные работы</p>
            <p>6. Кровельные работы</p>
            <p>7. Отделочные работы</p>
          </div>
        </div>
        <div className={styles.servicesListTwo}>
          <div
            id={2}
            onClick={ addClick}
            className={styles.servicesListTitle}
          >
            <h1>Благоустройство территорий</h1>
          </div>
          <div className={listServices == 2 ? styles.servicesListText + ' ' +  styles.active : styles.servicesListText}>
            <h3>Описание услуги</h3>
            <p>
              Компания «ТриоГрупп» специализируется на благоустройстве различных
              территорий, обеспечивая их удобство, безопасность и
              функциональность.
            </p>
            <h3>Виды работ</h3>
            <p>1. Земляные работы</p>
            <p>2. Установка элементов малой архитектуры</p>
            <p>3. Озеленение</p>
            <p>4. Устройство дорожек и площадок</p>
            <p>5. Установка освещения</p>
            <p>6. Устройство ирригационных систем</p>
          </div>
        </div>
        <div className={styles.servicesListFree}>
          <div
            id={3}
            onClick={addClick}
            className={styles.servicesListTitle}
          >
            <h1>Электромонтажные работы</h1>
          </div>
          <div className={listServices == 3 ?styles.servicesListText + ' ' +  styles.active : styles.servicesListText}>
            <h3>Описание услуги</h3>
            <p>
              Электромонтажные услуги включают установку и подключение
              электрических систем, обеспечение безопасности и функциональности
              в зданиях и сооружениях.
            </p>
            <h3>Виды работ</h3>
            <p>1. Кабельные линии</p>
            <p>2. Электроустановки</p>
            <p>3. Молния и заземление</p>
            <p>4. Распределительные щиты, шкафы и распределительные щиты</p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default ServicesSectionPhone;
