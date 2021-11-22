import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./mainSection.scss";
function MainSection() {
  return (
    <div className="mainSection">
      <Navbar />
      <div className="header-bottom">
        <div className="header-bottom-text">
          <h4>O‘rganish uchun <br /> orzu emas harakat qiling!</h4>
          <span>
            {window.innerWidth > 426 ? <br /> : ""} {""}
            UX/UI va Graphic Design’ni o‘rganish uchun maxsus akademiya
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

export default MainSection;
