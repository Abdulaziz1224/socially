import React from 'react'
import "./AvailableCourses.scss"

function AvailableCourses() {
  return (
    <div className="availableCourses">
      <div className="container">

        <div className="col head">
          <div className="title">
            <h1>Mavjud kurslarimiz</h1>
            {/* <img  src="/images/Web Design01/section-3/Group 130.svg" alt="" /> */}
            <div className="img"></div>
          </div>
          {/* <a href="allCourses" className="allCourses">
              <img src="/images/Asosiy qism/available courses/arrow.svg" alt="" />
            </a> */}
          <div className="btn">
            <a href="allCourses" className="allCourses">
              <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="arrow"/>
            </a>
            <div className="underline"></div>
          </div>
        </div>

        <div className="box">
          <div className="card">
            <img
              className="card-img"
              src="/images/Asosiy Qism/available courses/image 12.png"
              alt=""/>
            <h1 className="card-title">SMM Design Masterclass</h1>
            <a href="info" className="full-info">
              To‘liq maʼlumot
              <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
            </a>
          </div>

          <div className="card">
            <img
              className="card-img"
              src="/images/Asosiy Qism/available courses/image 12.png"
              alt=""/>
            <div>
              <h1 className="card-title">SMM Design Masterclass</h1>
              <a href="info" className="full-info">
                To‘liq maʼlumot
                <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
              </a>
            </div>

          </div>

          <div className="card">
            <img
              className="card-img"
              src="/images/Asosiy Qism/available courses/image 12.png"
              alt=""/>
            <h1 className="card-title">SMM Design Masterclass</h1>
            <a href="info" className="full-info">
              To‘liq maʼlumot
              <img src="/images/Asosiy Qism/available courses/arrow.svg" alt=""/>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AvailableCourses
