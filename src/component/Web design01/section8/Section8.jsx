import React from 'react'
import {Link} from "react-router-dom"
import "./Section8.scss"

function Section8() {
  return (
    <div className="section8">
      <div className="container">
        <div className="center">
          <h1>Kursimizda o’z o’rningizni band qiling!</h1>
          <p>O’rganish uchun orzu emas harakat qiling!</p>
          <div className="links">
            <Link to="/level" className="btn1">
              Kursga yozilish
              <img src="/images/Web Design01/section-8/Frame.svg" alt=""/>
            </Link>
            <Link to="/filter" className="btn2">
              Saralash guruhiga o’tish
              <img src="/images/Web Design01/section-8/Frame.svg" alt=""/>
            </Link>
          </div>
        </div>
      </div>
      <div className="gradients">
        <div className="gr1"></div>
        <div className="gr2"></div>
      </div>
    </div>
  );
}

export default Section8
