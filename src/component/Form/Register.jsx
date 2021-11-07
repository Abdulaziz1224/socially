import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { FormContext } from "../Navbar/Navbar";
import { register } from "../user";
import { MoonLoader } from "react-spinners"; 
import { toast, ToastContainer } from "react-toastify";

function Register({ active }) {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("")
  const [pass, setpass] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const[load, setLoad] = useState(0);

  const { form, setForm, setUserData } = useContext(FormContext);
  
  const override = `
    position: absolute;
  `;

  function signup(){
    setLoad(1)
    let num = localStorage.getItem("number")
    function cb(data){
      setUserData(data)
      setForm("")
      setLoad(0)
    }

    function errCb(){
      setLoad(0)
    }
    if(pass === checkPass){
      register(
        {
          firstName: name,
          lastName: lastName,
          phone: num,
          password: pass
        },
        cb,
        errCb
      )
    }else{
      toast.error("Tasdiqlash paroli mos emas.");
      setLoad(0)
    }
  }

  return (
    <div
      className="register"
      style={{ display: form === "register" ? "block" : "none" }}
    >
      <ToastContainer />
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
          <button
            onClick={signup}
            className="submit"
            style={{ opacity: load === 1 ? 0.5 : 1 }}
          >
            {load === 1 ? (
              <MoonLoader size={30} css={override} color="white" />
            ) : (
              ""
            )}
            Ro’yxatdan o’tish
            <img src="images/Form/arrow.svg" alt="accept" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
