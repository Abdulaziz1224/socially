import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./kursTop.scss";
function KursTop() {
  return (
    <div className="kursTop">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h4>Hozir o‘rganing</h4>
          <span>
            Hozir vaqtimizni nima qilish bilan o‘tkazsak, ertaga ham,
            butun hayotimiz ham shu ishlar ustida o‘tadi.
          </span>
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
        <img src="images/Kurs/Frame kurs.svg" className="union" alt="Frame" />

        <div className="infiniteText">
          <img
            src="images/Kurs/circleText.svg"
            alt="text"
            className="circleText"
          />
          <img src="images/Kurs/101.svg" alt="text" className="circleImg" />
        </div>
      </div>
    </div>
  );
}

export default KursTop;
