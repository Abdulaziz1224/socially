import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./blogTop.scss";
function BlogTop() {
  return (
    <div className="blogTop">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h4>Foyda bering va oling!</h4>
          <span>
            Hozir vaqtimizni nima qilish bilan o‘tkazsak, ertaga ham, butun
            hayotimiz ham shu ishlar ustida o‘tadi.
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
        <img
          src="images/Blog/Frame blogPart.svg"
          className="union"
          alt="Frame"
        />

        <div className="infiniteText">
          <img src="images/Blog/1.svg" alt="text" className="circleText" />
          <img src="images/Kurs/101.svg" alt="text" className="circleImg" />
        </div>
      </div>
    </div>
  );
}

export default BlogTop;
