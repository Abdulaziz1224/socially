import React from "react";
import { useState, useEffect, useContext } from "react";
import "./authNumber.scss";
import { FormContext } from "../Navbar/Navbar";
import auth from "./firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { MoonLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function AuthNumber() {
  const [number, setnumber] = useState("");
  const [timer, setTimer] = useState(59);
  const [click, setclick] = useState(0);
  const [confCode, setConfCode] = useState();
  const [hideErr, setHideErr] = useState(1);
  const [errClick, setErrClick] = useState(0);
  const [codeErr, setCodeErr] = useState(0);
  const [load, setLoad] = useState(0);
  const [xClick, setXClick] = useState(0);
  const { form, setForm, sendCode, setSendCode, rec, setRec } = useContext(FormContext);
  const override = `
    position: absolute;
  `;
  // ################ send code to user phone ###############
  useEffect(() => {
    setTimer(59);
    setXClick(0);
    if (sendCode > 0) {
      setConfCode(null)
      let captcha = new RecaptchaVerifier(
        "cap" + sendCode,
        {
          size: "invisible",
          callback: (response) => {
          },
        },
        auth
      );

      let phoneNumber = localStorage.getItem("number");
      console.log(phoneNumber)

      signInWithPhoneNumber(auth, phoneNumber, captcha, true)
        .then((confirmationResult) => {
          console.log(sendCode);
          setLoad(0);
          setConfCode(confirmationResult);
        })
        .catch((error) => {
          console.log(error);
          setLoad(0);
        });
      setLoad(0);
    }
  }, [sendCode]);

  // *****************************

  // ################ check code  ###############
  function checknumber() {
    setLoad(1);
    if (number.length !== 6) {
      if(form==="authNumber") toast.error("Tasdiqlash kodi 6ta son bolishi kerak.");
    } else {
      console.log(click > 0, confCode, ); 
      if (confCode) {
        confCode
          .confirm(number)
          .then((result) => {
            if(rec){
             setForm("recovery") 
            }else{
              setForm("register");
            }
            setCodeErr(0);
            setLoad(0);
            console.log("jdhsbcjshdbcjhdsbcj")
          })
          .catch((error) => {
            console.log(error);
            setCodeErr(1);
            console.log("jdhsbcjshdbcjhdsbcj")
            setLoad(0);
          });
        setLoad(0);
      }
    }
  }
  // *****************************

  // ################ change phone number to readable format  ###############
  useEffect(() => {
    let num = number;

    if (isNaN(parseInt(num.slice(-1))) && num.slice(-1) !== " ") {
      setnumber(num.slice(0, -1));
    }

    if (num.length > 6) {
      setnumber(num.slice(0, -1));
    }
  }, [number]);
  // *****************************
  // ################ resend btn code timer  ###############
  useEffect(() => {
    if (timer !== 0 && sendCode > 0 && xClick === 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [Date.now()]);
  // *****************************

  // ################ code  error message ###############
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
  // *****************************

  return (
    <div
      className="authNumber"
      style={{ display: form === "authNumber" ? "block" : "none" }}
    >
      <ToastContainer />
      <div
        className={
          form === "authNumber" ? "container active" : "cont ainer active"
        }
      >
        <button
          className="xBtn"
          onClick={() => {
            setForm("");
            setnumber("");
            setXClick(1);
          }}
        >
          <img src="/images/Form/x.svg" alt="x" />
        </button>

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
                  setTimer(59);
                  setSendCode(sendCode + 1);
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
          <button
            className="check"
            onClick={() => {
              setclick(click + 1);
              checknumber();
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthNumber;
