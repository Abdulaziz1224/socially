import React from "react";
import "./mainSection1.scss";
function MainSection1() {
  return (
    <div className="mainSection1" id="mainSection1">
      <div className="container">
        <div className="Caption-text">
          <h2>Kurslar qanday formatda bo‘ladi?</h2>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>
        <div className="container-boxs">
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>01</span>
            </div>
            <h4>Mavzuni chuqur o‘zlashtirasiz</h4>
            <p className="text">
              Har bir darsda mavzuga oid bir nechta video bor.
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>02</span>
            </div>
            <h4>Uy vazifalarini bajarasiz</h4>
            <p className="text">
              Har bir darsda uyga amaliy vaziafalar beriladi.
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>03</span>
            </div>
            <h4>Ustoz “feedback” beradi</h4>
            <p className="text">
              Bajargan vazifangizni ustoz nazoratidan o‘tkazasiz.
            </p>
          </div>
          <div className="box">
            <div className="title">
              <img src="/images/Web design01/section-3/sun.svg" alt="svg" />
              <span>04</span>
            </div>
            <h4>Navbatdagi darsga o‘tasiz</h4>
            <p className="text">
              Tasdiqlaganlaridan so‘ng keyingi darsga o‘tasiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection1;
