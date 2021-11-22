import React from "react";
import Navbar from "../../Navbar/Navbar";
import "../../Blog/BlogTopPart/blogTop.scss";
function KursTop() {
  return (
    <div className="blogTop">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h4>Hozir o‘rganing!</h4>
          <span>
            Hozir vaqtimizni nima qilish bilan o‘tkazsak, ertaga ham,
            {window.innerWidth > 426 ? <br /> : ""} {""}
            butun hayotimiz ham shu ishlar ustida o‘tadi.
          </span>
        </div>
        <div className="infiniteText">
          <img src="images/Blog/yozuv2.svg" alt="text" className="circleText" />
          <img src="images/Kurs/101.svg" alt="text" className="circleImg" />
        </div>
      </div>
      <div className="graphic-design">
        <img src="images/Kurs/LENTA.svg" alt="lenta" />
      </div>
      <div className="lenta2">
        <img src="images/Kurs/LENTA2.svg" alt="title" />
      </div>
    </div>
  );
}

export default KursTop;
