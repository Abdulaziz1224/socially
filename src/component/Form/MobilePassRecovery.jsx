import React from "react";
import { useState, useEffect, useContext } from "react";
import "./login.scss";
import "./passRecovery.scss";
import { MFormContext } from "./MobileForm";
import { recovery } from "../user";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function PassRecovery({ active }) {
  const [number, setnumber] = useState("+998");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const [hideErr, setHideErr] = useState(1);
  const [errClick, setErrClick] = useState(0);
  const [codeErr, setCodeErr] = useState(0);
  const [load, setLoad] = useState(0);
  const [checkPass, setCheckPass] = useState("");
  const [click, setClick] = useState(0);

  let history = useHistory();
  let renderCounter = 0;

  const { mForm, setMForm, setUserData, setRec } = useContext(MFormContext);

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
    console.log(pass === checkPass);
    if (pass === checkPass) {
      setLoad(1);
      setCodeErr(0);
      setHideErr(1);
      function cb(data) {
        setUserData(data);
        setLoad(0);
        if (data) {
          setRec(false);
          setCodeErr(0);
          setMForm("login");
        }
      }

      function errCb() {
        setLoad(0);
        setCodeErr(1);
      }

      if (load === 0) recovery({ phone: phone, password: pass }, cb, errCb);
    } else {
      setCodeErr(1);
    }
  }
  const change = () => {
    if(pass ===checkPass){
      if(pass.length<6){
        console.log(11233)
        toast.error("Parol kamida 6ta belgidan iborat bolishi kerak");
      }else{
        renderCounter++;
        if (renderCounter > 0) {
          if (click > 0 && load === 0) {
            setLoad(1);
            axios
              .post("https://socially2.herokuapp.com/v2/password", {
                phone: phone,
                password: pass,
                device: window.navigator.userAgent,
              })
              .then((res) => {
                setLoad(0);
                history.push("/");
              })
              .catch((err) => {
                setLoad(0);
              });
          }
        }
      }
    }else{
      setCodeErr(1)
    }
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
      className="login  rec"
      style={{ display: mForm === "recovery" ? "block" : "none" }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <div
        className={mForm === "login" ? "container active" : "container active"}
      >
        <button
          className="xBtn"
          onClick={() => {
            setMForm("");
            setnumber("");
          }}
        >
          <img src="/images/Form/x.svg" alt="x" />
        </button>

        <div className="box">
          <div
            className="errorMsg"
            id="errorMsg"
            style={{ opacity: hideErr === 1 ? 0 : 1, transition: "0.3s" }}
          >
            Parolingiz mos tushmadi
          </div>
          <img
            src="/images/Form/error.svg"
            alt="error"
            className="errorImg"
            id="errorImg"
            onClick={() => {
              setErrClick(errClick + 1);
              errMsg();
            }}
            style={{
              display: codeErr === 0 ? "none" : "block",
            }}
          />

          <h1>Parolni yangilash</h1>
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
          <input
            type="password"
            placeholder="Password"
            value={checkPass}
            onChange={(e) => {
              setCheckPass(e.target.value);
            }}
          />
          <button
            className="regLink"
            id="reglink"
            onClick={change}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Parolni yangilash
            <img src="/images/Form/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PassRecovery;
