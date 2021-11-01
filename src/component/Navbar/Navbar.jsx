import React, { useContext, useState, useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.scss";
import Number from "../Form/Number";
import AuthNumber from "../Form/AuthNumber";
import Login from "../Form/Login";
import Register from "../Form/Register";
import { Context } from "../Profil/Profil";
import { useHistory } from "react-router";
export const FormContext = React.createContext();

function Navbar() {
  const {count} = useContext(Context);
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState("");
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  let history = useHistory();

  const navbarFunc = () => {
    setStatus((prev) => !prev);
  };

  function kirish() {
    if (window.innerWidth > 577) {
      setForm("number");
    } else {
      history.push("/mobileForm");
    }
  }
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, [count]);

  return (
    <div className={status ? "phoneNavbar" : "navbar "}>
      <FormContext.Provider value={{ form, setForm, userData, setUserData }}>
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
              Web Design 01
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <button
          onClick={kirish}
          style={{ display: userData === null ? "flex" : "none" }}
        >
          <span>Kirish</span>
          <img src="images/Web Design01/navbar/Person-icon.svg" alt="person" />
        </button>
        <div
          className="NavProfil"
          style={{ display: userData === null ? "none" : "flex" }}
        >
          <Link to="profil" className="profilLink">
            <img
              src={
                userData !== null
                  ? userData.user.avatar === "1.2"
                    ? "images/Web Design01/navbar/Person-icon.svg"
                    : userData.user.avatar
                  : "images/Web Design01/navbar/Person-icon.svg"
              }
              alt="img"
              className="person"
            />
            <img src="" alt="profilImg" className="profilImg" />
          </Link>

          <h2 className="profilName">
            <Link to="profil" className="profilText">
              {userData !== null
                ? userData.user.firstName + " " + userData.user.lastName
                : ""}
            </Link>
          </h2>
        </div>
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
