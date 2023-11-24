import React, { useState, useRef, forwardRef } from "react";
import styles from "./ServicesSection.module.sass";

const ServicesSection = forwardRef((props, ref) => {
  const [listServices, setListServices] = useState(1);

  const serRef = useRef();

  const addClick = (event) => {
    setListServices(event.currentTarget.id);
  };

  return (
    <div ref={ref} className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <h2>Наши услуги</h2>
        <div className={styles.servicesContent}>
          <div className={styles.serviceCard} ref={serRef}>
            <div
              onClick={addClick}
              id={"1"}
              className={
                listServices == 1
                  ? styles.serviceCardWorkActive
                  : styles.serviceCardWork
              }
            >
              <p>СТРОИТЕЛЬНО-МОНТАЖНЫЕ РАБОТЫ</p>
            </div>
            <div
              id={"2"}
              onClick={addClick}
              className={
                listServices == 2
                  ? styles.serviceCardWorkActive
                  : styles.serviceCardWork
              }
            >
              <p>БЛАГОУСТРОЙСТВО ТЕРРИТОРИЙ</p>
            </div>
            <div
              id={"3"}
              onClick={addClick}
              className={
                listServices == 3
                  ? styles.serviceCardWorkActive
                  : styles.serviceCardWork
              }
            >
              <p>ЭЛЕКТРОМОНТАЖНЫЕ РАБОТЫ</p>
            </div>
          </div>

          <div className={styles.serviceCardText}>
            <div
              className={styles.cardTextOne + " " + styles.cardTextAll}
              style={
                listServices == 1 ? { display: "block" } : { display: "none" }
              }
            >
              <h1>Строительно-монтажные работы</h1>
              <h3>Описание услуги</h3>
              <p>
                Строительно-монтажные работы охватывают все работы, выполняемые
                при возведении здания или сооружения непосредственно на месте
                строительства. Работы принято называть строительными или
                монтажными в зависимости от того, какой процесс преобладает. К
                монтажным относятся главным образом работы, выполняемые с
                применением готовых деталей, например, монтаж железобетонных
                конструкций, осветительной или силовой электропроводки,
                вентиляции, лифтов и т. д. Все работы на стройках разделяют на
                общестроительные, специальные, транспортные и
                погрузочно-разгрузочные. К общестроительным относят работы,
                связанные с возведением строительных конструкций зданий и
                сооружений. Общестроительные работы подразделяются по виду
                перерабатываемых материалов на земляные, каменные, бетонные и
                др., по возводимым конструктивным элементам — на кровельные,
                штукатурные и др.
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
            <div
              className={styles.cardTextTwo + " " + styles.cardTextAll}
              style={
                listServices == 2 ? { display: "block" } : { display: "none" }
              }
            >
              <h1>Благоустройство территорий</h1>
              <h3>Описание услуги</h3>
              <p>
                Компания «ТриоГрупп» выполняет работы по благоустройству
                городских, коммерческих, частных территорий. Мы помогаем
                улучшить их внешний вид, сделать их удобными, безопасными,
                функциональными: так, чтобы пользоваться ими было комфортно,
                приятно. Все работы на стройках разделяют на общестроительные,
                специальные, транспортные и погрузочно-разгрузочные. К
                общестроительным относят работы, связанные с возведением
                строительных конструкций зданий и сооружений. Общестроительные
                работы подразделяются по виду перерабатываемых материалов на
                земляные, каменные, бетонные и др., по возводимым конструктивным
                элементам — на кровельные, штукатурные и др.
              </p>
              <h3>Виды работ</h3>
              <p>1. Земляные работы</p>
              <p>2. Установка элементов малой архитектуры</p>
              <p>3. Озеленение</p>
              <p>4. Устройство дорожек и площадок</p>
              <p>5. Установка освещения</p>
              <p>6. Устройство ирригационных систем</p>
            </div>
            <div
              className={styles.cardTextFree + " " + styles.cardTextAll}
              style={
                listServices == 3 ? { display: "block" } : { display: "none" }
              }
            >
              <h1>Электромонтажные работы</h1>
              <h3>Описание услуги</h3>
              <p>
                Электромонтажные услуги включают широкий спектр работ, начиная
                от проектирования и прокладки электрических сетей до установки и
                настройки различных электрических устройств и систем. Это
                охватывает монтаж осветительных систем, розеток, выключателей,
                щитов управления и систем безопасности, включая пожарную и
                охранную сигнализацию. Также к услугам относится интеграция
                умных технологий для автоматизации зданий. Важным элементом
                является тщательное тестирование и обеспечение соответствия всей
                установленной аппаратуры строгим нормам безопасности и
                эффективности. Помимо этого, предоставляется консультация по
                энергоэффективности и оптимизации электропотребления, а также
                обслуживание и ремонт существующих электрических систем.
              </p>
              <h3>Виды работ</h3>
              <p>1. Кабельные линии</p>
              <p>2. Электроустановки</p>
              <p>3. Молния и заземление</p>
              <p>4. Распределительные щиты, шкафы и распределительные щиты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;