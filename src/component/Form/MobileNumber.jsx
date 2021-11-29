import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MFormContext } from "./MobileForm";
import "./number.scss";
import { checkphone } from "../user";
import { MoonLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function MobileNumber() {
  const [number, setnumber] = useState("");
  const [registered, setRegistered] = useState(null);
  const { mForm, setMForm,sendCode ,setSendCode } = useContext(MFormContext);
  const [load, setLoad] = useState(0);

  const override = `
    position: absolute;
  `;

  function check() {
    localStorage.removeItem("redirect");
    setLoad(1)
    var raqam = number;

    for (let i = 0; i < raqam.length; i++) {
      if (raqam.charAt(i) === " ") {
        raqam = raqam.slice(0, i) + raqam.slice(i + 1);
      }
      if (raqam.charAt(i) === "(") {
        raqam = raqam.slice(0, i) + raqam.slice(i + 1);
      }
      if (raqam.charAt(i) === ")") {
        raqam = raqam.slice(0, i) + raqam.slice(i + 2);
      }
      if (raqam.charAt(i) === "-") {
        raqam = raqam.slice(0, i) + raqam.slice(i + 1);
      }
      if (raqam.length - 1 === i) {
      }
    }
    function cb(exists) {
      setRegistered(exists);
      setLoad(0);
    }

    function errCb(){
      setLoad(0)
    }

    if (number.length < 19) {
      toast.error("Telefon raqamingizni toliq yozing");
      setLoad(0);
    } else {
      if(load===0) checkphone(raqam, cb, errCb);
    }
  }

  useEffect(() => {
    if (registered === true) {
      setMForm("login");
      setRegistered(null);
    }
    if (registered === false) {
      setMForm("authNumber");
      setRegistered(null);
    }
  }, [registered]);


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

  return (
    <div
      className="number"
      style={{ display: mForm === "number" ? "block" : "none" }}
    >
      <ToastContainer />
      <div
        // className="container"
        className={mForm === "number" ? "container active" : "container active"}
      >
        <Link to="/" className="xBtn" onClick={() => setMForm("")}>
          <img src="/images/Form/x.svg" alt="x" />
        </Link>

        <div className="box">
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
          <Link
            to="/mobileForm"
            className="check"
            onClick={() => {
              check();
              setSendCode(sendCode + 1);
            }}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Tekshirish
            <img src="/images/Form/arrow.svg" alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNumber;
