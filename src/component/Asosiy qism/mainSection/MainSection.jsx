import React from "react";
import { Link } from "react-router-dom";
import "./mainSection.scss";

function MainSection() {
  return (
    <div className="mainSection">
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
          <h4>O‘rganish uchun orzu <br /> emas harakat qiling!</h4>
          <span>UX/UI va Grafik Dizaynni o‘rganish <br /> uchun maxsus akademiya</span>
          <a href="#section1">
            <img
              src="images/Web Design01/header/arrowDown.svg"
              alt="arrowDown"
            />
            Pastga suring
          </a>
        </div>
      </div>
      <div className="gradient1"></div>
      <div className="gradient2"></div>
      <div className="images">
        <img
          src="images/Asosiy Qism/BasisHeader/Union.svg"
          className="union"
          alt="union"
        />

        <img
          src="images/Asosiy Qism/BasisHeader/ellipse.svg"
          alt="ellipse"
          className="ellipse"
        />
        <div className="infiniteText">
          <img
            src="images/Asosiy Qism/BasisHeader/Yozuv.svg"
            alt="text"
            className="circleText"
          />
          <img
            src="images/Web Design01/header/1005.svg"
            alt="text"
            className="circleImg"
          />
        </div>
      </div>
    </div>
  );
}

export default MainSection;
