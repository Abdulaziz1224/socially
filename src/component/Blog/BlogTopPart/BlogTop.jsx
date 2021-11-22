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
            Dizaynga ilk qadamlar, ijodkor qo‘llar, ey aniq
            {window.innerWidth < 576 && window.innerWidth > 344 ? <br /> : ""} {""}
            maqsadli
            {window.innerWidth < 576 ? "" : <br />} inson siz biz bilan birga
            o‘rganing!
          </span>
        </div>
        <div className="infiniteText">
          <img src="images/Blog/yozuv1.svg" alt="text" className="circleText" />
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

export default BlogTop;
