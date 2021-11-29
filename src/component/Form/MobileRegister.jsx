import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./register.scss";
import { MFormContext } from "./MobileForm";
import axios from "axios";
import Footer from "../Web design01/Footer/Footer";
import { MoonLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";

function MobileRegister({ active }) {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [pass, setpass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const [click, setClick] = useState(0);
  const [passMatch, setPassMatch] = useState(2);
  const [load, setLoad] = useState(0);

  const { mForm } = useContext(MFormContext);

  const history = useHistory();

  const override = `
    position: absolute;
  `;

  useEffect(() => {
    if (pass === checkPass) {
      setPassMatch(1);
    } else {
      setPassMatch(0);
    }

    if (pass === "") {
      setPassMatch(2);
    }
    if (checkPass === "") {
      setPassMatch(2);
    }
  }, [checkPass, pass]);

  useEffect(() => {
    setLoad(1)
    if (click > 0) {
      function errCb() {
        setLoad(0);
      }
      if (pass === checkPass) {
        axios
          .post("https://socially2.herokuapp.com/v2/signup/basic", {
            firstName: name,
            lastName: lastName,
            phone: localStorage.getItem("number"),
            password: checkPass,
          })
          .then((res) => {
            setLoad(0)
            localStorage.setItem("user", JSON.stringify(res.data.data));
            history.push("/");
          })
          .catch((err) => {
            setLoad(0);
            console.log(err.response);
          });
      } else {
        toast.error("Tasdiqlash paroli mos emas.");
        setLoad(0);
      }
    }
  }, [click]);

  return (
    <div
      className="register"
      style={{ display: mForm === "register" ? "block" : "none" }}
    >
      <ToastContainer />
      <div
        className={
          mForm === "register" ? "container active" : "container active"
        }
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
            style={{
              border:
                passMatch === 0 ? "2px solid #F3494A" : "2px solid #EAEAEA",
            }}
          />
          <button
            className="submit"
            onClick={() => setClick(click + 1)}
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Ro’yxatdan o’tish
            <img src="/images/Form/arrow.svg" alt="accept" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MobileRegister;
