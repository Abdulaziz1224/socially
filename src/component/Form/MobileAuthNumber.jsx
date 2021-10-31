import React from "react";
import { useState, useEffect, useContext } from "react";
import {  Link } from "react-router-dom";
import "./authNumber.scss";
import { MFormContext } from "./MobileForm";

function MobileAuthNumber() {
  const [number, setnumber] = useState("");
  const [mTimer, setMTimer] = useState(60);

  const { form, setForm } = useContext(MFormContext);
  const { mForm, setMForm } = useContext(MFormContext);


  function checknumber() {
    setMForm("register");
  }

  useEffect(() => {
    let num = number

    if (isNaN(parseInt(num.slice(-1))) && num.slice(-1) !== " ") {
      setnumber(num.slice(0, -1))
    }

    if (num.length > 6) {
      setnumber(num.slice(0, -1))
    }

  }, [number])

  useEffect(()=>{
    setMTimer(60)
  },[mForm])

  useEffect(() => {
    if (mTimer !== 0) {
      setTimeout(() => {
        setMTimer(mTimer - 1);
      }, 1000);
    }
  }, [mTimer]);

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
              {mTimer === 60
                ? "1:00"
                : mTimer < 10
                ? "0:0" + mTimer
                : "0:" + mTimer}
            </p>
            {mTimer === 0 ? (
              <div
                className="resend"
                onClick={() => {
                  setMTimer(60);
                }}
              >
                <button>Qayta yuborish</button>
                <div className="underline"></div>
              </div>
            ) : (
              ""
            )}
          </div>
          <Link to="/mobileForm" className="check" onClick={checknumber}>
            Kodni tasdiqlash
            <img src="images/Form/ok.svg" alt="accept" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileAuthNumber;