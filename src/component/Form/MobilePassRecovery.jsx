import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.scss";
import { MFormContext } from "./MobileForm";
import axios from "axios";
import { MoonLoader } from "react-spinners";

function MobilePassRecovery({ active }) {
  const [number, setnumber] = useState("+998");

  const { mForm, setMForm } = useContext(MFormContext);
  const [pass, setPass] = useState("");
  const [checkPass, setCheckPass] = useState("")
  const [click, setClick] = useState(0);
  const [hideErr, setHideErr] = useState(1);
  const [errClick, setErrClick] = useState(0);
  const [codeErr, setCodeErr] = useState(0);
  const [load, setLoad] = useState(0);

  let history = useHistory();

  const override = `
    position: absolute;
  `;


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

  return (
    <div
      className="login"
      style={{ display: mForm === "recovery" ? "flex" : "none"}}
    >
      <div
        // className="container"
        className={mForm === "login" ? "container active" : "container active"}
      >
        <Link to="/" className="xBtn" onClick={() => setMForm("")}>
          <img src="images/Form/x.svg" alt="x" />
        </Link>

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
            type="password"
            required
            placeholder="Parolingizni kiriting"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="Parolingizni qayta kiriting"
            value={checkPass}
            onChange={(e) => {
              setCheckPass(e.target.value);
            }}
          />
          <Link
            to="/mobileForm"
            className="regLink"
            onClick={() => {
              setClick(click + 1);
            }}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Tizimga kirish
            <img src="images/Form/arrow.svg" alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobilePassRecovery;
