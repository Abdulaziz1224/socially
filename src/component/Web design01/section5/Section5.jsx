import React from "react";
import "./Section5.scss";

function Section5() {
  return (
    <div className="section5">
      <div className="container">
        <div className="head" data-aos="fade-right" data-aos-delay="400">
          <h3 className="Caption">Kursda nimalar bo‘ladi?</h3>
          <img src="/images/Web design01/section-3/Group 130.svg" alt="svg" />
        </div>

        <div className="box">
          <div className="card">
            <h3 className="title">Ustozlar bilan alohida guruhlar</h3>
            <p>
              Siz, boshqa o’quvchilar va ustozingiz uchun alohida yopiq guruhlar
              ochiladi.
            </p>
            <img src="/images/Web Design01/section-5/01.png" alt="png" />
          </div>
          <div className="card">
            <h3 className="title">Amaliy mashg‘ulotlar uchun real loyihalar</h3>
            <p>
              Kurs yakunida amaliy mashg‘ulotlarda real loyihalar bilan
              ishlaysiz.
            </p>
            <img src="/images/Web Design01/section-5/02.png" alt="" />
          </div>
          <div className="card">
            <h3 className="title">
              Tajriba almashish uchun offline uchrashuvlar
            </h3>
            <p>
              Guruh bilan kelishilgan holda Ismoil Safarov bilan offline
              uchrashuvlar tashkil qilinadi.
            </p>
            <img src="/images/Web Design01/section-5/03.png" alt="png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
