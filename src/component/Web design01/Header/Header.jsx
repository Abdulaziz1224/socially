import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h3>Web Design 01.</h3>
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
          <img
            src="images/Web Design01/header/illus.svg"
            alt="text"
            className="vector"
          />
          <img
            src="images/Web Design01/header/1005.svg"
            alt="text"
            className="textDoira"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
