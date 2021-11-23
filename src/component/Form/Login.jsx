import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import { FormContext } from "../Navbar/Navbar";
import { login } from "../user";
import { MoonLoader } from "react-spinners";

function Login({ active }) {
  const [number, setnumber] = useState("+998");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [hideErr, setHideErr] = useState(1);
  const [errClick, setErrClick] = useState(0);
  const [codeErr, setCodeErr] = useState(0);
  const [load, setLoad] = useState(0);

  const { form, setForm, setUserData, rec, setRec } = useContext(FormContext);

  const override = `
    position: absolute;
  `;
  useEffect(() => {
    if (number === "+998 ") {
      setnumber("     " + localStorage.getItem("number"));
      setPhone(localStorage.getItem("number"));
    }
  }, [Date.now()]);

  function kirish() {
    setLoad(1);
    setCodeErr(0);
    setHideErr(1);
    function cb(data) {
      setUserData(data);
      setLoad(0);
      if (data) {
        setCodeErr(0);
        setForm("");
      }
    }

    function errCb() {
      setLoad(0);
      setCodeErr(1);
    }

    if (load === 0) login({ phone: phone, password: pass }, cb, errCb);
  }

  useEffect(() => {
    let num = number;

    if (num.charAt(0) !== "+") {
      num = "+" + num.slice(1);
      setnumber(num);
    }
    if (num.charAt(1) !== "9") {
      num = num.slice(0, 1) + "9" + num.slice(3);
      setnumber(num);
    }
    if (num.charAt(2) !== "9") {
      num = num.slice(0, 2) + "9" + num.slice(4);
      setnumber(num);
    }
    if (num.charAt(3) !== "8") {
      num = num.slice(0, 3) + "8" + num.slice(5);
      setnumber(num);
    }
    if (num.charAt(4) !== " ") {
      num = num.slice(0, 4) + " " + num.slice(6);
      setnumber(num);
    }
    if (num.charAt(5) !== "(" && num.charAt(5) !== "") {
      num = num.slice(0, 5) + "(" + num.slice(5);
      setnumber(num);
    }
    if (
      num.charAt(8) !== ")" &&
      num.charAt(7) !== "" &&
      num.charAt(7) !== ")" &&
      num.charAt(8) !== ""
    ) {
      num = num.slice(0, 8) + ") " + num.slice(8);
      setnumber(num);
    }
    if (num.charAt(9) !== " " && num.charAt(9) !== "") {
      num = num.slice(0, 9) + " " + num.slice(9);
      setnumber(num);
    }
    if (num.charAt(13) !== "-" && num.charAt(13) !== "") {
      num = num.slice(0, 13) + "-" + num.slice(13);
      setnumber(num);
    }
    if (num.charAt(16) !== "-" && num.charAt(16) !== "") {
      num = num.slice(0, 16) + "-" + num.slice(16);
      setnumber(num);
    }

    for (let i = 0; i < num.length; i++) {
      let check =
        num.charAt(i) === "+" ||
        num.charAt(i) === "(" ||
        num.charAt(i) === ")" ||
        num.charAt(i) === " " ||
        num.charAt(i) === "-";
      if (isNaN(parseInt(num.charAt(i))) && !check) {
        num = num.slice(0, i) + num.slice(i + 1);
        setnumber(num);
      }
      if (num.charAt(5) === " ") {
        num = num.slice(0, 5) + num.slice(5 + 1);
      }
      if (num.charAt(6) === " " || num.charAt(6) === ")") {
        num = num.slice(0, 6) + num.slice(6 + 1);
        setnumber(num);
      }
      if (num.charAt(7) === " " || num.charAt(7) === ")") {
        num = num.slice(0, 7) + num.slice(7 + 1);
        setnumber(num);
      }
      if (num.charAt(10) === " " || num.charAt(10) === "-") {
        num = num.slice(0, 10) + num.slice(10 + 1);
        setnumber(num);
      }
      if (num.charAt(11) === " " || num.charAt(11) === "-") {
        num = num.slice(0, 11) + num.slice(11 + 1);
        setnumber(num);
      }
      if (num.charAt(12) === " " || num.charAt(12) === "-") {
        num = num.slice(0, 12) + num.slice(12 + 1);
        setnumber(num);
      }
      if (num.charAt(14) === " " || num.charAt(14) === "-") {
        num = num.slice(0, 14) + num.slice(14 + 1);
        setnumber(num);
      }
      if (num.charAt(15) === " " || num.charAt(15) === "-") {
        num = num.slice(0, 15) + num.slice(15 + 1);
        setnumber(num);
      }
      if (num.charAt(17) === " " || num.charAt(17) === "-") {
        num = num.slice(0, 17) + num.slice(17 + 1);
        setnumber(num);
      }
      if (num.charAt(18) === " " || num.charAt(18) === "-") {
        num = num.slice(0, 18) + num.slice(18 + 1);
        setnumber(num);
      }
    }
  }, [number]);

  function errMsg() {
    if (errClick > 0) {
      setHideErr(0);
      setTimeout(() => {
        setHideErr(1);
      }, 6000);
    }
  }

  return (
    <div
      className="login"
      style={{ display: form === "login" ? "block" : "none" }}
    >
      <div
        className={form === "login" ? "container active" : "container active"}
      >
        <button
          className="xBtn"
          onClick={() => {
            setForm("");
            setnumber("");
          }}
        >
          <img src="images/Form/x.svg" alt="x" />
        </button>

        <div className="box">
          <div
            className="errorMsg"
            style={{ opacity: hideErr === 1 ? 0 : 1, transition: "0.3s" }}
          >
            Parol noto'g'ri kiritilgan
          </div>
          <img
            src="images/Form/error.svg"
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

          <h1>Tizimga kirish</h1>
          <p>
            Saytning to‘liq imkoniyatlaridan foydalanish uchun tizimga
            kirishingiz kerak bo‘ladi
          </p>
          <input
            type="tel"
            placeholder="Telefon raqamingiz"
            value={number}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            onFocus={() => {
              if (number.length === 0) {
                setnumber("+998 ");
              }
            }}
            maxLength="19"
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <div className="password">
            <p className="forget">Parolni unutdingizmi?</p>
            <button
              className="reset"
              onClick={() => {
                setForm("recovery");
                setRec(true)
              }}
            >
              Parolni tiklash
              <div className="underline"></div>
            </button>
          </div>
          <button
            className="regLink"
            onClick={kirish}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Tizimga kirish
            <img src="images/Form/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
