import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./authNumber.scss";
import { MFormContext } from "./MobileForm";
import auth from "./firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { MoonLoader } from "react-spinners";

function MobileAuthNumber() {
  const [number, setnumber] = useState("");
  const [mTimer, setMTimer] = useState(60);
  const [confCode, setConfCode] = useState();
  const [click, setclick] = useState(0);
  const [hideErr, setHideErr] = useState(1);
  const [errClick, setErrClick] = useState(0);
  const [codeErr, setCodeErr] = useState(0);
  const [load, setLoad] = useState(0);

  const { sendCode } = useContext(MFormContext);
  const { mForm, setMForm, xClick, setXClick, rec } = useContext(MFormContext);

  const override = `
    position: absolute;
  `;

  useEffect(() => {
    setMTimer(60);
    setXClick(0);
    setLoad(0)
    if (sendCode > 0) {
      setConfCode(null)
      setHideErr(1);
      let captcha = new RecaptchaVerifier(
        "cap" + sendCode,
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
          },
        },
        auth
      );

      let phoneNumber = localStorage.getItem("number");

      signInWithPhoneNumber(auth, phoneNumber, captcha, true)
        .then((confirmationResult) => {
          console.log(sendCode);
          setConfCode(confirmationResult);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [sendCode]);

  function checknumber() {
    setLoad(1);
    if (confCode) {
      confCode
        .confirm(number)
        .then((result) => {
          if (rec) {
            setMForm("recovery");
          } else {
            setMForm("register");
          }
          setCodeErr(0);
          setLoad(0);
        })
        .catch((error) => {
          console.log(error);
          setCodeErr(1);
          setLoad(0);
        });
    }
  }

  function errMsg() {
    console.log(hideErr);
    if (errClick > 0) {
      setHideErr(0);
      console.log(hideErr);
      setTimeout(() => {
        setHideErr(1);
      }, 6000);
    }
  }

  useEffect(() => {
    let num = number;

    if (isNaN(parseInt(num.slice(-1))) && num.slice(-1) !== " ") {
      setnumber(num.slice(0, -1));
    }

    if (num.length > 6) {
      setnumber(num.slice(0, -1));
    }
  }, [number]);

  useEffect(() => {
    setMTimer(60);
  }, [mForm]);

  useEffect(() => {
    if (mTimer !== 0 && sendCode > 0 && xClick === 0) {
      setTimeout(() => {
        setMTimer(mTimer - 1);
      }, 1000);
    }
  }, [Date.now()]);

  return (
    <div
      className="authNumber"
      style={{ display: mForm === "authNumber" ? "block" : "none" }}
    >
      <div
        // className="container"
        className={
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

          <div
            className="errorMsg"
            style={{ opacity: hideErr === 1 ? 0 : 1, transition: "0.3s" }}
          >
            Kod noto'g'ri kiritilgan
          </div>
          <img
            src="/images/Form/error.svg"
            alt="error"
            className="errorImg"
            onClick={() => {
              setErrClick(errClick + 1);
              errMsg();
            }}
            style={{
              display: codeErr === 0 ? "none" : "block",
            }}
          />
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
          <div id={"cap1"}></div>
          <div id={"cap2"}></div>
          <div id={"cap3"}></div>
          <div id={"cap4"}></div>
          <div id={"cap5"}></div>
          <div id={"cap6"}></div>
          <div id={"cap7"}></div>
          <div id={"cap8"}></div>
          <div id={"cap9"}></div>
          <div id={"cap10"}></div>
          <div id={"cap11"}></div>
          <div id={"cap12"}></div>
          <div id={"cap13"}></div>
          <div id={"cap14"}></div>
          <div id={"cap15"}></div>
          <div id={"cap16"}></div>
          <Link
            to="/mobileForm"
            className="check"
            onClick={() => {
              checknumber();
              setclick(click + 1);
            }}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Kodni tasdiqlash
            <img src="/images/Form/ok.svg" alt="accept" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileAuthNumber;
