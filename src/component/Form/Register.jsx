import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { FormContext } from "../Navbar/Navbar";
import { register } from "../user";

function Register({ active }) {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("")
  const [pass, setpass] = useState("");
  const [checkPass, setCheckPass] = useState("");

  const { form, setForm, setUserData } = useContext(FormContext);

  function signup(){
    let num = localStorage.getItem("number")
    function cb(data){
      setUserData(data)
      setForm("")
    }

    register(
      {
        firstName: name,
        lastName: lastName,
        phone: num,
        password: pass
      },
      cb
    )
  }

  return (
    <div
      className="register"
      style={{ display: form === "register" ? "block" : "none" }}
    >
      <div
        // className="container"
        className={
          form === "register" ? "container active" : "container active"
        }
      >
        <button className="xBtn" onClick={() => setForm("")}>
          <img src="images/Form/x.svg" alt="x" />
        </button>

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
            type="fname"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            placeholder="Familiyangizni kiriting"
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
          <button onClick={signup} className="submit">
            Ro’yxatdan o’tish
            <img src="images/Form/arrow.svg" alt="accept" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
