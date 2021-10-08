import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="col-1">
          <Link to="Logo" className="Logo">
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
              <Link to="natija">Natijalar</Link>
            </li>
            <li>
              <Link to="design">Web design 01</Link>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <button>
            <span>Kirish</span>
            <img
              src="images/Web Design01/navbar/Person-icon.svg"
              alt="person"
            />
          </button>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h3>
            Web Design 01.
          </h3>
          <span>
            UX/UI & Web Design bo‘yicha professional onlayn video kurs. Turli
            yo‘nalishlarda real case web dizaynlar tayyorlash orqali o‘rganasiz.
          </span>

          <a href="#section1">
            <img
              src="images/Web Design01/header/arrowDown.svg"
              alt="arrowDown"
            />{" "}
            Pastga suring
          </a>
        </div>
      </div>
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="images">
        <img
          src="images/Web Design01/header/Ellipse 22.svg"
          className="ellipse"
          alt="ellipse"
        />

        <img
          src="images/Web Design01/header/2img.svg"
          alt="phon1"
          className="phone1"
        />
        <div className="infiniteText">
          <img src="images/Web Design01/header/illus.svg" alt="text" className="vector" />
          <img src="images/Web Design01/header/1005.svg" alt="text" className="textDoira" />
        </div>
      </div>
    </div>
  );
}


export default Header;
