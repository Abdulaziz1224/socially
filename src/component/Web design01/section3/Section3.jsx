import React from "react";
import "./Section3.scss";

function Section3() {
  return (
    <div className="section3">
      <div className="container">
        <div className="head">
          <h3>Bu kurs kimlar uchun?</h3>
          <img src="/images/Web Design01/section-3/Group 130.svg" alt="svg" />
        </div>

        <div className="categories">
          <div className="card">
            <div className="title">
              <img
                src="/images/Web Design01/section-3/sun.svg"
                alt="icon"
                className="star"
              />
              <img
                src="/images/Web Design01/section-3/icon-1.svg"
                alt="svg"
                className="icon"
              />
              <h3>Yangi boshlovchilar uchun</h3>
            </div>
            <p className="text">
              Hali hech nimani bilmaysiz, lekin dizaynni o‘rganmoqchisiz, unday
              bo‘lsa bu kurs aynan siz uchun hisoblanadi.
            </p>
            <img
              src="/images/Web Design01/section-3/shakllar.svg"
              alt="shape"
              className="backgroundShape"
            />
          </div>
          <div className="card">
            <div className="title">
              <img
                src="/images/Web Design01/section-3/sun.svg"
                alt="icon"
                className="star"
              />
              <img
                src="/images/Web Design01/section-3/icon-2.svg"
                alt="svg"
                className="icon"
              />
              <h3>Dizayndan xabari borlar uchun</h3>
            </div>
            <p className="text">
              Ushbu kursimiz yordamida tajribangizni oshirib yanada ko‘proq
              bilimlarga ega bo‘lishingiz mumkin.
            </p>
            <img
              src="/images/Web Design01/section-3/shakllar.svg"
              alt="shape"
              className="backgroundShape"
            />
          </div>
          <div className="card">
            <div className="title">
              <img
                src="/images/Web Design01/section-3/sun.svg"
                alt="icon"
                className="star"
              />
              <img
                src="/images/Web Design01/section-3/icon-3.svg"
                alt="svg"
                className="icon"
              />
              <h3>Project Manager’lar uchun</h3>
            </div>
            <p className="text">
              Kursda User Experieance Design va to‘g‘ri loyihalashtirish
              o‘rgatiladi. Bu esa Project Manager uchun juda muhim ilm.
            </p>
            <img
              src="/images/Web Design01/section-3/shakllar.svg"
              alt="shape"
              className="backgroundShape"
            />
          </div>
          <div className="card">
            <div className="title">
              <img
                src="/images/Web Design01/section-3/sun.svg"
                alt="icon"
                className="star"
              />
              <img
                src="/images/Web Design01/section-3/icon-4.svg"
                alt="svg"
                className="icon"
              />
              <h3>IT ga qiziquvchilar uchun</h3>
            </div>
            <p className="text">
              Web dizayn — tez rivojlanayotgan IT kasblaridan biri. IT ga
              qiziquvchi inson uchun esa kursimiz to‘gridan-to‘g‘ri mos tushadi.
            </p>
            <img
              src="/images/Web Design01/section-3/shakllar.svg"
              alt="shape"
              className="backgroundShape"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
