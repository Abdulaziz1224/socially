import React from "react";
import { useState, useEffect, useContext } from "react";
import {  Link } from "react-router-dom";
import "./authNumber.scss";
import { MFormContext } from "./MobileForm";

function MobileAuthNumber({ active }) {
  const [number, setnumber] = useState("");
  const [timer, setTimer] = useState(60);

  const { form, setForm } = useContext(MFormContext);
  const { mForm, setMForm } = useContext(MFormContext);


  useEffect(() => {
    let num = number

    if (isNaN(parseInt(num.slice(-1))) && num.slice(-1) !== " ") {
      setnumber(num.slice(0, -1))
    }

    if (num.length > 6) {
      setnumber(num.slice(0, -1))
    }

  }, [number])

  useEffect(() => {
    if (timer !== 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    console.log(timer);
  }, [timer]);

  console.log(mForm)


  return (
    <div
      className="authNumber"
      style={{ display: mForm === "authNumber" ? "block" : "none" }}
    >
      <div
        // className="container"
        className = {
          mForm === "authNumber" ? "container active" : "container active"
        }
      >

        <div className="box">
          <h1>Tizimga kirish</h1>
          <p>
            Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga
            kirishingiz kerak bo‘ladi
          </p>
          <input
            type="text"
            placeholder="Tasdiqlash kodini kiriting"
            value={number}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            maxLength="6"
          />

          <div className="errorMsg">Kod noto'g'ri kiritilgan</div>
          <img src="images/Form/error.svg" alt="error" className="errorImg" />

          <div className="counterAndResend">
            <p className="counter">
              {timer === 60
                ? "1:00"
                : timer < 10
                ? "0:0" + timer
                : "0:" + timer}
            </p>
            {timer === 0 ? (
              <div
                className="resend"
                onClick={() => {
                  setTimer(60);
                }}
              >
                <button>Qayta yuborish</button>
                <div className="underline"></div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to="/mobileForm" className="check" onClick={() => setMForm("login")}>
            Kodni tasdiqlash
            <img src="images/Form/ok.svg" alt="accept" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileAuthNumber;