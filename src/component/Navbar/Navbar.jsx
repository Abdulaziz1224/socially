import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Number from "../form/Number";
import AuthNumber from "../form/AuthNumber";
import Login from "../form/Login";
import Register from "../form/Register";

export const FormContext = React.createContext();

function Navbar() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState("");
  // const [xBtn, setXBtn] = useState({display:"none"})

  return (
    <div className="navbar">
      <FormContext.Provider value={{ form, setForm }}>
        <Number />
        <AuthNumber />
        <Login />
        <Register />
      </FormContext.Provider>
      <div className="col-1">
        <Link to="/" className="Logo">
          <img src="images/Web Design01/navbar/Logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="col-9">
        <ul>
          <li>
            <Link to="kurslar">Kurslar</Link>
          </li>
          <li>
            <Link to="bloglar">Bloglar</Link>
          </li>
          <li>
            <Link
              target="_blank"
              to={{
                pathname: "https://www.instagram.com/sociallyuz/",
              }}
            >
              Natijalar
            </Link>
          </li>
          <li>
            <Link to="design">Web design 01</Link>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <button onClick={() => setForm("number")}>
          <span>Kirish</span>
          <img src="images/Web Design01/navbar/Person-icon.svg" alt="person" />
        </button>
        <div
          className={`btn-burger ${status}`}
          onClick={() => setStatus(status === "open" ? "" : "open")}
        >
          <div className="burger"></div>
          <div className="burger1"></div>
          <div className="burger2"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
