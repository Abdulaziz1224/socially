import React from "react";
import "./section6.scss";

function Section6() {
  return (
    <div className="section6">
      <div className="container">
        <div className="head">
          <h3 className="Caption">Kurs qanday formatda o‘qitiladi</h3>
          <img src="/images/Web Design01/section-3/Group 130.svg" alt="svg" />
        </div>
        <div className="categories">
          <div className="card">
            <div className="card-text">
              <div className="title">
                <span>01</span>
                <h3>Mavzuni o’zlashtirasiz</h3>
              </div>
              <p className="text">
                Har bir darsda mavzuga oid bir nechta videolar bo‘ladi. Ularning
                har birini tomosha qilasiz.
              </p>
            </div>
            <div className="img1">
              <p>nazorat • Eng yaxshi metodika • ch</p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <div className="title">
                <span>02</span>
                <h3>Uy vazifalarini bajarasiz</h3>
              </div>
              <p className="text">
                Har bir darsda uyga amaliy vazifalar beriladi, bularni har
                birini tayyorlaysiz.
              </p>
            </div>
            <div className="img2">
              <p> ta’lim • Doimiy nazorat • Eng</p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <div className="title">
                <span>03</span>
                <h3>Ustoz feedback beradi</h3>
              </div>

              <p className="text">
                Bajargan uyga vazifangizni ustoz nazoratidan o‘tkazasiz, kerakli
                izohlarni olasiz.
              </p>
            </div>
            <div className="img3">
              <p> chuqurlashtirilgan ta’lim </p>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <div className="title">
                <span>04</span>
                <h3>Keyingi darsga o‘tasiz</h3>
              </div>
              <p className="text">
                Uyga vazifangizni ustoz tasdiqlaganidan so‘ng, keyingi darsga
                o‘tasiz.
              </p>
            </div>
            <div className="img4">
              <p> ta’lim • Doimiy nazorat • Eng </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
