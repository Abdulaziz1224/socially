import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { MFormContext } from "./MobileForm";

function MobileRegister({ active }) {
  const [name, setname] = useState("");
  const [pass, setpass] = useState("");
  const [checkPass, setCheckPass] = useState("");

  const { form, setForm } = useContext(MFormContext);
  const { mForm, setMForm } = useContext(MFormContext);

  return (
    <div
      className="register"
      style={{ display: mForm === "register" ? "block" : "none" }}
    >
      <div
        // className="container"
        className={mForm === "register" ? "container active" : "container active"}
      >

        <div className="box">
          <h1>Ro'yhatdan o'tish</h1>
          <p>
            Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga
            kirishingiz kerak bo‘ladi
          </p>
          <input
            type="fname"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Ismingizni kiriting"
          />
          <input
            type="password"
            value={pass}
            onChange={(e) => {
              setpass(e.target.value);
            }}
            placeholder="Parolni kiriting"
          />
          <input
            type="password"
            value={checkPass}
            onChange={(e) => {
              setCheckPass(e.target.value);
            }}
            placeholder="Parolni kiriting"
          />
          <Link to="/mobileForm" onClick={() => setMForm("number")}>
            Ro’yxatdan o’tish
            <img src="images/Form/arrow.svg" alt="accept" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileRegister;