import nodemailer from "nodemailer";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Настройка Express
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());

// Настройка транспорта Nodemailer
const transporter = nodemailer.createTransport({
  // Ваши настройки SMTP
  host: "smtp.mail.ru", // SMTP сервер вашего почтового провайдера
  port: 465, // Порт, обычно 587 для защищенного соединения
  secure: true, // true для 465 порта, false для других портов
  auth: {
    user: "grupp.trio@bk.ru", // ваша почта
    pass: "AUhFe3vzWrLDQukTxg8T", // ваш пароль
  },
});

// Обработка маршрута для отправки email
app.post("/send-email", (req, res) => {
  // Данные, которые вы получаете из тела запроса
  console.log(req.body);
  const { name, email, phone } = req.body;

  // Параметры письма, которое вы хотите отправить
  const mailOptions = {
    from: "grupp.trio@bk.ru", // Ваш адрес электронной почты
    to: "grupp.trio@bk.ru", // Получатель письма
    subject: "Новая заявка с сайта на обратный звонок.", // Тема письма
    text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`, // Текст письма
  };

  // Использование транспорта nodemailer для отправки письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // Если произошла ошибка при отправке, отправить статус 500
      console.error("Ошибка при отправке письма:", error);
      res.status(500).send(error.toString());
    } else {
      // Если письмо успешно отправлено, отправить статус 200
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .json({ status: "Success", message: "Email sent: " + info.response });
    }
  });
});

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер работает ${PORT}`);
});

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// const PORT = 3001;

// app.use(cors());
// app.use(bodyParser.json()); // Используйте bodyParser.json() для разбора JSON тела запроса

// app.post("/registration", (req, res) => {
//   if (!req.body.email || !req.body.name || !req.body.phone) {
//     return res.status(400).send("Необходимо указать email, имя и телефон");
//   }
//   res.status(200).json({ message: "Заявка на обратный звонок отправлена!" });
// });

// app.listen(PORT, () => {
//   console.log(`Сервер был запущен на http://localhost:${PORT}/registration`);
// });

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {

//   if (req.method === 'POST') {
//     const { name, email, phone } = req.body;

//     // Создайте транспорт Nodemailer с использованием SMTP транспорта
//     let transporter = nodemailer.createTransport({
//       host: "smtp.mail.ru", // SMTP сервер вашего почтового провайдера
//       port: 465, // Порт, обычно 587 для защищенного соединения
//       secure: true, // true для 465 порта, false для других портов
//       auth: {
//         user: "grupp.trio@bk.ru", // ваша почта
//         pass: "AUhFe3vzWrLDQukTxg8T" // ваш пароль
//       }
//     });

//     // Определите параметры письма
//     let mailOptions = {
//       from: '"Форма обратной связи" grupp.trio@bk.ru ', // адрес отправителя
//       to: triogroupcom, // список получателей
//       subject: 'Новая заявка с сайта', // Тема письма
//       text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`, // текст письма
//       html: `<p>Имя: ${name}</p><p>Email: ${email}</p><p>Телефон: ${phone}</p>` // html тело письма
//     };

//     // Отправляем письмо
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log(error);
//         res.status(500).json({ status: 'Error', message: 'Ошибка при отправке письма' });
//       } else {
//         console.log('Email sent: ' + info.response);
//         res.status(200).json({ status: 'Success', message: 'Письмо успешно отправлено' });
//       }
//     });
//   } else {
//     res.setHeader('Allow', 'POST');
//     res.status(405).end('Method Not Allowed');
//   }
// }
