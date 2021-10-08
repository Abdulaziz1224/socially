import React from "react";
import { useState } from "react";
import "./form.scss";

function Form() {
  const [formType, setFormType] = useState("authNumber");

  function authNumber() {
    let html = getHtml();

    return html;
  }

  function login() {
    let html = getHtml();

    return html;
  }
  function signup() {}

  function getHtml() {
    switch (formType) {
      case "authNumber":
        return (
          <div className="box">
            <h1>Tizimga kirish</h1>
            <p>
              Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga
              kirishingiz kerak bo‘ladi
            </p>
            <input type="text" />
            <button>
              Tekshirish
              <img
                src="images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        );
      case "login":
        return (
          <div className="box">
            <h1>Tizimga kirish</h1>
            <p>
              Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga
              kirishingiz kerak bo‘ladi
            </p>
            <input type="text" />
            <input type="password" />
            <button className="forgetPass">Parolni unutdingizmi?</button>
            <button className="restorePass">Parolni tiklash</button>
            <button className="">
              Tizimga kirish
              <img
                src="images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        );
      case "signup":
        return (
          <div className="box">
            <h1>Ro‘yxatdan o‘tish</h1>
            <p>
              Saytning to‘liq imkoniyatlaridan foydalanish uchun ro‘yxatdan
              o‘tishingiz kerak bo‘ladi
            </p>
            <input type="text" />
            <input type="password" />
            <input type="password" />
            <button className="">
              Ro’yxatdan o’tish
              <img
                src="images/Asosiy Qism/available courses/arrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        );
    }
  }

  return (
    <div className="form">
      <div className="background">
        <div className="authNumber">
          <button>
            <img src="/images/form/x.svg" alt="" />
          </button>
          {authNumber()}
        </div>
      </div>
    </div>
  );
}

export default Form;
