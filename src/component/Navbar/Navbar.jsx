import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";
import Number from "../form/Number";
import AuthNumber from "../form/AuthNumber";
import Login from "../form/Login";
import Register from "../form/Register";

export const FormContext = React.createContext();

function Navbar() {
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState("");

  const navbarFunc = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div className={status ? "phoneNavbar" : "navbar "}>
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
            <NavLink to="kurslar" activeClassName="navLink">
              Kurslar
            </NavLink>
          </li>
          <li>
            <NavLink to="bloglar" activeClassName="navLink">
              Bloglar
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="navLink"
              target="_blank"
              to={{
                pathname: "https://www.instagram.com/sociallyuz/",
              }}
            >
              Natijalar
            </NavLink>
          </li>
          <li>
            <NavLink to="design" activeClassName="navLink">
              Web design 01
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <button onClick={() => setForm("number")}>
          <span>Kirish</span>
          <img src="images/Web Design01/navbar/Person-icon.svg" alt="person" />
        </button>
        <div
          className={status ? "btn-burger open" : "btn-burger"}
          onClick={navbarFunc}
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
