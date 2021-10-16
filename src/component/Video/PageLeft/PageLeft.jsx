import React from 'react'
import {BrowserRouter as Route, Link} from "react-router-dom"

function PageLeft() {
  return (
    <div className="pageLeft">
      <div className="container">
        <div className="card">
          <div className="img"></div>

          <div className="text">
            <h2>SMM design masterclass</h2>
            <p>
              Amaliyotlarga asoslangan video kurs bo’lib, har bir amaliyotning dizayn
              texnologiyasi darslari mavjud.
            </p>
          </div>

          <div className="profile">
            <img src="/images/videoCourse/avatar.png" alt="avatar"/>
            <div className="nameAndLebel">
              <h3>Ismoil Safarov</h3>
              <p>Kurs muallifi</p>
            </div>
          </div>

          <Link>
            To‘liq maʼlumot
            <img src="/images/videoCourse/arrow.svg" alt="arrow"/>
          </Link>
          <span className="underline"></span>
        </div>

        <div className="download">
          <h2>Video kursda ishlatilgan barcha resurslar</h2>
          <span>150 Megabayt</span>
          <Link>
            <p>Yuklab olish</p>
            <img src="/images/videoCourse/lock.svg" alt=""/>
          </Link>
        </div>

        <div className="courses">

          <div className="course1">
            <img src="/images/videoCourse/mark.svg" alt=""/>
            <h3>
              1-modul: Boshlang'ich darajadagi amaliyotlar
            </h3>
          </div>

          <div className="course2">
            <img src="/images/videoCourse/mark.svg" alt=""/>
            <h3>
              2-modul: Mutaxassislik darajasidagi amaliyotlar
            </h3>
          </div>

          <div className="course3">
            <img src="/images/videoCourse/mark.svg" alt=""/>
            <h3>
              3-modul: Professional darajadagi amaliyotlar
            </h3>
          </div>

          <Link>
            <p>Kursga yozilish</p>
            <img src="/images/videoCourse/arrow.svg" alt="arrow"/>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default PageLeft
